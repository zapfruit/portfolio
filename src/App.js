import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Palette, Zap, CatIcon } from 'lucide-react';
import { MdShowChart } from "react-icons/md";
import { GiRadarSweep, GiFarmTractor } from "react-icons/gi";
import { FaImage } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

const Portfolio = () => {
  
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
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

    return (
      <span>
        {displayText}
        <span className="animate-pulse text-purple-400">|</span>
      </span>
    );
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  

  return (
    <div style={{
    minHeight: "100vh",
    transition: "background 0.5s, color 0.5s",
    background: "linear-gradient(135deg, #f3f4f6 0%, #fff 100%)", // light background
    color: "#18181b", // dark text for light mode
  }}
  className="min-h-screen transition-all duration-500"
>
      
      {/* Enhanced Background Effects */}
      <>
  {/* Floating Gradient Backgrounds & Particles */}
  <div style={{
    position: 'fixed',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 0,
  }}>
    {/* Main blob */}
    <div style={{
      position: 'absolute',
      width: '24rem',
      height: '24rem',
      background: 'radial-gradient(circle, rgba(139,92,246,0.3), rgba(59,130,246,0.3))',
      borderRadius: '50%',
      filter: 'blur(80px)',
      animation: 'float 8s ease-in-out infinite',
      top: '10%',
      left: '10%',
    }} />
    
    {/* Other blobs */}
    <div style={{
      position: 'absolute',
      top: '25%',
      left: '25%',
      width: '16rem',
      height: '16rem',
      background: 'radial-gradient(circle, rgba(236,72,153,0.2), rgba(139,92,246,0.2))',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 4s ease-in-out infinite',
    }} />

    <div style={{
      position: 'absolute',
      bottom: '25%',
      right: '25%',
      width: '20rem',
      height: '20rem',
      background: 'radial-gradient(circle, rgba(59,130,246,0.2), rgba(6,182,212,0.2))',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 6s ease-in-out infinite',
    }} />

    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '8rem',
      height: '8rem',
      background: 'radial-gradient(circle, rgba(251,191,36,0.1), rgba(249,115,22,0.1))',
      borderRadius: '50%',
      filter: 'blur(30px)',
      animation: 'float 6s ease-in-out infinite',
    }} />

    {/* Floating particles */}
    <div style={{
      position: 'absolute',
      top: '5rem',
      left: '2.5rem',
      width: '1rem',
      height: '1rem',
      backgroundColor: 'rgba(168,85,247,0.4)',
      transform: 'rotate(45deg)',
      animation: 'float 3s ease-in-out infinite',
    }} />

    <div style={{
      position: 'absolute',
      top: '10rem',
      right: '5rem',
      width: '1.5rem',
      height: '1.5rem',
      backgroundColor: 'rgba(96,165,250,0.4)',
      borderRadius: '999px',
      animation: 'float 4s ease-in-out infinite 1s',
    }} />

    <div style={{
      position: 'absolute',
      bottom: '10rem',
      left: '25%',
      width: '2rem',
      height: '2rem',
      backgroundColor: 'rgba(236,72,153,0.4)',
      transform: 'rotate(12deg)',
      animation: 'float 5s ease-in-out infinite 2s',
    }} />
  </div>

  {/* Fixed Navigation Bar */}
  <nav style={{
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    background: 'rgba(0,0,0,0.2)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
  }}>
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
      height: '5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      {/* Brand */}
      <div style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #a78bfa, #ec4899, #3b82f6)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        letterSpacing: '0.05em',
      }}>
        zapfruit.dev
      </div>

      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
      }}>
        {[
          { name: 'Home', id: 'home' },
          { name: 'About', id: 'about' },
          { name: 'Projects', id: 'projects' },
          { name: 'Contact', id: 'contact' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '999px',
              background: activeSection === item.id
                ? 'linear-gradient(to right, rgba(139,92,246,0.3), rgba(236,72,153,0.3))'
                : 'transparent',
              color: activeSection === item.id ? '#c084fc' : '#d1d5db',
              border: activeSection === item.id ? '1px solid rgba(139,92,246,0.5)' : 'none',
              boxShadow: activeSection === item.id ? '0 4px 20px rgba(139,92,246,0.25)' : 'none',
              transition: 'all 0.3s ease',
              fontWeight: 500,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
            onMouseLeave={(e) => {
              if (activeSection !== item.id) e.currentTarget.style.color = '#d1d5db';
            }}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      

    </div>
  </nav>
</>


      {/* Hero Section - Completely Redesigned */}
      <section
  id="home"
  style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '100px' // or '6rem' to be safe
  }}
>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          
          {/* Profile Image with Advanced Styling */}
          <div className="mb-12 relative"style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
            <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3rem',
    position: 'relative',
  }}
