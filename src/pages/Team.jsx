// --- FILE: src/pages/Team.jsx ---
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getTeamMembers } from "../lib/api";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const data = await getTeamMembers();
        setTeamMembers(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch team members. Please try again later.");
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Group team members by position
  const groupedMembers = teamMembers.reduce((acc, member) => {
    const group = member.position.split('&')[0].trim(); // Get the first part of the position
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(member);
    return acc;
  }, {});

  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-6xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-500 mb-2">
          The Minds Behind Plantosphere
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-200 mb-12">
          Our team drives innovation and impact.
        </p>

        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading team members...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            <p>{error}</p>
          </div>
        ) : teamMembers.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No team members available at the moment.</p>
          </div>
        ) : (
          Object.entries(groupedMembers).map(([group, members], idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-2xl font-semibold text-green-800 dark:text-green-500 mb-6">{group}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                    />
                    <h4 className="text-xl font-semibold text-green-900 dark:text-green-600">{member.name}</h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-300 font-medium">{member.position}</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-200 text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
      <Footer />
    </>
  );
}
