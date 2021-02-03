import { Category } from './category';
import { CategoryCourse } from './categoryCourse';
import { CourseMedia } from './courseMedia';
import { CourseTeacher } from './courseTeacher';
import { Session } from './session';
import { TeacherToList } from './teacherToList';
import { Video } from './video';

export interface Course {
    id: number;
    title: string;
    cost: number;
    realCost: number;
    url: string;
    off: number;
    rate: number;
    isActive: boolean;
    titres: string;
    started: Date;
    courseDays: string;
    hours: number;
    suggest: boolean;
    sessions: Session[];
    description: string;
    media: CourseMedia;
    videos: Video[];
    courseTeachers: CourseTeacher[];
    categoryCourses: CategoryCourse[];
}
