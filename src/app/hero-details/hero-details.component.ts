import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { catchError, map, tap } from "rxjs/operators";
import { HeroService } from "../hero.service";
import { Hero } from "../dummy";
@Component({
  selector: "app-hero-details",
  templateUrl: "./hero-details.component.html",
  styleUrls: ["./hero-details.component.css"]
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
  save() {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
