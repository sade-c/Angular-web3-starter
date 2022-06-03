"use strict";
(self["webpackChunkAngweb3"] = self["webpackChunkAngweb3"] || []).push([["src_app_views_access_access_module_ts"],{

/***/ 6161:
/*!*******************************************************!*\
  !*** ./src/app/views/access/access-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessRoutingModule": () => (/* binding */ AccessRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _access_access_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access/access.component */ 1967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
        path: '',
        component: _access_access_component__WEBPACK_IMPORTED_MODULE_0__.AccessComponent,
    }];
class AccessRoutingModule {
}
AccessRoutingModule.ɵfac = function AccessRoutingModule_Factory(t) { return new (t || AccessRoutingModule)(); };
AccessRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccessRoutingModule });
AccessRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccessRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1582:
/*!***********************************************!*\
  !*** ./src/app/views/access/access.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessModule": () => (/* binding */ AccessModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _access_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-routing.module */ 6161);
/* harmony import */ var _access_access_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access/access.component */ 1967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class AccessModule {
}
AccessModule.ɵfac = function AccessModule_Factory(t) { return new (t || AccessModule)(); };
AccessModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AccessModule });
AccessModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _access_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccessModule, { declarations: [_access_access_component__WEBPACK_IMPORTED_MODULE_1__.AccessComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _access_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessRoutingModule] }); })();


/***/ }),

/***/ 1967:
/*!*********************************************************!*\
  !*** ./src/app/views/access/access/access.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessComponent": () => (/* binding */ AccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AccessComponent {
    constructor() { }
}
AccessComponent.ɵfac = function AccessComponent_Factory(t) { return new (t || AccessComponent)(); };
AccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessComponent, selectors: [["app-access"]], decls: 18, vars: 0, consts: [[1, "surface-0", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "grid", "justify-content-center", "p-2", "lg:p-0", 2, "min-width", "80%"], [1, "col-12", "mt-5", "xl:mt-0", "text-center"], ["src", "../../../../assets/layout/images/logo-orange.svg", "alt", "Sakai logo", 1, "mb-5", 2, "width", "81px", "height", "60px"], [1, "col-12", "xl:col-6", 2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)"], [1, "h-full", "w-full", "m-0", "py-7", "px-4", 2, "border-radius", "53px", "background", "linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"], [1, "grid", "flex", "flex-column", "align-items-center"], [1, "flex", "justify-content-center", "align-items-center", "bg-orange-500", "border-circle", 2, "width", "3.2rem", "height", "3.2rem"], [1, "text-50", "pi", "pi-fw", "pi-lock", "text-2xl"], [1, "text-900", "font-bold", "text-4xl", "lg:text-5xl", "mb-2"], [1, "text-600", "text-center"], ["src", "../../../../assets/layout/images/asset-access.svg", "alt", "Access denied", "width", "80%", 1, "mt-5"], [1, "col-12", "mt-5", "text-center"], [1, "pi", "pi-fw", "pi-arrow-left", "text-blue-500", "mr-2", 2, "vertical-align", "center"], ["href", "#", 1, "text-blue-500"]], template: function AccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Access Denied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You do not have the neccessary permissions. Please contact admins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Go to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_views_access_access_module_ts.js.map