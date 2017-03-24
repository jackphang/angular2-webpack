/**
 * Created by Administrator on 2017/3/19.
 */
import {Hero} from "./hero";
// import {heroes} from "./heroes-mock";
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise"

@Injectable()
export class HeroService {
  //机遇内存服务的地址，随便取，angular2自己会根据你请求的方式去匹配
  //如果访问404 ，表示该服务没有注入到相应的component中
  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('服务器异常', error);
    return Promise.reject(error.message | error);
  }

  constructor(private http: Http) {
  }

  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(heroes);
    return this.http.get(this.heroesUrl).toPromise().then(response => {
      console.info(response);
      let dataJson = response.json().data;
      console.info(dataJson);
      let heroes = dataJson as Hero[];
      console.info(heroes);
      return heroes;
    }).catch(this.handleError);
  }

  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(heroes);
  //     }, 2000);
  //   });
  // }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => {
      return heroes.find(hero => hero.id === id);
    });
  }

  update(hero: Hero): Promise<Hero> {
    return this.http.put(`${this.heroesUrl}/${hero.id}`, JSON.stringify(hero), {headers: this.headers})
      .toPromise().then(() => hero).catch(this.handleError);
  }

  create(name: string): Promise<void> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise().then(response => response.json().data).catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    return this.http.delete(`${this.heroesUrl}/${id}`, {headers: this.headers})
      .toPromise().then(() => null).catch(this.handleError);
  }
}
