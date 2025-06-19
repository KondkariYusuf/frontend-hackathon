import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Loader } from './components/Loader';
import { InteractiveBackground } from './components/InteractiveBackground';
import { SplineHero } from './components/SplineHero';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ClientLogos } from './components/ClientLogos';
import { ShowcaseWork } from './components/ShowcaseWork';
import { ContactSection } from './components/ContactSection';
import { RippleEffect } from './components/RippleEffect';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
        {isLoading && <Loader onComplete={handleLoadingComplete} />}

        {!isLoading && (
          <>
            <ThemeToggle />
            <InteractiveBackground />
            <RippleEffect />

            <main>
              <SplineHero />
              <ServicesSection />
              <ClientLogos />
              <ShowcaseWork />
              <TestimonialsSection />
              <ContactSection />
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
