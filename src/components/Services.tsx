import React from 'react';
import { IconType } from 'react-icons';
import { 
  FaHeartbeat, 
  FaHeadphones, 
  FaDatabase, 
  FaIndustry, 
  FaTruck, 
  FaBuilding, 
  FaCar, 
  FaHeadset 
} from 'react-icons/fa';

interface ServiceItem {
  icon: IconType;
  title: string;
}

const services: ServiceItem[] = [
  {
    icon: FaHeartbeat,
    title: "Digital Healthcare"
  },
  {
    icon: FaHeadphones,
    title: "Media & Entertainment"
  },
  {
    icon: FaDatabase,
    title: "Finance & Banking"
  },
  {
    icon: FaIndustry,
    title: "Manufacturing"
  },
  {
    icon: FaTruck,
    title: "Logistics"
  },
  {
    icon: FaBuilding,
    title: "Public Sectors"
  },
  {
    icon: FaCar,
    title: "Automotive"
  },
  {
    icon: FaHeadset,
    title: "24/7 support"
  }
];

const industries = [
  "Retail & E-commerce",
  "Media & Entertainment",
  "Finance & Banking",
  "Manufacturing",
  "Logistics",
  "Public Sectors",
  "Automotive"
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Services
          </h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
             We provide a variety of services designed to help businesses enhance their technology infrastructure and streamline operations. 
             Our offerings include software development, website design, cybersecurity solutions, cloud computing, IT consulting, and data analysis.
            </p>
            <p>
              In addition, we offer continuous support and maintenance to keep our clients' systems running efficiently. 
              Our team is available 24/7 to promptly address any issues or concerns.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
          {services.map((service, index) => {
            const IconComponent  = service.icon as React.ElementType;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <IconComponent size={32} className="text-blue-600" />
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Outsourcing Services Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mt-28">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Outsourcing Services
            </h2>
            <p className="text-lg text-gray-600 mb-5">
              Global Aspire assists customers of all sizes and from any industries in implementing.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Industries
              </h3>
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index} className="flex items-center text-gray-600 ms-5">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-2/5">
            <img
              src="/outsourcing-illustration.png"
              alt="Outsourcing Services Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 