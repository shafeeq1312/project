import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHandshake,
  faPaintbrush,
  faCode,
  faUserGraduate,
  faMedal,
  faFlag,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="home">
    <div className="app">
      <h1 className="heading animate__animated animate__fadeInDown">
        Why Choose Xyzon Innovations
      </h1>
      <div className="section-container animate__animated animate__fadeInUp">
        <div className="section">
          <div className="box one">
            <div>
              <FontAwesomeIcon
                icon={faGlobe}
                style={{
                  backgroundColor: "darkblue",
                  padding: "5px",
                  borderRadius: "40%",
                  color: "white",
                }}
                size="2x"
              />
            </div>
            <b>Global Standard Certifications</b>
            <div>
              Oracle, Microsoft,CompTIA & internal credentials that open global
              oppertunities.
            </div>
          </div>
          <div className="box two">
            <div>
              <FontAwesomeIcon
                icon={faCode}
                style={{
                  backgroundColor: "orangered",
                  padding: "5px",
                  borderRadius: "40%",
                  color: "white",
                }}
                size="2x"
              />
            </div>
            <b>Real-World Project Experience</b>
            <div>
              Hands-on product engineering & capstone projects with industry
              mentors and real clients.
            </div>
          </div>
          <div className="box three">
            <div>
              <FontAwesomeIcon
                icon={faHandshake}
                style={{
                  backgroundColor: "orange",
                  padding: "5px",
                  borderRadius: "40%",
                  color: "white",
                }}
                size="2x"
              />
            </div>
            <b>Rural-to-Global Bridge</b>
            <div>
              Makerspace & community launch pads that enable income-generating
              projects for rural talent.
            </div>
          </div>
          <div className="box four">
            <div>
              <FontAwesomeIcon
                icon={faPaintbrush}
                style={{
                  backgroundColor: "orangered",
                  padding: "5px",
                  borderRadius: "40%",
                  color: "white",
                }}
                size="2x"
              />
            </div>
            <b>Complete Skill Ecosystem</b>
            <div>
              Tech + Creative learning path to build versatile,future-ready
              professionals
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div className="stat-card-section">
        <div className="stat-card animate__animated animate__fadeInLeft" style={{ "--i": 0 }}>
          <div><FontAwesomeIcon icon={faUserGraduate} style={{background:'darkblue', padding:'10px', borderRadius:'20%', color:'white'}} size="1x"/></div>
          <b>75000+</b>
        </div>
        <div className="stat-card animate__animated animate__fadeInUp" style={{ "--i": 1 }}>
          <div><FontAwesomeIcon icon={faMedal} style={{background:'orangered', padding:'10px', borderRadius:'20%', color:'white'}} size="1x"/></div>
          <b>50<span>+</span></b>
        </div>
        <div className="stat-card animate__animated animate__fadeInUp" style={{ "--i": 2 }}>
          <div><FontAwesomeIcon icon={faBriefcase} style={{background:'orange', padding:'10px', borderRadius:'20%', color:'white'}} size="1x"/></div>
          <b>200+</b>
        </div>
        <div className="stat-card animate__animated animate__fadeInRight" style={{ "--i": 3 }}>
          <div><FontAwesomeIcon icon={faFlag} style={{background:'darkgreen', padding:'10px', borderRadius:'20%', color:'white'}} size="1x"/></div>
          <b>7+</b>
        </div>
      </div>
    </div>
  );
};

export default Cards;
