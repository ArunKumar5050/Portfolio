import React, { useRef } from 'react'
import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";

export default function Achievement() {

   const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Adjust as needed
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  const projects = [
    { img: "https://res.cloudinary.com/dhjzybacp/image/upload/v1750859749/Screenshot_2025-06-25_192235_j7rtq1.png",
      title: "codethon 1.O",
      desc: "Proud to have participated in HackHive Hackathon 2025 — a great opportunity to collaborate, innovate, and build impactful tech solutions under time constraints. A valuable learning experience! 💻🚀",
      link: "https://res.cloudinary.com/dhjzybacp/image/upload/v1750859749/Screenshot_2025-06-25_192235_j7rtq1.png",
      
    },
    {img: "https://res.cloudinary.com/dhjzybacp/image/upload/v1750867192/WhatsApp_Image_2025-06-25_at_21.28.55_608ce145_knsaq3.jpg" ,
      title: "Hack-Hive(Hackathon)",
      desc: "Completed the Web Development Using HTML & CSS workshop, where I gained practical knowledge in structuring and styling web pages. A valuable step in building a strong foundation in front-end development. 🌐💻",
      link: "https://github.com/ArunKumar5050/Airbbnb.git",
      
    },
    {img: "https://res.cloudinary.com/dhjzybacp/image/upload/v1750859752/Screenshot_2025-06-25_192502_ytyc7z.png" ,
      title: "AWS with AI workshop",
      desc: "Glad to be a part of the WebCraft Workshop 2025, where I explored modern web development practices and enhanced my front-end skills through hands-on learning and expert guidance. 🧠💻",
      link: "https://res.cloudinary.com/dhjzybacp/image/upload/v1750866800/Screenshot_2025-06-25_212255_ljqpnl.png",
      
    },
    {img: "https://res.cloudinary.com/dhjzybacp/image/upload/v1750859643/Arun_prajapat_wihhn8.png" ,
      title: "BTC INDIA TOUR",
      desc: "Completed the Web Development Workshop, where I learned the fundamentals of building websites using HTML, CSS, and JavaScript. A great hands-on experience that strengthened my front-end development skills. 💡💻",
      link: "https://res.cloudinary.com/dhjzybacp/image/upload/v1750859643/Arun_prajapat_wihhn8.png",
      
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
              
              <a href={project.link} className="text-blue-400 px-3 mb-3 hover:underline">
                View certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  )
}
