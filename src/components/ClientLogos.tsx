import React from 'react';

const logos = [
  'Apple', 'Google', 'Microsoft', 'Meta', 'Netflix', 'Tesla', 'Spotify', 'Adobe',
  'Amazon', 'Nike', 'Coca-Cola', 'Samsung', 'Intel', 'IBM', 'Oracle', 'Salesforce'
];

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-black text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-8 mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-600 dark:text-gray-400">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="relative">
        <div className="flex space-x-16 animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px] h-16 text-2xl font-bold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};