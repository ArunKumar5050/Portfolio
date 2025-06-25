import React from "react";
import { motion } from "framer-motion";

import FadeInSection from "./FadeInSection";

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col max-w-6xl md:px-12 flex-1 text-sm font-medium"
      >
        <h2 className="text-2xl mb-5">
          <b>⚡ About Me</b>
        </h2>
        <p className="text-[#8F9094] mb-4">
          Hey! <span className="text-[#3CCF91]">I'm Arun.</span> I've always
          been curious about how things work, especially on the internet — which
          naturally led me to the world of{" "}
          <span className="text-[#3CCF91]">coding.</span>
        </p>
        <p className="text-[#8F9094] mb-4">
          I started by exploring{" "}
          <span className="text-[#3CCF91]">web devlopment</span> with basic
          tools, and over time, I dove deep into{" "}
          <span className="text-[#3CCF91]">programing.</span> Fast forward to
          today, I work with the{" "}
          <span className="text-[#3CCF91]">MERN stack,</span> and I’m constantly
          learning and building new projects. I’ve built things like an{" "}
          <span className="text-[#3CCF91]">
            Airbnb clone, a movie streaming site, and even experimented with 3D
            animations using Three.js.
          </span>{" "}
        </p>
        <p className="text-[#8F9094] mb-4">
          I'm passionate about open source, competitive programming, and
          building real-world applications — currently focused on Web
          Development, <span className="text-[#3CCF91]">React,</span> and
          creating cool <span className="text-[#3CCF91]">side projects</span>{" "}
          that solve problems or{" "}
          <span className="text-[#3CCF91]">automate tasks.</span>
        </p>
        <p className="text-[#8F9094] mb-4">
          When I’m not coding, I love playing games with my friends, catching up
          on <span className="text-[#3CCF91]">Netflix</span>, or shooting hoops
          if the weather’s nice. 🏀
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-1  justify-center relative"
      >
        <img
          className="rounded-[50%] w-80"
          src="/src/assets/pp2.png"
          alt="profile photo"
        />{" "}
        <img
          className="md:absolute hidden md:block top-0 right-10 w-35 "
          src="/src/assets/26432.svg"
          alt=""
        />
      </motion.div>
    </section>
  );
}
