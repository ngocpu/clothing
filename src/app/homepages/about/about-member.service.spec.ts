import { TestBed } from '@angular/core/testing';

import { AboutMemberService } from './about-member.service';

describe('AboutMemberService', () => {
  let service: AboutMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
