webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heroes_heroes_component__ = __webpack_require__("./src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_details_hero_details_component__ = __webpack_require__("./src/app/hero-details/hero-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_2__heroes_heroes_component__["a" /* HeroesComponent */] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__hero_details_hero_details_component__["a" /* HeroDetailsComponent */] }
    // This is if you want to display automatically
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<h1>{{title}}</h1>                                                                                                                                                    \n<nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/heroes\">Heroes</a>\n</nav>\n<router-outlet></router-outlet>\n\n\n\n<!-- <mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n      <span>{{ title }}</span>\n      <span class=\"example-spacer\"></span>\n      <div class=\"links\">\n          <a mat-raised-button routerLink=\"/dashboard\">Restaurants</a>\n          <a mat-raised-button routerLink=\"/heroes\">Home</a>\n      </div>\n      <app-hero-search></app-hero-search>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet></router-outlet> -->\n\n<!-- </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n<!-- <h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Restaurant app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__heroes_heroes_component__ = __webpack_require__("./src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hero_details_hero_details_component__ = __webpack_require__("./src/app/hero-details/hero-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_service__ = __webpack_require__("./src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__message_service__ = __webpack_require__("./src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hero_search_hero_search_component__ = __webpack_require__("./src/app/hero-search/hero-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_grid_list__ = __webpack_require__("./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_chips__ = __webpack_require__("./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//For http and connecting backend

//For messaging service


//Flex and angular material 












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__heroes_heroes_component__["a" /* HeroesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__hero_details_hero_details_component__["a" /* HeroDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__hero_search_hero_search_component__["a" /* HeroSearchComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_flex_layout__["a" /* FlexLayoutModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_11__message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "/* [class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n} */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<h3></h3>\n<div class=\"container\"\nfxLayout\nfxLayout.xs=\"column\"\nfxLayoutAlign=\"center\"\nfxLayoutGap=\"10px\"\nfxLayoutGap.xs=\"0\">\n\n  <a *ngFor=\"let hero of heroes\" class=\"col-1-4\"\n      routerLink=\"/detail/{{hero.id}}\">\n    <div >\n        <img class = \"image\" style = \"height: 300px; width: 300px\"image src=\"{{ hero.image }}\" alt=\"Photo of a Shiba Inu\">\n      <h4>{{hero.name}}</h4>\n    </div>\n  </a>\n</div>\n<app-hero-search></app-hero-search>\n\n\n\n  \n  \n  <!-- <h3>Top Heroes</h3>\n<div class=\"grid grid-pad\">\n  <ul>\n  <li *ngFor = let hero of hereos>\n  <a  class=\"module hero\">\n      \n       <h4>{{hero.categories.id}}</h4>\n    </a>\n    </li>\n    </ul>\n    </div> -->\n\n <!-- <routerLink=\"/detail/{{hero.categories.id}}\"> -->\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__("./src/app/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes.slice(0, 4); });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/hero-details/hero-details.component.css":
/***/ (function(module, exports) {

module.exports = "label {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}"

/***/ }),

/***/ "./src/app/hero-details/hero-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"hero\">\n  <h2>{{ hero.name | uppercase }} Details</h2>\n  <div><span>id: </span>{{hero.id}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </label>\n  </div>\n  \n</div> -->\n\n\n\n\n\n<!-- Here -->\n\n<div class=\"example-container\" *ngIf=\"hero\">\n  <div>\n    <span>id: </span>{{hero.id}}</div>\n  <mat-form-field>\n    <h4>Name : {{hero.name}}</h4>\n    <input matInput [(ngModel)]=\"hero.name\" placeholder=\"Input\">\n  </mat-form-field>\n  <h4>Location : {{hero.location}}</h4>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"hero.location\" placeholder=\"Input\">\n  </mat-form-field>\n\n\n</div>\n\n<button mat-raised-button color=\"primary\" (click)=\"goBack()\">\n  <mat-icon>fast_rewind</mat-icon>back</button>\n<button mat-raised-button color=\"accent\" (click)=\"save()\">\n  <mat-icon>save</mat-icon>save</button>"

/***/ }),

