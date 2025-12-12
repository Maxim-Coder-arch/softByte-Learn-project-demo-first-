// app/hooks/useCourseProgress.ts
'use client';

import { useEffect, useState } from 'react';

interface CourseProgress {
  [courseSlug: string]: {
    [lessonSlug: string]: {
      completed: boolean;
      watchedAt?: Date;
      progress?: number; // от 0 до 100 для длинных уроков
    };
  };
}

export function useCourseProgress() {
  const [progress, setProgress] = useState<CourseProgress>({});
  
  // Загружаем прогресс из localStorage при инициализации
  useEffect(() => {
    const savedProgress = localStorage.getItem('courseProgress');
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (error) {
        console.error('Ошибка загрузки прогресса:', error);
      }
    }
  }, []);
  
  // Сохраняем прогресс в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(progress));
  }, [progress]);
  
  // Отметить урок как пройденный
  const markLessonAsCompleted = (courseSlug: string, lessonSlug: string) => {
    setProgress(prev => ({
      ...prev,
      [courseSlug]: {
        ...prev[courseSlug],
        [lessonSlug]: {
          completed: true,
          watchedAt: new Date(),
          progress: 100
        }
      }
    }));
  };
  
  // Обновить прогресс урока (для частичного просмотра)
  const updateLessonProgress = (courseSlug: string, lessonSlug: string, progressPercentage: number) => {
    setProgress(prev => ({
      ...prev,
      [courseSlug]: {
        ...prev[courseSlug],
        [lessonSlug]: {
          completed: progressPercentage >= 100,
          watchedAt: progressPercentage >= 100 ? new Date() : undefined,
          progress: progressPercentage
        }
      }
    }));
  };
  
  // Получить прогресс по курсу
  const getCourseProgress = (courseSlug: string, totalLessons: number) => {
    const courseData = progress[courseSlug];
    if (!courseData) return 0;
    
    const completedLessons = Object.values(courseData).filter(lesson => lesson.completed).length;
    return Math.round((completedLessons / totalLessons) * 100);
  };
  
  // Получить прогресс по уроку
  const getLessonProgress = (courseSlug: string, lessonSlug: string) => {
    return progress[courseSlug]?.[lessonSlug]?.progress || 0;
  };
  
  // Проверить, пройден ли урок
  const isLessonCompleted = (courseSlug: string, lessonSlug: string) => {
    return progress[courseSlug]?.[lessonSlug]?.completed || false;
  };
  
  // Сбросить прогресс курса
  const resetCourseProgress = (courseSlug: string) => {
    setProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[courseSlug];
      return newProgress;
    });
  };
  
  return {
    progress,
    markLessonAsCompleted,
    updateLessonProgress,
    getCourseProgress,
    getLessonProgress,
    isLessonCompleted,
    resetCourseProgress
  };
}