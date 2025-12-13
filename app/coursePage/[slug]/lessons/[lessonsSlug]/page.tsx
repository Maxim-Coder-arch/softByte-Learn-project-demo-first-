// app/coursePage/[slug]/lessons/[lessonsSlug]/page.tsx
'use client';
import { useParams, useRouter } from 'next/navigation';
import { courses, Paragraph } from '@/app/dataCourses/dataCourse';
import "@/app/scss/corsePageStyle/mainCourse/lessons.css";

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const courseSlug = params.slug as string;
  const lessonsSlug = params.lessonsSlug as string;
  
  const course = courses.find(c => c.slug === courseSlug);
  const lesson = course?.lessons.find(l => l.slug === lessonsSlug);
  const allLessons = course?.lessons.sort((a, b) => a.order - b.order) || [];
  const currentIndex = allLessons.findIndex(l => l.slug === lessonsSlug);
  
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  if (!course || !lesson) {
    return (
      <div className="lsn-not-found">
        <h1 className="lsn-not-found-title">Урок не найден</h1>
        <button 
          onClick={() => router.push(`/coursePage/${courseSlug}`)}
          className="lsn-back-btn"
        >
          ← Вернуться к курсу
        </button>
      </div>
    );
  }

  // Функция для рендеринга отдельного параграфа
  const renderParagraph = (paragraph: Paragraph) => {
    const getCardClass = () => {
      switch (paragraph.type) {
        case 'heading': return 'lsn-card-heading';
        case 'text': return 'lsn-card-text';
        case 'list': return 'lsn-card-list';
        case 'quote': return 'lsn-card-quote';
        case 'note': return 'lsn-card-note';
        case 'code': return 'lsn-card-code';
        default: return 'lsn-card-text';
      }
    };

    const renderContent = () => {
      switch (paragraph.type) {
        case 'heading':
          const HeadingTag = `h${paragraph.level || 2}`
          return (
            <HeadingTag className={`lsn-heading-${paragraph.level}`}>
              {paragraph.content}
            </HeadingTag>
          );
          
        case 'text':
          return <p className="lsn-text">{paragraph.content}</p>;
          
        case 'list':
          return (
            <>
              {paragraph.content && (
                <p className="lsn-list-title">{paragraph.content}</p>
              )}
              <ul className="lsn-list">
                {paragraph.listItems?.map((item, index) => (
                  <li key={index} className="lsn-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          );
          
        case 'quote':
          return (
            <blockquote className="lsn-quote">
              <p>{paragraph.content}</p>
            </blockquote>
          );
          
        case 'note':
          return (
            <div className="lsn-note">
              <strong>Примечание: </strong>
              {paragraph.content}
            </div>
          );
          
        case 'code':
          // Для кода возвращаем готовую структуру без дополнительной обертки
          return (
            <div className="lsn-code-content">
              <div className="lsn-code-header">
                <span className="lsn-code-language">
                  {paragraph.language || 'code'}
                </span>
                <button 
                  className="lsn-copy-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(paragraph.content);
                    // Можно добавить уведомление о копировании
                  }}
                >
                  Копировать
                </button>
              </div>
              <pre className="lsn-code-block">
                <code>{paragraph.content}</code>
              </pre>
            </div>
          );
          
        default:
          return <p className="lsn-text">{paragraph.content}</p>;
      }
    };

    // Определяем, нужно ли показывать иконку для типа контента
    // Для кода не используем общую карточку, так как у него своя структура
    if (paragraph.type === 'code') {
      return (
        <div 
          key={paragraph.id} 
          className="lsn-card lsn-card-code"
        >
          <div className="lsn-card-content">
            {renderContent()}
          </div>
        </div>
      );
    }

    return (
      <div 
        key={paragraph.id} 
        className={`lsn-card ${getCardClass()}`}
        data-type={paragraph.type}
      >
        <div className="lsn-card-content">
          {renderContent()}
        </div>
      </div>
    );
  };

  // Если хотите просто каждый параграф в отдельной карточке (без группировки)
  const renderIndividualCards = () => {
    return lesson.paragraphs.map(paragraph => renderParagraph(paragraph));
  };

  return (
    <div className="ls-fn-container">
      <div className="lsn-container">
        <nav className="lsn-navbar">
          <button 
            onClick={() => router.push(`/coursePage/${courseSlug}`)}
            className="lsn-nav-back"
          >
            ← К списку уроков
          </button>
          <div className="lsn-progress">
            Урок {currentIndex + 1} из {allLessons.length}
          </div>
        </nav>
        
        <div className="lsn-video-wrapper">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${lesson.videoId}`}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="lsn-video"
          />
        </div>
        
        <div className="lsn-material">
          <div className="lsn-header-card">
            <h1 className="lsn-title">
              {lesson.title}
            </h1>
            <p className="lsn-description">
              {lesson.description}
            </p>
          </div>
          
          <div className="lsn-cards-container">
            {renderIndividualCards()}
          </div>
        </div>
        
        <div className="lsn-pagination">
          {prevLesson ? (
            <button
              onClick={() => router.push(`/coursePage/${courseSlug}/lessons/${prevLesson.slug}`)}
              className="lsn-prev-btn"
            >
              ← Предыдущий урок
            </button>
          ) : (
            <div className="lsn-empty"></div>
          )}
          
          {nextLesson ? (
            <button
              onClick={() => router.push(`/coursePage/${courseSlug}/lessons/${nextLesson.slug}`)}
              className="lsn-next-btn"
            >
              Следующий урок →
            </button>
          ) : (
            <button
              onClick={() => router.push(`/coursePage/${courseSlug}`)}
              className="lsn-finish-btn"
            >
              Завершить курс
            </button>
          )}
        </div>
      </div>
    </div>
  );
}