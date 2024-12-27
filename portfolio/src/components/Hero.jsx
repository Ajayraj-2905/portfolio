import React from "react"
import { motion } from "framer-motion"
import profile from '../assets/profile.png'

const Hero = () => {
    return (
        <div id="hero" className="min-h-[680px] flex flex-col md:flex-row items-center justify-center gap-5 px-5 pt-24 md:pt-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
            >
                <div className="svg-container absolute top-0 left-0 rounded-full">
                    <svg
                        className="responsive-svg animation-spin"
                        viewBox="0 0 400 400"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="200" cy="200" r="198" fill="transparent" stroke="white" strokeWidth='10'
                            strokeLinecap="round"
                        />
                        <circle cx="200" cy="200" r="180" fill="transparent" stroke="blue" strokeWidth='10'
                            strokeDasharray='30 15 10 20 80 40' strokeLinecap="round" strokeOpacity='0.5'
                        />
                    </svg>
                </div>
                <img src={profile} alt="my-profile" className='rounded-full object-cover' />
            </motion.div>

            <div className='flex flex-col flex-1 items-center md:items-start py-4 md:p-4'>
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-bold"
                >
                    Hi, I'm <span className="text-yellow-400">Ajayraj</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-2xl mt-4 text-yellow-400"
                >
                    Frontend Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-lg mt-6 px-6 max-w-3xl"
                >
                    I specialize in creating responsive web interfaces, optimizing performance, and integrating APIs using
                    <span className="text-yellow-400 font-semibold"> React.js </span>
                    and
                    <span className="text-yellow-400 font-semibold"> Tailwind CSS</span>. I aim to deliver user-friendly and scalable solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col sm:flex-row gap-6 mt-8 flex-wrap"
                >
                    <a href="/Ajayraj-Resume.pdf" download className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-md hover:bg-yellow-500 transition">
                        Download Resume
                    </a>
                    <a href="#contact" className="px-6 py-3 border-2 border-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition">
                        Contact Me
                    </a>
                    <a href="#projects" className="px-6 py-3 bg-blue-900 text-yellow-400 font-bold rounded-lg hover:bg-yellow-600 hover:text-white transition">
                        View Projects
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex gap-6 mt-10 text-xl"
                >
                    <a href="https://linkedin.com/in/ajayraj-developer" target="_blank"
                        rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                        LinkedIn
                    </a>
                    <a href="https://github.com/Ajayraj-2905" target="_blank"
                        rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                        GitHub
                    </a>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero
