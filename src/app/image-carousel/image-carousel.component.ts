import {Component} from '@angular/core';
import {Image} from "../model/image";
import {ImageService} from "../service/image.service";

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent {
  value: string = '';
  images!: Image[];

  constructor(private imageService: ImageService) {
  }

  getImages() {
    this.imageService.getImagesByKey(this.value).subscribe(result => {
      this.images = result;
    })
  }
}
