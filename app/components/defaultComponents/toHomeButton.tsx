import Link from "next/link";
import { JSX } from "react";

export default function ToHomeButton(): JSX.Element {
    return <Link href="../" className='to-home'>На главную</Link>
}