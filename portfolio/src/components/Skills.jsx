import React from "react"
import FadeInSection from "./FadeInSection"

const Skills = () => {
    const skills = ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React JS", "Python", "Java", "MySQL", "Git & Github"]

    return (
        <FadeInSection id="skills">
            <div className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-blue-600">Skills</h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="relative group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 
                                ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 
                                hover:to-purple-600 hover:text-white cursor-pointer"
                            >
                                <div className={`absolute top-4 left-0 w-1/12 h-3 bg-yellow-400 rounded-e-full 
                                ${skill === 'HTML' ? 'group-hover:w-11/12'
                                        : skill === 'CSS' ? 'group-hover:w-10/12'
                                            : skill === 'Bootstrap' ? 'group-hover:w-7/12'
                                                : skill === 'Tailwind CSS' ? 'group-hover:w-8/12'
                                                    : skill === 'JavaScript' ? 'group-hover:w-9/12'
                                                        : skill === 'React JS' ? 'group-hover:w-8/12'
                                                            : skill === 'Python' ? 'group-hover:w-9/12'
                                                                : skill === 'Java' ? 'group-hover:w-9/12'
                                                                    : skill === 'MySQL' ? 'group-hover:w-10/12'
                                                                        : skill === 'Git & Github' ? 'group-hover:w-8/12' : ''}
                                transition-w duration-300 ease-in-out`} />
                                <div className="absolute bottom-2 left-0 ps-2 font-bold block sm:hidden text-blue-600 group-hover:text-white group-hover:block  ">
                                    {skill === 'HTML' ? '95%'
                                        : skill === 'CSS' ? '80%'
                                            : skill === 'Bootstrap' ? '60%'
                                                : skill === 'Tailwind CSS' ? '70%'
                                                    : skill === 'JavaScript' ? '75%'
                                                        : skill === 'React JS' ? '70%'
                                                            : skill === 'Python' ? '80%'
                                                                : skill === 'Java' ? '80%'
                                                                    : skill === 'MySQL' ? '80%'
                                                                        : skill === 'Git & Github' ? '60%' : ''}
                                </div>
                                <p className="text-lg font-semibold text-center cursor-pointer">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Skills
