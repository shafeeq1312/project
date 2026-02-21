import React from 'react'
import { RiGlobalLine } from "react-icons/ri";
import { GiBulletImpacts } from "react-icons/gi";
import { SiFuturelearn } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import Cards from './Cards';
import './About.css'

const About = () => {
  return (
    <div className='about-body'>
    <div className='about'>
      <div className='about-left'>
            <h1>About Xyzon Innovations</h1>
            <p>
             Founded with a vision to bridige the skill gap between academia and industry,Xyzon inovations is at the forefront of transorming India into a global development powerhouse.  
            </p>
            
              <p>
                we specialize in delivering world-class technical certifications,
                creative skill development,and comprehesive training programs.
                Our unique approach combines theoretical knowledge with hands-on practical experience, ensuring our learners are industry-ready from day one.
            </p>
         <div className='container'>
          <div className='about-card-box'>
            <h2>2018</h2>
            <p>Founded</p>
          </div>
           <div className='about-card-box'>
            <h2>7+</h2>
            <p>Countries Reached</p>
          </div>
         </div>

             <a href='#' className='button exp'>Explore Programs</a>
             <a href='#' className='button get'>Get in Touch</a>
      </div>


        <div className='about-right'>
          <h1>Our Mission</h1>
          <p>"To empower individuals with cutting-edge skills and create pathways from rural communities to global opportunities, making India a leading destination for technology innovation and development."
          </p>
         
         <div className='about-main'>
          <div className='about-icons'>
              <RiGlobalLine size={25} style={{backgroundColor:"black",color: "aqua",borderRadius:"12px"}}/> Global Standards

          </div>
          <div className='about-icons'>
          <SiFuturelearn   size={25} style={{backgroundColor:"black",color: "brown",borderRadius:"12px"}}/> Practical Learning

          </div>
          <div className='about-icons'>
             <GiBulletImpacts size={25} style={{color:"hsl(79, 31%, 64%)",backgroundColor:"black",borderRadius:"12px"}}/>  Rural Impact

          </div>
          <div className='about-icons'>
          <GiSkills size={25} style={{color:"yellowgreen",backgroundColor:"black",borderRadius:"12px"}}/> Creative Skills

          </div>
         </div>
        </div>
        </div>       
      <Cards/>
    </div>


  )
}

export default About