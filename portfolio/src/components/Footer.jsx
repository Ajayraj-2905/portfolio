const Footer = () => (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 py-6">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center sm:text-left">
                <div className="pe-0 sm:pe-5">
                    <h4 className="text-lg text-yellow-400 font-semibold mb-2">About Me</h4>
                    <p className="text-white">
                        Passionate developer building modern, responsive and accessible web applications with a focus on simplicity and performance.
                    </p>
                </div>  
                <div>
                    <h4 className="text-lg text-yellow-400 font-semibold mb-2">Quick Links</h4>
                    <ul className="flex flex-col gap-1 text-white">
                        <li><a href="#about" className="hover:text-black">Home</a></li>
                        <li><a href="#skills" className="hover:text-black">Skills</a></li>
                        <li><a href="#projects" className="hover:text-black">Projects</a></li>
                        <li><a href="#contact" className="hover:text-black">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg text-yellow-400 font-semibold mb-2">Contact</h4>
                    <ul className="text-white">
                        <li><a href="mailto:i.am.ajayraj29@gmail.com" className="hover:text-black">i.am.ajayraj29@gmail.com</a></li>
                        <li><a href="tel:+919487971729" className="hover:text-black">+91 94879 71729</a></li>
                        <li>
                            <div className="flex justify-center sm:justify-start space-x-4 mt-2">
                                <a href="https://github.com/Ajayraj-2905" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/ajayraj-developer" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                                    LinkedIn
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-6 text-sm text-white text-center border-t border-yellow-400   pt-4">
                © 2024 Ajayraj. All Rights Reserved.
            </div>
        </div>
    </footer>
);

export default Footer;
