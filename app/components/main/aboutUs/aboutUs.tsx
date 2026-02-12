"use client";
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import animationConfig from "../../../configs/animationConfigs/framer.config";

export default function AboutUs(): JSX.Element {
  const refParent = useRef(null);
  const viewChild = useInView(refParent, { once: true, amount: 0.4 });
  return (
    <section id="project">
      <div className="about-us" ref={refParent}>
        <div
          className="about-us-content-route"
        >
          <div className="decorate-us-1-s decorate-us"></div>
          <div className="about-us-content">
            <motion.h2
              data-text="проекте"
              initial={{...animationConfig.verticaleTranslate.initial}}
              animate={viewChild ? animationConfig.verticaleTranslate.animate : {}}
              transition={{
                duration: 0.5,
                ease: animationConfig.animationEasing.easeOut,
              }}
            >
              О проекте
            </motion.h2>
            <div className="line-decorate-for-block-about">
              <motion.button
                initial={{...animationConfig.verticaleTranslate.initial}}
                animate={viewChild ? animationConfig.verticaleTranslate.animate : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: animationConfig.animationEasing.easeOut,
                }}
              >
                <a href="https://soft-byte-pi.vercel.app/">Другие проекты</a>
              </motion.button>
              <motion.button
                initial={{...animationConfig.verticaleTranslate.initial}}
                animate={viewChild ? animationConfig.verticaleTranslate.animate : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: animationConfig.animationEasing.easeOut,
                }}
              >
                <Link href="#coursesSection">Учиться</Link>
              </motion.button>
            </div>
            <motion.span
              initial={{...animationConfig.verticaleTranslate.initial}}
              animate={viewChild ? animationConfig.verticaleTranslate.animate : {}}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: animationConfig.animationEasing.easeOut,
              }}
            >
              Это личный проект, рождённый из простой идеи: программирование
              должно быть доступным. Всё обучение абсолютно бесплатное, потому
              что я верю, что хороший старт в IT не должен зависеть от бюджета.
            </motion.span>
          </div>
          <div className="decorate-us-2-s decorate-us"></div>
        </div>
      </div>
    </section>
  );
}
