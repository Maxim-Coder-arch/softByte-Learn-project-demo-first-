'use client';
import Link from "next/link";
import { JSX, useState } from "react";
import { motion } from "framer-motion";
const data = [
    {
        item: "Главная",
        id: "home"
    },
    {
        item: "О проекте",
        id: "project"
    },
    {
        item: "Формат обучения",
        id: "formatlearn"
    },
    {
        item: "Курсы",
        id: "coursesSection",
    },
    {
        item: "Контакты",
        id: "footer"
    }
];
export default function Menu(): JSX.Element {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    return (
        <>
            <nav className="menu">
                <ul>
                    <div className="logotype">
                        <div className="logotype-image"></div>
                        <h3>SoftByte Learn</h3>
                    </div>
                    {data.map((listItem, index) => <li key={index}>
                        <Link href={"#" + listItem.id}>
                            {listItem.item}
                        </Link>
                        </li>)}
                </ul>
            </nav>
            <nav className="mobile">
                <div className="logotype">
                    <div className="logotype-image"></div>
                    <h3>SoftByte Learn</h3>
                </div>
                <div className="button-mobile-menu" onClick={()=>setOpenMenu(prev=>!prev)}>
                    {
                        Array.from({length: 3}).map((_, index) => 
                        <div 
                        className={
                            openMenu && index % 2 === 0 ? 
                            `line ac-m${index}` : 
                            index % 2 !== 0 && openMenu ? "line md-l" :
                            "line"
                        }
                        key={index}></div>)
                    }
                </div>
            {
            openMenu && (
                <div className="points-mobile">
                    {data.map((point, index) => 
                    <motion.div key={index} className="list-point"
                    initial={{
                        y: 50,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: index * .07,
                        ease: "easeOut"
                    }}
                    >
                        <Link 
                        onClick={()=>setOpenMenu(prev=>!prev)}
                        href={"#" + point.id}>{point.item}</Link>
                    </motion.div>)}
                </div>
                )
            }
            </nav>
        </>
    )
}