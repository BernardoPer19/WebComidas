import { useState } from "react";

const HeartIcon = () => {
    const [liked, setLiked] = useState(false);
  
    return (
      <div onClick={() => setLiked(!liked)} className="cursor-pointer">
        <svg
          className={`w-6 h-6 transition-colors ${liked ? 'text-red-500' : 'text-gray-400'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.344l1.172-1.172a4 4 0 115.656 5.656l-6 6-6-6a4 4 0 010-5.656z" />
        </svg>
      </div>
    );
  };
  
  export default HeartIcon;
  