import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V13RankingViewComponent } from './v13-ranking-view.component';

describe('V13RankingViewComponent', () => {
  let component: V13RankingViewComponent;
  let fixture: ComponentFixture<V13RankingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V13RankingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V13RankingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
