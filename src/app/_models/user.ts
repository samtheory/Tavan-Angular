import { identifierModuleUrl } from '@angular/compiler'
import { UserPhoto } from './userPhoto';

export interface User {
    userName: string;
    email: string;
    token: string;
    userPhoto: UserPhoto;
    phoneNumber: string;
}
