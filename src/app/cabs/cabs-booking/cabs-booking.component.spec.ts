import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabsBookingComponent } from './cabs-booking.component';

describe('CabsBookingComponent', () => {
  let component: CabsBookingComponent;
  let fixture: ComponentFixture<CabsBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabsBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
