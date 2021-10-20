import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V21SearchViewComponent } from './v21-search-view.component';

describe('V21SearchViewComponent', () => {
  let component: V21SearchViewComponent;
  let fixture: ComponentFixture<V21SearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V21SearchViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V21SearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
