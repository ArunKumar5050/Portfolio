// src/components/Hero.jsx
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFile } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-[500px] flex flex-col justify-center items-start px-6 md:px-12 max-w-6xl mx-auto relative">
      <img className="w-35 hidden md:block absolute  top-15 left-4 " src="https://res.cloudinary.com/dhjzybacp/image/upload/v1750853771/26432_qpwaul.svg" alt="imgsdfsdf" />
      <motion.h2
        className="text-2xl md:text-2xl relative text-[#3CCF91] font-bold mb-1"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hey there!👋 I’m-
      </motion.h2>
      <motion.h1
        className="text-6xl md:text-8xl font-bold mb-4 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ARUN PRAJAPAT
      </motion.h1>

      <motion.p
        className="text-3xl text-gray-400 max-w-2xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
       <span className="text-[#FFFFFF]"><b>Software Engineer. </b></span> A self-taught developer with an
       interest in Computer Science.
      </motion.p>
      <motion.p
        className="text-xl text-gray-400 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
      🚀 Currently specializing in Frontend (React / Next.js)
      </motion.p>
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}className="flex space-x-4 mt-6">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  href="https://www.linkedin.com/in/arun-kumar-54524a287/"
                  className="flex items-center gap-1 bg-[#FFFFFF33] py-1 px-3 text-[#FFFFFF] rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin fill="#3CCF91"/>LinkedIn
                </motion.a>
                <motion.a
                whileHover={{ scale: 1.08 }}
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvkXVKJNbSlgHQQhkHzltCKhFsGJvBsbqlbBjqjHFHVwnbWhTlfRTnQrPPpfcvjgsSksJV"
                  className="flex items-center gap-1 bg-[#FFFFFF33] py-1 px-3 text-[#FFFFFF] rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <MdEmail fill="#3CCF91"/>
                  Email
                </motion.a>
                <motion.a
                whileHover={{ scale: 1.08 }}
                  href="https://drive.google.com/file/d/1w-ufu-hK5eEJt7rgP0pPPvwMmncgseuc/view?usp=drive_link"
                  className="flex items-center gap-1 bg-[#FFFFFF33] py-1 px-3 text-[#FFFFFF] rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFile fill="#3CCF91" /> Resume
                </motion.a>
              </motion.div>
    </section>
  );
};

export default Hero;
