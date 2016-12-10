import { Component, OnInit, Input,Output,EventEmitter,OnChanges,SimpleChange } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit,OnChanges {


  @Output() viewUpdated = new EventEmitter();
  @Input()
  current_view:number = 1;

  @Input()
  configuration;


  fullscreen:Boolean = false;

  constructor() {

   }

  ngOnInit() {
    
    // this.viewUpdated.emit(this.current_view);
  }

  changeView = function (view){    
    this.current_view = view;
     this.viewUpdated.emit(this.current_view);

  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      if(propName=="configuration"){
        if(this.configuration)
          this.changeView(this.configuration[1]);
      }
    }
  }

}
