/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RenderViewComponent } from './render-view.component';

describe('RenderViewComponent', () => {
  let component: RenderViewComponent;
  let fixture: ComponentFixture<RenderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
