import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Project } from './data/projects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickIntro from './components/QuickIntro';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Journey from './components/Journey';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import GitHubSection from './components/GitHubSection';
import ThingsIBuild from './components/ThingsIBuild';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <QuickIntro />
        <About />
        <Philosophy />
        <Skills />
        <Projects onProjectClick={setSelectedProject} />
        <Journey />
        <CurrentlyBuilding />
        <GitHubSection />
        <ThingsIBuild />
        <Contact />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
