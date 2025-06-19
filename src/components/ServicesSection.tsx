import React, { useState } from 'react';
import { Palette, Monitor, Video, Target } from 'lucide-react';

const services = [
  {
    id: 'branding',
    title: 'Branding',
    icon: Palette,
    description: 'Complete brand identity systems that capture essence and drive recognition.',
    mockup: '/api/placeholder/400/300'
  },
  {
    id: 'web-design',
    title: 'Web Design',
    icon: Monitor,
    description: 'Cutting-edge digital experiences that engage and convert.',
    mockup: '/api/placeholder/400/300'
  },
  {
    id: 'motion',
    title: 'Motion Graphics',
    icon: Video,
    description: 'Dynamic visual storytelling that brings brands to life.',
    mockup: '/api/placeholder/400/300'
  },
  {
    id: 'strategy',
    title: 'Strategy',
    icon: Target,
    description: 'Data-driven creative strategies that deliver measurable results.',
    mockup: '/api/placeholder/400/300'
  }
];

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState('branding');

  return (
    <section className="py-20 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Our Services
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Service Tabs */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                      activeService === service.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <Icon className="w-6 h-6" />
                      <span className="text-xl font-semibold">{service.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Content */}
          <div className="lg:w-2/3">
            {services.map((service) => (
              <div
                key={service.id}
                className={`transition-all duration-500 ${
                  activeService === service.id
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-8 absolute'
                }`}
              >
                {activeService === service.id && (
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 h-64 flex items-center justify-center border border-gray-300 dark:border-gray-700">
                      <div className="text-6xl text-gray-400 dark:text-gray-600">
                        <service.icon />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};