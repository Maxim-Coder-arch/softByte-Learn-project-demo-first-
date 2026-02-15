'use client';

import { DataFaq } from "./data.faq";
import { useState } from "react";
import {  motion } from "framer-motion";
import animationConfig from "../../../configs/animationConfigs/framer.config";

export default function Faq() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function HandleClickInfdex(index: number) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <section id="faq">
      <h3 className="faq-title">Часто задаваемые вопросы</h3>
      <div className="faq-section">
        <div className="faq-block">
          {DataFaq.map((item, index) => (
            <>
            <div className="question-block">
              <div key={index} className={`faq-item ${index === activeIndex ? "active-item-question" : ""}`}>
                <h3>{item.question}</h3>
                <button onClick={() => HandleClickInfdex(index)}>{index === activeIndex ? "-" : "+"}</button>
              </div>
              {index === activeIndex && <motion.p
              initial={{...animationConfig.verticaleTranslate.initial}}
              animate={{...animationConfig.verticaleTranslate.animate}}
              transition={{
                duration: .4,
                ease: animationConfig.animationEasing.easeOut
              }}
              >{item.answer}</motion.p>}
            </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}