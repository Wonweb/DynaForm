import { TestBed, inject } from '@angular/core/testing';

import { DesignerFirebaseDBService } from './designer-firebase-db.service';

describe('DesignerFirebaseDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesignerFirebaseDBService]
    });
  });

  it('should be created', inject([DesignerFirebaseDBService], (service: DesignerFirebaseDBService) => {
    expect(service).toBeTruthy();
  }));
});
