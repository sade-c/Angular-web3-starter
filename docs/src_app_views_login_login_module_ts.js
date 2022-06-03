"use strict";
(self["webpackChunkAngweb3"] = self["webpackChunkAngweb3"] || []).push([["src_app_views_login_login_module_ts"],{

/***/ 696:
/*!*****************************************************!*\
  !*** ./src/app/views/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 93);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    }];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 93:
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_layout_service_app_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/layout/service/app.config.service */ 3235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/password */ 6538);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/checkbox */ 8271);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 2875);









class LoginComponent {
    constructor(configService) {
        this.configService = configService;
        this.valCheck = ['remember'];
    }
    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe((config) => {
            this.config = config;
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_layout_service_app_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 4, consts: [[1, "surface-0", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "grid", "justify-content-center", "p-2", "lg:p-0", 2, "min-width", "80%"], [1, "col-12", "mt-5", "xl:mt-0", "text-center"], ["alt", "Sakai logo", 1, "mb-5", 2, "width", "81px", "height", "60px", 3, "src"], [1, "col-12", "xl:col-6", 2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"], [1, "h-full", "w-full", "m-0", "py-7", "px-4", 2, "border-radius", "53px", "background", "linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"], [1, "text-center", "mb-5"], ["src", "../../../../assets/layout/images/avatar.png", "alt", "Image", "height", "50", 1, "mb-3"], [1, "text-900", "text-3xl", "font-medium", "mb-3"], [1, "text-600", "font-medium"], [1, "w-full", "md:w-10", "mx-auto"], ["for", "email1", 1, "block", "text-900", "text-xl", "font-medium", "mb-2"], ["id", "email1", "type", "text", "placeholder", "Email address", "pInputText", "", 1, "w-full", "mb-3", 2, "padding", "1rem"], ["for", "password1", 1, "block", "text-900", "font-medium", "text-xl", "mb-2"], ["id", "password1", "placeholder", "Password", "styleClass", "w-full mb-3", 3, "ngModel", "toggleMask", "ngModelChange"], [1, "flex", "align-items-center", "justify-content-between", "mb-5"], [1, "flex", "align-items-center"], ["id", "rememberme1", "styleClass", "mr-2", 3, "binary"], ["for", "rememberme1"], [1, "font-medium", "no-underline", "ml-2", "text-right", "cursor-pointer", 2, "color", "var(--primary-color)"], ["pButton", "", "pRipple", "", "label", "Sign In", 1, "w-full", "p-3", "text-xl"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Welcome, Isabel!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sign in to continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p-password", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_p_password_ngModelChange_18_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15)(20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "p-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/layout/images/", ctx.config.dark ? "logo-white" : "logo-dark", ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password)("toggleMask", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("binary", true);
    } }, directives: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__.InputText, primeng_password__WEBPACK_IMPORTED_MODULE_3__.Password, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple], styles: ["[_nghost-%COMP%]     .p-password input {\n  width: 100%;\n  padding: 1rem;\n}\n\n[_nghost-%COMP%]     .pi-eye {\n  transform: scale(1.6);\n  margin-right: 1rem;\n  color: var(--primary-color) !important;\n}\n\n[_nghost-%COMP%]     .pi-eye-slash {\n  transform: scale(1.6);\n  margin-right: 1rem;\n  color: var(--primary-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQVI7O0FBR007RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUFBUjs7QUFHTTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQUFSIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5wLXBhc3N3b3JkIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6bmctZGVlcCAucGktZXllIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjYpO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLnBpLWV5ZS1zbGFzaCB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAiXX0= */"] });


/***/ }),

/***/ 265:
/*!*********************************************!*\
  !*** ./src/app/views/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 696);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ 93);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_login_login_module_ts.js.map