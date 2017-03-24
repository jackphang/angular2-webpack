/**
 * Created by Administrator on 2017/3/20.
 */
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
var core_1 = require("@angular/core");
var hero_search_service_1 = require("./hero-search.service");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require('rxjs/add/observable/of');
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var router_1 = require("@angular/router");
var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    HeroSearchComponent.prototype.search = function (name) {
        this.searchTerms.next(name);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.searchTerms.debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) {
            console.info('参数:', term);
            var heroes = term && term != '无' ? _this.heroSearchService.search(term)
                : Observable_1.Observable.of([]);
            return heroes;
        }).catch(function (error) {
            console.error('出错啦..', error);
            return Observable_1.Observable.of([]);
        });
    };
    HeroSearchComponent.prototype.gotoDetail = function (hero) {
        this.router.navigate(['/details', hero.id]);
    };
    HeroSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-search',
            templateUrl: 'hero-search.component.html',
            styleUrls: ['hero-search.component.css'],
            providers: [hero_search_service_1.HeroSearchService]
        }), 
        __metadata('design:paramtypes', [hero_search_service_1.HeroSearchService, router_1.Router])
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());
exports.HeroSearchComponent = HeroSearchComponent;
//# sourceMappingURL=hero-search.component.js.map