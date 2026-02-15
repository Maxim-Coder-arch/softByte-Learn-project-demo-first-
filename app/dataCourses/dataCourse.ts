import { Course } from "../types/type";
import { cssCourse } from "./cssCourse/csscourse";
import { htmlcourse } from "./html/htmlCourse";
import { introductionCourse } from "./introduction/introductionCourse";

export const courses: Course[] = [
  cssCourse,
  htmlcourse,
  introductionCourse,
];