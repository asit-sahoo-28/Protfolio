
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Intro = () => {
//   const [intro, setIntro] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchIntro = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_URI}/api/portfolio/intro`);
//         console.log("Response:", res.data); // 👈 check in console

//         if (res.data && res.data.data && res.data.data.length > 0) {
//           setIntro(res.data.data[0]); // ✅ Correct path
//         } else {
//           console.warn("No intro data found");
//         }
//       } catch (error) {
//         console.error("Error fetching intro data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchIntro();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen text-gray-300 text-xl">
//         Loading...
//       </div>
//     );
//   }

//   if (!intro) {
//     return (
//       <div className="flex items-center justify-center min-h-screen text-gray-300 text-xl">
//         No Intro Data Found
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-center px-6">
//       <div className="max-w-3xl">
//         <h1 className="text-gray-300 text-lg sm:text-xl md:text-2xl font-medium mb-2">
//           {intro.welcomeText}
//         </h1>

//         <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
//           {intro.firstName} {intro.lastName}
//         </h1>

//         <h2 className="text-blue-400 text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
//           {intro.caption}
//         </h2>

//         <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
//           {intro.description}
//         </p>

//         <button className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-4 py-2 mt-3 rounded-full font-semibold hover:opacity-90 transition duration-300">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Intro;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Intro = () => {
  const [intro, setIntro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIntro = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_URI}/api/portfolio/intro`
        );

        if (res.data?.data?.length > 0) {
          setIntro(res.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching intro:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIntro();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-300 text-xl">
        Loading...
      </div>
    );
  }

  if (!intro) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-300 text-xl">
        No Intro Data Found
      </div>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-gradient-to-b from-[#0b0b0f] via-[#0f0f16] to-[#0b0b0f] flex items-center pt-[120px] pb-20"
    >
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-gray-400 text-sm sm:text-base">
            {intro.welcomeText}
          </h1>

          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-purple-500">
              {intro.firstName} {intro.lastName}
            </span>
          </h2>

          <p className="text-white text-xl sm:text-2xl font-semibold">
            {intro.caption}
          </p>

          <p className="text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {intro.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-lg text-white font-semibold shadow-lg"
            >
              View Work
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition px-8 py-3 rounded-lg font-semibold"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative animate-float w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-[5px] border-purple-500 shadow-[0_0_60px_rgba(168,85,247,0.6)]">
            <img
              src="/my.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;
