'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { courses } from '@/app/dataCourses/dataCourse';
import "@/app/scss/corsePageStyle/mainCourse/mainCourse.css";
import "../../scss/main/main.css";
import Loader from '@/app/components/defaultComponents/loader';
export default function Page() {
  const params = useParams();
  const slug = params?.slug as string;
  const course = courses.find(c => c.slug === slug);
  if (!course) {
    return (
      <div className="course-not-found">
        <h1>Курс не найден</h1>
        <Link href="/">← На главную</Link>
      </div>
    );
  }
  return (
    <>
    <Loader />
      <Link href="../" className='to-home'>На главную</Link>
      <div className="course-block">
        <div className="course-page">
          <div className="course-header">
            <h1 className="course-title">{course.title}</h1>
            <p className="course-subtitle">{course.subTitle}</p>
            <p className="course-description">{course.description}</p>
            <div className="course-meta">
              <div className="meta-item">
                <div className="meta-label">Уровень</div>
                <div className="meta-value">{course.level}</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Уроков</div>
                <div className="meta-value">{course.lessons.length}</div>
              </div>
            </div>
          </div>
          <div className="lessons-section">
            <h2 className="lessons-title">
              Уроки курса ({course.lessons.length})
            </h2>
            <div className="lessons-list">
              {course.lessons
                .sort((a, b) => a.order - b.order)
                .map((lesson, index) => (
                  <Link
                    key={lesson.id}
                    href={`/coursePage/${course.slug}/lessons/${lesson.slug}`}
                    className="lesson-card"
                  >
                    <div className="lesson-number">
                      {index + 1}
                    </div>
                    <div className="lesson-content">
                      <h3 className="lesson-title">{lesson.title}</h3>
                      <p className="lesson-description">{lesson.description}</p>
                      <div className="lesson-meta">
                        <span>{lesson.duration}</span>
                        <span>Видео урок</span>
                      </div>
                    </div>
                    <div className="lesson-arrow">
                      →
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          {course.lessons.length > 0 && (
            <div className="start-learning">
              <Link
                href={`/coursePage/${course.slug}/lessons/${course.lessons[0].slug}`}
                className="start-button"
              >
                Начать обучение с первого урока
              </Link>
              <p className="start-hint">
                Рекомендуем проходить уроки последовательно
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}