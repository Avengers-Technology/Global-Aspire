import React from 'react';

interface ProcessItem {
  title: string;
  description: string;
  environment?: string[];
  languages?: string[];
  tools?: string[];
  expertise?: string[];
}

const processes: ProcessItem[] = [
  {
    title: "Requirements Analysis",
    description: "We begin by thoroughly understanding your business needs, objectives, and challenges. Our team conducts detailed analysis sessions to gather requirements, define project scope, and establish clear goals and deliverables.",
    expertise: ["Business Analysis", "Requirements Gathering", "Scope Definition", "Project Planning"]
  },
  {
    title: "Design & Architecture",
    description: "Our expert architects and designers create comprehensive technical blueprints and user experience designs. We ensure the solution architecture aligns perfectly with your business requirements while maintaining scalability and security.",
    tools: ["UML Diagrams", "Wireframes", "Architecture Diagrams", "Design Systems"],
    expertise: ["System Architecture", "UI/UX Design", "Database Design", "Security Planning"]
  },
  {
    title: "Development & Implementation",
    description: "Our skilled development team brings the design to life using modern technologies and best practices. We follow agile methodology to ensure regular deliveries and maintain transparency throughout the development process.",
    environment: ["Modern Development Tools", "Cloud Platforms", "CI/CD Pipeline"],
    languages: ["Multiple Programming Languages", "Framework Expertise", "Database Technologies"]
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing procedures ensure your solution meets the highest quality standards. We perform comprehensive testing across functionality, performance, security, and user experience to deliver a robust product.",
    tools: ["Testing Frameworks", "Automation Tools", "Performance Monitoring"],
    expertise: ["Manual Testing", "Automated Testing", "Security Testing", "Performance Testing"]
  },
  {
    title: "Deployment & Integration",
    description: "We handle the seamless deployment of your solution and ensure proper integration with existing systems. Our team manages the transition process to minimize any disruption to your business operations.",
    environment: ["Production Environments", "Staging Servers", "Cloud Infrastructure"],
    expertise: ["System Integration", "Data Migration", "Environment Setup", "Performance Optimization"]
  },
  {
    title: "Maintenance & Support",
    description: "Our commitment continues after deployment with dedicated maintenance and support services. We provide regular updates, performance monitoring, and responsive technical support to ensure your solution runs smoothly.",
    tools: ["Monitoring Tools", "Support Ticketing Systems", "Documentation"],
    expertise: ["Technical Support", "Performance Monitoring", "System Updates", "Security Patches"]
  }
];

const WorkingProcess: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Working Process
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              {/* Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {process.description}
                  </p>
                </div>
              </div>

              {/* Development Environment */}
              {process.environment && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Development environment:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {process.environment.join(", ")}
                  </p>
                </div>
              )}

              {/* Programming Languages */}
              {process.languages && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Programming languages:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {process.languages.join(", ")}
                  </p>
                </div>
              )}

              {/* Tools */}
              {process.tools && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Tools:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {process.tools.join(", ")}
                  </p>
                </div>
              )}

              {/* Expertise */}
              {process.expertise && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Expertise:
                  </h4>
                  <p className="text-sm text-gray-600">
                    {process.expertise.join(", ")}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess; 