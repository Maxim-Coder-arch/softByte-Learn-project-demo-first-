'use client';
import Link from "next/link";
import { JSX, useState } from "react";
const data: string[] = ["Главная", "О проекте", "Курсы", "Контакты"];
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
                        <Link href="#">
                            {listItem}
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
                    <div key={index} className="list-point">
                        <Link href="#">{point}</Link>
                    </div>)}
                </div>
                )
            }
            </nav>
        </>
    )
}