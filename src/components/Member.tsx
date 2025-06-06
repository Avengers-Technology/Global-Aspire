import React from 'react';
import { FaTwitter, FaLinkedin, FaDribbble, FaGithub } from 'react-icons/fa';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Pham Tien Manh",
    position: "Chief Technology Officer (CTO)",
    description: "10 years working experiences in IT field/nFormer CTO of a big company in Vietnam.",
    image: "/team/ic_technology.png",

  },
  {
    name: "Nguyen Thi Thanh",
    position: "Supply Chain Director (SCD)",
    description: "7 years working experiences in Supply Chain field/nFormer Supply Chain Director of a big company in Vietnam.",
    image: "/team/ic_supplychain.png",
  },
  {
    name: "Nguyen Minh Hieu",
    position: "Chief Financial Officer (CFO)",
    description: "15 years working experiences in Finance field/nFormer CFO of a big company in Vietnam.",
    image: "/team/ic_finance.png",
  },
  {
    name: "Nguyen Van Cong",
    position: "Digital Marketing Director (DMD)",
    description: "8 years working experiences in Digital Marketing field.",
    image: "/team/ic_digital_marketing.jpg",
  }
];

const Member: React.FC = () => {
  return (
    <section id="member" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our team
          </h2>
          <p className="text-lg text-gray-600">
          At Global Aspire, our team is made up of highly skilled professionals from various industries, bringing together expertise in technology, logistics, finance, healthcare, manufacturing, and more. 
          With a strong commitment to innovation and excellence, we collaborate to provide comprehensive solutions that meet the diverse needs of our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              {/* Member Image */}
              <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {member.position}
              </p>
              <p className="text-gray-600 mb-4 text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Member; 