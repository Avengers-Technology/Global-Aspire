import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import Services from './components/Services';
import Member from './components/Member';
import WorkingProcess from './components/WorkingProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';
import News from './components/News';
import NewsDetail from './components/NewsDetail';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-blue-600 text-2xl font-bold">Global Aspire</h1>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About Us
                  </button>
                  <button 
                    onClick={() => scrollToSection('news')}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    News
                  </button>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Products
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('member')}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Member
                  </button>
                  <button 
                    onClick={() => scrollToSection('process')}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Working Process
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/" element={
            <main className="pt-16">
              <AboutUs />
              <News />
              <Product />
              <Services />
              <Member />
              <WorkingProcess />
              <Contact />
              <Footer />
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
