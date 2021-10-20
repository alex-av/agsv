import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V9ShareListComponent } from './v9-share-list.component';

describe('V9ShareListComponent', () => {
  let component: V9ShareListComponent;
  let fixture: ComponentFixture<V9ShareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V9ShareListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V9ShareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
