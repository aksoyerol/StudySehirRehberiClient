import { Photo } from "./photo.model";
export class City {
    id: number;
    userId: number;
    name: string;
    description: string;
    photoUrl: string;
    photos: Photo[];
}