"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function AmbientFramer3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Ambient light & warm point lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const orangeLight = new THREE.PointLight(0xeb5424, 2.5, 50);
    orangeLight.position.set(10, 10, 10);
    scene.add(orangeLight);

    const whiteLight = new THREE.PointLight(0xffffff, 1.2, 50);
    whiteLight.position.set(-10, -10, 10);
    scene.add(whiteLight);

    // Create floating geometric prisms (polyhedra, icosahedrons, toruses)
    const geometries = [
      new THREE.IcosahedronGeometry(1.6, 0),
      new THREE.OctahedronGeometry(1.4, 0),
      new THREE.TetrahedronGeometry(1.8, 0),
      new THREE.TorusGeometry(1.5, 0.4, 16, 32),
      new THREE.IcosahedronGeometry(1.2, 0),
      new THREE.OctahedronGeometry(1.0, 0),
    ];

    const materials = [
      new THREE.MeshStandardMaterial({
        color: 0xeb5424,
        roughness: 0.25,
        metalness: 0.8,
        wireframe: true,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.1,
        metalness: 0.9,
        wireframe: true,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xeb5424,
        roughness: 0.3,
        metalness: 0.6,
        wireframe: false,
        transparent: true,
        opacity: 0.25,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.4,
        metalness: 0.7,
        wireframe: true,
      }),
    ];

    const meshes: { mesh: THREE.Mesh; rotSpeed: { x: number; y: number }; baseY: number }[] = [];

    const positions = [
      { x: -14, y: 8, z: -5 },
      { x: 15, y: 5, z: -8 },
      { x: -12, y: -4, z: -6 },
      { x: 13, y: -7, z: -4 },
      { x: -16, y: -12, z: -10 },
      { x: 14, y: -16, z: -9 },
    ];

    positions.forEach((pos, i) => {
      const geo = geometries[i % geometries.length];
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(pos.x, pos.y, pos.z);
      scene.add(mesh);
      meshes.push({
        mesh,
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.008,
          y: (Math.random() - 0.5) * 0.008,
        },
        baseY: pos.y,
      });
    });

    // Mouse tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Scroll parallax
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      renderer.render(scene, camera);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        geometries.forEach((g) => g.dispose());
        materials.forEach((m) => m.dispose());
        renderer.dispose();
      };
    }

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      camera.position.x = currentMouseX * 1.5;
      camera.position.y = -currentMouseY * 1.5 - (scrollY * 0.003);
      camera.lookAt(0, -scrollY * 0.003, 0);

      meshes.forEach((item, idx) => {
        item.mesh.rotation.x += item.rotSpeed.x;
        item.mesh.rotation.y += item.rotSpeed.y;
        item.mesh.position.y = item.baseY + Math.sin(elapsedTime * 0.8 + idx) * 0.8;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
