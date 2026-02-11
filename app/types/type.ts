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
  image?: string;
}