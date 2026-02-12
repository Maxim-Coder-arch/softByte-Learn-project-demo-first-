'use client'
import Link from "next/link";
import { JSX } from "react";
import { motion } from "framer-motion";
import AnimatedCubeMesh from "./animatedCubeMesh";
import animationConfig from "../../configs/animationConfigs/framer.config";

export default function HeroSection(): JSX.Element {
    return (
        <section id="home">
            <div className="hero-section">
                <div className="hero-content">
                    <motion.h1
                    {...animationConfig.verticaleTranslate}
                    transition={{
                        delay: 1.5,
                        ease: animationConfig.animationEasing.easeOut
                    }}
                    >
                        SoftByte Learn
                        </motion.h1>
                    <motion.h2
                    {...animationConfig.verticaleTranslate}
                    transition={{
                        delay: 1.6,
                        ease: animationConfig.animationEasing.easeOut
                    }}
                    >Я убежден, что хорошее обучение программированию должно быть доступно всем. Поэтому я создал небольшой проект, где помогаю не просто изучить код, а по-настоящему понять его логику, полюбить процесс и начать создавать свои проекты — совершенно бесплатно</motion.h2>
                    <div className="buttons-hero">
                        <motion.button
                        {...animationConfig.verticaleTranslate}
                        transition={{
                            delay: 1.8,
                            ease: animationConfig.animationEasing.easeOut
                        }}
                        >
                            <Link href="#coursesSection">Хочу учиться</Link>
                        </motion.button>
                        <motion.button
                        {...animationConfig.verticaleTranslate}
                        transition={{
                            delay: 1.9,
                            ease: animationConfig.animationEasing.easeOut
                        }}
                        >
                            <Link href="https://t.me/+vn6d9rXnOMczN2Ni">Вступить в канал</Link>
                        </motion.button>
                    </div>
                </div>
                <AnimatedCubeMesh />
            </div>
        </section>
    )
}