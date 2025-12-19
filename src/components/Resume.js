import React from 'react'
import resumeImg from '../assests/resumeIMG.png';



export default function Resume() {
    return (
        <div className='resume-container page text-center mt-5'>
            <div className="resume-button mb-3">
                <button className='me-5 btn btn-secondary' onClick={()=> window.open("/resume.pdf", "_blank")}>DOWNLOAD RESUME</button> 
                
            </div>
            <div className="resume-card">
                <img src={resumeImg} alt="Resume Preview" className="resume-img w-50" />
            </div>
        </div>
    )
}
