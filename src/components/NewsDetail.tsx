import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { newsItems } from '../data/news';

const NewsDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsItems[Number(id)];

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Không tìm thấy tin tức</h1>
            <button
              onClick={() => navigate('/')}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Back
        </button>

        {/* News content */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image */}
          <div className="aspect-video">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-4">
              <span className="text-gray-600">{news.date}</span>
              {news.author && (
                <span className="block text-gray-600 text-sm mt-1">Author: {news.author}</span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {news.title}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {news.description}
              </p>
              {/* Add more detailed content here */}
              <p className="mt-4 text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsDetail; 