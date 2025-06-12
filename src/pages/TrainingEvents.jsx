// --- FILE: src/pages/TrainingEvents.jsx ---
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getTrainingEvents } from "../lib/api";

export default function TrainingEvents() {
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getTrainingEvents();
        const now = new Date();
        
        const upcomingEvents = events.filter(event => new Date(event.date) > now);
        const pastEvents = events.filter(event => new Date(event.date) <= now);
        
        setUpcoming(upcomingEvents);
        setPast(pastEvents);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch training events. Please try again later.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-600 mb-2">
          Build Skills for a Sustainable Tomorrow
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-200 mb-12">
          Affordable, practical programs in agriculture and sustainability.
        </p>

        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading training events...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            <p>{error}</p>
          </div>
        ) : (
          <>
            {/* Upcoming Trainings */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-6">Upcoming Trainings</h3>
              {upcoming.length === 0 ? (
                <p className="text-center text-gray-600">No upcoming training events at the moment.</p>
              ) : (
                <div className="space-y-6">
                  {upcoming.map((event) => (
                    <div
                      key={event.id}
                      className="border border-green-200 bg-green-50 hover:shadow-xl transition-all duration-300 p-6 rounded-lg dark:bg-gray-900 shadow flex flex-col md:flex-row justify-between md:items-center hover:scale-[1.01] hover:border-green-400"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full sm:w-32 h-24 object-cover md:object-contain rounded-md shadow-md hover:shadow-lg transition duration-300"
                        />
                        <div>
                          <h4 className="text-xl font-bold mb-1 text-green-800 dark:text-green-500 transition-colors">
                            {event.title}
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {event.description}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {new Date(event.date).toLocaleDateString()} | {event.location}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-0 flex gap-2">
                        <a
                          href="#"
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-transform hover:scale-105"
                        >
                          Register
                        </a>
                        <a
                          href="#"
                          className="bg-white border border-green-600 text-green-700 px-4 py-2 rounded hover:bg-green-100 dark:bg-gray-800 dark:text-white transition-transform hover:scale-105"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Past Events */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Past Programs</h3>
              {past.length === 0 ? (
                <p className="text-center text-gray-600">No past training events to display.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {past.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-40 sm:h-56 object-cover transition-transform hover:scale-105 duration-300" 
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2 text-green-800 dark:text-green-600">
                          {event.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {event.description}
                        </p>
                        <p className="text-sm text-red-500 dark:text-red-500 italic mt-2">
                          This training has concluded. Registration time is over.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

// TailwindCSS custom animation (add to your global CSS if not using already)
// 
