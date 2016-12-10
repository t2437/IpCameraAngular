import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';
import { Inject, NgZone } from '@angular/core';

declare function update_main_slider() : void;
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

  ngOnInit() {
        
    }

    ngOnChanges(changes: SimpleChanges) {
      var t = this;
      
      if(typeof changes["slideshow"]!='undefined'){
        
        setTimeout(function(){
        try{
         update_global_slides(t.subslideshows,t.slideshow.length==1);

        }catch(e){
          console.log(e);
        }
        },500)
       
      }
    // changes.prop contains the old and the new value...
  }

  transform(val) {
    return JSON.stringify(val, null, 2)
      .replace(' ', '&nbsp;')
      .replace('\n', '<br/>');
  }

@Input() slideshow;


}
