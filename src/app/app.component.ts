import { Component,AfterViewInit,Input } from '@angular/core';
//import { CameraViewComponent } from './camera-view/camera-view.component';


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//import * as jQuery from 'jquery';

//import './js/jquery-3.1.1.min.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements AfterViewInit{

  configuration_file;
  activeView;

  constructor(private http: Http) {}

   logError(err) {
      console.error('There was an error: ' + err);
    }
  

  viewUpdated = function(view){
      this.activeView = view;
  }

  ngAfterViewInit() {

      this.http.get('assets/config.json')
        .map((responseData) => {
            this.configuration_file =  responseData.json();
            this.renderViews();
          })
        .subscribe(
          data=>function(data){
          },
          err => this.logError(err)
        );       
  }

  renderViews(){
    // if(this.configuration_file){
    //   this.configuration_file.forEach(function(elem){

    //   });
    // }
  }

}
