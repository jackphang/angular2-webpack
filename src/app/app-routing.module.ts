/**
 * Created by Administrator on 2017/3/19.
 */
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {path: 'dashborad', loadChildren: "app/app.module#DashboradComponent"}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
