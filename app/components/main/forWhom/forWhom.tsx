'use client';
import { JSX, useRef } from "react";
import TitleForWhom from "./titleForWhom";
import { motion, useInView } from "framer-motion";
const data: string[] = ["Начинающие с нуля, которые не знают, с чего начать", "Самоучки, желающие систематизировать знания", "Те, кто считает, что не потянет платные курсы"];
interface variants_type {
    initial: {
        width: string,
        opacity: number,
    },
    animate: {
        width: string,
        opacity: number,
    }
}
const variatns: variants_type = {
    initial: {
        width: "100%",
        opacity: 1
    },
    animate: {
        width: "0%",
        opacity: 0
    }
}
export default function ForWhom(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .4});
    return (
        <>
            <TitleForWhom />
            <div className="for-whom">
                <div className="border-for-whom" ref={refParent}>
                    {
                        data.map((point, index) => {
                            return (
                                <motion.div 
                                className="card-container" 
                                key={index}
                                initial={{y: 100, opacity: 0}}
                                animate={viewChild ? {y: 0, opacity: 1} : {}}
                                transition={{
                                    duration: .6,
                                    ease: "easeInOut",
                                    delay: .1 * index
                                }}
                                >
                                    <div className="card-wrapper">
                                        <div className="card">
                                            <span>{point}</span>
                                        </div>
                                        <div className="glow"></div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
