import React from "react";
import "../scss/pages/roadmap.css";
import "../scss/main/main.css";
import "../scss/corsePageStyle/mainCourse/mainCourse.css";
import GenericGridPage from "../generic-components/genericGridPage";
import blocks from "./selfStudyData/data.self";
import { mapBlocksToGrid } from "./selfStudyAdapter";

const SelfStudyPage: React.FC = () => {
  return (
    <GenericGridPage
      pageClass="self-page"
      containerClass="self-container"
      headerClass="self-header"
      gridClass="self-grid"
      cardClass="self-card"
      footerClass="self-footer"
      title={<>самоучка <span>developer</span></>}
      subtitle="Как учиться без наставника и выйти на уровень дохода."
      footerText="самообразование → карьера"
      items={mapBlocksToGrid(blocks)}
    />
  );
};

export default SelfStudyPage;
