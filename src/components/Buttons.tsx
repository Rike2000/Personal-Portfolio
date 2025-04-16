import { FileText } from 'lucide-react';
import CV from '../assets/CV_Riku_Orbinski.pdf'

interface GithubButtonProps {
  repoUrl: string;
}

export const GithubButton = ({ repoUrl }: GithubButtonProps) => {
  return (
    <a href={repoUrl}>
    <button className='inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg'>
      <svg viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
      Github
    </button>
    </a>
  );
}

export const CvButton = () => {
  return (
    <a href={CV} target="_blank" rel="noopener noreferrer" type="application/pdf"> 
    <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-blue-400 to-purple-500 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-600/50 border border-white/10">
      <span className="text-lg">Get My Resume</span>
      <FileText className="pl-1"/>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/30" />
      </div>
    </button>
    </a>
  );
}