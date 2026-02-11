'use client';
import Link from "next/link";
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function Footer(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .2});
    return (
        <section id="footer" ref={refParent}>
            <motion.h2 
            className="footer-title"
            initial={{
                y: "20px",
                opacity: 0
            }}
            animate={viewChild ? {
                y: 0,
                opacity: 1
            } : {}}
            >SoftByte Learn — Обучение с душой, подготовка к реальности. Бесплатно.</motion.h2>
            <div className="footer">
                <div className="logotype-footer">
                    <div className="logotype-image"></div>
                    <span>SoftByte</span>
                </div>
                <div className="links">
                    <div className="tg-b bl">
                        <Link href="https://t.me/+vn6d9rXnOMczN2Ni" target="_blank">
                            <div className="tg ic-link"></div>
                        </Link>
                        <span>- telegram</span>
                    </div>
                    <div className="yt-b bl">
                        <Link href="https://www.youtube.com/@SoftByteStudio" target="_blank">
                            <div className="yt ic-link"></div>
                        </Link>
                        <span>- youtube</span>
                    </div>
                </div>
                <div className="cop">
                    <p>&copy; softByte learn образование, 2025</p>
                </div>
            </div>
        </section>
    )
}