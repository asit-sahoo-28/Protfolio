
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SectionTitle from "../componentes/SectionTitle";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [selectItem, setSelectItem] = useState(0);
//   const [loading, setLoading] = useState(true);

//   // Fetch projects from backend
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_URI}/api/portfolio/project`);
//         if (res.data && res.data.data && res.data.data.length > 0) {
//           setProjects(res.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-screen text-gray-400 text-xl">
//         Loading Projects...
//       </div>
//     );

//   if (!projects || projects.length === 0)
//     return (
//       <div className="flex justify-center items-center min-h-screen text-gray-400 text-xl">
//         No Projects Found
//       </div>
//     );

//   return (
//     <div className="px-6 md:px-16 lg:px-32 py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300 min-h-screen">
//       {/* Section Title */}
//       <SectionTitle title="Projects" />

//       {/* Layout */}
//       <div className="flex flex-col md:flex-row gap-10 mt-12">
//         {/* Sidebar (Project Titles) */}
//         <div className="w-full md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-y-auto gap-3 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4">
//           {projects.map((pro, index) => (
//             <button
//               key={pro._id || index}
//               onClick={() => setSelectItem(index)}
//               className={`flex-shrink-0 text-left px-4 py-3 rounded-xl transition-all duration-300 ${
//                 selectItem === index
//                   ? "bg-indigo-600 text-white shadow-lg scale-[1.02]"
//                   : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-600"
//               }`}
//             >
//               <h1 className="text-base md:text-lg font-semibold truncate">
//                 {pro.title}
//               </h1>
//             </button>
//           ))}
//         </div>

//         {/* Project Details */}
//         <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl">
//           <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
//             {/* Image */}
//             <div className="w-full lg:w-1/2 flex justify-center">
//               <div className="rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-500">
//                 <img
//                   src={projects[selectItem].image}
//                   alt={projects[selectItem].title}
//                   className="w-full h-64 md:h-80 object-cover"
//                 />
//               </div>
//             </div>

//             {/* Details */}
//             <div className="flex-1 text-center lg:text-left">
//               <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
//                 {projects[selectItem].title}
//               </h1>

//               <p className="text-gray-600 dark:text-gray-300 mb-5 text-base md:text-lg leading-relaxed">
//                 {projects[selectItem].description}
//               </p>

//               <p className="text-gray-700 dark:text-gray-400 text-base mb-6">
//                 Each project I’ve built reflects my dedication to creating clean,
//                 scalable, and visually engaging web experiences. I focus on
//                 smooth performance, responsive UI, and solid architecture.
//               </p>

//               {projects[selectItem].link && (
//                 <a
//                   href={projects[selectItem].link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition-all"
//                 >
//                   Visit Project
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;











import React, { useState, useEffect } from "react";
import axios from "axios";
import SectionTitle from "../componentes/SectionTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_URI}/api/portfolio/project`
        );
        if (res.data && res.data.data && res.data.data.length > 0) {
          setProjects(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-400 text-xl">
        Loading Projects...
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-400 text-xl">
        No Projects Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#111118] to-[#0b0b0f] px-6 md:px-16 py-24 text-white">

      {/* Section Title */}
      <div className="text-center mb-16">
        <SectionTitle title="My Projects" />
        <p className="text-gray-400 mt-2">
          A selection of my recent work
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={project._id || index}
            className="bg-[#16161d] rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 shadow-xl max-w-[420px] mx-auto"
          >
            {/* Image */}
            <div className="h-[240px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech badges (UI only) */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 bg-[#1e1e27] rounded-full text-xs text-purple-400">
                  React
                </span>
                <span className="px-3 py-1 bg-[#1e1e27] rounded-full text-xs text-purple-400">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-[#1e1e27] rounded-full text-xs text-purple-400">
                  MongoDB
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg text-center text-sm font-semibold"
                  >
                    View Demo
                  </a>
                )}

                <button className="flex-1 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition px-4 py-2 rounded-lg text-sm font-semibold">
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* View More */}
      <div className="flex justify-center mt-16">
        <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition px-8 py-3 rounded-lg font-semibold">
          View More Projects →
        </button>
      </div>

    </section>
  );
};

export default Projects;
