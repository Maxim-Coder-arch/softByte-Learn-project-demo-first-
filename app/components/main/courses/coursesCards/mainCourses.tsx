// components/MainCourses.js
import Link from "next/link";
import { courses } from "@/app/dataCourses/dataCourse";

export default function MainCourses() {
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
                <div className="courses-router">
                    {courses.map((course, index) => {
                        return (
                            <div 
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
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}