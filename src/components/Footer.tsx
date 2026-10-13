import { GitBranch, Link2, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-900/30 py-14 mt-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-500/20">
              <Code2 size={18} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-slate-200 text-sm leading-normal">Luis Ángel Quirós Flórez</p>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Backend Developer</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github"
              className="p-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="GitHub"
            >
              <GitBranch size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="p-3 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
              aria-label="LinkedIn"
            >
              <Link2 size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-400 flex items-center gap-1.5">
            © {year} Luis Quirós · Hecho con{' '}
            <Heart size={12} className="text-red-500 fill-red-500" />
            {' '}en React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
