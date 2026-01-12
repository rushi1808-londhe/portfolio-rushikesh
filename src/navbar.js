import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import pfp from './assests/pfp.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = ["/", "/skills", "/resume", "/project", "/achievement"];

  const goNext = () => {
    const index = pages.indexOf(location.pathname);
    const next = pages[index + 1] || pages[0];
    navigate(next);
  };

  const goPrev = () => {
    const index = pages.indexOf(location.pathname);
    const prev = pages[index - 1] || pages[pages.length - 1];
    navigate(prev);
  };
  
  const navRef = useRef();
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const active = navRef.current?.querySelector(`a[href='${location.pathname}']`);
    if (active) {
      setUnderlineStyle({
        width: active.offsetWidth + 10 + "px",
        left: active.offsetLeft - 5 + "px"
      });
    }
  }, [location]);

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <div className='mt-5 my-nav'>
      <div className='container'>
        <div className='row'>

          <div className='col-lg-3 col-md-8 d-flex align-items-center navbar-section'>
            <div className="d-flex align-items-center flex-grow-1 ms-5">
              <img src={pfp} alt="pfp" className='small glow' />
              <div className='ms-3 text-center'>
                <p className='mt-3 mb-0 fw-bold'>Rushikesh Londhe</p>
                <p className='mt-0'>Full-Stack Developer</p>
              </div>
            </div>
            
            {/* Hamburger Menu */}
            <div className='d-lg-none'>
              <div className="hamburger" onClick={toggleMobileMenu}>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
                <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
              </div>
              
              <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="mobile-link" onClick={handleLinkClick}>AboutMe</Link>
                <Link to="/skills" className="mobile-link" onClick={handleLinkClick}>Skills</Link>
                <Link to="/resume" className="mobile-link" onClick={handleLinkClick}>Resume</Link>
                <Link to="/project" className="mobile-link" onClick={handleLinkClick}>Project</Link>
                <Link to="/achievement" className="mobile-link" onClick={handleLinkClick}>Achievements</Link>
                
                {/* Social Icons in Mobile Menu */}
                <div className='mobile-social-icons'>
                  <Link to={"https://mail.google.com/mail/?view=cm&fs=1&to=rushikeshdl18@gmail.com"} target="_blank"><i className="p-2 text-light fs-4 glow-i bi bi-envelope"></i></Link>
                  <Link to={"https://github.com/rushi1808-londhe"} target="_blank"><i className="p-2 text-light fs-4 glow-i bi bi-github"></i></Link>
                  <Link to={"https://www.linkedin.com/in/rushikesh-londhe-b947b025b/"} target="_blank"><i className="p-2 text-light fs-4 glow-i bi bi-linkedin"></i></Link>
                  <Link to={"https://wa.me/917498936755"} target="_blank"><i className="p-2 text-light fs-4 glow-i bi bi-whatsapp"></i></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='col-lg-6 d-none d-lg-flex justify-content-between align-items-center nav-middle' ref={navRef}>
            <Link to="/" className="text-white text-decoration-none glow">AboutMe</Link>
            <Link to="/skills" className="text-white text-decoration-none glow">Skills</Link>
            <Link to="/resume" className="text-white text-decoration-none glow">Resume</Link>
            <Link to="/project" className="text-white text-decoration-none glow">Project</Link>
            <Link to="/achievement" className="text-white text-decoration-none glow">Achievements</Link>
            <span className="underline" style={underlineStyle}></span>
          </div>

          {/* Desktop Social Icons */}
          <div className='col-lg-3 d-none d-lg-flex justify-content-end align-items-center'>
            <Link to={"https://mail.google.com/mail/?view=cm&fs=1&to=rushikeshdl18@gmail.com"} target="_blank"><i className="p-2 text-light fs-4 glow-i bi bi-envelope"></i></Link>
            <Link to={"https://github.com/rushi1808-londhe"} target="_blank"><i className="p-2 text-light fs-4 glow-i bi bi-github"></i></Link>
            <Link to={"https://www.linkedin.com/in/rushikesh-londhe-b947b025b/"} target="_blank"><i className="p-2 text-light fs-4 glow-i bi bi-linkedin"></i></Link>
            <Link to={"https://wa.me/917498936755"} target="_blank"><i className="p-2 text-light fs-4 glow-i bi bi-whatsapp"></i></Link>
          </div>

        </div>
      </div>
      
      <div className='left-arr'>
        <i className="bi bi-arrow-left-circle fs-1 text-light" onClick={goPrev}/>
      </div>
      <div className='right-arr'>
        <i className="bi bi-arrow-right-circle fs-1 text-light" onClick={goNext} />
      </div>
    </div>
  )
}