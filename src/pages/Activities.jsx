import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Music, 
  Palette, 
  Trophy, 
  Users, 
  Calendar, 
  Camera,
  BookOpen,
  Star
} from 'lucide-react';
import Hero from '../components/Hero';

const Activities = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/content/activities.txt')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const activities = [
    {
      category: "Cultural Activities",
      icon: <Music className="w-8 h-8" />,
      items: [
        { name: "Dance Competition", image: "./Activities/ActivitiesImg3.jpeg" },
        { name: "Music Festival", image: "./Activities/ActivitiesImg4.jpeg" },
        { name: "Drama Performance", image: "./Activities/ActivitiesImg5.webp" }
      ]
    },
    {
      category: "Arts & Crafts",
      icon: <Palette className="w-8 h-8" />,
      items: [
        { name: "Painting Workshop", image: "./Activities/ActivitiesImg6.webp" },
        { name: "Craft Exhibition", image: "./Activities/ActivitiesImg7.jpeg" },
        { name: "Art Competition", image: "./Activities/ActivitiesImg8.webp" }
      ]
    },
    {
      category: "Sports & Games",
      icon: <Trophy className="w-8 h-8" />,
      items: [
        { name: "Annual Sports Day", image: "./Activities/ActivitiesImg9.jpeg" },
        { name: "Inter-house Tournament", image: "./Activities/ActivitiesImg10.jpeg" },
        { name: "Athletics Meet", image: "./Activities/ActivitiesImg11.jpeg" }
      ]
    },
    {
      category: "Academic Events",
      icon: <BookOpen className="w-8 h-8" />,
      items: [
        { name: "Science Fair", image: "./Activities/ActivitiesImg12.jpeg" },
        { name: "Math Olympiad", image: "./Activities/ActivitiesImg13.jpeg" },
        { name: "Quiz Competition", image: "./Activities/ActivitiesImg14.webp" }
      ]
    }
  ];

  const upcomingEvents = [
    {
      date: "Feb 15",
      title: "Annual Day Celebration",
      description: "Grand cultural program showcasing student talents",
      category: "Cultural"
    },
    {
      date: "Mar 5",
      title: "Science Exhibition",
      description: "Student projects and innovative experiments",
      category: "Academic"
    },
    {
      date: "Mar 20",
      title: "Sports Carnival",
      description: "Inter-school sports competition",
      category: "Sports"
    },
    {
      date: "Apr 2",
      title: "Art & Craft Fair",
      description: "Display of creative artworks by students",
      category: "Arts"
    }
  ];

  const galleryImages = [
    "./Activities/ActivitiesImg15.jpeg",
    "./Activities/ActivitiesImg16.webp",
    "./Activities/ActivitiesImg17.jpeg",
    "./Activities/ActivitiesImg18.jpeg",
    "./Activities/ActivitiesImg19.jpeg",
    "./Activities/ActivitiesImg20.webp"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Co-curricular Activities"
        subtitle="Nurturing Talents Beyond the Classroom"
        backgroundImage=" ./Activities/ActivitiesImg1.jpeg"
      />

      {/* Activities Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Activity Programs</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content || "At QB365, we believe in holistic development. Our diverse range of co-curricular activities helps students discover their passions, develop new skills, and build confidence beyond academics."}
            </p>
          </motion.div>

          <div className="space-y-16">
            {activities.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-white font-semibold text-lg">{item.name}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our exciting events and activities planned for the coming months.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.date}
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Highlights</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Capturing moments of joy, achievement, and learning from our recent events and activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
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
                  alt={`Event highlight ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Co-curricular Activities Matter</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our comprehensive activity program is designed to complement academic learning and foster well-rounded development in our students.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Skill Development</h4>
                    <p className="text-gray-600 text-sm">Develop creativity, leadership, and teamwork skills</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Confidence Building</h4>
                    <p className="text-gray-600 text-sm">Build self-confidence through performance and participation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Social Skills</h4>
                    <p className="text-gray-600 text-sm">Improve communication and interpersonal relationships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Stress Relief</h4>
                    <p className="text-gray-600 text-sm">Provide healthy outlets for stress and academic pressure</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="./Activities/ActivitiesImg2.jpeg"
                alt="Students participating in activities"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;