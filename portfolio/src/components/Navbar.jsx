import React, { useEffect, useState } from "react"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollTimeout, setScrollTimeout] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    setActiveSection(id)
    setMenuOpen(false)
  }
  
  const handleScroll = () => {
    const sections = ["hero", "skills", "projects", "contact"]
    let currentSection = "hero"
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section
        }
      }
    })
    if (scrollTimeout) clearTimeout(scrollTimeout);
    setScrollTimeout(
      setTimeout(() => {
        setActiveSection(currentSection);
      }, 200)
    )
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [scrollTimeout])

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer relative overflow-hidden">
          <span className="group animation-show inline-block overflow-hidden">My_Portfolio</span>
          <div className="h-7 absolute top-[2px] right-0 border bg-blue-600 animation-move" />
          <div className="h-[5px] absolute bottom-0 border rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animation-base" />
        </h1>
        <svg onClick={() => setMenuOpen(prev => !prev)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sm:hidden cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
        <ul className={`${menuOpen ? 'block absolute top-[70px] left-0 w-full py-2 space-y-2 bg-white shadow-lg' : 'hidden'} sm:flex sm:space-x-6`}>
          <li className='group text-center *:py-2 *:sm:py-0'>
            <button className={`${activeSection === 'hero' ? 'bg-blue-600 sm:bg-white text-white sm:text-blue-600' : 'text-blue-600 sm:text-black bg-white'} w-full font-semibold group-hover:text-purple`} onClick={() => scrollToSection("hero")}>Home</button>
            <span className={`${activeSection === 'hero' ? 'w-2' : 'w-2'} hidden sm:block bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full group-hover:w-full transition-all duration-200`} />
          </li>
          <li className='group text-center *:py-2 *:sm:py-0'>
            <button className={`${activeSection === 'skills' ? 'bg-blue-600 sm:bg-white text-white sm:text-blue-600' : 'text-blue-600 sm:text-black bg-white'} w-full font-semibold group-hover:text-purple`} onClick={() => scrollToSection("skills")}>Skills</button>
            <span className={`${activeSection === 'skills' ? 'w-2' : 'w-2'} hidden sm:block bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full group-hover:w-full transition-all duration-200`} />
          </li>
          <li className='group text-center *:py-2 *:sm:py-0'>
            <button className={`${activeSection === 'projects' ? 'bg-blue-600 sm:bg-white text-white sm:text-blue-600' : 'text-blue-600 sm:text-black bg-white'} w-full font-semibold group-hover:text-purple`} onClick={() => scrollToSection("projects")}>Projects</button>
            <span className={`${activeSection === 'projects' ? 'w-2' : 'w-2'} hidden sm:block bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full group-hover:w-full transition-all duration-200`} />
          </li>
          <li className='group text-center *:py-2 *:sm:py-0'>
            <button className={`${activeSection === 'contact' ? 'bg-blue-600 sm:bg-white text-white sm:text-blue-600' : 'text-blue-600 sm:text-black bg-white'} w-full font-semibold group-hover:text-purple`} onClick={() => scrollToSection("contact")}>Contact</button>
            <span className={`${activeSection === 'contact' ? 'w-2' : 'w-2'} hidden sm:block bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full group-hover:w-full transition-all duration-200`} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
