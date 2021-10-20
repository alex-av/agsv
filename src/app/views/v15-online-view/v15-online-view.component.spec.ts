import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V15OnlineViewComponent } from './v15-online-view.component';

describe('V15OnlineViewComponent', () => {
  let component: V15OnlineViewComponent;
  let fixture: ComponentFixture<V15OnlineViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V15OnlineViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V15OnlineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
