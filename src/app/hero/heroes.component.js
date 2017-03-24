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
var core_1 = require('@angular/core');
var hero_1 = require("./hero");
var hero_service_1 = require("./hero.service");
var router_1 = require("@angular/router");
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.title = 'Tour of Heroes';
    }
    HeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.selected = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['./details', this.selectedHero.id]);
    };
    HeroesComponent.prototype.save = function (name) {
        var _this = this;
        this.heroService.create(name).then(function () {
            var hero = new hero_1.Hero();
            hero.id = +(Math.random() * 100);
            hero.name = name;
            _this.heroes.push(hero);
        });
    };
    HeroesComponent.prototype.delete = function (id) {
        var _this = this;
        this.heroService.delete(id).then(function () {
            _this.heroes = _this.heroes.filter(function (hero) { return hero.id != id; });
            if (_this.selectedHero != null && _this.selectedHero.id === id) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'heroes.component.html',
            styleUrls: ['hero.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map