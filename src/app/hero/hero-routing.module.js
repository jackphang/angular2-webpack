/**
 * Created by Administrator on 2017/3/19.
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
var router_1 = require("@angular/router");
var hero_detail_component_1 = require("./hero-detail.component");
var routes = [
    { path: 'details/:id', component: hero_detail_component_1.HeroDetailComponent },
];
var HeroRoutingModule = (function () {
    function HeroRoutingModule() {
    }
    HeroRoutingModule = __decorate([
        core_1.NgModule({
            exports: [router_1.RouterModule],
            imports: [router_1.RouterModule.forChild(routes)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroRoutingModule);
    return HeroRoutingModule;
}());
exports.HeroRoutingModule = HeroRoutingModule;
//# sourceMappingURL=hero-routing.module.js.map