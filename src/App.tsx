import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Set up smooth scrolling for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update page title and meta description for SEO
    document.title = 'Eunice Donkor - Full-Stack Developer & UI/UX Designer';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Full-Stack Developer and UI/UX Designer passionate about creating beautiful, functional digital experiences. Specializing in React, Node.js, and modern web technologies.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Full-Stack Developer and UI/UX Designer passionate about creating beautiful, functional digital experiences. Specializing in React, Node.js, and modern web technologies.';
      document.head.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Eunice Donkor",
      "jobTitle": "Full-Stack Developer",
      "url": "https://johndoe.dev",
      "sameAs": [
        "https://github.com/johndoe",
        "https://linkedin.com/in/johndoe",
        "https://twitter.com/johndoe"
      ],
      "knowsAbout": ["React", "Node.js", "TypeScript", "UI/UX Design", "Web Development"],
      "description": "Full-Stack Developer and UI/UX Designer with 5+ years of experience creating digital solutions"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Header with Navigation */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Resume Section */}
          <Resume />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Loading Animation (optional) */}
        <motion.div
          className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          onAnimationComplete={() => {
            const loadingDiv = document.querySelector('.loading-overlay');
            if (loadingDiv) {
              loadingDiv.remove();
            }
          }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;