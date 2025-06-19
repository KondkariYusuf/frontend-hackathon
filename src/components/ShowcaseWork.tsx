import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FinTech Revolution',
    description: 'Complete digital transformation for a leading financial services company',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Web Design'
  },
  {
    id: 2,
    title: 'Sustainable Future',
    description: 'Brand identity and campaign for an environmental initiative',
    image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Branding'
  },
  {
    id: 3,
    title: 'Tech Innovation Hub',
    description: 'Interactive experience design for a technology conference',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Digital Experience'
  },
  {
    id: 4,
    title: 'Luxury Lifestyle',
    description: 'Premium e-commerce platform with immersive shopping experience',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'E-commerce'
  }
];

export const ShowcaseWork: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen flex items-center transition-colors duration-300">
      <div className="w-full">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Featured Work
          </h2>

          <div className="relative">
            {/* Project Display */}
            <div className="flex items-center justify-between">
              {/* Project Number */}
              <div className="text-8xl font-bold text-gray-200 dark:text-gray-800 select-none">
                {String(currentProject + 1).padStart(2, '0')}
              </div>

              {/* Project Content */}
              <div className="flex-1 mx-16">
                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentProject * 100}%)` }}
                  >
                    {projects.map((project, index) => (
                      <div
                        key={project.id}
                        className="w-full flex-shrink-0 grid md:grid-cols-2 gap-12 items-center"
                      >
                        <div>
                          <span className="text-blue-500 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase">
                            {project.category}
                          </span>
                          <h3 className="text-4xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">{project.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                            {project.description}
                          </p>
                          <button className="flex items-center space-x-2 text-blue-500 dark:text-blue-400 hover:text-gray-900 dark:hover:text-white transition-colors group">
                            <span className="font-semibold">READ MORE</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                        <div className="relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-80 object-cover rounded-lg shadow-2xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Total Projects */}
              <div className="text-2xl font-bold text-gray-400 dark:text-gray-600 select-none">
                {String(projects.length).padStart(2, '0')}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-16 space-x-4">
              <button
                onClick={prevProject}
                className="w-12 h-12 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors text-gray-900 dark:text-white"
              >
                <ArrowRight className="w-6 h-6 rotate-180" />
              </button>
              <button
                onClick={nextProject}
                className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors text-white"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};