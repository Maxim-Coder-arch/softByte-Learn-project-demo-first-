"use client";
import { JSX, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader(): JSX.Element | null {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [textDelay, setTextdelay] = useState<boolean>(false);
    useEffect(() => {
        const textTimeOut = setTimeout(() => {
            setTextdelay(true);
        }, 1000);
        
        const timeOut = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => {
            clearTimeout(textTimeOut);
            clearTimeout(timeOut);
        };
    }, []);
    
    return isLoading ? (
        <div className="loader">
            <div className="typing-container">
                <motion.div 
                    className="line-loader top-line"
                    initial={{ opacity: 0, width: 0, y: 0 }}
                    animate={{ opacity: 1, width: "100%", y: "-20px" }}
                    transition={{
                        duration: 1,
                        opacity: { duration: 0.5 },
                        width: { duration: 1, ease: "easeInOut" },
                        y: { delay: 1, duration: 0.5 }
                    }}
                />
                
                <motion.span
                    className="loader-text"
                    initial={{ fontSize: "0px", opacity: 0 }}
                    animate={textDelay ? { fontSize: "30px", opacity: 1 } : {}}
                    transition={{
                        duration: 0.5
                    }}
                >
                    SoftByte Learn
                </motion.span>
                
                <motion.div 
                    className="line-loader bottom-line"
                    initial={{ opacity: 0, width: 0, y: 0 }}
                    animate={{ opacity: 1, width: "100%", y: "20px" }}
                    transition={{
                        duration: 1,
                        opacity: { duration: 0.5 },
                        width: { duration: 1, ease: "easeInOut" },
                        y: { delay: 1, duration: 0.5 }
                    }}
                />
            </div>
        </div>
    ) : null;
}