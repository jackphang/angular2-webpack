/**
 * Created by Administrator on 2017/3/20.
 */


import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Hero} from "./hero";
@Injectable()
export class HeroSearchService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  search(name: string): Observable<Hero[]> {
    return this.http.get(`api/heroes/?name=${name}`, {headers: this.headers}).map(response => {
      console.info('请求到了服务端...name='+name);
      return response.json().data as Hero[];
    });
  }
}
