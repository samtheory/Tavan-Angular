import { Category } from './category';
import { CourseMedia } from './courseMedia';
import { TeacherToList } from './teacherToList';
import { Video } from './video';

export interface Course {
    id: number;
    title: string;
    cost: number;
    realCost: number;
    url: string;
    off: number;
    isActive: boolean;
    titres: string;
    started: Date;
    sessions: Date[];
    description: string;
    media: CourseMedia;
    videos: Video[];
    teachers: TeacherToList[];
    categories: Category[];
}
