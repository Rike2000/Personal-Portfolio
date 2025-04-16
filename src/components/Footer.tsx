
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return <footer className="pt-10 pb-8 border-t border-slate-700">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-5">
          <a href="https://github.com/Rike2000" className="text-slate-400 hover:text-white transition-colors">
            <GithubIcon className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/riku-orbinski-6971b3200/" className="text-slate-400 hover:text-white transition-colors">
            <LinkedinIcon className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:riku.orbinski@gmail.com" className="text-slate-400 hover:text-white transition-colors">
            <MailIcon className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>;
}