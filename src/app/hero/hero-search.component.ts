/**
 * Created by Administrator on 2017/3/20.
 */


import {Component, OnInit} from "@angular/core";
import {HeroSearchService} from "./hero-search.service";
import {Hero} from "./hero";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import 'rxjs/add/observable/of';

import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import {Router} from "@angular/router";

@Component({
  // moduleId: module.id,
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css'],
  providers:[HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  public heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroSearchService: HeroSearchService,private router:Router) {
  }

  search(name: string) {
    this.searchTerms.next(name);
  }

  ngOnInit() {
    this.heroes = this.searchTerms.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {
        console.info('参数:', term);
        let heroes = term && term!='无' ? this.heroSearchService.search(term)
          : Observable.of<Hero[]>([]);
        return heroes;
      }).catch(error => {
        console.error('出错啦..', error);
        return Observable.of<Hero[]>([]);
      });
  }
  gotoDetail(hero:Hero){
    this.router.navigate(['/details',hero.id]);
  }

}
