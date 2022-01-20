import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos/Images';
  image1 = 'https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=20&m=1271522601&s=170667a&w=0&h=azZRRchShbrwRgq58omc1HOYABnfDDOzXJatuaZrueQ=';
  image2 = 'https://st3.depositphotos.com/7755898/16521/v/600/depositphotos_165216992-stock-illustration-woman-doing-chores.jpg';
  image3 = 'https://s.hdnux.com/photos/47/46/46/10381742/3/rawImage.jpg';

  constructor() { }

  ngOnInit() {
  }

}