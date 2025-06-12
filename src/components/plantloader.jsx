import React from "react";
import logo from "../assets/sitelogo.png"; // Adjust path as needed

const PlantLoader = () => {

  return (
    <div className="fixed inset-0 z-50 bg-white/40 dark:bg-black/30 backdrop-blur-md flex items-center justify-center overflow-hidden">

      <div className="w-[300px] h-[360px] flex flex-col items-center justify-center relative rounded-2xl p-4 z-10">
        {/* Logo with glow and animation */}
        <div className="w-24 h-24 mb-4 animate-bounce-slow">
          <img
            src={logo}
            alt="Plantosphere Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-2/3 h-2 mt-4 rounded-full bg-green-100 overflow-hidden relative z-10">
          <div className="h-full bg-green-500 animate-progress" />
        </div>
      </div>

      <style>{`
        /* Progress Bar Animation */
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Logo Bounce Animation */
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-progress {
          width: 50%;
          animation: progress 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }

        .dark .drop-shadow-green-glow {
          filter: drop-shadow(0 0 10px #22c55e) drop-shadow(0 0 20px #4ade80);
        }
      `}</style>
    </div>
  );
};

export default PlantLoader;
