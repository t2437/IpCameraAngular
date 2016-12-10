import { Component, OnInit,Input ,ViewChild} from '@angular/core';



@Component({
  selector: 'app-camera-view',
  templateUrl: './camera-view.component.html',
  styleUrls: ['./camera-view.component.css']
})
export class CameraViewComponent implements OnInit {

  @Input()camera:{
    id:string,
    name:string,
    url:string,
    img:string,
    hq_img:string,
    autoplay:Boolean

  };
  @Input()autoplay:Boolean=false;
  playing:Boolean = false;

  @ViewChild('videoPlayer') video_player; 
  

  constructor() {
    
   }

  ngOnInit() {
  }

  clicked(){
    this.playing=!this.playing;
    if(this.playing){

        this.video_player.nativeElement.play();
    }
      else{
      this.video_player.nativeElement.load();
      }
  }

  open_image(event){
    event.preventDefault();
    event.stopPropagation();
     var w = window.open(this.camera.hq_img, this.camera.name, 'width=1200,height=560,scrollbars=false,top=100,left=250'); 
     w.name =this.camera.name;
  }
    open_window(event){
    event.preventDefault();
    event.stopPropagation();
     var w = window.open(this.camera.url, this.camera.name, 'width=720,height=480,scrollbars=false,top=100,left=250'); 
     w.name =this.camera.name;
  }
}