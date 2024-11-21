import { TestBed } from '@angular/core/testing';

import { EmployeeFoodOrdersService } from './employee-food-orders.service';

describe('EmployeeFoodOrdersService', () => {
  let service: EmployeeFoodOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFoodOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
