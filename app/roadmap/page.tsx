import React from "react";
import "../scss/pages/roadmap.css";
import "../scss/main/main.css";
import "../scss/corsePageStyle/mainCourse/mainCourse.css";
import GenericGridPage from "../generic-components/genericGridPage";
import sections from "./roadmapData/data.roadmap";
import { mapSectionsToGrid } from "./roadmapAdapter";

const RoadMap: React.FC = () => {
  return (
    <GenericGridPage
      pageClass="roadmap-page"
      containerClass="roadmap-container"
      headerClass="roadmap-header"
      gridClass="roadmap-grid"
      cardClass="roadmap-card"
      footerClass="roadmap-footer"
      title={<>роадмап <span>фронтенд</span></>}
      subtitle="От новичка до мастера. 23 ступени. Каждый пункт — навык для работы."
      footerText="23 ступени мастерства"
      items={mapSectionsToGrid(sections)}
    />
  );
};

export default RoadMap;
