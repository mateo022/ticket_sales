import { TestBed } from '@angular/core/testing';

import { OrdenarAsistentesService } from './ordenar-asistentes.service';

describe('OrdenarAsistentesService', () => {
  let service: OrdenarAsistentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenarAsistentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
