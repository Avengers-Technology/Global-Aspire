import React from 'react';
import { IconType } from 'react-icons';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactMethod {
  Icon: IconType;
  title: string;
  description?: string;
  link: string;
  linkText: string;
  isExternal?: boolean;
}

const contactMethods: ContactMethod[] = [
  {
    Icon: FaEnvelope,
    title: "Email us",
    description: "Email us for general queries, including marketing and partnership opportunities.",
    link: "mailto:contact@globalaspire.com",
    linkText: "contact@globalaspire.com"
  },
  {
    Icon: FaPhone,
    title: "Call us",
    description: "Call us to speak to a member of our team. We are always happy to help you.",
    link: "tel:+84866846800",
    linkText: "+84866846800"
  },
  {
    Icon: FaMapMarkerAlt,
    title: "Visit us",
    link: "https://www.google.com/maps/place/%C4%90.+H%E1%BB%93+T%C3%B9ng+M%E1%BA%ADu,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam",
    linkText: "Hồ Tùng Mậu, phường Mai Dịch, quận Cầu Giấy, thành phố Hà Nội",
    isExternal: true
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Let's talk
          </h2>
          <p className="text-xl text-gray-600">
            Get in touch with us for personalized solutions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {contactMethods.map(({ Icon, title, description, link, linkText, isExternal }, index) => {
            const IconComponent = Icon as React.ElementType;; // Fix lỗi TypeScript ở đây

            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 transition-transform hover:scale-110">
                  <IconComponent size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {title}
                </h3>
                {description && <p className="text-gray-600 mb-4">{description}</p>}
                <a 
                  href={link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {linkText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
