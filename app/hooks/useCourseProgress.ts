'use client';

import { useEffect, useState } from 'react';

interface CourseProgress {
  [courseSlug: string]: {
    [lessonSlug: string]: {
      completed: boolean;
      watchedAt?: Date;
      progress?: number;
    };
  };
}

export function useCourseProgress() {
  const [progress, setProgress] = useState<CourseProgress>({});
  
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
  
  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(progress));
  }, [progress]);
  
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
  
  const getCourseProgress = (courseSlug: string, totalLessons: number) => {
    const courseData = progress[courseSlug];
    if (!courseData) return 0;
    
    const completedLessons = Object.values(courseData).filter(lesson => lesson.completed).length;
    return Math.round((completedLessons / totalLessons) * 100);
  };
  
  const getLessonProgress = (courseSlug: string, lessonSlug: string) => {
    return progress[courseSlug]?.[lessonSlug]?.progress || 0;
  };
  
  const isLessonCompleted = (courseSlug: string, lessonSlug: string) => {
    return progress[courseSlug]?.[lessonSlug]?.completed || false;
  };
  
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