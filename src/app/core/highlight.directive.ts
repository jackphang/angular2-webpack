/**
 * Created by Administrator on 2017/3/20.
 */

import {Directive, ElementRef, Renderer} from "@angular/core";
@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  constructor(e: ElementRef, render: Renderer) {
    render.setElementStyle(e.nativeElement, 'width', '100px');
    render.setElementStyle(e.nativeElement, 'backgroundColor', "pink");
    // e.nativeElement.style.width='100px;';
    // e.nativeElement.backgroundColor='pink';
    console.info('初始化指令');
    // e.nativeElement().style = 'width:100px;background-color:pink;';
  }
}
