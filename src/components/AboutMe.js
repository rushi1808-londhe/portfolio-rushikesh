import React from 'react'


export default function AboutMe() {
    return (
        <div className='about-me container-fluid p-5 '>
            <div className='row d-flex justify-content-between'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <h3 className='big-underline'>Hey,I am Rushikesh </h3>
                    <h1 className='display-1 mb-0'>FULL-STACK</h1>
                    <h1 className='display-1 mt-0'>DEVELOPER</h1>
                    <div className='text-justify w-75'>
                        <p>with a strong interest in creating modern, high-performance web applications. <br />
                            I work with technologies like React, Java, Springboot to build complete end-to-end solutions.I love problem-solving, writing clean and maintainable code, and designing systems that scale smoothly. <br />
                            Whether it’s crafting a smooth UI, optimizing backend logic, or building APIs, I aim to deliver products that are fast, elegant, and reliable.I’m always learning, improving, and exploring new tech in web development and AI.</p>
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    )
}
