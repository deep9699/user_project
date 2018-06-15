import { TestBed, inject } from '@angular/core/testing';

import { UsermodService } from './usermod.service';

describe('UsermodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsermodService]
    });
  });

  it('should be created', inject([UsermodService], (service: UsermodService) => {
    expect(service).toBeTruthy();
  }));
});
