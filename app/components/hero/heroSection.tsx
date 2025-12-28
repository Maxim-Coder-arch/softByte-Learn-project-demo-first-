'use client'
import Link from "next/link";
import { JSX } from "react";
import { motion } from "framer-motion";
export default function HeroSection(): JSX.Element {
    return (
        <section id="home">
            <div className="hero-section">
                <div className="hero-content">
                    <motion.h1
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 1.6,
                        ease: "easeOut"
                    }}
                    >SoftByte Learn</motion.h1>
                    <motion.h2
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 1.7,
                        ease: "easeOut"
                    }}
                    >Я убежден, что хорошее обучение программированию должно быть доступно всем. Поэтому я создал небольшой проект, где помогаю не просто изучить код, а по-настоящему понять его логику, полюбить процесс и начать создавать свои проекты — совершенно бесплатно. Здесь не будет скучных лекций, только живая практика и моя поддержка на каждом шагу.</motion.h2>
                    <motion.button
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 1.8,
                        ease: "easeOut"
                    }}
                    >
                        <Link href="#coursesSection">Хочу учится</Link>
                    </motion.button>
                </div>
            </div>
        </section>
    )
}