/**
 * Created by Administrator on 2017/3/20.
 */
import {NgModule} from "@angular/core";
import {HeroesComponent} from "./heroes.component";
import {DashboradComponent} from "./dashborad.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroSearchComponent} from "./hero-search.component";
import {HeroRoutingModule} from "./hero-routing.module";
import {SharedModule} from "../shared/shared.module";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {HeroService} from "./hero.service";
@NgModule({
  imports: [HeroRoutingModule, SharedModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [HeroDetailComponent, HeroesComponent, DashboradComponent, HeroSearchComponent],
  providers: [HeroService],
})
export class HeroModule {


}
