'use client';
import { JSX, useRef } from "react";
import TitleForWhom from "./titleForWhom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { benefitsData } from "./forwhom.data";
import Link from "next/link";
import animationConfig from "../../../configs/animationConfigs/framer.config";

export default function ForWhom(): JSX.Element {
    const refParent = useRef(null);
    const isInView = useInView(refParent, { once: true, amount: 0.3 });
    const floatingEffectAnimationReference = useRef(null);

    const { scrollYProgress } = useScroll({
        target: floatingEffectAnimationReference,
        offset: ["start end", "end start"]
    });
    const xOffset = useTransform(
        scrollYProgress, 
        [0, 1], 
        [300, -1000]
    );

    const yOffset = useTransform(
        scrollYProgress, 
        [0, 1], 
        [300, -500]
    );

    const rotateOffset = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 360]
    );

    return (
        <>
            <TitleForWhom />
            <div className="for-whom" ref={floatingEffectAnimationReference}>
                <motion.div 
                style={{ 
                    x: xOffset,
                    y: yOffset,
                    rotate: rotateOffset
                }}
                className="floating-stone-effect floating-effect" />
                <div 
                    className="border-for-whom" 
                    ref={refParent}
                >
                    {
                        benefitsData.map((item, index) => {
                            return (
                                <motion.div 
                                    className="card-for-whom" 
                                    key={item.id}
                                    initial={{...animationConfig.verticaleTranslate.initial}}
                                    animate={isInView ? animationConfig.verticaleTranslate.animate : {}}
                                    transition={{ duration: 0.5, ease: animationConfig.animationEasing.easeOut, delay: 0.1 * index }}
                                >
                                    <div 
                                        className="benefit-outer"
                                    >
                                        <div 
                                            style={{backgroundImage: `url(${item.image})`}}
                                            className="benefit-image"
                                        />
                                        <div 
                                            className="benefit-content"
                                        >
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    <button>
                                        <Link href={item.url}>{item.label}</Link>
                                    </button>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
