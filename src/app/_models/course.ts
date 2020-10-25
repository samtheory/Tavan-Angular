import { CourseMedia } from './courseMedia';
import { Video } from './video';

export interface Course {
    id: number;
    title: string;
    cost: number;
    realCost: number;
    url: string;
    off: number;
    isActive: boolean;
    courseDays: string;
    teacher: string;
    titres: string;
    started: Date;
    ended: Date;
    description: string;
    media: CourseMedia;
    videos: Video[];
}
