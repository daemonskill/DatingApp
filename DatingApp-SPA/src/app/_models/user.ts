import { Photo } from './Photo';

export interface User {
    id: number;
    username: string;
    gender: string;
    age: number;
    knowAs: string;
    create: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    introduction?: string;
    lookingFor?: string;
    interests?: string;
    photos?: Photo[];
}
