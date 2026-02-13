import React from "react";
import Loader from "../components/defaultComponents/loader";
import ToHomeButton from "./toHomeButton";
import { GenericGridPageProps } from "../types/genericPage.types";

const GenericGridPage: React.FC<GenericGridPageProps> = ({
  pageClass,
  containerClass,
  headerClass,
  gridClass,
  cardClass,
  footerClass,
  title,
  subtitle,
  footerText,
  items,
}) => {
  return (
    <>
      <Loader />
      <ToHomeButton />
      <div className={pageClass}>
        <div className="roadmap-blur-sphere roadmap-blur-sphere--top" />
        <div className="roadmap-blur-sphere roadmap-blur-sphere--bottom" />
        <div className={containerClass}>
          <header className={headerClass}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className={`${headerClass}__line`} />
          </header>
          <div className={gridClass}>
            {items.map((item, idx) => (
              <div key={idx} className={cardClass}>
                <h2>{item.title}</h2>
                <p className={`${cardClass}__desc`}>{item.description}</p>
                <ul>
                  {item.list.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <span className={`${cardClass}__number`}>{idx + 1}</span>
              </div>
            ))}
          </div>
          <footer className={footerClass}>
            <div className={`${footerClass}__badge`}>
              <p>{footerText}</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default GenericGridPage;
