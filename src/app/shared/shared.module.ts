/**
 * Created by Administrator on 2017/3/20.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
@NgModule({
  exports:[CommonModule,FormsModule,HttpModule]
})
export class SharedModule{

}
