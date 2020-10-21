import { CourseMedia } from './courseMedia';
import { Video } from './video';

export interface Course {
    id: number;
    title: string;
    cost: string;
    url: string;
    off: number;
    courseDays: string;
    teacher: string;
    titres: string;
    started: Date;
    ended: Date;
    description: string;
    media: CourseMedia;
    videos: Video[];
}
