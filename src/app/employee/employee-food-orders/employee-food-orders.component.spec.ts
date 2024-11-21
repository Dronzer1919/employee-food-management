import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFoodOrdersComponent } from './employee-food-orders.component';

describe('EmployeeFoodOrdersComponent', () => {
  let component: EmployeeFoodOrdersComponent;
  let fixture: ComponentFixture<EmployeeFoodOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFoodOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFoodOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
