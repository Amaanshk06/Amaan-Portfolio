/**
 * Single source of truth for personal information and verified profile data.
 * All details here strictly adhere to verified information.
 */
export const personalData = {
  name: "Amaan Shaikh",
  title: "Web Developer",
  experienceYears: "2",
  experienceLabel: "2 Years of Experience",
  email: "amaanshk234@gmail.com",
  location: "Thane, Maharashtra, India",
  github: "https://github.com/Amaanshk06",
  linkedin: "https://www.linkedin.com/in/amaan-shaikh-b1136b2a5/",
  instagram: "https://www.instagram.com/amaan__shk__36?mdxt=MTd2azJ1a3Yzd2xibQ==",
  facebook: "https://www.facebook.com/profile.php?id=61594117767579",
  googleScriptUrl:
    process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
    "https://script.google.com/macros/s/AKfycbwojL3ZMar9PEwqWb8LwB66V3au3BIvNA0K8NLHkxp3-hqIy7WYSWm085cBsQHjhYlf/exec",
  heroEyebrow: "WEB DEVELOPER · CREATIVE DIGITAL EXPERIENCES",
  heroHeading: "Building Digital Experiences That Make an Impact.",
  heroDescription:
    "Web developer with 2 years of experience building modern, responsive, and visually engaging websites using React.js, Next.js, JavaScript, WordPress, Shopify, HTML, and CSS.",
  aboutHeading: "A Developer Who Turns Ideas Into Experiences.",
  aboutParagraphs: [
    "I'm Amaan Shaikh, a web developer with 2 years of experience creating modern, responsive websites and digital experiences.",
    "My work spans frontend architecture, Next.js web applications, and high-converting ecommerce experiences. I enjoy translating complex systems into robust code, optimizing web performance, and building responsive digital products that scale across devices.",
    "I focus on clean implementation, practical problem-solving, and thoughtful visual details that make websites more useful and engaging."
  ],
  skillsHeading: "Tools I Build With",
  skillsSubtitle:
    "Modern frontend technologies and website platforms for creating responsive digital experiences.",
  experienceHeading: "Experience & Growth",
  experienceStatement: "2 Years of Building for the Web",
  experienceDescription:
    "Over the past two years, I have developed my skills in frontend technologies, responsive website development, website customization, and CMS-based digital experiences.",
  processHeading: "From Idea to Execution",
  contactHeading: "Let's Build Something Great.",
  contactSubtitle:
    "Have a website, ecommerce project, or digital experience in mind? Let's connect and discuss it.",
  // Primary listed technologies
  primarySkills: [
    "React.js",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "WordPress",
    "Shopify"
  ],
  // Skill groupings
  skillGroups: [
    {
      name: "Frontend Technologies",
      description: "Core languages and modern frontend frameworks",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js"]
    },
    {
      name: "Website Platforms",
      description: "CMS and ecommerce platforms for digital storefronts",
      skills: ["WordPress", "Shopify"]
    },
    {
      name: "Development Capabilities",
      description: "Specialized engineering workflows and interface craft",
      skills: [
        "Responsive Web Design",
        "Frontend Development",
        "Website Development",
        "UI Implementation",
        "Website Customization",
        "Ecommerce Website Development",
        "Component-Based Development",
        "Cross-Browser Testing",
        "Frontend Debugging",
        "Website Performance Optimization"
      ]
    }
  ],
  // Development process steps
  processSteps: [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand project requirements, goals, target audience, content structure, and the desired visual and interactive experience."
    },
    {
      number: "02",
      title: "Plan",
      description:
        "Establish clear page architecture, visual direction, component hierarchy, responsive breakpoints, and implementation approach."
    },
    {
      number: "03",
      title: "Build",
      description:
        "Develop clean, responsive layouts, modular components, intuitive microinteractions, and robust platform-specific functionality."
    },
    {
      number: "04",
      title: "Refine",
      description:
        "Conduct thorough testing across screen sizes, verify browser compatibility, fine-tune typography and visual polish, and optimize performance."
    }
  ]
};
