import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMultiImageComponent } from './post-multi-image.component';

describe('PostMultiImageComponent', () => {
  let component: PostMultiImageComponent;
  let fixture: ComponentFixture<PostMultiImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMultiImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMultiImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
