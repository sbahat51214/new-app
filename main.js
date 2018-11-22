(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"] },
    { path: 'nav', component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background-image: url(11.jpg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7Q0FDakMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKDExLmpwZyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n        <app-nav></app-nav>\n</section>\n\n<router-outlet></router-outlet>\n    \n<section>\n    <app-footer></app-footer>\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'new-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n    color: white;\n    font-size: 1.2em;\n}\ninput,textarea{\n    width: 200%;\n}\n.left{\n    float: right;\n}\nform{\n    width: 47%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5pbnB1dCx0ZXh0YXJlYXtcbiAgICB3aWR0aDogMjAwJTtcbn1cbi5sZWZ0e1xuICAgIGZsb2F0OiByaWdodDtcbn1cbmZvcm17XG4gICAgd2lkdGg6IDQ3JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-image : url(11.jpg); background-size:cover;\">\n    <form action=\"\" >\n      <div class=\"form-group\">\n        <label for=\"name\">\n          Your Name: <input type=\"text\" class=\"form-control\" placeholder=\"Type your name\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"name\">\n            Your Message: <textarea type=\"text\"  class=\"form-control\" placeholder=\"write message\"></textarea>\n          </label>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-success left\">\n          Submit\n        </button>\n      </div>\n      \n    </form>\n    \n  </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.footer{\n    background: green;\n    position:relative;\n    padding: 0 10px 0 10px;\n    bottom: 0px;\n    width: 100%;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    padding: 20px;\n    clear: both;\n}\n\na{\n    color: white;\n    text-decoration: none;\n}\n\n.footer a:hover{\n    color: #F74759;\n    text-decoration: none;\n    margin: 10px;\n}\n\n.facebook a:hover{\n    color: #4661AF;\n}\n\n.twitter a:hover{\n    color: #009CFA;\n}\n\n.instagram a:hover{\n    color: #C600B5;\n}\n\n.google a:hover{\n    color: #EC4232;\n}\n\n.msg a:hover{\n    color: #F79D00;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsWUFBWTtDQUNmOztBQUVEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtDQUN6Qjs7QUFDRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsYUFBYTtDQUNoQjs7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7O0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksZUFBZTtDQUNsQjs7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7O0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9vdGVye1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuYXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZvb3RlciBhOmhvdmVye1xuICAgIGNvbG9yOiAjRjc0NzU5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW46IDEwcHg7XG59XG4uZmFjZWJvb2sgYTpob3ZlcntcbiAgICBjb2xvcjogIzQ2NjFBRjtcbn1cbi50d2l0dGVyIGE6aG92ZXJ7XG4gICAgY29sb3I6ICMwMDlDRkE7XG59XG4uaW5zdGFncmFtIGE6aG92ZXJ7XG4gICAgY29sb3I6ICNDNjAwQjU7XG59XG4uZ29vZ2xlIGE6aG92ZXJ7XG4gICAgY29sb3I6ICNFQzQyMzI7XG59XG4ubXNnIGE6aG92ZXJ7XG4gICAgY29sb3I6ICNGNzlEMDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-4 col-4\">\n        <div class=\"home \">\n          <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n        </div>\n        <div class=\"about\">\n          <a routerLink=\"/about\">About</a>\n        </div>\n        <div class=\"contact\">\n          <a routerLink=\"/contact\">Contact</a>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4 col-4\">\n        <div class=\"home\">\n          <a routerLink=\"/home\">Home</a>\n        </div>\n        <div class=\"about\">\n          <a routerLink=\"/about\">About</a>\n        </div>\n        <div class=\"contact\">\n          <a routerLink=\"/contact\">Contact</a>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4 col-4 \">\n        <div class=\"home\">\n          <a routerLink=\"/home\">Home</a>\n        </div>\n        <div class=\"about\">\n          <a routerLink=\"/about\">About</a>\n        </div>\n        <div class=\"contact\">\n          <a routerLink=\"/contact\">Contact</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row \">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\n      <ul class=\"list-unstyled size list-inline social text-center\">\n        <li class=\"list-inline-item facebook\"><a href=\"javascript:void();\"><i class=\"fa fa-2x fa-facebook\"></i></a></li>\n        <li class=\"list-inline-item twitter\"><a href=\"javascript:void();\"><i class=\"fa fa-2x fa-twitter\"></i></a></li>\n        <li class=\"list-inline-item instagram\"><a href=\"javascript:void();\"><i class=\"fa fa-2x fa-instagram\"></i></a></li>\n        <li class=\"list-inline-item google\"><a href=\"javascript:void();\"><i class=\"fa fa-2x fa-google-plus\"></i></a></li>\n        <li class=\"list-inline-item msg\"><a href=\"javascript:void();\" target=\"_blank\"><i class=\"fa fa-2x fa-envelope\"></i></a></li>\n      </ul>\n    </div>\n  </div>\t\n  <div id=\"footer\">\n    <div class=\"container text-center\">\n      <p class=\"text-muted credit\" > <span style=\"color:white;\"> Copyright &copy; </span>  <a href=\"/home\">My App</a></p>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr{\n    color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhye1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-image : url(11.jpg); background-size:cover;\">\n        <h1 class=\"display-4 text-primary font-weight-bold\">Hello, world!</h1>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n\n\n        <p class=\"lead\">\n          <a class=\"btn btn-primary btn-lg\" routerLink=\"/contact\" role=\"button\">Contact Us</a>\n        </p>\n      </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-color{\n    background-color: green;\n}\n.navbar-color a{\n    color: white\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLm5hdmJhci1jb2xvciBhe1xuICAgIGNvbG9yOiB3aGl0ZVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar transparent navbar-expand-md  navbar-light  navbar-color\" id=\"right\">\n  <a class=\"navbar-brand\" routerLink=\"/\"> {{appTitle}} </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\" >\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/\">Home </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  routerLinkActive=\"active\" routerLink=\"/contact\">Contact</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link \" routerLinkActive=\"active\" routerLink=\"/about\" >\n          About\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link right\"  routerLinkActive=\"active\" routerLink=\"/portfolio\">My Portfolio</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-info my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    // appTitle : string = "app";
    function NavComponent() {
        this.appTitle = "MyApp";
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    text-align: center;\n    margin-top: 5px;\n    border-radius: 3px;\n  \n    font: bold;\n    font-size: 1.3em;\n}\n.bootstrap{\n    background-color: #573D7C;\n    font-size: 1.1em;\n}\n.pad{\n    margin: 3px;\n}\n.javascript{\n    background-color: #F0DB4F;\n}\n.css{\n    background-color: #41A7D7;\n}\n.angular{\n    background-color: #D73231;\n}\n.skills{\n    height: 50px;\n    text-align:  center;\n    font-size: 30px;\n}\n.bars{\n    padding: 10px;\n}\n.project{\n    \n    background-color: red;\n    \n}\n.car{\n    border-radius: 10px;\n    padding: 10px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7O0lBRW5CLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDs7SUFFSSxzQkFBc0I7O0NBRXpCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIFxuICAgIGZvbnQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbn1cbi5ib290c3RyYXB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3M0Q3QztcbiAgICBmb250LXNpemU6IDEuMWVtO1xufVxuLnBhZHtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5qYXZhc2NyaXB0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMERCNEY7XG59XG4uY3Nze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MUE3RDc7XG59XG4uYW5ndWxhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDczMjMxO1xufVxuLnNraWxsc3tcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogIGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4uYmFyc3tcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnByb2plY3R7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIFxufVxuLmNhcntcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3 col-lg-3 col-3 col-sm-3\"></div>\n    <div class=\"col-md-6 col-lg-6 col-6 col-sm-6\">\n      <p class=\"bg-primary text-light skills\">My Skills</p>\n    </div>\n    <div class=\"col-md-3 col-lg-3 col-3 col-sm-3\"></div>\n  </div>\n</div>\n\n<div class=\"bars\">\n<p>HTML</p>\n<div class=\"row pad\">\n  <div class=\"col-md-2 \">  </div>\n  <div class=\"col-md-8\">\n      <div class=\"progress\" style=\"height:30px\">\n          <div class=\"progress-bar \n          progress-bar-striped \n          progress-bar-animated \" \n          role=\"progressbar\" \n          aria-valuenow=\"90\" \n          aria-valuemin=\"0\"\n           aria-valuemax=\"100\" \n           style=\"width: 90%; \"> 90</div>\n      </div>\n  </div>\n  <div class=\"col-md-2\"></div>\n</div>\n<p>CSS</p>\n<div class=\"row pad\">\n    <div class=\"col-md-2 \">  </div>\n    <div class=\"col-md-8\">\n        <div class=\"progress\" style=\"height:30px\">\n            <div class=\"progress-bar \n            progress-bar-striped \n            progress-bar-animated \n             css\" \n            role=\"progressbar\" \n            aria-valuenow=\"85\" \n            aria-valuemin=\"0\"\n             aria-valuemax=\"100\"\n              style=\"width: 85%; \"><strong> 85 </strong></div>\n        </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n  <p>Bootstrap CSS</p>\n  <div class=\"row pad\" >\n      <div class=\"col-md-2 \">  </div>\n      <div class=\"col-md-8\">\n          <div class=\"progress\" style=\"height:30px\">\n              <div class=\"progress-bar \n              progress-bar-striped \n              progress-bar-animated \n              bootstrap \" \n              role=\"progressbar\" \n              aria-valuenow=\"70\" \n              aria-valuemin=\"0\"\n               aria-valuemax=\"100\"\n                style=\"width: 70%; \"> 70</div>\n          </div>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n    <p>JavaScript</p>\n    <div class=\"row pad\" >\n        <div class=\"col-md-2 \">  </div>\n        <div class=\"col-md-8\">\n            <div class=\"progress\" style=\"height:30px\">\n                <div class=\"progress-bar \n                progress-bar-striped \n                progress-bar-animated \n                javascript \" \n                role=\"progressbar\" \n                aria-valuenow=\"70\" \n                aria-valuemin=\"0\"\n                 aria-valuemax=\"100\"\n                  style=\"width: 70%; \"> 70</div>\n            </div>\n        </div>\n        <div class=\"col-md-2\"></div>\n      </div>\n\n    <p>Angular</p>\n      <div class=\"row pad\" >\n          <div class=\"col-md-2 \">  </div>\n          <div class=\"col-md-8\">\n              <div class=\"progress\" style=\"height:30px\">\n                  <div class=\"progress-bar \n                  progress-bar-striped \n                  progress-bar-animated \n                  angular \" \n                  role=\"progressbar\" \n                  aria-valuenow=\"40\" \n                  aria-valuemin=\"0\"\n                   aria-valuemax=\"100\"\n                    style=\"width: 40%; \"> 40</div>\n              </div>\n          </div>\n          <div class=\"col-md-2\"></div>\n        </div>\n </div>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3 col-lg-3 col-3 col-sm-3\"></div>\n    <div class=\"col-md-6 col-lg-6 col-6 col-sm-6\">\n      <p class=\"bg-danger text-light skills project\">Projects</p>\n    </div>\n    <div class=\"col-md-3 col-lg-3 col-3 col-sm-3\"></div>\n  </div>\n</div>\n\n<div class=\"container \">\n    <div class=\"row car\">\n      <div class=\"col-sm-4 col-md-4 col-lg-4 col-4 col-xs-4\">\n          <div class=\"card\" style=\"width: 18rem;\">\n              <img class=\"card-img-top\" src=\"https://github.com/sbahat1214/sbahat1214.github.io/blob/master/2.png?raw=true\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <p class=\"card-text text-info\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              </div>\n            </div>\n      </div>\n      <div class=\"col-sm-4 col-md-4 col-lg-4 col-4 col-xs-4\">\n          <div class=\"card\" style=\"width: 18rem;\">\n              <img class=\"card-img-top\" src=\"https://github.com/sbahat1214/sbahat1214.github.io/blob/master/2.png?raw=true\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <p class=\"card-text text-info\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              </div>\n            </div>\n      </div>\n      <div class=\"col-sm-4 col-md-4 col-lg-4 col-4 col-xs-4\">\n          <div class=\"card\" style=\"width: 18rem;\">\n              <img class=\"card-img-top\" src=\"https://github.com/sbahat1214/sbahat1214.github.io/blob/master/2.png?raw=true\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <p class=\"card-text text-info\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              </div>\n            </div>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rana/Desktop/angular/new-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map