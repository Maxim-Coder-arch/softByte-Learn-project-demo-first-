'use client';
import Link from "next/link";
import { courses } from "@/app/dataCourses/dataCourse";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import animationConfig from "../../../../configs/animationConfigs/framer.config";

export default function MainCourses() {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .2});
    if (courses.length === 0) {
        return (
            <section id="coursesSection">
                <div className="main-corses-block">
                    <span className="not-courses-len">Курсы уже совсем скоро будут</span>
                </div>
            </section>
        )
    }
    return (
        <section id="coursesSection">
            <div className="main-corses-block" ref={refParent}>
                <div className="courses-router">
                    {courses.map((course, index) => {
                        return (
                            <motion.div 
                                initial={{...animationConfig.verticaleTranslate.initial}}
                                animate={viewChild ? {
                                    ...animationConfig.verticaleTranslate.animate
                                } : {}}
                                transition={{
                                    delay: index * .1,
                                    ease: animationConfig.animationEasing.easeOut,
                                    duration: .5
                                }}
                            className={`card-course index${(index % 3) + 1}`}
                                key={index}>
                                    <div className="course-card-image-container">
                                        <div 
                                        style={{backgroundImage: `url(${course.image})`}}
                                        className="image-card-course"></div>
                                    </div>
                                    <div className="card-course-containet-ln">
                                        <span className="course-title">{course.title}</span>
                                        <span className="subTitle-course">{course.subTitle}</span>
                                        <Link href={`/coursePage/${course.slug}`}className="course-link"
                                        >
                                            Учиться
                                        </Link>
                                    </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}