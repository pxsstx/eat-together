// components/ActionButtons.tsx
import React from "react";

interface ActionButtonsProps {
  onLike: () => void;
  onUnlike: () => void;
  onSuperLike: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onLike,
  onUnlike,
  onSuperLike,
}) => {
  return (
    <div className="absolute bottom-4 flex gap-4 w-full justify-center">
      {/* Unlike Button */}
      <button
        onClick={onUnlike}
        className="bg-white p-4 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient_red" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#fe8c00" }} />
              <stop offset="100%" style={{ stopColor: "#f83600" }} />
            </linearGradient>
          </defs>
          <path
            d="M6 6L18 18M18 6L6 18" // This defines the X shape
            stroke="url(#gradient_red)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Super Like Button */}
      <button
        onClick={onSuperLike}
        className="bg-white p-4 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="url(#gradient_blue)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="gradient_blue"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" style={{ stopColor: "#00c6ff" }} />
              <stop offset="100%" style={{ stopColor: "#0072ff" }} />
            </linearGradient>
          </defs>
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            stroke="url(#gradient_blue)" // Apply the gradient to the stroke
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Like Button */}
      <button
        onClick={onLike}
        className="bg-white p-4 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="url(#gradient_green)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="gradient_green"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" style={{ stopColor: "#12fff7" }} />
              <stop offset="100%" style={{ stopColor: "#36db27" }} />
            </linearGradient>
          </defs>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke="url(#gradient_green)" // Apply the gradient to the stroke
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default ActionButtons;
