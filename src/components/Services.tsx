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
              We offer a wide range of services to help businesses optimize their technology 
              infrastructure and improve their operations. Our services includes software 
              development, website design, cybersecurity solutions, cloud computing, IT 
              consulting, and data analysis.
            </p>
            <p>
              We also provide ongoing support and maintenance to ensure that our clients' 
              systems are running smoothly and efficiently. Our team is available 24/7 to 
              address any issues or concerns that may arise.
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
      </div>
    </section>
  );
};

export default Services; 