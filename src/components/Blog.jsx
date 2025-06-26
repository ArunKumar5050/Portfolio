// src/components/Blog.jsx
import FadeInSection from "./FadeInSection"
// import { motion } from "framer-motion"
const Blog = () => {
    const posts = [
      {
        title: "React Best Practices for Beginners",
        date: "june 2025",
        link: "https://reactpractices.hashnode.dev/react-best-practices-for-beginners"
      },
      {
        title: "Deploying Your React App on Vercel",
        date: "june 2025",
        link: "https://reactpractices.hashnode.dev/deploying-your-react-app-on-vercel-beginners-guide"
      },
    ]
  
    return (
      <FadeInSection>
        <section id="blog" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Blog</h3>
        <div className="space-y-6">
          {posts.map((post, idx) => (
            <div key={idx}
             className="border-b border-gray-800 pb-4">
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
  