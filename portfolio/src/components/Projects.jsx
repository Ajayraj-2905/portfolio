import React from "react";
import FadeInSection from "./FadeInSection";
import calculator from "../assets/calculator.jpeg";
import food from "../assets/food.png";
import gemini from "../assets/gemini.webp";
import todolist from "../assets/todolist.png";
import weather from "../assets/weather.jpg";
import portfolio from "../assets/portfolio.jpeg";

const Projects = () => {
    const projects = [
        {
            name: "Calculator App",
            description: "A basic calculator built with HTML, CSS, and JavaScript for simple and advanced calculations.",
            liveDemo: "#",
            sourceCode: "https://github.com/Ajayraj-2905/projectsinjs/tree/main/CalculatorApp",
            image: calculator,
        },
        {
            name: "Todo List App",
            description: "A task management app using HTML, CSS, and JavaScript that stores tasks in local storage.",
            liveDemo: "#",
            sourceCode: "https://github.com/Ajayraj-2905/projectsinjs/tree/main/TodolistApp",
            image: todolist,
        },
        {
            name: "Weather App",
            description: "A weather forecast app using HTML, CSS, and JavaScript with data fetched from a Weather API.",
            liveDemo: "#",
            sourceCode: "https://github.com/Ajayraj-2905/projectsinjs/tree/main/WeatherApp",
            image: weather,
        },
        {
            name: "Food Delivery App",
            description: "A React-based frontend for a food delivery platform with Home, Cart, and Payment pages.",
            liveDemo: "https://foodyquickbites.netlify.app/",
            sourceCode: "https://github.com/Ajayraj-2905/fooddeliveryapp",
            image: food,
        },
        {
            name: "Gemini AI Clone",
            description: "An AI-powered virtual assistant built with React.js, Tailwind CSS, and API integration for user queries.",
            liveDemo: "https://geminiaiclone-one.vercel.app/",
            sourceCode: "https://github.com/Ajayraj-2905/geminiclone",
            image: gemini,
        },
        {
            name: "React Portfolio",
            description: "A modern portfolio showcasing my skills and projects with a contact page featuring email service.",
            liveDemo: "#",
            sourceCode: "#",
            image: portfolio,
        },
    ];


    return (
        <FadeInSection id="projects">
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.name} className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl 
                            transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-r from-blue-600 to-purple-600">
                                <div className="border border-gray-500 group-hover:border-white rounded-lg">
                                    <img
                                        src={project.image || "https://via.placeholder.com/150"}
                                        alt={project.image ? `${project.name} Thumbnail` : "Placeholder Image"}
                                        className="w-full h-40 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="mt-4 flex flex-col ">
                                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white transition-all duration-300">{project.name}</h3>
                                    <p className="mt-2 text-gray-600 group-hover:text-gray-200">{project.description}</p>
                                    <div className="mt-4 flex space-x-4">
                                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer"
                                            className="px-4 py-2 text-sm font-semibold text-blue-600 bg-white border border-blue-600 rounded group-hover:border-white hover:bg-gray-100 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                                            Source Code
                                        </a>
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
                                            className="px-4 py-2 text-sm font-semibold text-white border border-blue-600 bg-blue-600 lg:bg-white lg:border-white rounded group-hover:border-gray-200 group-hover:text-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300">
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </FadeInSection>
    );
};

export default Projects;
