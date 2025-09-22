import React from 'react';
import { Review } from '../../types';
import { Star, MapPin, Calendar } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-bold text-gray-900">{review.name}</h4>
          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
            <MapPin className="w-4 h-4" />
            <span>{review.location}</span>
            <Calendar className="w-4 h-4 ml-2" />
            <span>{new Date(review.date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic">"{review.comment}"</p>
    </div>
  );
};

export default ReviewCard;