import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-blue-600 text-2xl font-bold">Global Aspire</h1>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Members</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Working Process</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Projects</a>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
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

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Your page content goes here */}
      </main>
    </div>
  );
}

export default App;
