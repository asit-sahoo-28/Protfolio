// import React, { useState } from "react";
// import SectionTitle from "../componentes/SectionTitle";
// import { Mail, Phone, MapPin, Send } from "lucide-react";

// const Contact = () => {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");
//     const formData = new FormData(event.target);
//     formData.append("access_key", "9845667d-ed4a-4334-84d0-7cdec962f9d2");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();
//     if (data.success) {
//       setResult("✅ Message sent successfully!");
//       event.target.reset();
//     } else {
//       setResult("❌ Failed to send. Try again.");
//     }
//   };

//   return (
//     <div className="px-6 md:px-16 lg:px-32 py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//       <SectionTitle title="Contact" />

//       <div className="flex flex-col md:flex-row gap-12 mt-10">
//         {/* Left Column - Contact Info */}
//         <div className="flex-1 space-y-6 text-gray-700 dark:text-gray-300">
//           <h3 className="text-2xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
//             Get in Touch <Send className="w-6 h-6 text-indigo-500" />
//           </h3>

//           <p className="leading-relaxed text-base md:text-lg">
//             Feel free to reach out through this form or using the contact
//             details below. Your feedback, questions, and suggestions are always
//             welcome!
//           </p>

//           <ul className="space-y-4">
//             <li className="flex items-center gap-3">
//               <Mail className="w-5 h-5 text-indigo-500" />
//               <span className="hover:text-indigo-500 transition duration-200">
//                 asitsahoo2005@gmail.com
//               </span>
//             </li>

//             <li className="flex items-center gap-3">
//               <Phone className="w-5 h-5 text-indigo-500" />
//               <span className="hover:text-indigo-500 transition duration-200">
//                 +91-7849047603
//               </span>
//             </li>

//             <li className="flex items-center gap-3">
//               <MapPin className="w-5 h-5 text-indigo-500" />
//               <span className="hover:text-indigo-500 transition duration-200">
//                Bhadrak, Odisha
//               </span>
//             </li>
//           </ul>
//         </div>

//         {/* Right Column - Contact Form */}
//         <div className="flex-1 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6 transition-all duration-300">
//           <form onSubmit={onSubmit} className="space-y-5">
//             <div>
//               <label className="block text-gray-800 dark:text-gray-200 font-medium mb-1">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 required
//                 className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-800 dark:text-gray-200 font-medium mb-1">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 required
//                 className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-800 dark:text-gray-200 font-medium mb-1">
//                 Write your message here
//               </label>
//               <textarea
//                 name="message"
//                 rows="5"
//                 placeholder="Enter your message..."
//                 required
//                 className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md transition duration-300 w-full md:w-auto"
//             >
//               Submit Now <Send className="w-4 h-4" />
//             </button>
//           </form>

//           {result && (
//             <span
//               className={`block text-sm font-medium ${
//                 result.includes("✅")
//                   ? "text-green-600 dark:text-green-400"
//                   : "text-red-500 dark:text-red-400"
//               }`}
//             >
//               {result}
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

















import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "9845667d-ed4a-4334-84d0-7cdec962f9d2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      setResult("❌ Failed to send. Try again.");
    }
  };

  return (
    <section className="bg-[#0e0e11] px-6 md:px-16 lg:px-32 py-24 text-white">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get In <span className="text-[#7c3aed]">Touch</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Have a project in mind or want to collaborate? Let’s talk!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-14">
        {/* Left – Form */}
        <form
          onSubmit={onSubmit}
          className="bg-[#17171c] p-8 rounded-2xl shadow-xl space-y-6"
        >
          <div>
            <label className="block mb-2 text-gray-300">Your Name</label>
            <input
              name="name"
              required
              className="w-full bg-[#23232a] p-4 rounded-lg outline-none focus:ring-2 focus:ring-[#7c3aed]"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-[#23232a] p-4 rounded-lg outline-none focus:ring-2 focus:ring-[#7c3aed]"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full bg-[#23232a] p-4 rounded-lg outline-none focus:ring-2 focus:ring-[#7c3aed]"
            ></textarea>
          </div>

          <button className="w-full bg-[#7c3aed] hover:bg-[#8b5cf6] py-3 rounded-full font-semibold flex justify-center items-center gap-2 transition">
            Send Message <Send size={18} />
          </button>

          {result && (
            <p className="text-center mt-3 text-sm text-gray-400">{result}</p>
          )}
        </form>

        {/* Right – Info */}
        <div className="space-y-10">
          <div className="flex items-start gap-4">
            <MapPin className="text-[#7c3aed]" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-400">Bhadrak, Odisha</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-[#7c3aed]" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-400">asitsahoo2005@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-[#7c3aed]" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-400">+91 7849047603</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold">Follow Me</h3>
            <div className="flex gap-5">
              <a
                href="https://github.com/asit-sahoo-28"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23232a] hover:bg-[#7c3aed] transition"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/asit-sahoo-41b510320"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#23232a] hover:bg-[#7c3aed] transition"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Asit Sahoo. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
