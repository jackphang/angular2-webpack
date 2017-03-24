/**
 * Created by Administrator on 2017/3/19.
 */

import {Component} from "@angular/core";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
@Component({
  // moduleId:module.id,
  selector:'my-dashborad',
  templateUrl:'dashborad.component.html',
  styleUrls:['dashborad.component.css']
})
export class DashboradComponent{
  public heroes:Hero[];
  constructor(private heroService:HeroService){}

  ngOnInit(){
    this.heroService.getHeroes().then(heroes=>{
      this.heroes=heroes.slice(1,5);
    });
  }
}
