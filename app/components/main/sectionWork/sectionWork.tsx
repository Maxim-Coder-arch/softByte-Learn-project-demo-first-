'use client';
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
const data = [
    {
        title: "Много практики",
        description: "Обучение строится на реальных задачах, с которыми сталкиваются разработчики. Теория — только то, что нужно для старта",
    },
    {
        title: "Ваш наставник",
        description: "Я сам веду курсы и отвечаю на вопросы. Вы получаете знания напрямую, без посредников"
    },
    {
        title: "Актуальные технологии",
        description: "Программа включает только то, что действительно нужно для старта в профессии: от основ до востребованных фреймворков"
    }
]
export default function SectionWork(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .2});
    return (
        <div className="section-work" ref={refParent}>
            <div className="section-work-cards">
                {data.map((obj, index) => {
                    return (
                        <motion.div key={index}
                        initial={{opacity: 0, y: 200}}
                        animate={viewChild ? {opacity: 1, y: 0} : {}}
                        transition={{
                            duration: .5,
                            ease: "easeInOut",
                            delay: .1 * index
                        }}
                        >
                            <svg className="svg-container">
                                <defs>
                                    <filter 
                                        id="turbulent-displace" 
                                        colorInterpolationFilters="sRGB" 
                                        x="-20%" 
                                        y="-20%" 
                                        width="140%" 
                                        height="140%"
                                    >
                                        <feTurbulence 
                                            type="turbulence" 
                                            baseFrequency="0.02" 
                                            numOctaves="10" 
                                            result="noise1" 
                                            seed="1" 
                                        />
                                        <feOffset 
                                            in="noise1" 
                                            dx="0" 
                                            dy="0" 
                                            result="offsetNoise1"
                                        >
                                            <animate 
                                                attributeName="dy" 
                                                values="700; 0" 
                                                dur="6s" 
                                                repeatCount="indefinite" 
                                                calcMode="linear" 
                                            />
                                        </feOffset>
                                        <feTurbulence 
                                            type="turbulence" 
                                            baseFrequency="0.02" 
                                            numOctaves="10" 
                                            result="noise2" 
                                            seed="1" 
                                        />
                                        <feOffset 
                                            in="noise2" 
                                            dx="0" 
                                            dy="0" 
                                            result="offsetNoise2"
                                        >
                                            <animate 
                                                attributeName="dy" 
                                                values="0; -700" 
                                                dur="6s" 
                                                repeatCount="indefinite" 
                                                calcMode="linear" 
                                            />
                                        </feOffset>
                                        <feTurbulence 
                                            type="turbulence" 
                                            baseFrequency="0.02" 
                                            numOctaves="10" 
                                            result="noise1" 
                                            seed="2" 
                                        />
                                        <feOffset 
                                            in="noise1" 
                                            dx="0" 
                                            dy="0" 
                                            result="offsetNoise3"
                                        >
                                            <animate 
                                                attributeName="dx" 
                                                values="490; 0" 
                                                dur="6s" 
                                                repeatCount="indefinite" 
                                                calcMode="linear" 
                                            />
                                        </feOffset>
                                        <feTurbulence 
                                            type="turbulence" 
                                            baseFrequency="0.02" 
                                            numOctaves="10" 
                                            result="noise2" 
                                            seed="2" 
                                        />
                                        <feOffset 
                                            in="noise2" 
                                            dx="0" 
                                            dy="0" 
                                            result="offsetNoise4"
                                        >
                                            <animate 
                                                attributeName="dx" 
                                                values="0; -490" 
                                                dur="6s" 
                                                repeatCount="indefinite" 
                                                calcMode="linear" 
                                            />
                                        </feOffset>
                                        <feComposite 
                                            in="offsetNoise1" 
                                            in2="offsetNoise2" 
                                            result="part1" 
                                        />
                                        <feComposite 
                                            in="offsetNoise3" 
                                            in2="offsetNoise4" 
                                            result="part2" 
                                        />
                                        <feBlend 
                                            in="part1" 
                                            in2="part2" 
                                            mode="color-dodge" 
                                            result="combinedNoise" 
                                        />
                                        <feDisplacementMap 
                                            in="SourceGraphic" 
                                            in2="combinedNoise" 
                                            scale="30" 
                                            xChannelSelector="R" 
                                            yChannelSelector="B" 
                                        />
                                    </filter>
                                </defs>
                            </svg>
                            <div className="card-container">
                                <div className="inner-container">
                                    <div className="border-outer">
                                        <div className="main-card"></div>
                                    </div>
                                    <div className="glow-layer-1"></div>
                                    <div className="glow-layer-2"></div>
                                </div>
                                <div className="background-glow"></div>
                                <div className="content-container">
                                    <div className="content-top">
                                        <p className="title">{obj.title}</p>
                                    </div>
                                    <hr className="divider" />
                                    <div className="content-bottom">
                                        <p className="description">
                                            {obj.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}