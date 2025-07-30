import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Infrastructure from './pages/Infrastructure';
import Activities from './pages/Activities';
import Disclosure from './pages/Disclosure';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/mandatory-disclosure" element={<Disclosure />} />
              <Route path="/contact-us" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;