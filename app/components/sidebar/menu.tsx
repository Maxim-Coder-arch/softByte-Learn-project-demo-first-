'use client';
import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "./sidebarData/sidebar.data";

export default function Menu(): JSX.Element {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [fullStyleMenu, setFullStyleMenu] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolly = window.scrollY;
            setFullStyleMenu(scrolly > 0);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className="menu">
                <ul id={fullStyleMenu ? "fullStyleMenu" : ""}>
                    <div className="logotype">
                        <h3>
                            <a href="https://soft-byte-pi.vercel.app/" target="_blank">SoftByte</a>
                        </h3>
                    </div>
                    {data.map((listItem, index) => (
                        <li key={index}>
                            <Link href={"#" + listItem.id}>
                                {listItem.item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav className="mobile">
                <div className="logotype">
                    <div className="logotype-image"></div>
                    <a href="https://soft-byte-pi.vercel.app/" target="_blank">SoftByte</a>
                </div>

                <div className="button-mobile-menu" onClick={() => setOpenMenu(prev => !prev)}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            className={
                                openMenu && index % 2 === 0
                                    ? `line ac-m${index}`
                                    : index % 2 !== 0 && openMenu
                                        ? "line md-l"
                                        : "line"
                            }
                            key={index}
                        ></div>
                    ))}
                </div>

                {/* Анимация появления и исчезновения */}
                <AnimatePresence>
                    {openMenu && (
                        <motion.div
                            className="points-mobile"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            {data.map((point, index) => (
                                <motion.div
                                    key={point.id}
                                    className="list-point"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 50, opacity: 0 }}
                                    transition={{
                                        delay: index * 0.07,
                                        ease: "easeOut"
                                    }}
                                >
                                    <Link
                                        onClick={() => setOpenMenu(false)}
                                        href={"#" + point.id}
                                    >
                                        {point.item}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
