import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostFormComponent } from './single-post-form.component';

describe('SinglePostFormComponent', () => {
  let component: SinglePostFormComponent;
  let fixture: ComponentFixture<SinglePostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePostFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
