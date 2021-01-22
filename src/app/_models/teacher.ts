import { Course } from "./course";

export interface Teacher {
    id: number;
    name: string;
    title: string;
    description: string;
    image_path: string;
    courses: Course[];
}
