'use client';
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
const data = [
    {
        title: "Много практики",
        description: "Обучение строится на реальных задачах, с которыми сталкиваются разработчики. Теория — только то, что нужно для старта",
    },
    {
        title: "Ваш наставник",
        description: "Я сам веду курсы и отвечаю на вопросы. Вы получаете знания напрямую, без посредников"
    },
    {
        title: "Актуальные технологии",
        description: "Программа включает только то, что действительно нужно для старта в профессии: от основ до востребованных фреймворков"
    }
]
export default function SectionWork(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .2});
    return (
        <section id="formatlearn">
            <div className="section-work" ref={refParent}>
                <div className="section-work-cards">
                    {data.map((obj, index) => {
                        return (
                            <motion.div key={index}
                            initial={{opacity: 0, y: 200}}
                            animate={viewChild ? {opacity: 1, y: 0} : {}}
                            transition={{
                                duration: .5,
                                ease: "easeInOut",
                                delay: .1 * index
                            }}
                            >
                                <div className="card-container">
                                    <div className="inner-container">
                                        <div className="border-outer">
                                            <div className="main-card"></div>
                                        </div>
                                        <div className="glow-layer-1"></div>
                                        <div className="glow-layer-2"></div>
                                    </div>
                                    <div className="background-glow"></div>
                                    <div className="content-container">
                                        <div className="content-top">
                                            <p className="title">{obj.title}</p>
                                        </div>
                                        <hr className="divider" />
                                        <div className="content-bottom">
                                            <p className="description">
                                                {obj.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}