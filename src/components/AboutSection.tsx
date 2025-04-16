import { CodeIcon, CloudIcon, GlobeIcon } from 'lucide-react';
import { CvButton } from './Buttons';

export function AboutSection() {
  return <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 border-b border-slate-700 pb-2">
        About Me
      </h2>
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-slate-300 mb-8">
        I'm a Software Engineering graduate with a background in IT and web development.
        I have worked as a web designing entrepreneur for a few years and have also hands-on experience 
        in IT support, Azure cloud environments, and full-stack development.
        I'm interested working on both sides of tech—building software and managing IT infrastructure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-800/50 p-6 rounded-lg">
            <CodeIcon className="h-8 w-8 mb-3 text-blue-400" />
            <h3 className="text-xl font-medium mb-3">Software Development</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">
                  Languages & Frameworks
                </h4>
                <ul className="list-none space-y-1">
                  <li className="text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    JavaScript / TypeScript
                  </li>
                  <ul className="list-none space-y-1 pl-4">
                  <li className="text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    React & React Native
                  </li>
                  <li className="text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Node.js
                  </li>
                  <li className="text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Express.js
                  </li>
                </ul>
                  <li className="text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    HTML / CSS
                  </li>
                  <ul className="list-none space-y-1 pl-4">
                    <li className="text-slate-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Tailwind CSS
                    </li>
                  </ul>
                  <li className="text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    SQL
                  </li>
                </ul>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg">
            <GlobeIcon className="h-8 w-8 mb-3 text-purple-400" />
            <h3 className="text-xl font-medium mb-3">Website Development</h3>
            <p className="text-slate-400">
              Experienced entrepreneur specializing in creating websites
              and e-commerce solutions using WordPress and WooCommerce. Proven
              track record of delivering user-friendly
              websites for various business needs.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg">
            <CloudIcon className="h-8 w-8 mb-3 text-pink-400" />
            <h3 className="text-xl font-medium mb-3">Cloud Services</h3>
            <p className="text-slate-400">
              Specialized experience in Microsoft Azure cloud services. Hands-on experience in cloud administration and
              infrastructure management. 
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-8 ">
          <CvButton/>
          </div>
      </div>
    </section>;
}