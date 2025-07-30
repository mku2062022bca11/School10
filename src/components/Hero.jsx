import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  backgroundVideo, 
  isHomePage = false, 
  children 
}) => {
  return (
    <div className={`relative ${isHomePage ? 'h-screen' : 'h-96'} flex items-center justify-center overflow-hidden`}>
      {/* Background Video or Image */}
      {backgroundVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={`font-bold text-white mb-4 ${
            isHomePage ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl lg:text-5xl'
          }`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-gray-200 mb-8 ${
              isHomePage ? 'text-lg sm:text-xl lg:text-2xl' : 'text-base sm:text-lg'
            }`}>
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;