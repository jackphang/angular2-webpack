import {Component} from "@angular/core";
/**
 * Created by Administrator on 2017/3/19.
 */

@Component({
  //禁止使用module.id,否则webpack 时 参数类型不一致会抛错：Error: moduleId should be a string
  // moduleId:module.id,
  selector: 'my-app',
  template: `
    <h1 >{{title}}</h1>
    <nav>
      <a href="javascript:;" routerLink="/heroes">Heroes</a>
      <a href="javascript:;" routerLink="/dashborad">Dashborad</a>
    </nav>
    <span highlight>指令</span>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['hero/hero.component.css']
})

export class AppComponent {
  title = '这里是英雄墓碑';
  isWebpack='<%=htmlWebpackPlugin.options.metadata.isWebpack%>';
}
