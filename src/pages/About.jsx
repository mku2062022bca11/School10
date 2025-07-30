import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';
import Hero from '../components/Hero';

const About = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/content/about.txt')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      image: " ./About/AboutImg7.webp",
      education: "M.Ed, Ph.D in Education"
    },
    {
      name: "Mrs. Priya Sharma",
      position: "Vice Principal",
      image: "./About/AboutImg8.webp",
      education: "M.A English, B.Ed"
    },
    {
      name: "Mr. Amit Singh",
      position: "Academic Coordinator",
      image: "./About/AboutImg9.jpeg",
      education: "M.Sc Mathematics, B.Ed"
    },
    {
      name: "Ms. Kavya Reddy",
      position: "Activities Head",
      image: "./About/AboutImg10.jpeg",
      education: "M.A Psychology, B.Ed"
    }
  ];

  const visionMission = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be a leading educational institution that nurtures creative, confident, and compassionate global citizens who contribute meaningfully to society."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To provide holistic education that develops intellectual, physical, emotional, and spiritual potential of every student through innovative teaching methods and value-based learning."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="About QB365 Public School"
        subtitle="Excellence in Education Since Our Foundation"
        backgroundImage="./About/AboutImg1.webp"
      />

      {/* About the School */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {content || "QB365 Public School was established with a vision to provide quality education that goes beyond textbooks. We believe in nurturing young minds to become responsible citizens and future leaders of tomorrow."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our commitment to excellence is reflected in our modern teaching methodologies, state-of-the-art infrastructure, and dedicated faculty who work tirelessly to ensure holistic development of every student.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-gray-600 text-sm">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2500+</div>
                  <div className="text-gray-600 text-sm">Students Graduated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="./About/AboutImg2.jpeg"
                alt="School building"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="./About/AboutImg3.jpeg"
                alt="Students studying"
                className="w-full h-48 object-cover rounded-lg mt-8"
              />
              <img
                src=" ./About/AboutImg4.jpeg"
                alt="Classroom"
                className="w-full h-48 object-cover rounded-lg -mt-8"
              />
              <img
                src="./About/AboutImg5.webp"
                alt="Library"
                className="w-full h-48 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionMission.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="./About/AboutImg6.webp"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Principal's Message</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <blockquote className="text-gray-600 text-lg italic leading-relaxed mb-6">
                "Education is not just about acquiring knowledge; it's about developing character, values, and the ability to think critically. At QB365, we strive to create an environment where every child can discover their potential and grow into confident, compassionate individuals."
              </blockquote>
              <div className="border-l-4 border-primary pl-6">
                <p className="font-semibold text-gray-900">Dr. Rajesh Kumar</p>
                <p className="text-gray-600">Principal, QB365 Public School</p>
                <p className="text-sm text-gray-500">M.Ed, Ph.D in Education</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our dedicated leadership team committed to providing exceptional education and guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.education}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;