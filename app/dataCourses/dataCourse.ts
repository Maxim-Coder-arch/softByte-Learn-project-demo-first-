import { Course } from "../types/type";
import { htmlcourse } from "./html/htmlCourse";
import { introductionCourse } from "./introduction/introductionCourse";
export const courses: Course[] = [
  introductionCourse,
  htmlcourse
];