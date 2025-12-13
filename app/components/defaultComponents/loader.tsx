"use client";
import { JSX, useState, useEffect } from "react";
export default function Loader(): JSX.Element | null {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [text, setText] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const fullText = "SoftByte Learn";
    const typingSpeed = 70;
    const cursorBlinkSpeed = 300;
    useEffect(() => {
        if (currentIndex < fullText.length) {
            const typingTimer = setTimeout(() => {
                setText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(typingTimer);
        }
    }, [currentIndex, fullText]);
    useEffect(() => {
        if (text === fullText) {
            const hideTimer = setTimeout(() => {
                setIsLoading(false);
            }, 400);
            return () => clearTimeout(hideTimer);
        }
    }, [text, fullText]);
    const [cursorVisible, setCursorVisible] = useState<boolean>(true);
    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, cursorBlinkSpeed);
        return () => clearInterval(cursorTimer);
    }, []);
    if (!isLoading) {
        return null;
    }
    return (
        <div className="loader">
            <div className="typing-container">
                <span className="typing-text">{text}</span>
                {cursorVisible && <span className="typing-cursor">|</span>}
            </div>
        </div>
    );
}