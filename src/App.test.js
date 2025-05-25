import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Moon, Sun, Code, Palette, Zap, User, Briefcase, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const TypewriterText = ({ text, delay = 100 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, delay);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, delay]);

    return <span>{displayText}<span className="animate-pulse text-purple-400">|</span></span>;
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Improved Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400/30 rotate-45 animate-float" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-pink-400/30 rotate-12 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              John.Dev
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', id: 'home', icon: User },
                { name: 'About', id: 'about', icon: User },
                { name: 'Projects', id: 'projects', icon: Briefcase },
                { name: 'Contact', id: 'contact', icon: MessageCircle }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                        : 'text-gray-300 hover:text-purple-400 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - CENTERED */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          
          {/* Profile Image */}
          <div className="mb-8 animate-float">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 shadow-2xl shadow-purple-500/50">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Code className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              <TypewriterText text="Kamakhya Bhatnagar" delay={150} />
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-6 font-light">
            <TypewriterText text="AI/ML Enthusiast | Blockchain" delay={50} />
          </div>
          
          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
Curious engineer blending data, AI, and tech experiments to turn ideas into impact.          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/zapfruit', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/kamakhya-bhatnagar-547789225/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:kamakhya.bh@gmail.com', label: 'Email' }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-4 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section - CENTERED */}
      <section id="about" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
Hey there! I’m Kamakhya — part engineer, part data detective, and full-time tech enthusiast. I’m currently diving into Electronics and Computer Engineering at VIT Chennai, with a special love for AI/ML, data analytics, and making sense of the chaos that is raw data.

Whether it's building predictive models, training neural networks, or experimenting with cool stuff like blockchain, computer vision, or even FPGA design, I’m always up for a challenge. I’ve had the chance to intern at some amazing places like DRDO, AAI, and MCTE, where I worked on everything from military AI to aviation systems.

I’m a curious soul who believes learning never stops—and if there’s tech involved, count me in!              </p>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
                When I'm not looking at AI models or analyzing data, you'll find me exploring emerging tech or presenting innovative ideas at tech fests and exhibitions.
              </p>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                {[
                  { icon: Code, name: 'AI/ML', level: 92, color: 'from-purple-500 to-blue-500' },
                  { icon: Zap, name: 'Python', level: 88, color: 'from-blue-500 to-cyan-500' },
                  { icon: Palette, name: 'Blockchain', level: 85, color: 'from-pink-500 to-purple-500' }
                ].map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="group text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
                      <Icon className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Image/Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-105">
                  <Code className="w-32 h-32 text-white group-hover:rotate-12 transition-transform duration-500" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl animate-float opacity-80" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl animate-float opacity-80" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-float" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - CENTERED */}
      <section id="projects" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Stock Market Prediction app",
                description: "An AI-powered stock predictor app that analyzes historical data to forecast future stock prices using machine learning models.",
                tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Streamlit'],
                gradient: 'from-purple-500 to-blue-500',
                link: "https://github.com/zapfruit/stock-market-predictor"
              },
              {
                title: "Terrorist Activity Predictor",
                description: "A machine learning-based system that analyzes historical terrorism data to forecast potential future attacks.",
                tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'Matplotlib', 'OpenCV'],
                gradient: 'from-blue-500 to-cyan-500',
                link: 'https://github.com/zapfruit/Terrorist-attack-predictor-"'
              },
              {
                title: "Image Enhancement using CLAHE",
                description: "Enhanced underwater image quality using CLAHE and RGB techniques in OpenCV, showcasing improved visual clarity and color accuracy at Avinya 2023.",
                tech: ['Python','OpenCV', 'CLAHE (Contrast Limited Adaptive Histogram Equalization)', 'RGB Color Space Manipulation', 'NumPy (for matrix operations)', 'Matplotlib (for visualization and comparison, if used)'],
                gradient: 'from-pink-500 to-purple-500',
                link: 'https://github.com/zapfruit/Low-Light-Image-Enhancement-using-CLAHE'
              },
              {
                title: "Blockchain Based Voting System VoteIT",
                description: "A secure and transparent blockchain-based voting application that ensures tamper-proof elections using smart contracts. Made for college club decision taking.",
                tech: ['Solidity', 'React', 'Ethers.js', 'Hardhat', 'Metamask', 'JavaScript', 'Node.js'],
                gradient: 'from-blue-500 to-cyan-500',
                link: 'https://github.com/zapfruit/blockchain-based-voting-system-Vote-IT"'
              },
              {
                title: "Farmer Management System",
                description: "A web-based Agriculture Management System built with Flask and MySQL that enables farmers to manage their details, products, and connect with buyers seamlessly.",
                tech: ['Flask', 'MySQL', 'Python', 'HTML', 'CSS', 'JavaScript'],
                gradient: 'from-blue-500 to-cyan-500',
                link: 'https://github.com/zapfruit/farmer-system'
              },
            ].map((project, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                  
                  {/* Project Image/Icon */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                    <Code className="w-16 h-16 text-white group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  
                  {/* Project Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Link */}
                  <a 
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - CENTERED */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's create something amazing together!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="mailto:kamakhya.bh@gmail.com"
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 inline-flex items-center justify-center space-x-3"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Send Email</span>
            </a>
            
            <a 
              href="https://github.com/zapfruit"
              className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-3"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
          </div>
          
          {/* Additional Contact Info */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: 'Email', info: 'john@example.com' },
              { icon: Github, title: 'GitHub', info: '@johndoe' },
              { icon: Linkedin, title: 'LinkedIn', info: '/in/johndoe' }
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
                  <Icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                  <p className="text-gray-400">{contact.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Kamakhya Bhatnagar. Built with React, Tailwind CSS, and lots of green tea
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;