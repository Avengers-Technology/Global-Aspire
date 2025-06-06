import React from 'react';
import { useNavigate } from 'react-router-dom';
import { newsItems } from '../data/news';

const News: React.FC = () => {
  const navigate = useNavigate();

  const handleNewsClick = (index: number) => {
    navigate(`/news/${index}`);
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest News
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with our latest developments, achievements, and industry insights.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => handleNewsClick(index)}
            >
              {/* News Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* News Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {news.date}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News; 