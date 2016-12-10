import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CameraViewComponent } from './camera-view/camera-view.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { RenderViewComponent } from './render-view/render-view.component';
import { MultipleSlideshowComponent } from './multiple-slideshow/multiple-slideshow.component';
import { NumberTemplateDirective } from './number-template.directive';

@NgModule({
  declarations: [
    AppComponent,
    CameraViewComponent,
    StatusBarComponent,
    SlideshowComponent,
    RenderViewComponent,
    MultipleSlideshowComponent,
    NumberTemplateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
