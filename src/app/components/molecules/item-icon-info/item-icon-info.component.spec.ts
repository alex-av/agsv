import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIconInfoComponent } from './item-icon-info.component';

describe('ItemIconInfoComponent', () => {
  let component: ItemIconInfoComponent;
  let fixture: ComponentFixture<ItemIconInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIconInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIconInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
