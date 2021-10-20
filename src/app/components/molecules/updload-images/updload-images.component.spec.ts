import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdloadImagesComponent } from './updload-images.component';

describe('UpdloadImagesComponent', () => {
  let component: UpdloadImagesComponent;
  let fixture: ComponentFixture<UpdloadImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdloadImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdloadImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
