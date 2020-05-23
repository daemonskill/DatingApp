import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Member-Detail',
  templateUrl: './Member-Detail.component.html',
  styleUrls: ['./Member-Detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

  constructor(private userservice: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];

    this.galleryImages = this.getImages();
  }
  getImages(){
    const imageUrls = [];
    for (const photo of this.user.photos){
      imageUrls.push({
          small: photo.url,
          medium: photo.url,
          big: photo.url,
          description: photo.description
      });
    }
    return imageUrls;
  }
    // loadUser(){
    // tslint:disable-next-line: no-string-literal
    // this.userservice.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
    // this.user = user;
    // }, error => {
    //  this.alertify.error(error);
    // });
    // }

}
