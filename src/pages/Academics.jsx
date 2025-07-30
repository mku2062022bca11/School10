import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Award,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";
import Hero from "../components/Hero";

const Academics = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/src/content/academics.txt")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  const classes = [
    {
      grade: "Pre-Primary",
      range: "Nursery - LKG - UKG",
      icon: <Users className="w-6 h-6" />,
    },
    {
      grade: "Primary",
      range: "Class I - V",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      grade: "Middle",
      range: "Class VI - VIII",
      icon: <Target className="w-6 h-6" />,
    },
    {
      grade: "Secondary",
      range: "Class IX - X",
      icon: <Award className="w-6 h-6" />,
    },
    {
      grade: "Senior Secondary",
      range: "Class XI - XII",
      icon: <Lightbulb className="w-6 h-6" />,
    },
  ];

  const subjects = [
    {
      name: "Mathematics",
      icon: "🔢",
      description: "Advanced problem-solving and analytical thinking",
    },
    {
      name: "Science",
      icon: "🔬",
      description: "Physics, Chemistry, Biology with practical labs",
    },
    {
      name: "English",
      icon: "📚",
      description: "Literature, grammar, and communication skills",
    },
    {
      name: "Social Studies",
      icon: "🌍",
      description: "History, Geography, and Civics",
    },
    {
      name: "Computer Science",
      icon: "💻",
      description: "Programming, digital literacy, and technology",
    },
    {
      name: "Arts & Crafts",
      icon: "🎨",
      description: "Creative expression and artistic development",
    },
  ];

  const methodology = [
    {
      title: "Interactive Learning",
      description:
        "Engaging students through hands-on activities and group discussions",
      image:
        "./Academics/AcademicsImg4.webp",
    },
    {
      title: "Smart Classrooms",
      description:
        "Technology-enabled learning with digital boards and multimedia content",
      image:
        "./Academics/AcademicsImg5.jpeg",
    },
    {
      title: "Project-Based Learning",
      description:
        "Real-world applications and collaborative problem-solving approaches",
      image:
        "./Academics/AcademicsImg6.jpeg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Academic Excellence"
        subtitle="Comprehensive Education with CBSE Curriculum"
        backgroundImage="./Academics/AcademicsImg1.webp"
      />

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              CBSE Curriculum Overview
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content ||
                "Our comprehensive CBSE-affiliated curriculum is designed to provide students with a strong foundation in academics while fostering critical thinking, creativity, and holistic development."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Academic Approach
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We follow the CBSE curriculum with an emphasis on conceptual
                understanding, practical application, and skill development. Our
                teaching methodology combines traditional values with modern
                educational practices.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-600">
                    Activity-based learning approach
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-600">
                    Regular assessment and feedback
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-600">
                    Individual attention to each student
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-600">
                    Integration of co-curricular activities
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="./Academics/AcademicsImg2.jpeg"
                alt="Students in classroom"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Class-wise Syllabus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Class-wise Structure
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classInfo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{classInfo.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {classInfo.grade}
                </h3>
                <p className="text-gray-600">{classInfo.range}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Offered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subjects Offered
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive subject offerings designed to provide students with
              a well-rounded education and prepare them for future challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-3">{subject.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {subject.name}
                </h3>
                <p className="text-gray-600">{subject.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Teaching Methodology
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our innovative teaching methods combine traditional wisdom with
              modern educational technology to create an engaging learning
              environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={method.image}
                  alt={method.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar & CBSE Affiliation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Academic Calendar
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    2024-25 Academic Year
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Session Begins</span>
                    <span className="font-medium">April 1, 2024</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">First Term Exam</span>
                    <span className="font-medium">September 2024</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Winter Break</span>
                    <span className="font-medium">December 2024</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Final Exam</span>
                    <span className="font-medium">March 2025</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                CBSE Affiliation
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                <img
                  src="./Academics/AcademicsImg3.jpeg"
                  alt="CBSE Certificate"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Affiliated School
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  QB365 Public School is officially affiliated with the Central
                  Board of Secondary Education (CBSE), ensuring our curriculum
                  meets national educational standards.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Affiliation No:</strong> 123456789
                  </p>
                  <p className="text-sm">
                    <strong>School Code:</strong> 12345
                  </p>
                  <p className="text-sm">
                    <strong>Valid Until:</strong> March 31, 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
