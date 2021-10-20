import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V19PublicPostComponent } from './v19-public-post.component';

describe('V19PublicPostComponent', () => {
  let component: V19PublicPostComponent;
  let fixture: ComponentFixture<V19PublicPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V19PublicPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V19PublicPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
