"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import {heroes} from "./heroes-mock";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        //机遇内存服务的地址，随便取，angular2自己会根据你请求的方式去匹配
        //如果访问404 ，表示该服务没有注入到相应的component中
        this.heroesUrl = 'api/heroes';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    HeroService.prototype.handleError = function (error) {
        console.error('服务器异常', error);
        return Promise.reject(error.message | error);
    };
    HeroService.prototype.getHeroes = function () {
        // return Promise.resolve(heroes);
        return this.http.get(this.heroesUrl).toPromise().then(function (response) {
            console.info(response);
            var dataJson = response.json().data;
            console.info(dataJson);
            var heroes = dataJson;
            console.info(heroes);
            return heroes;
        }).catch(this.handleError);
    };
    // getHeroesSlowly(): Promise<Hero[]> {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       resolve(heroes);
    //     }, 2000);
    //   });
    // }
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes().then(function (heroes) {
            return heroes.find(function (hero) { return hero.id === id; });
        });
    };
    HeroService.prototype.update = function (hero) {
        return this.http.put(this.heroesUrl + "/" + hero.id, JSON.stringify(hero), { headers: this.headers })
            .toPromise().then(function () { return hero; }).catch(this.handleError);
    };
    HeroService.prototype.create = function (name) {
        return this.http.post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        return this.http.delete(this.heroesUrl + "/" + id, { headers: this.headers })
            .toPromise().then(function () { return null; }).catch(this.handleError);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map