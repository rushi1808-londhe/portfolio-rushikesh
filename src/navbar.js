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
    const next = pages[index + 1] || pages[0]; // loop back to start
    navigate(next);
  };

  const goPrev = () => {
    const index = pages.indexOf(location.pathname);
    const prev = pages[index - 1] || pages[pages.length - 1]; // go to last page
    navigate(prev);
  };
  const navRef = useRef();
  const [underlineStyle, setUnderlineStyle] = useState({});

  useEffect(() => {
    const active = navRef.current.querySelector(`a[href='${location.pathname}']`);
    if (active) {
      setUnderlineStyle({
        width: active.offsetWidth + 10 + "px",
        left: active.offsetLeft - 5 + "px"
      });
    }
  }, [location]);
  return (
    <div className='mt-5 my-nav'>
      <div className='container'>
        <div className='row'>

          <div className='col-md-3 d-flex align-items-center'>
            <img src={pfp} alt="pfp" className='small glow' />
            <div className='ms-3 text-center'>
              <p className='mt-3 mb-0 fw-bold'>Rushikesh Londhe</p>
              <p className='mt-0'>Full-Stack Developer</p>
            </div>
          </div>

          <div className='nav-middle  col-md-6 d-flex justify-content-between align-items-center ' ref={navRef}>
            <Link to="/" className="text-white text-decoration-none glow">AboutMe</Link>
            <Link to="/skills" className="text-white text-decoration-none glow">Skills</Link>
            <Link to="/resume" className="text-white text-decoration-none glow">Resume</Link>
            <Link to="/project" className="text-white text-decoration-none glow">Project</Link>
            {/* <Link to="/experience" className="text-white text-decoration-none glow">Experience</Link> */}
            <Link to="/achievement" className="text-white text-decoration-none glow">Achievements</Link>

            <span className="underline" style={underlineStyle}></span>
          </div>

          <div className='col-md-3 d-flex justify-content-end align-items-center'>
            <Link><i className="p-2 text-light fs-4 glow-i bi bi-envelope"></i></Link>
            <Link><i className="p-2 text-light fs-4 glow-i bi bi-github"></i></Link>
            <Link><i className="p-2 text-light fs-4 glow-i bi bi-linkedin"></i></Link>
            <Link><i className="p-2 text-light fs-4 glow-i bi bi-whatsapp"></i></Link>
          </div>

        </div>
      </div>
      <div className='left-arr'>
        <i className=" bi bi-arrow-left-circle fs-1 text-light" onClick={goPrev}/>
      </div>
      <div className='right-arr'>
        <i className=" bi bi-arrow-right-circle fs-1 text-light" onClick={goNext} />
      </div>
    </div>
  )
}
