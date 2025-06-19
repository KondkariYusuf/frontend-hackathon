import React, { Suspense } from 'react';
// import Spline from '@splinetool/react-spline';
import Spline from '@splinetool/react-spline';

// import Spline from '@splinetool/react-spline/next';
import { ArrowDown } from 'lucide-react';

export const SplineHero: React.FC = () => {
  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      {/* <section >  */}
      <Spline
        scene="https://prod.spline.design/GBVBhibS5faptBey/scene.splinecode"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
      {/* <Spline
        scene="https://my.spline.design/creatorcafeheropage-hy60tI656Homv32vt9PwDypI/"
        className="w-full h-full"
      /> */}
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense
        // fallback={
        //   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-black">
        //     <div className="text-center">
        //       <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        //       <p className="text-gray-600 dark:text-gray-400">
        //         Loading 3D Experience...
        //       </p>
        //     </div>
        //   </div>
        // }
        >
          <Spline
            scene="https://prod.spline.design/creatorcafeheropage-hy60tI656Homv32vt9PwDypI/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Content Overlay */}
      {/* <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-gray-900 dark:text-white px-8 max-w-4xl mx-auto">
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-500 dark:from-white dark:via-blue-100 dark:to-yellow-200 bg-clip-text text-transparent">
              ELEVATE
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Where creative vision meets technical excellence. We craft digital experiences that transcend expectations.
            </p>
          </div>
        </div>
      </div> */}

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-gray-700 dark:text-white opacity-70" />
        </div>
      </div> */}

      {/* Gradient Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20 dark:from-black/20 dark:via-transparent dark:to-black/20 z-5"></div> */}
    </section>
  );
};
