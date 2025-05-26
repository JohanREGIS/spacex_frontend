import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightControllerComponent } from './flight-controller.component';

describe('FlightControllerComponent', () => {
  let component: FlightControllerComponent;
  let fixture: ComponentFixture<FlightControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
