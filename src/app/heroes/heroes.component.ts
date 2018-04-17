import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
//import {HEROES} from '../mock-heroes';
import { HeroService } from "../hero.service";
import { Hero } from "../dummy";
import "rxjs/add/operator/filter";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-hereos",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  message: any ;
  message1: any;
  constructor(private heroService: HeroService,public snackBar: MatSnackBar) {}

  getHeroes() {
    
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string , id: number , image: string , location: string){
    
    name = name.trim();
  
    this.heroService.addHero({ id,name,image,location } as Hero).subscribe(hero => {
      this.heroes.push(hero)
    this.ngOnInit()});
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  // Controls the nestes expansion panel
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  openSnackBar(id1:number) {
    
    if(id1 == 0)
    {
      this.message = "Error in the id";
      this.snackBar.open(this.message, 'dismiss', {
        duration: 2000,
      });
  }
  else
  {
    this.message1 = "Restaurant added";
      this.snackBar.open(this.message1, 'dismiss', {
        duration: 2000,
      });  
    }
  }
  //  Calls the method on initializing
  ngOnInit() {
    this.getHeroes();
  }
}
