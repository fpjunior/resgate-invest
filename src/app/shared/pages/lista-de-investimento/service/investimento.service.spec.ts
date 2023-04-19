/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InvestimentoService } from './investimento.service';

describe('Service: Investimento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestimentoService]
    });
  });

  it('should ...', inject([InvestimentoService], (service: InvestimentoService) => {
    expect(service).toBeTruthy();
  }));
});
