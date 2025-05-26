import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsModuleComponent } from './gps-module.component';

describe('GpsModuleComponent', () => {
  let component: GpsModuleComponent;
  let fixture: ComponentFixture<GpsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GpsModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
