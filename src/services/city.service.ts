import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { City } from 'src/models/city.model';
import { Photo } from 'src/models/photo.model';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }
  path: string = "https://localhost:44398/api";

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.path + "/cities");
  }

  getCityById(cityId: number): Observable<City> {
    return this.httpClient.get<City>(this.path + `/cities/${cityId}`)
  }

  getPhotosByCityId(cityId: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(this.path + "/cities/GetPhotosByCityId/" + cityId);
  }

  insertCity(city: City): boolean {
    if (this.httpClient.post(this.path + "/cities", city).subscribe() !== null) {
      return true;
    }
    return false;
  }

}
