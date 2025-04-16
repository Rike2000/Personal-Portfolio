import { PhoneFrame } from './PhoneFrame';
import { GithubIcon, LayersIcon } from 'lucide-react';
import FaceitImage  from '../assets/images/faceitThumbnail.png'
import FaceitVideo from '../assets/videos/FaceitTrackerDemo.mp4'
import ToDoVideo from '../assets/videos/todoAppDemo.mp4'
import ToDoImage from '../assets/images/ToDoListThumbnail.png'
import { GithubButton } from './Buttons';
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";

interface ProjectTag {
  name: string
  icon: typeof SiExpo
}

export function ProjectsSection() {
  const getTechIcon = (name: string): ProjectTag => {
    const techIcons: Record<string, ProjectTag> = {
      'React Native': {
        name: 'React Native',
        icon: TbBrandReactNative,
      },
      Firebase: {
        name: 'Firebase',
        icon: RiFirebaseLine,
      },
      Expo: {
        name: 'Expo',
        icon: SiExpo
      }
    }
    return (
      techIcons[name] || {
        name,
        icon: LayersIcon,
      }
    )
  }

  const projects = [{
    id: 1,
    title: 'Faceit-Tracker',
    description: 'Faceit-Tracker is an app built using React native and Expo, designed to help users track their Counter-Strike 2 statistics and activities on the Faceit platform.',
    githubRepo: 'https://github.com/Rike2000/Faceit-Tracker',
    videoSrc: FaceitVideo,
    thumbnail: FaceitImage,
    tags: ['React Native', 'Expo']
  }, {
    id: 2,
    title: 'To-Do App',
    description: 'A simple and intuitive Todo application built with React Native and Expo. The app is configured to use Google Firebase as a database.',
    githubRepo: 'https://github.com/Rike2000/todoApp',
    videoSrc: ToDoVideo,
    thumbnail: ToDoImage,
    tags: ['React Native', 'Expo', 'Firebase']
  }];
  return <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 border-b border-slate-700 pb-2">
        My Projects
      </h2>
      <div className="space-y-24">
        {projects.map((project, index) => <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
            <div className="w-full md:w-2/5">
              <PhoneFrame videoSrc={project.videoSrc} title={project.title} thumbnail={project.thumbnail} />
            </div>
            <div className="w-full md:w-3/5">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => {
                  const techInfo = getTechIcon(tag)
                  const Icon = techInfo.icon
                  return (
                    <span
                      key={tag}
                      className="bg-slate-700/60 px-3 py-1.5 rounded-full text-sm text-slate-300 flex items-center gap-1.5 hover:bg-slate-700/80 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {tag}
                    </span>
                  )
                })}
              </div>
              <GithubButton repoUrl={project.githubRepo}/>
            </div>
          </div>)}
      </div>
    </section>;
}