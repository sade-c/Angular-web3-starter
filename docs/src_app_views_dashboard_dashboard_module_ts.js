"use strict";
(self["webpackChunkAngweb3"] = self["webpackChunkAngweb3"] || []).push([["src_app_views_dashboard_dashboard_module_ts"],{

/***/ 2913:
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_layout_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/layout/app-main/app.main.component */ 7127);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 6101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: src_app_shared_layout_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_0__.AppMainComponent,
        children: [{ path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent }],
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../login/login.module */ 265)).then(m => m.LoginModule)
    },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_error_error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../error/error.module */ 3445)).then(m => m.ErrorModule)
    },
    {
        path: 'notfound',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_notfound_notfound_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../notfound/notfound.module */ 7285)).then(m => m.NotfoundModule)
    },
    {
        path: 'access',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_access_access_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../access/access.module */ 1582)).then(m => m.AccessModule)
    },
    {
        path: 'greet',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_greeter_greeter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../greeter/greeter.module */ 9700)).then(m => m.GreeterModule)
    },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6101:
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_global_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/global-alert.service */ 9834);
/* harmony import */ var src_app_shared_layout_service_app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/layout/service/app.config.service */ 3235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class DashboardComponent {
    constructor(configService, GlobalAlertService) {
        this.configService = configService;
        this.GlobalAlertService = GlobalAlertService;
    }
    ngOnInit() {
        this.config = this.configService.config;
    }
    dene() {
        this.GlobalAlertService.connect();
        console.log('dene');
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_layout_service_app_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_global_alert_service__WEBPACK_IMPORTED_MODULE_0__.GlobalAlertService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([])], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 4727:
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 2913);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard/dashboard.component */ 6101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_dashboard_dashboard_module_ts.js.map