>
  <div
    style={{
      width: '10rem', // 40 * 4 = 160px approx
      height: '10rem',
      maxWidth: '12rem', // sm:w-48 ~ 192px, adjust as needed
      maxHeight: '12rem',
      margin: '0 auto',
      borderRadius: '9999px',
      background: 'linear-gradient(to bottom right, #8b5cf6, #ec4899, #3b82f6)', // purple to pink to blue
      padding: '0.5rem',
      boxShadow: '0 25px 50px -12px rgba(139,92,246,0.5)', // shadow-purple-500/50
      transition: 'all 0.5s ease',
      cursor: 'pointer',
      // hover effect with scale & shadow using JS on mouse events could be added if needed
    }}
  >
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '9999px',
        background: 'linear-gradient(to bottom right, #111827, #1f2937)', // gray-900 to gray-800
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Code
        style={{
          width: '5rem', // 20 * 4 = 80px approx
          height: '5rem',
          maxWidth: '6rem',
          maxHeight: '6rem',
          color: 'white',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />
    </div>
  </div>

  <style>{`
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
  `}</style>
</div>

            {/* Floating rings around profile */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping" style={{ animationDuration: '3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}></div>
            <div className="absolute inset-4 rounded-full border border-pink-400/20 animate-pulse"></div>
          </div>
          
          {/* Enhanced Typography */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
              <TypewriterText text="Kamakhya Bhatnagar" delay={100} />
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-8 font-semibold"style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
            <TypewriterText text="AI/ML Enthusiast | Data Analytics" delay={50} />
          </div>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed font-light"style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
            Curious engineer blending data, AI, and tech experiments to turn ideas into impact. 
            <span className="block mt-2 text-purple-300">Building the future, one algorithm at a time.</span>
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="cta-buttons"style={{ marginTop: "5.0rem" }}>
  <button
    onClick={() => scrollToSection('projects')}
    className="cta-gradient-btn"
    type="button"
  >
    <span className="cta-btn-content">
      <span>Explore My Work</span>
      {/* Replace with your icon component if available */}
      <ChevronDown style={{ width: 24, height: 24, transition: 'transform 0.2s' }} />
    </span>
  </button>
  <button
  onClick={() => scrollToSection('contact')}
  className="cta-connect-btn"
  type="button"
>
  <span className="cta-btn-content">
    {/* Optional: Add an icon before or after the text */}
    <span role="img" aria-label="wave" style={{ fontSize: '1.3em' }}>🤝</span>
    Let's Connect
  </span>
</button>

</div>

          
          {/* Enhanced Social Links */}
          <div className="social-links">
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
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon style={{ width: 38, height: 38 }} />
      </a>
    );
  })}
