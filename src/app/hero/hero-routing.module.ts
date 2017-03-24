/**
 * Created by Administrator on 2017/3/19.
 */

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes.component";
import {DashboradComponent} from "./dashborad.component";
import {HeroDetailComponent} from "./hero-detail.component";

const routes:Routes=[
  {path: 'heroes', loadChildren: "app/hero/hero.module#HeroesComponent"},
  {path: 'details/:id', loadChildren: "app/hero/hero.module#HeroDetailComponent"},
  /*{redirectTo: 'dashborad', path: '', pathMatch:'full'}*/
]

@NgModule({
  exports:[RouterModule],
  imports:[RouterModule.forChild(routes)]
})
export class HeroRoutingModule{

}
