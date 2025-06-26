import Hero from './components/Hero'
import Project from './components/Project'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import Achievements from './components/Achievement'

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      
      <header className=" flex items-center justify-between p-4 max-w-6xl mx-auto sticky top-0 z-10 border-b-[0.01rem] border-gray-800 bg-[#0f0f0f]">
        <h1 className="text-2xl font-bold">Arun</h1>
        <nav className="space-x-4 ">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#achievements" className="hover:underline">Achievements</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
    
     

      <Hero />
      <AboutMe />
      <Project />
      <Achievements />
      <Blog />
      <Contact />

    </div>
  )
}

export default App
