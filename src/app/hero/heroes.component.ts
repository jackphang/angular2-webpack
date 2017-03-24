import { Component } from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
  // moduleId:module.id,
  selector: 'my-heroes',
  templateUrl:'heroes.component.html',
  styleUrls:['hero.component.css']
})
export class HeroesComponent  {
  title='Tour of Heroes';
  selectedHero:Hero;
  heroes:Hero[];
  constructor(private heroService:HeroService,private router:Router){

  }
  ngOnInit(){
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }
  selected(hero:Hero){
    this.selectedHero=hero;
  }
  gotoDetail(){
    this.router.navigate(['./details',this.selectedHero.id]);
  }
  save(name:string){
    this.heroService.create(name).then(()=>{
      let hero=new Hero();
      hero.id=+(Math.random()*100);
      hero.name=name;
      this.heroes.push(hero);
    });
  }

  delete(id:number){
    this.heroService.delete(id).then(()=>{
      this.heroes=this.heroes.filter(hero=>hero.id!=id);
      if(this.selectedHero!=null && this.selectedHero.id===id){
        this.selectedHero=null;
      }
    });
  }
}
