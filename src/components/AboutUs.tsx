import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="/about-illustration.svg"
                alt="About Us Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2020, Global Aspire is a leading company specializing in technology and logistics. We provide cutting-edge solutions to help businesses optimize their operations, enhance supply chain efficiency, and stay ahead in the digital era. With a team of experienced professionals, we are committed to delivering innovative services that drive growth and operational excellence for our clients.
            </p>
          </div>
        </div>

        {/* New Brokers Section */}
        <div className="flex flex-col lg:flex-row-reverse justify-between gap-12">
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Innovative Logistics Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We specialize in freight management, warehousing, and distribution services, ensuring efficiency, reliability, and cost-effectiveness for businesses worldwide. With a team of experienced professionals and advanced technology, we provide customized logistics solutions tailored to meet the unique needs of our clients.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
                Learn more
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/broker-image.jpg"
                alt="Solar Panels and Loading Dock"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 