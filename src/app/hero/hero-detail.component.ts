import {Component, Input} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Location} from "@angular/common";

import {Hero} from "./hero";
import {HeroService} from "./hero.service";


@Component({
  // moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent {
  hero: Hero;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {

  }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      let id = +params['id'];
      return this.heroService.getHero(id);
    }).subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

  update(name:string) {
    // this.hero.name=name;
    let hero=new Hero();
    hero.name=name;
    hero.id=this.hero.id;
    this.heroService.update(hero).then(hero => {
      this.hero=hero;
      this.goBack();
    });
  }
}
