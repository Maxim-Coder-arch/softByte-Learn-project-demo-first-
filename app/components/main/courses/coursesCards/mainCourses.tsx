'use client';
import Link from "next/link";
import { courses } from "@/app/dataCourses/dataCourse";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function MainCourses() {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .5});
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
            <div className="main-corses-block">
                <div className="courses-router" ref={refParent}>
                    {courses.map((course, index) => {
                        return (
                            <motion.div 
                                initial={{
                                    y: "20px",
                                    opacity: 0
                                }}
                                animate={viewChild ? {
                                    y: 0,
                                    opacity: 1
                                } : {}}
                                transition={{
                                    delay: index * .1,
                                    ease: "easeOut",
                                    duration: .5
                                }}
                            className={`card-course index${(index % 3) + 1}`}
                                key={course.id}>
                                <div className="title-corse-block">
                                    <span className="course-title">{course.title}</span>
                                    <span className="subTitle-course">{course.subTitle}</span>
                                </div>
                                <div className="footer-card-course">
                                    <Link href={`/coursePage/${course.slug}`}className="course-link"
                                    target="blank"
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