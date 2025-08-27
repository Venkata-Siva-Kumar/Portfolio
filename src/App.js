import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const projects = [
  {
    title: 'Ecommerce Application',
    description: 'A full-featured Ecommerce web application that allows users to browse products, add items to the cart, manage addresses, and securely place orders. Built with React for the frontend and Node.js + Express for the backend, the app integrates with MongoDB for database management and features responsive design with Tailwind CSS. It also includes authentication, order tracking, and a seamless checkout experience.',
    skills: ['React', 'React Native', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://sgstorebadvel.onrender.com',
    githubUrl: 'https://github.com/Venkata-Siva-Kumar/finalsrc.git',
  },
  {
    title: 'Gemini Ice Cream App',
    description: 'A mobile application for an ice cream shop that enables customers to browse flavors, customize orders, and place them seamlessly. Built with React Native for a smooth cross-platform experience and integrated with a backend API for real-time order management. The app features user authentication, cart management, and an intuitive UI for easy navigation.',
    skills: ['React Native', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    //liveUrl: '#',
    githubUrl: 'https://github.com/Venkata-Siva-Kumar/IceCream.git',
  },
  {
    title: 'Rock Paper Scissors Game',
    description: 'An interactive web-based Rock Paper Scissors game built with React. It features smooth UI design, dynamic game logic, and responsive styling using Tailwind CSS. The game allows users to play against the computer with real-time score updates and engaging visuals.',
    skills: ['React', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://venkata-siva-kumar.github.io/Rock-Paper-Scissor/',
    githubUrl: 'https://github.com/venkata-siva-kumar/Rock-Paper-Scissor',
  }

];

const skills = {
  'Programming Languages': ['JavaScript', 'Python', 'Java', 'C++'],
  'Front-end Development': ['React', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS'],
  'Back-end Development': ['Node.js', 'Express','REST APIs'],
  'Databases': ['MongoDB', 'MySQL'],
  'Tools & Platforms': ['Git', 'GitHub', 'VS Code','Render','AivenF'],
};

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/venkata-siva-kumar-236102310' },
  { name: 'GitHub', url: 'https://github.com/Venkata-Siva-Kumar' },
  { name: 'Twitter', url: 'https://x.com/SivaMariyala' },
  { name: 'Email', url: 'mailto:mariyalasivakumar@gmail.com' },
];

const NavItem = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.map(skill => (
          <span
            key={skill}
            className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative transform transition-all duration-300 scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleContactClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-inter text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 z-10 bg-gray-800 bg-opacity-90 backdrop-blur-sm shadow-md py-4">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-white">Venkata Siva Kumar Mariyala</a>
          <div className="flex gap-6 md:gap-8 lg:gap-10">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <button onClick={handleContactClick} className="text-white hover:text-gray-300 transition-colors duration-300">Contact</button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative flex items-center justify-center min-h-screen bg-gray-800 text-white">
          <div className="text-center p-4 md:p-8 z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in">
              Hello, I'm <span className="text-blue-400">Venkata Siva Kumar Mariyala</span>.
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-delay-1">
              A passionate Software Developer & App Developer.
            </p>
            <button
              onClick={handleContactClick}
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 animate-fade-in-delay-2"
            >
              Get In Touch
            </button>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" title="About Me" className="bg-white">
          <div className="text-center text-lg max-w-3xl mx-auto text-gray-600">
            <p className="mb-4">
              I'm Mariyala Venkata Siva Kumar, a passionate Computer Science and Engineering undergraduate 
              at SASTRA Deemed University with a strong foundation in problem-solving, software development, 
              and Data structures & algorithms.
              I enjoy building efficient solutions and developing applications that make a real impact.
              With strong communication, time management, and analytical skills, I am constantly exploring new technologies and refining my expertise. 
            </p>
            <p>
              I am particularly interested in software development, full-stack applications, and innovative problem-solving. 
              I aspire to contribute to impactful projects through internships and real-world applications. Beyond academics, 
              I thrive in collaborative environments where I can learn, grow, and apply my knowledge to solve meaningful challenges.
            </p>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="My Skills" className="bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map(skill => (
                    <span
                      key={skill}
                      className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="My Projects" className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>

      {/* Contact Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect!</h3>
          <p className="text-gray-600 mb-6">
            I'm always open to new opportunities. Feel free to reach out.
          </p>
          <div className="flex flex-col gap-4">
            {socials.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
