import React from "react";
import "../scss/pages/roadmap.css";
import "../scss/main/main.css";
import "../scss/corsePageStyle/mainCourse/mainCourse.css";
import Loader from "../components/defaultComponents/loader";
import sections from "./roadmapData/data.roadmap";
import ToHomeButton from "../components/defaultComponents/toHomeButton";

const RoadMap: React.FC = () => {
  return (
    <>
      <Loader />
      <ToHomeButton />
      <div className="roadmap-page">
        <div className="roadmap-blur-sphere roadmap-blur-sphere--top" />
        <div className="roadmap-blur-sphere roadmap-blur-sphere--bottom" />
        <div className="roadmap-container">
          <header className="roadmap-header">
            <h1>
              роадмап <span>фронтенд</span>
            </h1>
            <p>
              От новичка до мастера. 23 ступени. Каждый пункт — навык,
              который нужен в работе каждый день.
            </p>
            <div className="roadmap-header__line" />
          </header>
          <div className="roadmap-grid">
            {sections.map((section, idx) => (
              <div key={idx} className="roadmap-card">
                <h2>{section.title}</h2>
                <p className="roadmap-card__desc">{section.description}</p>
                <ul>
                  {section.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <span className="roadmap-card__number">{idx + 1}</span>
              </div>
            ))}
          </div>

          <footer className="roadmap-footer">
            <div className="roadmap-footer__badge">
              <p>23 ступени мастерства</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
