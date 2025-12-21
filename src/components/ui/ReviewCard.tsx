import { Star } from "lucide-react";

export function ReviewCard({ review }: any) {
  return (
    <div className="border rounded-lg p-4 bg-white h-full flex flex-col justify-between">
      
      {/* User */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold">{review.name}</p>
          <p className="text-xs text-gray-500">{review.timeAgo}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-sm text-gray-700 leading-snug line-clamp-4">
        {review.comment}
      </p>

      {/* Google logo */}
      <div className="mt-3 text-right">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          className="h-4 inline-block"
          alt="Google"
        />
      </div>
    </div>
  );
}
