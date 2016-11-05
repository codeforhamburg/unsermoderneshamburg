/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SchumacherComponent } from './schumacher.component';

describe('SchumacherComponent', () => {
  let component: SchumacherComponent;
  let fixture: ComponentFixture<SchumacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchumacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchumacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
