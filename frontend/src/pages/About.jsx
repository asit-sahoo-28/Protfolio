
// import React, { useEffect, useState } from "react";
// import SectionTitle from "../componentes/SectionTitle";
// import axios from "axios";

// const About = () => {
//   const [about, setAbout] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAbout = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_URI}/api/portfolio/about`);
//         if (response.data.success) {
//           setAbout(response.data.data[0]); // assuming your API returns an array
//         }
//       } catch (error) {
//         console.error("Error fetching about data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAbout();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-20 text-gray-600 dark:text-gray-300">
//         Loading About Section...
//       </div>
//     );
//   }

//   if (!about) {
//     return (
//       <div className="text-center py-20 text-gray-600 dark:text-gray-300">
//         No About data found.
//       </div>
//     );
//   }

//   return (
//     <div className="px-6 md:px-16 lg:px-32 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//       {/* Section Title */}
//       <SectionTitle title="About Me" />

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
//         {/* Profile Image */}
//         <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-indigo-500/20 hover:scale-105 transition-transform duration-500">
//           <img
//             src={about.lootteURI}
//             alt="Profile"
//             className="w-full h-full object-cover"
//             onError={(e) => {
//               e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
//             }}
//           />
//         </div>

//         {/* Description and Skills */}
//         <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
//           <div>
//             <p className="mb-4">
//               <span className="font-semibold text-indigo-600 dark:text-orange-400">
//                 {about.description1}
//               </span>
//             </p>
//             <p>{about.description2}</p>
//           </div>

//           {/* Skills Section */}
//           <div>
//             <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//               Here are a few technologies I’ve been working with recently:
//             </h2>
//             <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//               {about.skills.map((skill, index) => (
//                 <li
//                   key={index}
//                   className="px-4 py-2 bg-indigo-100 dark:bg-gray-800 rounded-lg text-center font-medium text-indigo-700 dark:text-orange-400 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
//                 >
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


















import React, { useEffect, useState } from "react";
import SectionTitle from "../componentes/SectionTitle";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_URI}/api/portfolio/about`
        );
        if (response.data.success) {
          setAbout(response.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-300">
        Loading About Section...
      </div>
    );
  }

  if (!about) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-300">
        No About data found.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#111118] to-[#0b0b0f] text-white px-6 md:px-20 py-24">
      
      {/* Title */}
      <div className="text-center mb-16">
        <SectionTitle title="About Me" />
        <p className="text-gray-400 mt-3">
          Get to know more about my background and passion
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-[300px] h-[420px] sm:w-[360px] sm:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={about.lootteURI}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x500?text=No+Image";
              }}
            />
          </div>
        </div>

        {/* RIGHT – Content */}
        <div>
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            {about.description1}
          </p>

          <p className="text-gray-400 leading-relaxed mb-10">
            {about.description2}
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-[#16161d] p-6 rounded-xl border border-white/5 hover:border-purple-500 transition">
              <h4 className="text-purple-400 font-semibold mb-2">
                🚀 Innovative
              </h4>
              <p className="text-gray-400 text-sm">
                I love creating unique solutions to complex problems with modern
                technologies.
              </p>
            </div>

            <div className="bg-[#16161d] p-6 rounded-xl border border-white/5 hover:border-purple-500 transition">
              <h4 className="text-purple-400 font-semibold mb-2">
                🎨 Design Oriented
              </h4>
              <p className="text-gray-400 text-sm">
                Beautiful design and great user experience are at the heart of
                everything I build.
              </p>
            </div>

            <div className="bg-[#16161d] p-6 rounded-xl border border-white/5 hover:border-purple-500 transition">
              <h4 className="text-purple-400 font-semibold mb-2">
                💻 Clean Code
              </h4>
              <p className="text-gray-400 text-sm">
                I write maintainable, scalable and efficient code using best
                practices.
              </p>
            </div>

          </div>

          {/* Skills */}
          <div className="mt-12">
            <h4 className="text-xl font-semibold mb-6">
              Technologies I’ve been working with:
            </h4>

            <div className="flex flex-wrap gap-3">
              {about.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#1b1b23] border border-white/10 rounded-lg text-sm text-purple-400 hover:border-purple-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
