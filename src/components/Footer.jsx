import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  GraduationCap, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">QB365</h3>
                <p className="text-sm text-gray-400">Public School</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nurturing young minds for a brighter tomorrow. Excellence in education 
              with modern teaching methods and comprehensive development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-primary transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-primary transition-colors">Activities</Link></li>
              <li><Link to="/mandatory-disclosure" className="text-gray-300 hover:text-primary transition-colors">Disclosure</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  123 Education Street, Knowledge Park, New Delhi - 110001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-gray-300 text-sm">+91 11 2345 6789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-gray-300 text-sm">info@qb365school.edu.in</p>
              </div>
            </div>
          </div>

          {/* Theme Switcher & Social */}
          <div>
            <ThemeSwitcher />
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 QB365 Public School. All rights reserved. | 
            <Link to="/mandatory-disclosure" className="text-primary hover:text-primary-light ml-1">
              Mandatory Public Disclosure
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;