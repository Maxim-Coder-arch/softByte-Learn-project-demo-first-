import Link from "next/link";
import { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
        <>
            <h2 className="footer-title">SoftByte — Обучение с душой, подготовка к реальности. Бесплатно.</h2>
            <div className="footer">
                <div className="logotype-footer">
                    <div className="logotype-image"></div>
                    <span>SoftByte Learn</span>
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
        </>
    )
}