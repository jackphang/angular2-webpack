/**
 * Created by Administrator on 2017/3/20.
 */

import {NgModule, Optional, SkipSelf} from "@angular/core";
import {HighlightDirective} from "./highlight.directive";
@NgModule({
  declarations: [HighlightDirective],
  exports: [HighlightDirective]
})
export class CoreModule {
  //守卫
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
