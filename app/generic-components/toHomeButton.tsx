import Link from "next/link";
import { JSX } from "react";
import "../scss/corsePageStyle/mainCourse/mainCourse.css";

export default function ToHomeButton(): JSX.Element {
    return (
        <Link href="../" className='to-home'>
            <div className="to-home-image nav-element"></div>
        </Link>
    )
}