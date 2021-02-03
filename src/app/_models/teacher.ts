import { Course } from "./course";
import { CourseTeacher } from "./courseTeacher";

export interface Teacher {
    id: number;
    name: string;
    title: string;
    description: string;
    image_path: string;
    courseTeachers: CourseTeacher[];
}
