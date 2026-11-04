import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070707] text-white flex flex-col items-center justify-center p-6 text-center select-none">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#eb5424] mb-3">
        * 404 // ROUTE NOT FOUND
      </span>
      <h1 className="text-6xl sm:text-8xl font-black uppercase font-sans tracking-tight text-white mb-4">
        404
      </h1>
      <p className="text-sm sm:text-base text-gray-400 font-sans max-w-md mx-auto mb-8">
        The requested digital coordinates could not be located in this deployment.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#eb5424] hover:bg-[#f04c1a] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xl"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>RETURN TO HOME</span>
      </Link>
    </div>
  );
}