/***/ "./src/app/hero-details/hero-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_service__ = __webpack_require__("./src/app/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroDetailsComponent = /** @class */ (function () {
    function HeroDetailsComponent(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    HeroDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailsComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailsComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get("id");
        this.heroService.getHero(id).subscribe(function (hero) { return (_this.hero = hero); });
    };
    HeroDetailsComponent.prototype.save = function () {
        var _this = this;
        this.heroService.updateHero(this.hero).subscribe(function () { return _this.goBack(); });
    };
    HeroDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-hero-details",
            template: __webpack_require__("./src/app/hero-details/hero-details.component.html"),
            styles: [__webpack_require__("./src/app/hero-details/hero-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], HeroDetailsComponent);
    return HeroDetailsComponent;
}());



/***/ }),

/***/ "./src/app/hero-search/hero-search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hero-search/hero-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\" >\n  \n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n  <i class=\"material-icons\">search</i>\n  <ul class=\"search-result\">\n    \n    <li *ngFor=\"let hero of heroes$ | async\" >\n      <a routerLink=\"/detail/{{hero.id}}\">\n        {{hero.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/hero-search/hero-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_service__ = __webpack_require__("./src/app/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroSearchComponent = /** @class */ (function () {
    function HeroSearchComponent(heroService) {
        this.heroService = heroService;
        //Subject is both an observable source and an Observable itself
        //Values are pushed into it using next() 
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    // Push a search term into the observable stream.
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* debounceTime */])(300), 
        // ignore new term if same as previous term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* distinctUntilChanged */])(), 
        // switch to new search observable each time the term changes
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* switchMap */])(function (term) { return _this.heroService.searchHeroes(term); }));
    };
    HeroSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-search',
            template: __webpack_require__("./src/app/hero-search/hero-search.component.html"),
            styles: [__webpack_require__("./src/app/hero-search/hero-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */]])
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());



/***/ }),

