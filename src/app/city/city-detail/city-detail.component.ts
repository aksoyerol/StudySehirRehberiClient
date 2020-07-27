import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/services/city.service';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/models/city.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  providers: [CityService]
})
export class CityDetailComponent implements OnInit {
  city: City;
  constructor(private cityService: CityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params["cityId"]);
    })
  }

  getCityById(cityId) {
    return this.cityService.getCityById(cityId).subscribe(data => {
      this.city = data;
    });
  }

}
