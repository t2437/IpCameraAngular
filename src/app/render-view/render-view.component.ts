import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-render-view',
  templateUrl: './render-view.component.html',
  styleUrls: ['./render-view.component.css']
})
export class RenderViewComponent implements OnInit {

  @Input()
  activeView;

  constructor() { }

  ngOnInit() {
  }

  isSlideshow(){
    return  typeof this.activeView!='undefined'&&this.activeView.view_type=="slideshow";
  }
  isGrid(){
    return  typeof this.activeView!='undefined'&&this.activeView.view_type.indexOf("grid")==0;
  }
  isMultipleSlideshow(){
    return  typeof this.activeView!='undefined'&&(this.activeView.view_type=="multiple-slideshow"||this.activeView.view_type=="full_screen-slideshow");
  }

}