</div>

        </div>
      </section>

      {/* About Section - Enhanced */}
      <section id="about" className="py-24 lg:py-32 relative"style={{
    background: "transparent",
    
    // ...other styles
  }}>
        <div className="about-container">
    <div className="about-header">
      <h2 className="about-title">About Me</h2>
      <div className="about-underline"></div>
    </div>
    <div className="about-content-row">
      <div className="about-text">
        Hey there! I'm <span className="highlight-purple">Kamakhya</span> — part engineer, part data detective, and full-time tech enthusiast. I'm currently diving into <span className="highlight-pink">Electronics and Computer Engineering</span> at VIT Chennai, with a special love for AI/ML, data analytics, and making sense of the chaos that is raw data.<br /><br />
        Whether it's building predictive models, training neural networks, or experimenting with cool stuff like blockchain, computer vision, or even FPGA design, I'm always up for a challenge. I've had the chance to intern at some amazing places like <span className="highlight-blue">DRDO, AAI, and MCTE</span>, where I worked on everything from military AI to aviation systems.<br /><br />
        When I'm not analyzing data or building AI models, you'll find me exploring emerging tech or presenting innovative ideas at tech fests and exhibitions.
      
      {/* You can add an image or illustration here if you want */}
    
    
            
              
              
              
              {/* Enhanced Skills Section */}
              <div className="flex flex-wrap justify-center gap-12"style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',     // fixed height to control vertical space
    width: '100%',  
    gap: '35px'    // full width of parent or adjust as needed
  }}>
  {/* Skill 1 */}
  <div
    className="flex flex-col items-center justify-center h-[30vh] p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-purple-500/50 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 w-72"
    style={{
      width: '300px',   // fixed or max width for your card
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.05)', // your translucent bg
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 12px rgba(128, 0, 255, 0.3)', // subtle purple shadow
      textAlign: 'center', // center text inside card
      
    }}
  >
    <Code className="w-16 h-16 mb-4 text-purple-400" />
    <h3 className="text-xl font-bold text-white mb-2">AI/ML</h3>
    <p className="text-sm text-gray-400 mb-4">Machine Learning & NLPs</p>
    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden mb-4">
      <div
        className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out shadow-lg"
        style={{
        marginTop: 20,
        width: '92%',
        height: 12,
        background: 'rgba(100, 100, 100, 0.3)',
        borderRadius: 6,
        overflow: 'hidden',
      }}
      />
    </div>
    <span className="text-lg font-semibold text-purple-300">92%</span>
  </div>{' '}

  {/* Skill 2 */}
  <div
    className="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-purple-500/50 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 w-72"
    style={{
      width: '300px',   // fixed or max width for your card
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.05)', // your translucent bg
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 12px rgba(128, 0, 255, 0.3)', // subtle purple shadow
      textAlign: 'center', // center text inside card
      
    }}
  >
    <Zap className="w-16 h-16 mb-4 text-purple-400" />
    <h3 className="text-xl font-bold text-white mb-2">Python</h3>
    <p className="text-sm text-gray-400 mb-4">Data Science & Analysis</p>
    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden mb-4">
      <div
        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full transition-all duration-1000 ease-out shadow-lg"
        style={{
        marginTop: 20,
        width: '85%',
        height: 12,
        background: 'rgba(100, 100, 100, 0.3)',
        borderRadius: 6,
        overflow: 'hidden',
      }}
      />
    </div>
    <span className="text-lg font-semibold text-purple-300">88%</span>
  </div>

  {/* Skill 3 */}
  <div
    className="flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-purple-500/50 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 w-72"
    style={{
      width: '300px',   // fixed or max width for your card
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.05)', // your translucent bg
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 12px rgba(128, 0, 255, 0.3)', // subtle purple shadow
      textAlign: 'center', // center text inside card
      
    }}
  >
    <Palette className="w-16 h-16 mb-4 text-purple-400" />
    <h3 className="text-xl font-bold text-white mb-2">Blockchain</h3>
    <p className="text-sm text-gray-400 mb-4">Smart Contracts & DApps</p>
    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden mb-4">
      <div
        className="bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out shadow-lg"
        style={{
        marginTop: 20,
        width: '70%',
        height: 12,
        background: 'rgba(100, 100, 100, 0.3)',
        borderRadius: 6,
        overflow: 'hidden',
      }}
      />
    </div>
    <span className="text-lg font-semibold text-purple-300">70%</span>
  </div>
</div>
</div>




            
            {/* Enhanced Visual Element */}
            
<div
  style={{
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh',
  }}
