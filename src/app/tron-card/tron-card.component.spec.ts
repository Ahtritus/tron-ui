import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TronCardComponent } from './tron-card.component';

describe('TronCardComponent', () => {
  let component: TronCardComponent;
  let fixture: ComponentFixture<TronCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TronCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TronCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
