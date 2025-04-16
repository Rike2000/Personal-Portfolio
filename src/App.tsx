
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />
        <main>
          <AboutSection />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </div>;
}