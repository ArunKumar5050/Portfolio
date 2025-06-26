// src/components/Contact.jsx
import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFile } from "react-icons/fa";
import { color } from "framer-motion";


const Contact = () => {
  return (
    <FadeInSection>
      <section
        id="contact"
        className="flex flex-col justify-center items-center text-center py-16 px-6 md:px-70 max-w-6xl mx-auto"
      >
        <h3 className="text-3xl font-bold mb-6">Keep in Touch</h3>
        <p className=" text-gray-400 mb-4">
          I'm currently specializing in Front-end Development. Feel free to get
          in touch,collaborations and talk more about your projects.
        </p>
        <div className="flex space-x-4 mt-6">
        <motion.a
                  whileHover={{ scale: 1.08 }}
                  href="https://www.linkedin.com/in/arun-kumar-54524a287/"
                  className="flex items-center gap-1 bg-[#FFFFFF33] py-1 px-3 text-[#FFFFFF] rounded-md"
                  target="_blank"
                >
                  <FaLinkedin fill="#3CCF91"/>LinkedIn
                </motion.a>
                <motion.a
                whileHover={{ scale: 1.08 }}
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvkXVKJNbSlgHQQhkHzltCKhFsGJvBsbqlbBjqjHFHVwnbWhTlfRTnQrPPpfcvjgsSksJV"
                  className="flex items-center gap-1 bg-[#FFFFFF33] py-1 px-3 text-[#FFFFFF] rounded-md"
                  target="_blank"
                >
                 <MdEmail fill="#3CCF91"/>
                  Email
                </motion.a>
                <motion.a
                whileHover={{ scale: 1.08 }}
                  href="https://drive.google.com/file/d/1w-ufu-hK5eEJt7rgP0pPPvwMmncgseuc/view?usp=drive_link"
                  className="flex items-center gap-1 bg-[#FFFFFF33] py-1 px-3 text-[#FFFFFF] rounded-md"
                  target="_blank"
                >
                  <FaFile fill="#3CCF91" /> Resume
                </motion.a>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Contact;
