"use client";
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
const data = [
  {
    title: "1",
    description: "Год на рынке",
  },
  {
    title: "30",
    description: "Уникальных проектов",
  },
  {
    title: "50",
    description: "Человек в комьюнити",
  },
];
export default function AboutUs(): JSX.Element {
  const refParent = useRef(null);
  const viewChild = useInView(refParent, { once: true, amount: 0.4 });
  const refParentPointsCompany = useRef(null);
  const viewChildPoints = useInView(refParentPointsCompany, {
    once: true,
    amount: 0.4,
  });
  return (
    <section id="project">
      <div className="about-us" ref={refParent}>
        <motion.div
          className="about-us-content-route"
          initial={{ opacity: 0 }}
          animate={viewChild ? { opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
        >
          <div className="about-us-content">
            <motion.h2
              data-text="проекте"
              initial={{ y: "10px", opacity: 0 }}
              animate={viewChild ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              О проекте
            </motion.h2>
            <div className="line-decorate-for-block-about">
              <motion.button
                initial={{ y: "10px", opacity: 0 }}
                animate={viewChild ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: "easeInOut",
                }}
              >
                <a href="https://soft-byte-pi.vercel.app/">Другие проекты</a>
              </motion.button>
              <motion.button
                initial={{ y: "10px", opacity: 0 }}
                animate={viewChild ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
              >
                <Link href="#coursesSection">Учиться</Link>
              </motion.button>
            </div>
            <motion.span
              initial={{ y: "10px", opacity: 0 }}
              animate={viewChild ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeInOut",
              }}
            >
              Это личный проект, рождённый из простой идеи: программирование
              должно быть доступным. Всё обучение абсолютно бесплатное, потому
              что я верю, что хороший старт в IT не должен зависеть от бюджета.
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
