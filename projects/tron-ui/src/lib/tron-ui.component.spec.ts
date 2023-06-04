import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TronUiComponent } from './tron-ui.component';

describe('TronUiComponent', () => {
  let component: TronUiComponent;
  let fixture: ComponentFixture<TronUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TronUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TronUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
