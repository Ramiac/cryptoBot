import { TestBed } from '@angular/core/testing';

import { HttpRequestLogger.InterceptorService } from './http-request-logger.interceptor.service';

describe('HttpRequestLogger.InterceptorService', () => {
  let service: HttpRequestLogger.InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestLogger.InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
