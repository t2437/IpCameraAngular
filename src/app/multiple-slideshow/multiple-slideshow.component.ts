import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';
import { Inject, NgZone } from '@angular/core';

declare function update_main_slider(boolean,string) : void;
declare function update_global_slides(array,boolean) : void;

@Component({
  selector: 'app-multiple-slideshow',
  templateUrl: './multiple-slideshow.component.html',
  styleUrls: ['./multiple-slideshow.component.css']
})


export class MultipleSlideshowComponent implements OnInit,OnChanges {

  constructor() {

  }
  subslideshows = ['horiz_slide0','horiz_slide1'];
  current_location;
  update_oneslideshow:boolean = true;

  ngOnInit() {
        
    }

    ngOnChanges(changes: SimpleChanges) {
      var t = this;
      if(typeof changes["activeView"]!='undefined'){
        
          this.slideTo(this.activeView.slideshows[0]);
          
          
    setTimeout(function(){
        try{
          console.log("update global")
         update_main_slider(true,'');

        }catch(e){
          console.log(e);
        }
        },10)
        
            return;
            
      }

      if(typeof changes["slideshow"]!='undefined'){
        console.log("changed slideshow")
        setTimeout(function(){
        try{
         update_global_slides(t.subslideshows,false);

        }catch(e){
          console.log(e);
        }
        },10)
       
      }
     
    // changes.prop contains the old and the new value...
  }

  transform(val) {
    return JSON.stringify(val, null, 2)
      .replace(' ', '&nbsp;')
      .replace('\n', '<br/>');
  }

  slideTo(i){
          this.update_oneslideshow = false;
    this.current_location = i;
    var t = this;
    
  }
@Input() slideshow;
@Input() activeView;


checkLocation(){
  return typeof this.current_location!='undefined';
}
showByLocation(){
  return typeof this.activeView!='undefined'&&this.activeView.byLocation;
}
}
