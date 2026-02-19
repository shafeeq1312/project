import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe,faHandshake,faPaintbrush,faCode } from '@fortawesome/free-solid-svg-icons';

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <h1 className='heading'>Why Choose Xyzon Innovations</h1>
    <div className='section-container'>
      
    <div className='section'>
      <div className='box one'>  
        <div><FontAwesomeIcon icon={faGlobe} style={{backgroundColor: 'darkblue', padding: '5px', borderRadius: '40%',color:'white'}} size='2x'/></div>
        <b>Global Standard Certifications</b>
        <div>Oracle, Microsoft,CompTIA & internal credentials that open global oppertunities.</div>
      </div>
      <div className='box two'>  
          <div><FontAwesomeIcon icon={faCode} style={{backgroundColor: 'orangered', padding: '5px', borderRadius: '40%',color:'white'}} size='2x'/></div>
          <b>Real-World Project Experience</b> 
       <div>Hands-on product engineering & capstone projects with industry mentors and real clients.</div>
      </div>
      <div className='box three'>
        <div><FontAwesomeIcon icon={faHandshake} style={{backgroundColor: 'orange', padding: '5px', borderRadius: '40%',color:'white'}} size='2x'/></div>
        <b>Rural-to-Global Bridge</b>
        <div>Makerspace & community launch pads that enable income-generating projects for rural talent.</div>
      </div>
      <div className='box four'>
        <div><FontAwesomeIcon icon={faPaintbrush} style={{backgroundColor: 'orangered', padding: '5px', borderRadius: '40%',color:'white'}} size='2x'/></div>
        <b>Complete Skill Ecosystem</b>
        <div>Tech + Creative learning path to build versatile,future-ready professionals</div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default App