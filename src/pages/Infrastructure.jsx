import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Microscope, 
  BookOpen, 
  Trophy, 
  Bus, 
  Wifi,
  Shield,
  Zap
} from 'lucide-react';
import Hero from '../components/Hero';

const Infrastructure = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/content/infrastructure.txt')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Modern digital classrooms equipped with interactive whiteboards, projectors, and high-speed internet connectivity for enhanced learning experience.",
      image: "./Infrastructure/InfrastructureImg10.jpeg",
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: "Science Laboratories",
      description: "Well-equipped Physics, Chemistry, and Biology labs with modern instruments and safety equipment for hands-on learning.",
      image: "./Infrastructure/InfrastructureImg11.webp",
      icon: <Microscope className="w-8 h-8" />
    },
    {
      title: "Library & Reading Hall",
      description: "Spacious library with over 10,000 books, digital resources, quiet study areas, and comfortable reading spaces.",
      image: "./Infrastructure/InfrastructureImg12.jpeg",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Sports Complex",
      description: "Multi-purpose sports facilities including basketball court, badminton hall, cricket ground, and athletic track.",
      image: "./Infrastructure/InfrastructureImg13.jpeg",
      icon: <Trophy className="w-8 h-8" />
    },
    {
      title: "Computer Lab",
      description: "State-of-the-art computer laboratory with latest hardware and software for digital literacy and programming education.",
      image: "./Infrastructure/InfrastructureImg14.webp",
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: "Transportation",
      description: "Safe and reliable school transport service covering major areas with GPS tracking and trained drivers.",
      image: "./Infrastructure/InfrastructureImg15.webp",
      icon: <Bus className="w-8 h-8" />
    }
  ];

  const additionalFeatures = [
    {
      title: "High-Speed Internet",
      description: "Campus-wide WiFi connectivity",
      icon: <Wifi className="w-6 h-6" />
    },
    {
      title: "24/7 Security",
      description: "CCTV surveillance and security guards",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Power Backup",
      description: "Uninterrupted power supply",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="World-Class Infrastructure"
        subtitle="Modern Facilities for Comprehensive Learning"
        backgroundImage="./Infrastructure/InfrastructureImg1.webp"
      />

      {/* Infrastructure Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Campus Facilities</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content || "Our state-of-the-art infrastructure provides students with the best learning environment, combining modern technology with traditional educational values to ensure holistic development."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Modern Learning Environment</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our campus spans across 5 acres and features modern architecture designed to create an inspiring learning atmosphere. Every facility is thoughtfully planned to support both academic excellence and personal growth.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="text-primary mb-2 flex justify-center">{feature.icon}</div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-xs">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="./Infrastructure/InfrastructureImg2.jpeg"
                alt="School campus"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-primary">{facility.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Campus Gallery</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our beautiful campus and see our world-class facilities in action.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "./Infrastructure/InfrastructureImg3.jpeg",
              "./Infrastructure/InfrastructureImg4.jpeg",
              "./Infrastructure/InfrastructureImg5.jpeg",
              "./Infrastructure/InfrastructureImg6.webp",
              "./Infrastructure/InfrastructureImg7.jpeg",
              "./Infrastructure/InfrastructureImg8.jpeg"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`Campus view ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety & Security</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                The safety and security of our students is our top priority. Our campus is equipped with comprehensive security measures to ensure a safe learning environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">24/7 CCTV surveillance system</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">Trained security personnel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">Controlled access entry points</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">Emergency response protocols</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">Medical room with qualified nurse</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="./Infrastructure/InfrastructureImg9.jpeg"
                alt="School security"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;