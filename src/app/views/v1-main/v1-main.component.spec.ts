import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1MainComponent } from './v1-main.component';

describe('V1MainComponent', () => {
  let component: V1MainComponent;
  let fixture: ComponentFixture<V1MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V1MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
