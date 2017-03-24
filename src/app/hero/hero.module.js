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
/**
 * Created by Administrator on 2017/3/20.
 */
var core_1 = require("@angular/core");
var heroes_component_1 = require("./heroes.component");
var dashborad_component_1 = require("./dashborad.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_search_component_1 = require("./hero-search.component");
var hero_routing_module_1 = require("./hero-routing.module");
var shared_module_1 = require("../shared/shared.module");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var hero_service_1 = require("./hero.service");
var HeroModule = (function () {
    function HeroModule() {
    }
    HeroModule = __decorate([
        core_1.NgModule({
            imports: [hero_routing_module_1.HeroRoutingModule, shared_module_1.SharedModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)],
            declarations: [hero_detail_component_1.HeroDetailComponent, heroes_component_1.HeroesComponent, dashborad_component_1.DashboradComponent, hero_search_component_1.HeroSearchComponent],
            providers: [hero_service_1.HeroService],
        }), 
        __metadata('design:paramtypes', [])
    ], HeroModule);
    return HeroModule;
}());
exports.HeroModule = HeroModule;
//# sourceMappingURL=hero.module.js.map