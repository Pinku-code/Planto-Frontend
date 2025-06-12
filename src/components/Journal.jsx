import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import pdf from "../assets/article/NORMALISATION.pdf"

const JournalSection = () => {
  const [showPDF, setShowPDF] = useState(false);
  const iframeRef = useRef();

  const toggleFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  return (
    <section
      className="bg-green-50 dark:bg-gray-900 text-green-900 dark:text-gray-200 px-4 py-12 md:py-16 transition-colors duration-500"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Visual */}
        <div className="flex-1">
          <img
            src={JournalCover}
            alt="Journal Cover"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Textual Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
            Plantosphere Journal of Agri-Food Innovation
          </h2>
          <p className="text-lg mb-4">
            <strong className='dark:text-green-500'>Top Article:</strong> “Solar Drying Techniques for Rural Farmers”
          </p>
          <p className="italic mb-4 text-green-800 dark:text-gray-300">
            “Learn how solar drying boosts farmer incomes in rural Bengal by reducing crop spoilage and lowering post-harvest costs. This technique improves food shelf life and ensures year-round market access.”
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  onClick={() => setShowPDF(true)}
                  className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 dark:hover:bg-green-800 transition text-center w-full sm:w-auto"
                >
                  Read Article
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-7xl w-full overflow-hidden animate-fade-in-scale bg-green-950">
                <div className="flex justify-center items-center gap-8 mb-2">
                  <h3 className="text-lg font-semibold">Read Full Article</h3>
                  <button
                    onClick={toggleFullscreen}
                    className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                    Fullscreen
                  </button>
                </div>
                <iframe
                  ref={iframeRef}
                  src={pdf}
                  title="Article PDF"
                  className="w-full h-[75vh] border-0 rounded touch-pinch-zoom bg-green-50"
                  allowFullScreen
                ></iframe>
              </DialogContent>
            </Dialog>
            <a
              href="/journal"
              className="px-6 py-3 bg-green-100 text-green-700 border border-green-600 rounded-full hover:bg-green-200 dark:hover:bg-green-800 dark:bg-transparent dark:text-green-300 dark:border-green-500 transition text-center w-full sm:w-auto"
            >
              Visit Our Journal
            </a>
            <a
              href="/journal#submit"
              className="px-6 py-3 border border-green-600 text-green-700 dark:text-green-400 rounded-full hover:bg-green-100 dark:hover:bg-green-800 transition text-center w-full sm:w-auto"
            >
              Submit Your Research
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in-scale {
            animation: fadeInScale 0.4s ease-out forwards;
          }
          .touch-pinch-zoom {
            touch-action: pinch-zoom;
            -webkit-overflow-scrolling: touch;
          }
        `}
      </style>
    </section>
  );
};

export default JournalSection;
