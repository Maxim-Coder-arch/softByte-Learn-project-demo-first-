'use client';
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function AboutUs(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .4});
    return (
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
                <motion.span
                initial={{y: "100px", opacity: 0}}
                animate={viewChild ? {y: 0, opacity: 1} : {}}
                transition={{
                    duration: .5,
                    ease: "easeInOut"
                }}
                >Это личный проект, рождённый из простой идеи: программирование должно быть доступным. Здесь нет компании — есть я, мои знания и искреннее желание делиться опытом. Всё обучение абсолютно бесплатное, потому что я верю, что хороший старт в IT не должен зависеть от бюджета.</motion.span>
            </div>
        </div>
    )
}