>
  {/* Bouncing Circle with Icon */}
  <div
    style={{
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      background: 'radial-gradient(circle at top left, #8b5cf6, #ec4899, #3b82f6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)',
      animation: 'circularBounce 4s linear infinite',
    }}
  >
    <Code
      style={{
        width: '100px',
        height: '100px',
        color: 'white',
      }}
    />
  </div>



  {/* Floating Decorative Elements (unchanged) */}
  <div
    style={{
      position: 'absolute',
      top: '-32px',
      right: '-32px',
      width: '128px',
      height: '128px',
      background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      borderRadius: '30px',
      opacity: 0.8,
      animation: 'float1 3s ease-in-out infinite',
    }}
  />
  <div
    style={{
      position: 'absolute',
      bottom: '-32px',
      left: '-32px',
      width: '96px',
      height: '96px',
      background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      borderRadius: '30px',
      opacity: 0.8,
      animation: 'float2 4s ease-in-out infinite 1s',
    }}
  />
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '-48px',
      width: '64px',
      height: '64px',
      background: 'linear-gradient(135deg, #facc15, #f97316)',
      borderRadius: '9999px',
      opacity: 0.6,
      animation: 'float3 5s ease-in-out infinite 2s',
    }}
  />
</div>
</div>
</div>


      </section>

      {/* Projects Section - Enhanced */}
      <section
  id="projects"
  style={{
    padding: "7rem 0 0 0",
    background: "transparent",
    position: "relative",
    
  }}
