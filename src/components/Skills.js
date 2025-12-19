import React from 'react'
import '../style.css'
import { FaHtml5, FaJava, FaReact } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiMongodb, SiMysql, SiSpringboot } from 'react-icons/si'


export default function Skills() {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center mt-5'>
        <div className='col-md-4 skills p-2 m-5 '>
          <h1 className=' text-center section-title'>FRONTEND</h1>
          <p className='mb-2'><FaHtml5 className='fs-3 me-3 '/>HTML</p>
          <p className='mb-2'><IoLogoCss3 className='fs-3 me-3'/>CSS</p>
          <p className='mb-2'><RiJavascriptFill className='fs-3 me-3' />JAVASCRIPT</p>
          <p className='mb-2'><BsFillBootstrapFill className='fs-4 me-3'/> BOOTSTRAP</p>
          <p className='mb-2'><FaReact className='fs-3 me-3'/>REACT</p>
        </div>
        <div className='col-md-4 skills p-2'>
          <h1 className=' text-center section-title'>BACKEND</h1>
          <p className='mb-2'><FaJava className='fs-3'/> JAVA</p>
          <p className='mb-2'><SiSpringboot className='fs-3'/> SPRINGBOOT</p>
        </div>
        <div className='col-md-4 skills p-2'>
          <h1 className=' text-center section-title'>DATABASE</h1>
          <p className='mb-2'><SiMysql className='fs-3'/> MySQL</p>
          <p className='mb-2'><SiMongodb className='fs-3'/> MongoDB</p>
        </div>
      </div>
    </div>
  )
}
