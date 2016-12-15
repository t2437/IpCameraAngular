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
        // this.video_player.nativeElement.onload = this.image_updated(this);     
        var t = this;
        this.video_player.nativeElement.addEventListener("load", function() {
           t.image_updated(t)
        });
  }
  
  image_updated(t){
    if(!this.playing) return;
    setTimeout(function(){
         t.video_player.nativeElement.src = t.camera.url;
   },0.15)     

  }



  clicked(){
          var t = this;
    this.playing=!this.playing;
    if(this.playing){   
        this.video_player.nativeElement.src = this.camera.url;
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
     var w = window.open("/assets/camera.html?link="+this.camera.url, this.camera.name, 'width=720,height=480,scrollbars=false,top=100,left=250');
     w.name =this.camera.name;
  }
}
