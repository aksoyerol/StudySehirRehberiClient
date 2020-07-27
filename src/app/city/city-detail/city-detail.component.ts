import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/services/city.service';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/models/city.model';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { Photo } from 'src/models/photo.model';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  providers: [CityService]
})
export class CityDetailComponent implements OnInit {
  city: City;
  photos: Photo[] = [];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private cityService: CityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params["cityId"]);

    });
  }

  getCityById(cityId: number) {
    return this.cityService.getCityById(cityId).subscribe(data => {
      this.city = data;
      this.getPhotosByCityId(cityId);
    });
  }

  getPhotosByCityId(cityId: number) {
    return this.cityService.getPhotosByCityId(cityId).subscribe(data => {
      this.photos = data;
      this.setGallery();
    });
  }

  getImages() {
    const imageUrls = [];
    for (let i = 0; i < this.city.photos.length; i++) {
      imageUrls.push({
        small: this.photos[i].url,
        medium: this.photos[i].url,
        big: this.photos[i].url
      });
    }
    return imageUrls;
  }

  setGallery() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    // this.galleryImages = [
    //   {
    //     small: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    //     medium: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    //     big: 'https://preview.ibb.co/jrsA6R/img12.jpg'
    //   },
    //   {
    //     small: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    //     medium: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    //     big: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
    //   },
    //   {
    //     small: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    //     medium: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    //     big: 'https://preview.ibb.co/mwsA6R/img7.jpg'
    //   },{
    //     small: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    //     medium: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    //     big: 'https://preview.ibb.co/kZGsLm/img8.jpg'
    //   },      
    // ];

    this.galleryImages = this.getImages();
  }

}
