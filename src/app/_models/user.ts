import { identifierModuleUrl } from '@angular/compiler'
import { UserPhoto } from './userPhoto';

export interface User {
    id: number;
    lastName: string;
    username: string;
    email: string;
    token: string;
    userPhoto: UserPhoto;
    phoneNumber: string;
}
