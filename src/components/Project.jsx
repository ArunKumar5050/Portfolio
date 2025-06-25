// src/components/Projects.jsx
import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";
const Projects = () => {
  const projects = [
    { img: "/src/assets/wonderlust.png",
      title: "Wanderlust (Airbnb Clone)",
      desc: "Developed a full-stack web application using the MERN stack with features like user authentication, dynamic routing, and responsive UI. Focused on building a clean, modern interface and optimized backend APIs for smooth user experience.",
      link: "https://github.com/ArunKumar5050/Airbbnb.git",
      stack: "MERN Stack, Tailwind CSS, MongoDB, Express.js, Node.js",
    },
    {img: "/src/assets/sundown.png" ,
      title: "Sundown Studio",
      desc: "Created an interactive website inspired by Sundown Studio using HTML, CSS, JavaScript, Locomotive Scroll, and Swiper.js. Focused on smooth scroll effects, dynamic sliders, and responsive design to deliver a modern and immersive user experience.",
      link: "https://github.com/ArunKumar5050/sundown-studio.git",
      stack: "HTML, CSS, JavaScript , locomotive-scroll, Swiper.js",
    },
    {img: "/src/assets/finbot.png" ,
      title: "FinBot",
      desc: "FinBot is a full-stack personal finance manager that allows users to track income, expenses, and financial trends with CSV import support, real-time analytics, and secure authentication. Built using React, Node.js, Express, and MongoDB.",
      link: "https://github.com/ArunKumar5050/FinBot.git",
      stack: "HTML, CSS, JavaScript ,React, Node.js, Express, MongoDB",
    },
    {img: "/src/assets/spotify.png" ,
      title: "Spotify Clone",
      desc: "A fully responsive Spotify-inspired music streaming web app built using HTML, CSS, and JavaScript. This clone mimics the core design and functionality of Spotify's web player, providing users with a seamless and interactive music streaming experience..",
      link: "https://github.com/ArunKumar5050/Airbbnb.git",
      stack: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <FadeInSection>
      <section id="projects" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.08 }}
              key={index}
              className="bg-[#000000]  rounded-xl flex flex-col gap-1 shadow hover:shadow-xl transition"
            >
              <img className="rounded-t-xl  w-full h-[300px] " src={project.img} alt="" />
              <h4 className="text-xl px-3 font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-400 mb-4 px-3">{project.desc}</p>
              <p className=" text-[#3CCF91] mb-4 px-3">{project.stack}</p>
              <a href={project.link} className="text-blue-400 px-3 mb-3 hover:underline">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
};

export default Projects;
