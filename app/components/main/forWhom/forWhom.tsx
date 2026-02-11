'use client';
import { JSX, useRef } from "react";
import TitleForWhom from "./titleForWhom";
import { motion, useInView } from "framer-motion";
import { benefitsData } from "./forwhom.data";
import Link from "next/link";

export default function ForWhom(): JSX.Element {
    const refParent = useRef(null);
    const isInView = useInView(refParent, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { 
            y: 40, 
            opacity: 0,
            scale: 0.95
        },
        visible: { 
            y: 0, 
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    const imageVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    return (
        <>
            <TitleForWhom />
            <div className="for-whom">
                <motion.div 
                    className="border-for-whom" 
                    ref={refParent}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {
                        benefitsData.map((item) => {
                            return (
                                <motion.div 
                                    className="card-for-whom" 
                                    key={item.id}
                                    variants={cardVariants}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div 
                                        className="benefit-outer"
                                        initial="rest"
                                    >
                                        <motion.div 
                                            style={{backgroundImage: `url(${item.image})`}}
                                            className="benefit-image"
                                            variants={imageVariants}
                                        />
                                        <motion.div 
                                            className="benefit-content"
                                        >
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </motion.div>
                                    </motion.div>
                                    <motion.button
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link href={item.url}>{item.label}</Link>
                                    </motion.button>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </>
    )
}
