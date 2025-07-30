import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  BookOpen,
  Trophy,
  ArrowRight,
  Star,
  Target,
  Heart,
  Shield,
} from "lucide-react";
import Hero from "../components/Hero";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/src/content/home.txt")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "CBSE Affiliated",
      description:
        "Recognized by Central Board of Secondary Education with excellent academic standards.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty",
      description:
        "Highly qualified and experienced teachers dedicated to student success.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Modern Curriculum",
      description:
        "Updated syllabus with focus on practical learning and skill development.",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Excellence Record",
      description:
        "Consistent outstanding results in board examinations and competitions.",
    },
  ];

  const achievements = [
    "./Home/HomeImg2.jpeg",
    "./Home/HomeImg3.webp",
    "./Home/HomeImg4.webp",
    "./Home/HomeImg5.jpeg",
  ];

  const quickLinks = [
    {
      title: "Admissions Open",
      description: "Apply now for 2025-26 academic session",
      link: "/admissions",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Campus Tour",
      description: "Explore our modern facilities",
      link: "/infrastructure",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team",
      link: "/contact-us",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Welcome to QB365 Public School"
        subtitle="Shaping Future Leaders Through Excellence in Education"
        backgroundVideo="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
        isHomePage={true}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/admissions"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            Admissions Open <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/infrastructure"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Campus
          </Link>
        </motion.div>
      </Hero>

      {/* About QB365 Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About QB365 Public School
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {content ||
                  "QB365 Public School stands as a beacon of educational excellence, committed to nurturing young minds and shaping future leaders. With our CBSE affiliation and modern teaching methodologies, we provide a comprehensive educational experience that goes beyond academics."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our dedicated faculty, state-of-the-art infrastructure, and
                holistic approach to education ensure that every student
                receives the best possible foundation for their future
                endeavors.
              </p>
              <Link
                to="/mandatory-disclosure"
                className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
              >
                <Shield className="w-5 h-5 mr-2" />
                Mandatory Public Disclosure
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="./Home/HomeImg1.jpeg"
                alt="Students in classroom"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6" />
                  <div>
                    <div className="text-sm font-semibold">CBSE</div>
                    <div className="text-xs">Affiliated</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose QB365?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes QB365 Public School the preferred choice for
              quality education and holistic development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating our students' success and the school's commitment to
              excellence in education.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((image, index) => (
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
                  alt={`Achievement ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.link}
                  className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-primary group-hover:text-primary-dark transition-colors">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {link.title}
                      </h3>
                      <p className="text-gray-600">{link.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
