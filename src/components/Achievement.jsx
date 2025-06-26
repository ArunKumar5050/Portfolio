// import React, { useRef } from 'react'
import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";

const Achievements = () => {

  
  const achievements = [
    { img: "https://res.cloudinary.com/dhjzybacp/image/upload/v1750859749/Screenshot_2025-06-25_192235_j7rtq1.png",
      title: "codethon 1.O",
      desc: "Proud to have participated in HackHive Hackathon 2025 — a great opportunity to collaborate, innovate, and build impactful tech solutions under time constraints. A valuable learning experience! 💻🚀",
      link: "https://res.cloudinary.com/dhjzybacp/image/upload/v1750859749/Screenshot_2025-06-25_192235_j7rtq1.png",
      
    },
    {img: "https://res.cloudinary.com/dhjzybacp/image/upload/v1750867192/WhatsApp_Image_2025-06-25_at_21.28.55_608ce145_knsaq3.jpg" ,
      title: "Hack-Hive(Hackathon)",
      desc: "Completed the Web Development Using HTML & CSS workshop, where I gained practical knowledge in structuring and styling web pages. A valuable step in building a strong foundation in front-end development. 🌐💻",
      link: "https://res.cloudinary.com/dhjzybacp/image/upload/v1750867192/WhatsApp_Image_2025-06-25_at_21.28.55_608ce145_knsaq3.jpg",
      
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
      <section id="achievements" className="py-16 px-6 md:px-12 max-w-6xl mx-auto scroll-mt-24">
        <h3 className="text-3xl font-bold mb-8">Achievement</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              whileHover={{ scale: 1.08 }}
              key={index}
              className="bg-[#000000]  rounded-xl flex flex-col gap-1 shadow hover:shadow-xl transition"
            >
              <img className="rounded-t-xl  w-full h-[300px] " src={achievement.img} alt="" />
              <h4 className="text-xl px-3 font-semibold mb-2">{achievement.title}</h4>
              <p className="text-gray-400 mb-4 px-3">{achievement.desc}</p>
              
              <a href={achievement.link} className="text-blue-400 px-3 mb-3 hover:underline">
                View certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  )
}


export default Achievements;