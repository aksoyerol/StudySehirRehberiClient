import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/services/city.service';
import { City } from '../../../models/city.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertifyService } from 'src/services/alertify.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
  providers: [CityService]
})
export class CityAddComponent implements OnInit {
  city: City;
  constructor(private cityService: CityService, private formBuilder: FormBuilder, private alertifyService: AlertifyService,
    private router: Router) { }
  cityAddForm: FormGroup;

  ngOnInit() {
    this.createCityForm();
  }

  createCityForm() {
    this.cityAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  insert() {
    if (this.cityAddForm.valid) {
      this.city = Object.assign({}, this.cityAddForm.value);
      //TODO : JWT
      this.city.userId = 1;
      if (this.cityService.insertCity(this.city)) {
        this.alertifyService.success("The city has been successfully added.");
        setTimeout(() => {
          this.router.navigateByUrl("city");
        }, 1500);
      } else {
        this.alertifyService.error("Error !");
      }
    }
  }



}
