import React from "react";
import "../scss/pages/roadmap.css";
import "../scss/main/main.css";
import "../scss/corsePageStyle/mainCourse/mainCourse.css";
import Loader from "../components/defaultComponents/loader";
import blocks from "./selfStudyData/data.self";
import ToHomeButton from "../components/defaultComponents/toHomeButton";

const SelfStudyPage: React.FC = () => {
  return (
    <>
      <Loader />
      <ToHomeButton />
      <div className="self-page">
        <div className="roadmap-blur-sphere roadmap-blur-sphere--top" />
        <div className="roadmap-blur-sphere roadmap-blur-sphere--bottom" />
        <div className="self-container">
          <header className="self-header">
            <h1>самоучка <span>developer</span></h1>
            <p>
              Как учиться без наставника, набирать опыт и выйти на уровень,
              за который платят деньги.
            </p>
            <div className="self-header__line" />
          </header>
          <div className="self-grid">
            {blocks.map((b, i) => (
              <div key={i} className="self-card">
                <h2>{b.title}</h2>
                <p className="self-card__desc">{b.text}</p>
                <ul>
                  {b.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
                <span className="self-card__number">{i + 1}</span>
              </div>
            ))}
          </div>
          <footer className="self-footer">
            <div className="self-footer__badge">
              <p>самообразование → карьера</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SelfStudyPage;
