import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBasicComponent } from './link-basic.component';

describe('LinkBasicComponent', () => {
  let component: LinkBasicComponent;
  let fixture: ComponentFixture<LinkBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
