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
                            className="main-card"
                            transition={{
                                duration: .5,
                                ease: "easeInOut",
                                delay: .1 * index
                            }}
                            >
                                <h3 className="title">{obj.title}</h3>
                                <span className="descr">{obj.description}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}