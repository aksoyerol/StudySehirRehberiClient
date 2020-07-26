import { Photo } from "./photo.model";

export class City {
    id: number;
    name: string;
    description: string;
    photoUrl: string;
    Photos: Photo[];
}