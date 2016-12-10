import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  @Input() activeCameras;
  activeCameraSlideshow;
  constructor() { 

  }


  ngOnInit() {
   // this.updateSlideshow();
  // setTimeout(this.updateSlideshow,500)


    if(this.activeCameras)
      this.slideTo(this.activeCameras[0]);
  }


  slideTo(camera){
    console.log("slide to ",camera);
    this.activeCameraSlideshow = camera;
  }
}
