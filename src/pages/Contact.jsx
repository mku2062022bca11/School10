import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Building
} from 'lucide-react';
import Hero from '../components/Hero';

const Contact = () => {
  const [content, setContent] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    fetch('/src/content/contact.txt')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: [
        "QB365 Public School",
        "123 Education Street, Knowledge Park",
        "New Delhi - 110001, India"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        "Office: +91 11 2345 6789",
        "Principal: +91 11 2345 6790",
        "Admissions: +91 11 2345 6791"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Addresses",
      details: [
        "info@qb365school.edu.in",
        "principal@qb365school.edu.in",
        "admissions@qb365school.edu.in"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 4:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
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
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="Get in Touch - We're Here to Help"
        backgroundImage="./Contact/ContactImg1.webp"
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {content || "We're here to answer your questions and provide all the information you need about QB365 Public School. Reach out to us through any of the following channels."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors"
              >
                <div className="text-primary mb-4 flex justify-center">{info.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 mb-8">
                Have a question or need more information? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select Subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academics">Academic Information</option>
                      <option value="infrastructure">Infrastructure & Facilities</option>
                      <option value="activities">Co-curricular Activities</option>
                      <option value="transport">Transportation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Please share your questions or comments..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Location</h3>
                <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Interactive Map</p>
                    <p className="text-gray-500 text-sm">123 Education Street, Knowledge Park</p>
                    <p className="text-gray-500 text-sm">New Delhi - 110001</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Admissions Office</h4>
                      <p className="text-gray-600 text-sm">Monday - Saturday: 9:00 AM - 3:00 PM</p>
                      <p className="text-primary font-medium">+91 11 2345 6791</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Principal's Office</h4>
                      <p className="text-gray-600 text-sm">By appointment only</p>
                      <p className="text-primary font-medium">+91 11 2345 6790</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">General Inquiries</h4>
                      <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                      <p className="text-primary font-medium">info@qb365school.edu.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">By Car</h3>
              <p className="text-gray-600">
                Located on Education Street with ample parking facilities. 
                Easy access from Ring Road and Metro connectivity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">By Metro</h3>
              <p className="text-gray-600">
                Nearest Metro Station: Knowledge Park (Blue Line) - 5 minutes walk. 
                Exit from Gate 3 and follow the signs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">By Phone</h3>
              <p className="text-gray-600">
                Call us for directions or to schedule a campus visit. 
                Our staff will be happy to assist you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;