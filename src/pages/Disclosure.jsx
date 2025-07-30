import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Award, 
  Users, 
  Building, 
  BookOpen,
  Shield,
  CheckCircle
} from 'lucide-react';
import Hero from '../components/Hero';

const Disclosure = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/content/disclosure.txt')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const documents = [
    {
      title: "CBSE Affiliation Certificate",
      type: "Certificate",
      icon: <Award className="w-6 h-6" />,
      description: "Official CBSE affiliation document",
      size: "PDF, 2.3 MB"
    },
    {
      title: "No Objection Certificate",
      type: "Certificate",
      icon: <Shield className="w-6 h-6" />,
      description: "NOC from state education department",
      size: "PDF, 1.8 MB"
    },
    {
      title: "Building Safety Certificate",
      type: "Certificate",
      icon: <Building className="w-6 h-6" />,
      description: "Fire and building safety clearance",
      size: "PDF, 3.1 MB"
    },
    {
      title: "Academic Calendar 2024-25",
      type: "Document",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Detailed academic calendar",
      size: "PDF, 892 KB"
    },
    {
      title: "Fee Structure",
      type: "Document",
      icon: <FileText className="w-6 h-6" />,
      description: "Complete fee structure for all classes",
      size: "PDF, 1.2 MB"
    },
    {
      title: "Staff Details",
      type: "Document",
      icon: <Users className="w-6 h-6" />,
      description: "Teaching and non-teaching staff information",
      size: "PDF, 2.7 MB"
    }
  ];

  const basicInfo = [
    { label: "School Name", value: "QB365 Public School" },
    { label: "CBSE Affiliation No.", value: "123456789" },
    { label: "School Code", value: "12345" },
    { label: "Principal Name", value: "Dr. Rajesh Kumar" },
    { label: "Academic Session", value: "April to March" },
    { label: "Classes Offered", value: "Pre-Primary to XII" },
    { label: "Total Strength", value: "1,200 Students" },
    { label: "Total Teachers", value: "65 Teachers" }
  ];

  const academicResults = [
    { year: "2023-24", class: "Class X", passPercentage: "98.5%", distinction: "45%" },
    { year: "2023-24", class: "Class XII", passPercentage: "97.2%", distinction: "52%" },
    { year: "2022-23", class: "Class X", passPercentage: "97.8%", distinction: "42%" },
    { year: "2022-23", class: "Class XII", passPercentage: "96.5%", distinction: "48%" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Mandatory Public Disclosure"
        subtitle="Transparency and Accountability in Education"
        backgroundImage="./Disclosure/DisclosureImg1.webp"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Public Disclosure Information</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content || "In compliance with CBSE guidelines, QB365 Public School maintains complete transparency by disclosing all mandatory information for public access. This includes our certificates, academic performance, infrastructure details, and staff information."}
            </p>
          </motion.div>

          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Commitment to Transparency</h3>
                <p className="text-gray-600">
                  As per CBSE Affiliation Bye-laws, we ensure all mandatory documents and information 
                  are readily available for public scrutiny. Our commitment to transparency reflects 
                  our dedication to maintaining the highest standards in education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Basic School Information</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">School Details</h3>
              <div className="space-y-4">
                {basicInfo.slice(0, 4).map((info, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">{info.label}:</span>
                    <span className="text-gray-900">{info.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Academic Information</h3>
              <div className="space-y-4">
                {basicInfo.slice(4).map((info, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">{info.label}:</span>
                    <span className="text-gray-900">{info.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Uploaded Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mandatory Documents</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All mandatory documents as required by CBSE are available for download and public verification.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary">{doc.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{doc.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{doc.description}</p>
                    <p className="text-gray-500 text-xs mb-3">{doc.size}</p>
                    <button className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Results</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our consistent academic performance demonstrates our commitment to educational excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Academic Year</th>
                    <th className="px-6 py-4 text-center">Class</th>
                    <th className="px-6 py-4 text-center">Pass Percentage</th>
                    <th className="px-6 py-4 text-center">Distinction</th>
                  </tr>
                </thead>
                <tbody>
                  {academicResults.map((result, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{result.year}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{result.class}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center text-green-600 font-semibold">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          {result.passPercentage}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-primary">{result.distinction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staff & Infrastructure Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Staff Information</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">65</div>
                    <div className="text-gray-600 text-sm">Total Teachers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">25</div>
                    <div className="text-gray-600 text-sm">Support Staff</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">All teachers are B.Ed qualified</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">Regular training programs conducted</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">Subject-wise specialization maintained</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Infrastructure Details</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">35</div>
                    <div className="text-gray-600 text-sm">Classrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">8</div>
                    <div className="text-gray-600 text-sm">Laboratories</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">5-acre campus with modern facilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">Fully air-conditioned smart classrooms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-primary" />
                    <span className="text-gray-600">Multi-purpose sports complex</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclosure;