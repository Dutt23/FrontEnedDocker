import { Injectable } from "@angular/core";

//import {HEROES} from './mock-heroes';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import { Response } from "@angular/http";
import { Observer } from "rxjs/Observer";
import { Hero } from "./dummy";
import { of } from "rxjs/observable/of";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    //Way to send user generated key.
    "user-key": "96ced68a4f764a6f8a19e953dae9bd55"
  })
};

@Injectable()
export class HeroService {
  // Url to Web api
  private getAllUrl = 'http://localhost:8080/api/v1/getall';
  private addUrl = 'http://localhost:8080/api/v1/restaurant';
  private deleteUrl = 'http://localhost:8080/api/v1/delete';
  private updateUrl = 'http://localhost:8080/api/v1/update';
  
  
  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.getAllUrl);
  }
  getHero(id: number): Observable<Hero> {
    const url = `${this.getAllUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.addUrl, hero);
  }
  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero): Observable<Hero> {
    const id = hero.id;
    const url = `${this.deleteUrl}/${id}`;
    return this.http.delete<Hero>(url);
  }
  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any> {
    const id = hero.id;
    const url = `${this.updateUrl}/${id}`;
    return this.http.put(url,hero);
  }
  
  searchHeroes(term: string): Observable<Hero[]> {
    // if (!term.trim()) {
    //   // if not search term, return empty hero array.
    //   return of([]);
    // }
    return this.http.get<Hero[]>(`http://localhost:8080/api/v1/getallname/?name=${term}`);
  }
  constructor(private http: HttpClient) {}
}
