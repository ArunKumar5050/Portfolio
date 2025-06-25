// src/components/FadeInSection.jsx
import { motion } from "framer-motion"

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInSection
