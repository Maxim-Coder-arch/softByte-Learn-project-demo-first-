'use client';
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
const data = [
    {
        title: "1",
        description: "Год на рынке"
    },
    {
        title: "30",
        description: "Уникальных проектов"
    },
    {
        title: "50",
        description: "Человек в комьюнити"
    }
]
export default function AboutUs(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .4});
    const refParentPointsCompany = useRef(null);
    const viewChildPoints = useInView(refParentPointsCompany, {once: true, amount: .4});
    return (
        <section id="project">
            <div className="about-us" ref={refParent}>
                <motion.div className="about-us-image fs"
                initial={{opacity: 0, scale: .9}}
                animate={viewChild ? {opacity: 1, scale: 1} : {}}
                transition={{
                    duration: .5,
                    ease: "easeIn"
                }}
                />
                <div className="about-us-text fs">
                    <motion.h2
                    data-text="проекте"
                    initial={{y: "100px", opacity: 0}}
                    animate={viewChild ? {y: 0, opacity: 1} : {}}
                    transition={{
                        duration: .5,
                        ease: "easeInOut"
                    }}
                    >О проекте</motion.h2>
                    <motion.span
                    initial={{y: "100px", opacity: 0}}
                    animate={viewChild ? {y: 0, opacity: 1} : {}}
                    transition={{
                        duration: .5,
                        delay: .3,
                        ease: "easeInOut"
                    }}
                    >Это личный проект, рождённый из простой идеи: программирование должно быть доступным. Здесь нет компании — есть я, мои знания и искреннее желание делиться опытом. Всё обучение абсолютно бесплатное, потому что я верю, что хороший старт в IT не должен зависеть от бюджета.</motion.span>
                </div>
            </div>
            <div className="company-points" ref={refParentPointsCompany}>
                    {
                        data.map((point, index) => {
                            return (
                            <motion.div 
                            className="company-point-block" 
                            key={point.title}
                            initial={{y: "50px", opacity: 0}}
                            animate={viewChildPoints ? {y: 0, opacity: 1} : {}}
                            transition={{
                                duration: .5,
                                delay: index *.1,
                                ease: "easeOut"
                            }}
                            >
                                <p>{point.title}</p>
                                <span>{point.description}</span>
                            </motion.div>
                            )
                        })
                    }
            </div>
        </section>
    )
}