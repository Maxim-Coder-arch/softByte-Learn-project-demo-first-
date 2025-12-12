export interface Paragraph {
  id: string;
  type: 'text' | 'heading' | 'list' | 'quote' | 'note' | 'code';
  content: string;
  level?: number;
  listItems?: string[];
  language?: string;
}
export interface Lesson {
  id: string;
  slug: string;
  title: string;
  description: string;
  paragraphs: Paragraph[];
  duration: string;
  videoId: string;
  order: number;
}
export interface Course {
  id: number;
  slug: string;
  title: string;
  subTitle: string;
  description: string;
  level: string;
  lessons: Lesson[];
}
import { cssCourse } from './cssCourse/csscourse';
import { htmlcourse } from './html/htmlCourse';
import { javascriptCourse } from './javascript/javascriptcourse';
export const courses: Course[] = [
  htmlcourse,
  javascriptCourse,
  cssCourse
];