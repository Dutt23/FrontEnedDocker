import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
@Injectable()
export class HeroService {


  // Url to Web api
  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);

  }
  getHero(id: number): Observable<Hero> {

    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private http: HttpClient) {}

}
