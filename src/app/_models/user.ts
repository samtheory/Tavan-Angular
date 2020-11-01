import { identifierModuleUrl } from '@angular/compiler'
import { UserPhoto } from './userPhoto';

export interface User {
    id: number;
    lastName: string;
    username: string;
    firstName: string;
    email: string;
    isActive: boolean;
    userPhoto: UserPhoto;
    phoneNumber: string;
}
