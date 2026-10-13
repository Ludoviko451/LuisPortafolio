import { Github, Linkedin, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-900/30 py-10 mt-0">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-slate-200 text-sm">Luis Ángel Quirós Flórez</p>
              <p className="text-xs text-slate-600 font-mono">Backend Developer</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github"
              className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="p-2.5 rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-600 flex items-center gap-1.5">
            © {year} Luis Quirós · Hecho con{' '}
            <Heart size={11} className="text-red-500 fill-red-500" />
            {' '}en React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