>
  <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem" }}>
    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: 900,
          marginBottom: "1.2rem",
          background: "linear-gradient(90deg, #a78bfa 0%, #38bdf8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: 2,
          textShadow: "0 6px 36px #38bdf870, 0 2px 8px #a78bfa60",
        }}
      >
        Featured Projects
      </h2>
      <p
        style={{
          fontSize: "1.3rem",
          color: "#e0e7ef",
          maxWidth: 900,
          margin: "0 auto 2.2rem auto",
          lineHeight: 1.5,
          fontWeight: 500,
          textShadow: "0 2px 8px #00000040",
        }}
      >
        Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
      </p>
      <div
        style={{
          width: "9rem",
          height: "0.6rem",
          borderRadius: "1rem",
          background: "linear-gradient(90deg, #a78bfa 0%, #38bdf8 100%)",
          boxShadow: "0 2px 24px 0 #a78bfa60",
          margin: "0 auto 1rem auto",
        }}
      ></div>
    </div>
    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      {/* Projects Scrollable Row */}
      <div
        id="projects-scroll"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1.5rem",
          overflowX: "auto",
          overflowY: "visible",
          paddingBottom: "2.5rem",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "thin",
          scrollbarColor: "#a78bfa #23272f",
          scrollBehavior: "smooth",
          flex: 1,
        }}
      >
        {[
          {
            title: "Stock Market Prediction App",
            description:
              "An AI-powered stock predictor app that analyzes historical data to forecast future stock prices using advanced machine learning models.",
            tech: [
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "Matplotlib",
              "Streamlit",
            ],
            gradient: "linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)",
            link: "https://github.com/zapfruit/stock-market-predictor",
            icon: <MdShowChart style={{ width: 60, height: 60, color: "#fff" }} />,
          },
          {
            title: "Terrorist Activity Predictor",
            description:
              "A machine learning-based system that analyzes historical terrorism data to forecast potential future attacks using advanced algorithms.",
            tech: [
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "TensorFlow",
              "Keras",
            ],
            gradient: "linear-gradient(135deg, #38bdf8 0%, #06b6d4 100%)",
            link: "https://github.com/zapfruit/Terrorist-attack-predictor-",
            icon: <GiRadarSweep style={{ width: 60, height: 60, color: "#fff" }} />,
          },
          {
            title: "Image Enhancement using CLAHE",
            description:
              "Enhanced underwater image quality using CLAHE and RGB techniques in OpenCV, showcasing improved visual clarity and color accuracy.",
            tech: [
              "Python",
              "OpenCV",
              "CLAHE",
              "RGB Color Space",
              "NumPy",
              "Matplotlib",
            ],
            gradient: "linear-gradient(135deg, #ec4899 0%, #a78bfa 100%)",
            link: "https://github.com/zapfruit/Low-Light-Image-Enhancement-using-CLAHE",
            icon: <FaImage style={{ width: 60, height: 60, color: "#fff" }} />,
          },
          {
            title: "Blockchain Voting System VoteIT",
            description:
              "A secure and transparent blockchain-based voting application that ensures tamper-proof elections using smart contracts.",
            tech: [
              "Solidity",
              "React",
              "Ethers.js",
              "Hardhat",
              "Metamask",
              "JavaScript",
            ],
            gradient: "linear-gradient(135deg, #4ade80 0%, #38bdf8 100%)",
            link: "https://github.com/zapfruit/blockchain-based-voting-system-Vote-IT",
            icon: <SiBlockchaindotcom style={{ width: 60, height: 60, color: "#fff" }} />,
          },
          {
            title: "Farmer Management System",
            description:
              "A comprehensive web-based Agriculture Management System that enables farmers to manage details, products, and connect with buyers.",
            tech: [
              "Flask",
              "MySQL",
              "Python",
              "HTML",
              "CSS",
              "JavaScript",
            ],
            gradient: "linear-gradient(135deg, #f59e42 0%, #ef4444 100%)",
            link: "https://github.com/zapfruit/farmer-system",
            icon: <GiFarmTractor style={{ width: 60, height: 60, color: "#fff" }} />,
          },
        ].map((project, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 340px",
              scrollSnapAlign: "start",
              background: "rgba(255,255,255,0.09)",
              border: "2px solid rgba(167,139,250,0.24)",
              borderRadius: "2.5rem",
              boxShadow: "0 12px 48px 0 #a78bfa30",
              padding: "2rem 1.2rem 1.5rem 1.2rem",
              minHeight: "420px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              alignItems: "center",
              marginBottom: "1rem",
              transition: "border 0.3s, box-shadow 0.3s, transform 0.35s",
            }}
          >
            <div
              style={{
                height: "120px",
                width: "100%",
                borderRadius: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.3rem",
                position: "relative",
                overflow: "hidden",
                background: project.gradient,
              }}
            >
              {project.icon}
            </div>
            <div
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "0.7rem",
                textAlign: "center",
                letterSpacing: 1,
                textShadow: "0 2px 10px #a78bfa60",
              }}
            >
              {project.title}
            </div>
            <div
              style={{
                color: "#cbd5e1",
                fontSize: "1.05rem",
                marginBottom: "1rem",
                flex: 1,
                textAlign: "center",
              }}
            >
              {project.description}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1.2rem",
                justifyContent: "center",
              }}
            >
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: "rgba(167,139,250,0.18)",
                    color: "#a78bfa",
                    borderRadius: "999px",
                    padding: "0.4rem 1rem",
                    fontSize: "0.98rem",
                    border: "1px solid rgba(167,139,250,0.28)",
                    fontWeight: 600,
                    transition: "background 0.2s",
                    boxShadow: "0 2px 8px #a78bfa20",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "rgba(167,139,250,0.17)",
                color: "#a78bfa",
                border: "2px solid rgba(167,139,250,0.28)",
                borderRadius: "999px",
                padding: "0.7rem 1.5rem",
                fontWeight: 700,
                fontSize: "1.05rem",
                textDecoration: "none",
                transition:
                  "background 0.25s, border 0.25s, color 0.25s, transform 0.2s",
                marginTop: "auto",
                boxShadow: "0 2px 8px #a78bfa20",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Project</span>
              <CatIcon style={{ width: 20, height: 20 }} />
            </a>
          </div>
        ))}
      </div>
      {/* Scroll right button */}
      <button
        aria-label="Scroll projects right"
        style={{
          background: "rgba(167,139,250,0.25)",
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          color: "#a78bfa",
          fontSize: "2rem",
          cursor: "pointer",
          boxShadow: "0 2px 10px #a78bfa40",
          transition: "background 0.3s, transform 0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "1rem",
          userSelect: "none",
          outline: "none",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={() => {
          const el = document.getElementById("projects-scroll");
          if (el) el.scrollBy({ left: 340 + 24, behavior: "smooth" });
        }}
        onMouseOver={e => (e.currentTarget.style.background = "#a78bfa")}
        onMouseOut={e => (e.currentTarget.style.background = "rgba(167,139,250,0.25)")}
      >
        &gt;
      </button>
    </div>
  </div>
</section>





      <section
  id="contact"
  style={{
    minHeight: "100vh",
    
    display: "flex",
    alignItems: "center",
    padding: "5rem 0",
    background: "transparent"
  }}
>
  <div style={{
    maxWidth: 1000,
    margin: "0 auto",
    padding: "0 1.5rem",
    width: "100%"
  }}>
    {/* Header */}
    <div style={{
      textAlign: "center",
      marginBottom: "3.5rem"
    }}>
      <h2 style={{
        fontSize: "2.8rem",
        fontWeight: 900,
        marginBottom: "1.2rem",
        background: "linear-gradient(90deg, #a78bfa 0%, #38bdf8 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: 2,
        textShadow: "0 6px 36px #38bdf870, 0 2px 8px #a78bfa60",
      }}>
        Let’s Connect!
      </h2>
      <p style={{
        fontSize: "1.35rem",
        color: "#e0e7ef",
        maxWidth: 700,
        margin: "0 auto 1.5rem auto",
        lineHeight: 1.5,
        fontWeight: 500,
        textShadow: "0 2px 8px #00000040"
      }}>
        Have a project in mind, want to collaborate, or just up for some random tech banter? <span style={{color: "#a78bfa", fontWeight: 600}}>Drop me a message!</span>  
        <br />
        <span style={{fontSize: "1.1rem", color: "#38bdf8"}}>We can talk about AI, Geo Politics, memes, or the best flavor of tea ☕️🤓</span>
      </p>
      <div style={{
        width: "7rem",
        height: "0.5rem",
        borderRadius: "1rem",
        background: "linear-gradient(90deg, #a78bfa 0%, #38bdf8 100%)",
        boxShadow: "0 2px 24px 0 #a78bfa60",
        margin: "0 auto 1rem auto"
      }}></div>
    </div>

    {/* Content */}
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
      alignItems: "stretch"
    }}>
      {/* Form + Info side by side on large screens */}
      <div style={{
        display: "flex",
        flexDirection: window.innerWidth >= 1024 ? "row" : "column",
        gap: "2.5rem",
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
        {/* Contact Form */}
        <div style={{
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(12px)",
          borderRadius: "1.5rem",
          border: "1.5px solid rgba(167,139,250,0.18)",
          boxShadow: "0 8px 32px 0 #a78bfa20",
          padding: "2.5rem 2rem",
          flex: 1,
          minWidth: 320,
          maxWidth: 500
        }}>
          <form
            action="https://formsubmit.co/kamakhya.bh@gmail.com"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Portfolio Contact!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div style={{ display: "flex", gap: "1rem" }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="firstName" style={{ display: "block", color: "#cbd5e1", fontWeight: 600, marginBottom: 6 }}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  style={{
                    width: "90%",
                    padding: "0.8rem",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(167,139,250,0.18)",
                    borderRadius: "0.8rem",
                    color: "#fff",
                    fontSize: "1rem",
                    outline: "none"
                  }}
                  placeholder="John"
                />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="lastName" style={{ display: "block", color: "#cbd5e1", fontWeight: 600, marginBottom: 6 }}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  style={{
                    width: "90%",
                    padding: "0.8rem",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(167,139,250,0.18)",
                    borderRadius: "0.8rem",
                    color: "#fff",
                    fontSize: "1rem",
                    outline: "none"
                  }}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" style={{ display: "block", color: "#cbd5e1", fontWeight: 600, marginBottom: 6 }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{
                  width: "95%",
                  padding: "0.8rem",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(167,139,250,0.18)",
                  borderRadius: "0.8rem",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none"
                }}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" style={{ display: "block", color: "#cbd5e1", fontWeight: 600, marginBottom: 6 }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                style={{
                  width: "95%",
                  padding: "0.8rem",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(167,139,250,0.18)",
                  borderRadius: "0.8rem",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                  resize: "none"
                }}
                placeholder="Tell me about your project, or just say hi! (Or ask: 'Is pineapple on pizza okay?' 🍕 (yes it is, let's debate!))"
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "1rem",
                background: "linear-gradient(90deg, #a78bfa 0%, #38bdf8 100%)",
                border: "none",
                borderRadius: "1rem",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.15rem",
                cursor: "pointer",
                marginTop: "0.5rem",
                boxShadow: "0 4px 24px 0 #a78bfa50",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.7rem",
                transition: "transform 0.2s, box-shadow 0.2s"
              }}
              onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              {/* You can use your Mail icon here */}
              <svg style={{ width: 22, height: 22, color: "#fff" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <polyline points="2,5 12,13 22,5" />
              </svg>
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div style={{
          flex: 1,
          minWidth: 260,
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{ textAlign: "center" }}>
            <h3 style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "#fff"
            }}>
              Get In Touch
            </h3>
            <p style={{
              color: "#cbd5e1",
              fontSize: "1.1rem",
              lineHeight: 1.6
            }}>
              I’m always excited to discuss new projects, brainstorm wild ideas, or just geek out about the latest in tech.<br />
              <span style={{ color: "#a78bfa", fontWeight: 600 }}>Let's connect on LinkdIn!</span>
            </p>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            width: "100%"
          }}>
            {/* Email */}
            <a
              href="mailto:kamakhya.bh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "rgba(255,255,255,0.07)",
                borderRadius: "1rem",
                border: "1.5px solid rgba(167,139,250,0.18)",
                padding: "1.1rem 1.3rem",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                transition: "background 0.2s, border 0.2s, transform 0.2s"
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = "rgba(167,139,250,0.22)";
                e.currentTarget.style.border = "1.5px solid #a78bfa";
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.border = "1.5px solid rgba(167,139,250,0.18)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* Mail icon */}
              <svg style={{ width: 24, height: 24, color: "#a78bfa" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <polyline points="2,5 12,13 22,5" />
              </svg>
              <div>
                <div style={{ fontWeight: 700 }}>Email</div>
                <div style={{ color: "#cbd5e1", fontSize: "1rem" }}>kamakhya.bh@gmail.com</div>
              </div>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/zapfruit"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "rgba(255,255,255,0.07)",
                borderRadius: "1rem",
                border: "1.5px solid rgba(167,139,250,0.18)",
                padding: "1.1rem 1.3rem",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                transition: "background 0.2s, border 0.2s, transform 0.2s"
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = "rgba(167,139,250,0.22)";
                e.currentTarget.style.border = "1.5px solid #a78bfa";
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.border = "1.5px solid rgba(167,139,250,0.18)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* GitHub icon */}
              <svg style={{ width: 24, height: 24, color: "#a78bfa" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.29 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06 .89 1.56 2.34 1.11 2.91.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.04A9.37 9.37 0 0112 6.84c.85.004 1.71.11 2.51.32 1.9-1.32 2.74-1.04 2.74-1.04 .55 1.41.21 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
              <div>
                <div style={{ fontWeight: 700 }}>GitHub</div>
                <div style={{ color: "#cbd5e1", fontSize: "1rem" }}>@zapfruit</div>
              </div>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kamakhya-bhatnagar-547789225/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "rgba(255,255,255,0.07)",
                borderRadius: "1rem",
                border: "1.5px solid rgba(167,139,250,0.18)",
                padding: "1.1rem 1.3rem",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                transition: "background 0.2s, border 0.2s, transform 0.2s"
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = "rgba(167,139,250,0.22)";
                e.currentTarget.style.border = "1.5px solid #a78bfa";
                e.currentTarget.style.transform = "scale(1.04)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.border = "1.5px solid rgba(167,139,250,0.18)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* LinkedIn icon */}
              <svg style={{ width: 24, height: 24, color: "#a78bfa" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/>
              </svg>
              <div>
                <div style={{ fontWeight: 700 }}>LinkedIn</div>
                <div style={{ color: "#cbd5e1", fontSize: "1rem" }}>/in/kamakhya-bhatnagar</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Enhanced Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
          <p className="text-gray-400 text-lg">
            &copy; 2025 <span className="text-purple-400 font-semibold">Kamakhya Bhatnagar</span>. 
            Built with <span className="text-pink-400">React</span>, <span className="text-blue-400">Tailwind CSS</span>, and lots of <span className="text-green-400">green tea</span> ☕
          </p>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;