'use client';
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
import data from "./sectionWorkData/data.sectionWork";
import animationConfig from "../../../configs/animationConfigs/framer.config";

export default function SectionWork(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .5});
    return (
        <section id="formatlearn">
            <div className="section-work" ref={refParent}>
                <div className="section-work-cards">
                    {data.map((obj, index) => {
                        return (
                            <motion.div 
                            key={index}
                            initial={{...animationConfig.verticaleTranslate.initial}}
                            animate={viewChild ? animationConfig.verticaleTranslate.animate : {}}
                            className="main-card"
                            transition={{
                                duration: .5,
                                ease: animationConfig.animationEasing.easeOut,
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