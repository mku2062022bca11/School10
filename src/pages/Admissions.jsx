import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  DollarSign, 
  FileText, 
  Calendar, 
  CheckCircle, 
  User,
  Phone,
  Mail, 
  MapPin
} from 'lucide-react';
import Hero from '../components/Hero';

const Admissions = () => {
  const [content, setContent] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    class: '',
    address: ''
  });

  useEffect(() => {
    fetch('/src/content/admissions.txt')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const admissionSteps = [
    {
      step: 1,
      title: "Online Application",
      description: "Fill out the online admission form with required details",
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit required documents and certificates",
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Interview Process",
      description: "Attend parent-student interaction session",
      icon: <User className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Fee Payment",
      description: "Complete admission by paying the required fees",
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  const feeStructure = [
    { class: "Pre-Primary (Nursery-UKG)", admission: "₹15,000", tuition: "₹8,000/month", total: "₹1,11,000" },
    { class: "Primary (I-V)", admission: "₹20,000", tuition: "₹10,000/month", total: "₹1,40,000" },
    { class: "Middle (VI-VIII)", admission: "₹25,000", tuition: "₹12,000/month", total: "₹1,69,000" },
    { class: "Secondary (IX-X)", admission: "₹30,000", tuition: "₹15,000/month", total: "₹2,10,000" },
    { class: "Senior Secondary (XI-XII)", admission: "₹35,000", tuition: "₹18,000/month", total: "₹2,51,000" }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will contact you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Admissions Open 2025-26"
        subtitle="Join Our Academic Family - Excellence Awaits"
        backgroundImage="./Admissions/AdmissionImg1.jpeg"
      />

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content || "Our streamlined admission process is designed to make joining QB365 Public School simple and transparent. Follow these easy steps to secure your child's future."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-primary"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fee Structure 2025-26</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent and competitive fee structure designed to provide excellent value for quality education.
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
                    <th className="px-6 py-4 text-left">Class</th>
                    <th className="px-6 py-4 text-center">Admission Fee</th>
                    <th className="px-6 py-4 text-center">Monthly Tuition</th>
                    <th className="px-6 py-4 text-center">Annual Total</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{fee.class}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{fee.admission}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{fee.tuition}</td>
                      <td className="px-6 py-4 text-center font-semibold text-primary">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-100 px-6 py-4">
              <p className="text-sm text-gray-600">
                * Fees include books, uniforms, and activity charges. Additional charges may apply for optional services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Online Admission Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Online Admission Form</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 mb-8">
                Start your admission journey by filling out our online form. Our admissions team will contact you within 24 hours to guide you through the next steps.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter student's full name"
                  />
                </div>

                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter parent's full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-2">
                    Applying for Class *
                  </label>
                  <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select Class</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="1">Class I</option>
                    <option value="2">Class II</option>
                    <option value="3">Class III</option>
                    <option value="4">Class IV</option>
                    <option value="5">Class V</option>
                    <option value="6">Class VI</option>
                    <option value="7">Class VII</option>
                    <option value="8">Class VIII</option>
                    <option value="9">Class IX</option>
                    <option value="10">Class X</option>
                    <option value="11">Class XI</option>
                    <option value="12">Class XII</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter complete address"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Submit Application
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="./Admissions/AdmissionImg2.webp"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Dates</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-gray-900">Application Start</div>
                      <div className="text-sm text-gray-600">January 15, 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-gray-900">Application Deadline</div>
                      <div className="text-sm text-gray-600">March 31, 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-gray-900">New Session Begins</div>
                      <div className="text-sm text-gray-600">April 1, 2025</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Birth Certificate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Previous School Transfer Certificate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Mark Sheets (if applicable)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Recent Passport Size Photographs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Address Proof</span>
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

export default Admissions;