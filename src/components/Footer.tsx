import { GitBranch, Link2, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-14 mt-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20">
              <Code2 size={18} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm leading-normal">Luis Ángel Quirós Flórez</p>
              <p className="text-xs text-slate-500 font-mono mt-0.5">Backend Developer</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github"
              className="p-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all"
              aria-label="GitHub"
            >
              <GitBranch size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="p-3 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
              aria-label="LinkedIn"
            >
              <Link2 size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            © {year} Luis Quirós · Desarrollado con{' '}
            <Heart size={12} className="text-red-500 fill-red-500" />
            {' '}en React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
