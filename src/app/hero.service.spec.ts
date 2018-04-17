import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';

import { HttpClient, HttpHandler } from "@angular/common/http";

describe('HeroService', () => {
  let heroService: HeroService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });

  });
  it('should use ValueService', () => {
    heroService = TestBed.get(HeroService);
    expect(heroService.getHeroes()).toBe(heroService.getHeroes());
  });
  

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
