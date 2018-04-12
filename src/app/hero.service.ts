import {Injectable} from '@angular/core';
import {Hero} from './hero';
//import {HEROES} from './mock-heroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'user-key': '96ced68a4f764a6f8a19e953dae9bd55' },
                          
                                      
)

};
@Injectable()
export class HeroService {


  // Url to Web api
  private Url = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=16774318';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.Url,httpOptions)
    

  }
  getHero(id: number): Observable<Hero> {
  const url = '${this.Url}/${categories.categories.id}';
  return this.http.get<Hero>(url);  
  
  }
  

  constructor(private http: HttpClient) {}

}