/***/ "./src/app/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        "Content-Type": "application/json",
        //Way to send user generated key.
        "user-key": "96ced68a4f764a6f8a19e953dae9bd55"
    })
};
var HeroService = /** @class */ (function () {
    function HeroService(http) {
        this.http = http;
        // Url to Web api
        this.getAllUrl = 'http://localhost:8080/api/v1/getall';
        this.addUrl = 'http://localhost:8080/api/v1/restaurant';
        this.deleteUrl = 'http://localhost:8080/api/v1/delete';
        this.updateUrl = 'http://localhost:8080/api/v1/update';
    }
    HeroService.prototype.getHeroes = function () {
        return this.http
            .get(this.getAllUrl);
    };
    HeroService.prototype.getHero = function (id) {
        var url = this.getAllUrl + "/" + id;
        return this.http.get(url);
    };
    HeroService.prototype.addHero = function (hero) {
        return this.http.post(this.addUrl, hero);
    };
    /** DELETE: delete the hero from the server */
    HeroService.prototype.deleteHero = function (hero) {
        var id = hero.id;
        var url = this.deleteUrl + "/" + id;
        return this.http.delete(url);
    };
    /** PUT: update the hero on the server */
    HeroService.prototype.updateHero = function (hero) {
        var id = hero.id;
        var url = this.updateUrl + "/" + id;
        return this.http.put(url, hero);
    };
    HeroService.prototype.searchHeroes = function (term) {
        // if (!term.trim()) {
        //   // if not search term, return empty hero array.
        //   return of([]);
        // }
        return this.http.get("http://localhost:8080/api/v1/getallname/?name=" + term);
    };
    HeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.css":
/***/ (function(module, exports) {

module.exports = "/* .heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n \n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n \n.heroes a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n \n.heroes a:hover {\n  color:#607D8B;\n}\n \n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n \nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\n \nbutton:hover {\n  background-color: #cfd8dc;\n}\n \nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n} */\n\n.image{\n  -ms-flex-line-pack: center;\n      align-content: center;\n  height: 350px;\n}\n\n.example-headers-align .mat-expansion-panel-header-title, \n.example-headers-align .mat-expansion-panel-header-description {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.name{\n  color: crimson;\n}"

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This is for fetching an displaying an entire list -->\n\n<!-- <h2>My Heroes</h2>\n\n<ul class = \"heroes\">\n\n   <li *ngFor=\"let hero of heroes.categories\" > \n     <a>\n\n       \n<span class = \"badge\"> {{hero.categories.id}} \n         \n</span> \n{{hero.categories.name}}  \n</a>\n </li>\n    \n</ul> -->\n\n<!-- <routerLink=\"/detail/{{hero}}\">  -->\n\n<!-- This is for displaying a fetched restaurant -->\n\n<!-- <h2>My restaurant</h2>\n<ul class = \"heroes\">\n    <a>\n    <span class = \"badge\">\n        {{heroes.R.res_id}}\n    </span>\n    {{heroes.name}}\n\n</a>    \n</ul> -->\n\n\n<!-- Reviews of restaurants -->\n\n<mat-grid-list cols=\"4\" rowHeight=\"300px\" >\n  <mat-grid-tile class=\"grid\" *ngFor=\"let hero of heroes\" [colspan]=\"2\" [rowspan]=\"2\">\n    <mat-card class=\"example-card\">\n      <a routerLink=\"/detail/{{hero.id}}\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title class = \"name\">{{ hero.name | uppercase }}</mat-card-title>\n        </mat-card-header>\n       <img class = \"image\"mat-card-image src=\"{{ hero.image }}\" alt=\"Photo of a Shiba Inu\">\n      </a>\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes\n          very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button color = \"primary\" style=\"align-content: center\">LIKE</button>\n        <button mat-raised-button color = \"accent\">SHARE</button>\n        <button mat-raised-button color=\"warn\" class=\"delete\" (click)=\"delete(hero)\">delete</button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-grid-tile>\n  \n </mat-grid-list>\n\n\n \n\n \n\n \n  \n  \n\n<!-- Latest version -->\n<!-- <h2> Restaurant</h2>\n<ul class=\"heroes\">\n  \n  <li *ngFor=\"let restaurant of heroes\">\n    <a routerLink=\"/detail/{{restaurant.id}}\">\n      <span class=\"badge\"> {{restaurant.id}}\n\n      </span>\n      {{restaurant.name}}\n      {{restaurant.image}}\n      {{restaurant.location}}\n    </a>\n    <button class=\"delete\" title=\"delete hero\" (click)=\"delete(restaurant)\">x</button>\n  </li>\n  \n</ul> -->\n\n\n\n\n<!-- <mat-expansion-panel>\n<h2>My Restaurants</h2> -->\n\n<!-- <div>\n  <label>Restaurant id:\n    <input  #restaurantId />\n  </label>\n  <label>Restaurant name:\n    <input   #restaurantName />\n  </label>\n  <label>Restaurant Image:\n    <input   #restaurantImage />\n  </label>\n  <label>Restaurant Location:\n    <input   #restaurantLocation /> -->\n  <!-- </label> -->\n  <!-- (click) passes input value to add() and then clears the input -->\n  <!-- <button type = submit (click)=\"add(restaurantName.value,restaurantId.value,restaurantImage.value,restaurantLocation.value);restaurantName.value='';restaurantId.value='';restaurantImage.value='';restaurantLocation.value=''\">\n    add\n  </button>\n</div>\n<mat-action-row>\n  <button mat-button>Click me</button>\n</mat-action-row>\n</mat-expansion-panel> -->\n\n<!-- Review with a table view -->\n<!-- <table>\n  <th>User Name</th>\n  <th>Rating</th>\n  <br><br><th>Rating Id</th>\n  <tr *ngFor=\"let restaurant of heroes.user_reviews\">\n     <td>\n      {{restaurant.review.user.name}}\n     </td>\n    <br>\n     <td>\n    {{restaurant.review.rating}}\n     </td>\n    <br> \n     <td>\n    {{restaurant.review.id}}\n     </td>\n  </tr>\n</table> -->\n\n<!-- Edit this for search  -->\n<!-- <h2>Search Restaurants</h2>\n<table>\n        <th>User Name</th>\n        <th>Rating</th>\n        <br><br><th>Rating Id</th>\n        <tr *ngFor=\"let restaurant of heroes.user_reviews\">\n           <td>\n            {{restaurant.review.user.name}}\n           </td>\n          <br>\n           <td>\n          {{restaurant.review.rating}}\n           </td>\n          <br>\n           <td>\n          {{restaurant.review.id}}\n           </td>\n        </tr>\n      </table> -->\n      <mat-expansion-panel (opened)=\"setStep(0)\" hideToggle=\"true\">\n          <mat-expansion-panel-header>\n              <mat-panel-title>\n                Add Restaurant\n              </mat-panel-title>\n              \n            </mat-expansion-panel-header>\n      <mat-accordion class=\"example-headers-align\">\n        \n        <mat-expansion-panel (opened)=\"setStep(0)\" hideToggle=\"true\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Restaurant data\n            </mat-panel-title>\n            <mat-panel-description>\n              Enter restaurant name and id  \n              <mat-icon>account_circle</mat-icon>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n      \n          <mat-form-field>\n            <input matInput placeholder=\"First name\" #restaurantName>\n          </mat-form-field>\n      \n          <mat-form-field>\n            <input matInput  placeholder=\"Id\" #restaurantId>\n          </mat-form-field>\n      \n          <mat-action-row>\n            <button mat-button color (click)=\"nextStep()\">Next</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n      \n        <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Location\n            </mat-panel-title>\n            <mat-panel-description>\n              Enter Restaurant Location\n              <mat-icon>map</mat-icon>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n      \n          <mat-form-field>\n            <input matInput placeholder=\"Location\" #restaurantLocation>\n          </mat-form-field>\n      \n          <mat-action-row>\n            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n            <button mat-button  (click)=\"nextStep()\">Next</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n      \n        <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Day of the trip\n            </mat-panel-title>\n            <mat-panel-description>\n              Enter Image URL\n              <mat-icon>add_a_photo</mat-icon>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <mat-form-field>\n            <input matInput placeholder=\"Enter image Url\" #restaurantImage>\n          </mat-form-field>\n          <mat-action-row>\n            <button mat-button (click)=\"openSnackBar(restaurantId.value)\" (click)=\"add(restaurantName.value,restaurantId.value,restaurantImage.value,restaurantLocation.value);restaurantName.value='';restaurantId.value='';restaurantImage.value='';restaurantLocation.value=''\" (click)=\"nextStep()\" >submit</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n          </mat-accordion>\n         </mat-expansion-panel>\n         "

/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__("./src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {HEROES} from '../mock-heroes';



var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService, snackBar) {
        this.heroService = heroService;
        this.snackBar = snackBar;
        // Controls the nestes expansion panel
        this.step = 0;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().subscribe(function (heroes) { return (_this.heroes = heroes); });
    };
    HeroesComponent.prototype.add = function (name, id, image, location) {
        var _this = this;
        name = name.trim();
        this.heroService
            .addHero({ id: id, name: name })
            .subscribe(function (hero) {
            _this.heroes.push(hero);
            _this.ngOnInit();
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        this.heroes = this.heroes.filter(function (h) { return h !== hero; });
        this.heroService.deleteHero(hero).subscribe();
    };
    HeroesComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    HeroesComponent.prototype.nextStep = function () {
        this.step++;
    };
    HeroesComponent.prototype.prevStep = function () {
        this.step--;
    };
    //Used for displaying the pop-up
    HeroesComponent.prototype.openSnackBar = function (id1) {
        if (id1 == 0) {
            this.message = "Error in the id";
            this.snackBar.open(this.message, "dismiss", {
                duration: 2000
            });
        }
        else {
            this.message1 = "Restaurant added";
            this.snackBar.open(this.message1, "dismiss", {
                duration: 2000
            });
        }
    };
    //  Calls the method on initializing
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-hereos",
            template: __webpack_require__("./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__("./src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatSnackBar */]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map