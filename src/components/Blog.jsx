// src/components/Blog.jsx
import FadeInSection from "./FadeInSection"
// import { motion } from "framer-motion"
const Blog = () => {
    const posts = [
      {
        title: "How I Built My Portfolio",
        date: "April 2025",
        link: "#"
      },
      {
        title: "Top 5 React Libraries I Love",
        date: "March 2025",
        link: "#"
      },
    ]
  
    return (
      <FadeInSection>
        <section id="blog" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Blog</h3>
        <div className="space-y-6">
          {posts.map((post, idx) => (
            <div key={idx} className="border-b border-gray-800 pb-4">
              <h4 className="text-xl font-semibold">{post.title}</h4>
              <p className="text-sm text-gray-500">{post.date}</p>
              <a href={post.link} className="text-blue-400 hover:underline">Read More →</a>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>
    )
  }
  
  export default Blog
  