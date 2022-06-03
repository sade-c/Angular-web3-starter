(self["webpackChunkAngweb3"] = self["webpackChunkAngweb3"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/dashboard.module */ 4727)).then(m => m.DashboardModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);




class AppComponent {
    constructor(primengConfig) {
        this.primengConfig = primengConfig;
        this.menuMode = 'static';
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeNGConfig)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__.HashLocationStrategy,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 9834:
/*!************************************************!*\
  !*** ./src/app/shared/global-alert.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalAlertService": () => (/* binding */ GlobalAlertService)
/* harmony export */ });
/* harmony import */ var _Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _providers_wallet_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/wallet-provider.service */ 5687);
/* harmony import */ var _model_eip1193_providerErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/eip1193/providerErrors */ 3440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);









class GlobalAlertService {
  constructor(messageService, provider, router) {
    this.messageService = messageService;
    this.provider = provider;
    this.router = router;
  }

  presentNoConnectionAlert() {
    var _this = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.messageService.add({
        severity: 'error',
        summary: 'No Connection',
        detail: 'No Web3 wallet was detected. To continue please install Metamask or another Web3 compatible wallet.'
      });
    })();
  }

  showConnectAlert() {
    var _this2 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.messageService.add({
        severity: 'error',
        summary: 'Connect!',
        detail: 'Please connect your wallet to proceed.'
      });
    })();
  }

  showMessageAlert(title, message, severity = 'success') {
    var _this3 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.messageService.add({
        severity: severity,
        summary: title,
        detail: message
      });
    })();
  }

  showErrorAlert(error) {
    var _this4 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const anyError = error;

      _this4.messageService.add({
        severity: 'error',
        summary: 'An Error Occured',
        detail: anyError.data && anyError.data.message ? anyError.data.message : anyError.message
      });
    })();
  }

  showProviderAlert(errorcode) {
    var _this5 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let error = _model_eip1193_providerErrors__WEBPACK_IMPORTED_MODULE_2__.ProviderErrors[errorcode];

      _this5.messageService.add({
        severity: 'error',
        summary: error.title,
        detail: error.message
      });
    })();
  }

  showToast(message) {
    var _this6 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.messageService.add({
        severity: 'info',
        summary: 'An Error Occured',
        detail: message
      });
    })();
  }

  connect() {
    var _this7 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let isConected = yield _this7.provider.connect();
      console.log('connect clicked with result: ', isConected);

      if (isConected) {
        _this7.provider.getAccounts();
      } else {
        _this7.presentNoConnectionAlert();
      }
    })();
  }

}

GlobalAlertService.ɵfac = function GlobalAlertService_Factory(t) {
  return new (t || GlobalAlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_providers_wallet_provider_service__WEBPACK_IMPORTED_MODULE_1__.WalletProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};

GlobalAlertService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: GlobalAlertService,
  factory: GlobalAlertService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9684:
/*!******************************************************************!*\
  !*** ./src/app/shared/layout/app-config/app.config.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigComponent": () => (/* binding */ AppConfigComponent)
/* harmony export */ });
/* harmony import */ var _app_main_app_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-main/app.main.component */ 7127);
/* harmony import */ var _service_app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/app.config.service */ 3235);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/radiobutton */ 5949);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputswitch */ 2236);















const _c0 = function (a0) { return { "scale-active": a0 }; };
function AppConfigComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 54);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, item_r1 === ctx_r0.scale));
} }
const _c1 = function (a0) { return { "layout-config-active": a0 }; };
class AppConfigComponent {
    constructor(app, appMain, configService, primengConfig) {
        this.app = app;
        this.appMain = appMain;
        this.configService = configService;
        this.primengConfig = primengConfig;
        this.scale = 14;
        this.scales = [12, 13, 14, 15, 16];
    }
    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe((config) => {
            this.config = config;
            this.scale = 14;
            this.applyScale();
        });
    }
    onConfigButtonClick(event) {
        this.appMain.configActive = !this.appMain.configActive;
        this.appMain.configClick = true;
        event.preventDefault();
    }
    incrementScale() {
        this.scale++;
        this.applyScale();
    }
    decrementScale() {
        this.scale--;
        this.applyScale();
    }
    applyScale() {
        document.documentElement.style.fontSize = this.scale + 'px';
    }
    onRippleChange(ripple) {
        this.primengConfig.ripple = ripple;
        this.configService.updateConfig(Object.assign(Object.assign({}, this.config), { ripple }));
    }
    onInputStyleChange() {
        this.configService.updateConfig(this.config);
    }
    changeTheme(theme, dark) {
        let themeElement = document.getElementById('theme-css');
        themeElement === null || themeElement === void 0 ? void 0 : themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
        this.configService.updateConfig(Object.assign(Object.assign({}, this.config), { theme, dark }));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
AppConfigComponent.ɵfac = function AppConfigComponent_Factory(t) { return new (t || AppConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_0__.AppMainComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_app_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig)); };
AppConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppConfigComponent, selectors: [["app-config"]], decls: 159, vars: 11, consts: [["id", "layout-config", 1, "layout-config", 3, "ngClass", "click"], ["id", "layout-config-button", 1, "layout-config-button", 2, "cursor", "pointer", 3, "click"], [1, "pi", "pi-cog"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", "p-button-text", "layout-config-close", 3, "click"], [1, "layout-config-content"], [1, "mt-0"], [1, "config-scale"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-minus", 1, "p-button-rounded", "p-button-text", 3, "disabled", "click"], ["class", "pi pi-circle-fill", 3, "ngClass", 4, "ngFor", "ngForOf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-plus", 1, "p-button-rounded", "p-button-text", 3, "disabled", "click"], [1, "p-formgroup-inline"], [1, "field-radiobutton"], ["name", "inputStyle", "value", "outlined", "inputId", "inputStyle1", 3, "ngModel", "ngModelChange", "onClick"], ["for", "inputStyle1"], ["name", "inputStyle", "value", "filled", "inputId", "inputStyle2", 3, "ngModel", "ngModelChange", "onClick"], ["for", "inputStyle2"], [3, "ngModel", "onChange"], ["name", "menuType", "value", "static", "inputId", "menuType1", 3, "ngModel", "ngModelChange", "onClick"], ["for", "menuType1"], ["name", "menuType", "value", "overlay", "inputId", "menuType2", 3, "ngModel", "ngModelChange", "onClick"], ["for", "menuType2"], [1, "grid", "free-themes"], [1, "col-3", "text-center"], [1, "p-link", 3, "click"], ["src", "../../../assets/layout/images/themes/bootstrap4-light-blue.svg", "alt", "Bootstrap Light Blue"], ["src", "../../../assets/layout/images/themes/bootstrap4-light-purple.svg", "alt", "Bootstrap Light Purple"], ["src", "../../../assets/layout/images/themes/bootstrap4-dark-blue.svg", "alt", "Bootstrap Dark Blue"], ["src", "../../../assets/layout/images/themes/bootstrap4-dark-purple.svg", "alt", "Bootstrap Dark Purple"], ["src", "../../../assets/layout/images/themes/md-light-indigo.svg", "alt", "Material Light Indigo"], ["src", "../../../assets/layout/images/themes/md-light-deeppurple.svg", "alt", "Material Light DeepPurple"], ["src", "../../../assets/layout/images/themes/md-dark-indigo.svg", "alt", "Material Dark Indigo"], ["src", "../../../assets/layout/images/themes/md-dark-deeppurple.svg", "alt", "Material Dark DeepPurple"], ["src", "../../../assets/layout/images/themes/tailwind-light.png", "alt", "Tailwind Light"], ["src", "../../../assets/layout/images/themes/fluent-light.png", "alt", "Fluent Light"], ["src", "../../../assets/layout/images/themes/lara-light-indigo.png", "alt", "Lara Light Indigo"], ["src", "../../../assets/layout/images/themes/lara-light-blue.png", "alt", "Lara Light Blue"], ["src", "../../../assets/layout/images/themes/lara-light-purple.png", "alt", "Lara Light Purple"], ["src", "../../../assets/layout/images/themes/lara-light-teal.png", "alt", "Lara Light Teal"], ["src", "../../../assets/layout/images/themes/lara-dark-indigo.png", "alt", "Lara Dark Indigo"], ["src", "../../../assets/layout/images/themes/lara-dark-blue.png", "alt", "Lara Dark Blue"], ["src", "../../../assets/layout/images/themes/lara-dark-purple.png", "alt", "Lara Dark Purple"], ["src", "../../../assets/layout/images/themes/lara-dark-teal.png", "alt", "Lara Dark Teal"], ["src", "../../../assets/layout/images/themes/saga-blue.png", "alt", "Saga Blue"], ["src", "../../../assets/layout/images/themes/saga-green.png", "alt", "Saga Green"], ["src", "../../../assets/layout/images/themes/saga-orange.png", "alt", "Saga Orange"], ["src", "../../../assets/layout/images/themes/saga-purple.png", "alt", "Saga Purple"], ["src", "../../../assets/layout/images/themes/vela-blue.png", "alt", "Vela Blue"], ["src", "../../../assets/layout/images/themes/vela-green.png", "alt", "Vela Green"], ["src", "../../../assets/layout/images/themes/vela-orange.png", "alt", "Vela Orange"], ["src", "../../../assets/layout/images/themes/vela-purple.png", "alt", "Vela Purple"], ["src", "../../../assets/layout/images/themes/arya-blue.png", "alt", "Arya Blue"], ["src", "../../../assets/layout/images/themes/arya-green.png", "alt", "Arya Green"], ["src", "../../../assets/layout/images/themes/arya-orange.png", "alt", "Arya Orange"], ["src", "../../../assets/layout/images/themes/arya-purple.png", "alt", "Arya Purple"], [1, "pi", "pi-circle-fill", 3, "ngClass"]], template: function AppConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_div_click_0_listener($event) { return ctx.appMain.onConfigClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_a_click_1_listener($event) { return ctx.onConfigButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_3_listener($event) { return ctx.onConfigButtonClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Component Scale");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_8_listener() { return ctx.decrementScale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppConfigComponent_i_9_Template, 1, 3, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_10_listener() { return ctx.incrementScale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Input Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "p-radioButton", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_15_listener($event) { return ctx.config.inputStyle = $event; })("onClick", function AppConfigComponent_Template_p_radioButton_onClick_15_listener() { return ctx.onInputStyleChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Outlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11)(19, "p-radioButton", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_19_listener($event) { return ctx.config.inputStyle = $event; })("onClick", function AppConfigComponent_Template_p_radioButton_onClick_19_listener() { return ctx.onInputStyleChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Filled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Ripple Effect");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p-inputSwitch", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function AppConfigComponent_Template_p_inputSwitch_onChange_24_listener($event) { return ctx.onRippleChange($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Menu Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 10)(28, "div", 11)(29, "p-radioButton", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_29_listener($event) { return ctx.app.menuMode = $event; })("onClick", function AppConfigComponent_Template_p_radioButton_onClick_29_listener() { return ctx.appMain.isStatic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Static");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 11)(33, "p-radioButton", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_33_listener($event) { return ctx.app.menuMode = $event; })("onClick", function AppConfigComponent_Template_p_radioButton_onClick_33_listener() { return ctx.appMain.isOverlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 21)(39, "div", 22)(40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_40_listener() { return ctx.changeTheme("bootstrap4-light-blue", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 22)(43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_43_listener() { return ctx.changeTheme("bootstrap4-light-purple", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 22)(46, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_46_listener() { return ctx.changeTheme("bootstrap4-dark-blue", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 22)(49, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_49_listener() { return ctx.changeTheme("bootstrap4-dark-purple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Material Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 21)(54, "div", 22)(55, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_55_listener() { return ctx.changeTheme("md-light-indigo", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 22)(58, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_58_listener() { return ctx.changeTheme("md-light-deeppurple", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 22)(61, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_61_listener() { return ctx.changeTheme("md-dark-indigo", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 22)(64, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_64_listener() { return ctx.changeTheme("md-dark-deeppurple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Material Design Compact");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 21)(69, "div", 22)(70, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_70_listener() { return ctx.changeTheme("mdc-light-indigo", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 22)(73, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_73_listener() { return ctx.changeTheme("mdc-light-deeppurple", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 22)(76, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_76_listener() { return ctx.changeTheme("mdc-dark-indigo", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 22)(79, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_79_listener() { return ctx.changeTheme("mdc-dark-deeppurple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Tailwind");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 21)(84, "div", 22)(85, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_85_listener() { return ctx.changeTheme("tailwind-light", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Fluent UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 21)(90, "div", 22)(91, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_91_listener() { return ctx.changeTheme("fluent-light", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "PrimeOne Design - 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 21)(96, "div", 22)(97, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_97_listener() { return ctx.changeTheme("lara-light-indigo", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 22)(100, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_100_listener() { return ctx.changeTheme("lara-light-blue", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 22)(103, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_103_listener() { return ctx.changeTheme("lara-light-purple", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 22)(106, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_106_listener() { return ctx.changeTheme("lara-light-teal", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 22)(109, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_109_listener() { return ctx.changeTheme("lara-dark-indigo", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 22)(112, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_112_listener() { return ctx.changeTheme("lara-dark-blue", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 22)(115, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_115_listener() { return ctx.changeTheme("lara-dark-purple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 22)(118, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_118_listener() { return ctx.changeTheme("lara-dark-teal", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "PrimeOne Design - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 21)(123, "div", 22)(124, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_124_listener() { return ctx.changeTheme("saga-blue", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 22)(127, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_127_listener() { return ctx.changeTheme("saga-green", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 22)(130, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_130_listener() { return ctx.changeTheme("saga-orange", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 22)(133, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_133_listener() { return ctx.changeTheme("saga-purple", false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 22)(136, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_136_listener() { return ctx.changeTheme("vela-blue", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 22)(139, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_139_listener() { return ctx.changeTheme("vela-green", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 22)(142, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_142_listener() { return ctx.changeTheme("vela-orange", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 22)(145, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_145_listener() { return ctx.changeTheme("vela-purple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 22)(148, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_148_listener() { return ctx.changeTheme("arya-blue", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 22)(151, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_151_listener() { return ctx.changeTheme("arya-green", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 22)(154, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_154_listener() { return ctx.changeTheme("arya-orange", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 22)(157, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_157_listener() { return ctx.changeTheme("arya-purple", true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](158, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c1, ctx.appMain.configActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.scales);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[ctx.scales.length - 1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.config.inputStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.config.inputStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.config.ripple);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.app.menuMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.app.menuMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__.RadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_10__.InputSwitch], encapsulation: 2 });


/***/ }),

/***/ 5854:
/*!******************************************************************!*\
  !*** ./src/app/shared/layout/app-footer/app.footer.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppFooterComponent": () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var _app_main_app_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-main/app.main.component */ 7127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AppFooterComponent {
    constructor(appMain) {
        this.appMain = appMain;
    }
}
AppFooterComponent.ɵfac = function AppFooterComponent_Factory(t) { return new (t || AppFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_0__.AppMainComponent)); };
AppFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppFooterComponent, selectors: [["app-footer"]], decls: 7, vars: 1, consts: [[1, "layout-footer"], [1, "font-medium", "ml-2"], ["alt", "Logo", "height", "20", 1, "mr-2", 3, "src"]], template: function AppFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Angular-web3-starter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "PrimeNG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/layout/images/", ctx.appMain.config.dark ? "logo-white" : "logo-dark", ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, encapsulation: 2 });


/***/ }),

/***/ 7127:
/*!**************************************************************!*\
  !*** ./src/app/shared/layout/app-main/app.main.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMainComponent": () => (/* binding */ AppMainComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _service_app_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.config.service */ 3235);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







function AppMainComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 5);
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { "layout-overlay": a0, "layout-static": a1, "layout-theme-light": a2, "layout-theme-dark": a3, "layout-overlay-sidebar-active": a4, "layout-static-sidebar-inactive": a5, "layout-mobile-sidebar-active": a6, "p-ripple-disabled": a7, "p-input-filled": a8 }; };
class AppMainComponent {
    constructor(renderer, app, configService) {
        this.renderer = renderer;
        this.app = app;
        this.configService = configService;
        this.staticMenuInactive = false;
    }
    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe((config) => (this.config = config));
    }
    ngAfterViewInit() {
        // hides the overlay menu and top menu if outside is clicked
        this.documentClickListener = this.renderer.listen('body', 'click', (event) => {
            if (!this.isDesktop()) {
                if (!this.menuClick) {
                    this.menuActiveMobile = false;
                }
                if (!this.topMenuButtonClick) {
                    this.hideTopMenu();
                }
            }
            else {
                if (!this.menuClick && this.isOverlay()) {
                    this.menuInactiveDesktop = true;
                }
                if (!this.menuClick) {
                    this.overlayMenuActive = false;
                }
            }
            if (this.configActive && !this.configClick) {
                this.configActive = false;
            }
            this.configClick = false;
            this.menuClick = false;
            this.topMenuButtonClick = false;
        });
    }
    toggleMenu(event) {
        this.menuClick = true;
        if (this.isDesktop()) {
            if (this.app.menuMode === 'overlay') {
                if (this.menuActiveMobile === true) {
                    this.overlayMenuActive = true;
                }
                this.overlayMenuActive = !this.overlayMenuActive;
                this.menuActiveMobile = false;
            }
            else if (this.app.menuMode === 'static') {
                this.staticMenuInactive = !this.staticMenuInactive;
            }
        }
        else {
            this.menuActiveMobile = !this.menuActiveMobile;
            this.topMenuActive = false;
        }
        event.preventDefault();
    }
    toggleProfile(event) {
        this.profileActive = !this.profileActive;
        console.log('profileActive', this.profileActive);
        event.preventDefault();
    }
    toggleTopMenu(event) {
        this.topMenuButtonClick = true;
        this.menuActiveMobile = false;
        if (this.topMenuActive) {
            this.hideTopMenu();
        }
        else {
            this.topMenuActive = true;
        }
        event.preventDefault();
    }
    hideTopMenu() {
        this.topMenuLeaving = true;
        setTimeout(() => {
            this.topMenuActive = false;
            this.topMenuLeaving = false;
        }, 1);
    }
    onMenuClick() {
        this.menuClick = true;
    }
    onConfigClick(event) {
        this.configClick = true;
    }
    isStatic() {
        return this.app.menuMode === 'static';
    }
    isOverlay() {
        return this.app.menuMode === 'overlay';
    }
    isDesktop() {
        return window.innerWidth > 992;
    }
    isMobile() {
        return window.innerWidth < 1024;
    }
    onSearchClick() {
        this.topMenuButtonClick = true;
    }
    ngOnDestroy() {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
AppMainComponent.ɵfac = function AppMainComponent_Factory(t) { return new (t || AppMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
AppMainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppMainComponent, selectors: [["app-main"]], decls: 11, vars: 12, consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-sidebar"], [1, "layout-main-container"], [1, "layout-main"], ["class", "layout-mask p-component-overlay", 4, "ngIf"], [1, "layout-mask", "p-component-overlay"]], template: function AppMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-config");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AppMainComponent_div_9_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p-toast");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](2, _c0, [ctx.isOverlay(), ctx.isStatic(), !ctx.config.dark, ctx.config.dark, ctx.overlayMenuActive, ctx.staticMenuInactive, ctx.menuActiveMobile, !ctx.config.ripple, ctx.config.inputStyle === "filled"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuActiveMobile);
    } }, encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('submenu', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                    height: '0px',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                    height: '*',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('visible => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('hidden => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 2826:
/*!**************************************************************!*\
  !*** ./src/app/shared/layout/app-menu/app.menu.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuComponent": () => (/* binding */ AppMenuComponent)
/* harmony export */ });
/* harmony import */ var _app_main_app_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-main/app.main.component */ 7127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menuitem.component */ 9181);





function AppMenuComponent_li_2_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 7);
} if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", child_r4)("index", i_r2);
} }
function AppMenuComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuComponent_li_2_li_4_Template, 1, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.items);
} }
class AppMenuComponent {
    constructor(appMain) {
        this.appMain = appMain;
    }
    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }],
            },
            {
                label: 'Pages',
                items: [
                    { label: 'Greeter', icon: 'pi pi-fw pi-times-circle', routerLink: ['/greet'] },
                    { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'] },
                    { label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['/error'] },
                    { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/notfound'] },
                    { label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['/access'] },
                ],
            },
        ];
    }
    onKeydown(event) {
        const nodeElement = event.target;
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
AppMenuComponent.ɵfac = function AppMenuComponent_Factory(t) { return new (t || AppMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_0__.AppMainComponent)); };
AppMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppMenuComponent, selectors: [["app-menu"]], decls: 3, vars: 1, consts: [[1, "layout-menu-container"], ["role", "menu", 1, "layout-menu", 3, "keydown"], ["app-menu", "", "class", "layout-menuitem-category", "role", "none", 4, "ngFor", "ngForOf"], ["app-menu", "", "role", "none", 1, "layout-menuitem-category"], [1, "layout-menuitem-root-text"], ["role", "menu"], ["app-menuitem", "", "role", "none", 3, "item", "index", 4, "ngFor", "ngForOf"], ["app-menuitem", "", "role", "none", 3, "item", "index"]], template: function AppMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function AppMenuComponent_Template_ul_keydown_1_listener($event) { return ctx.onKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppMenuComponent_li_2_Template, 5, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.model);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuitemComponent], encapsulation: 2 });


/***/ }),

/***/ 9181:
/*!******************************************************************!*\
  !*** ./src/app/shared/layout/app-menu/app.menuitem.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuitemComponent": () => (/* binding */ AppMenuitemComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _service_app_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.menu.service */ 4186);
/* harmony import */ var _app_main_app_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-main/app.main.component */ 7127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 2875);












const _c0 = ["app-menuitem", ""];
function AppMenuitemComponent_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.item.badge);
} }
function AppMenuitemComponent_a_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("pi pi-fw ", ctx_r4.active ? "pi-angle-up" : "pi-angle-down", " ml-auto");
} }
function AppMenuitemComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.itemClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_1_span_4_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppMenuitemComponent_a_1_i_5_Template, 1, 3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r0.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", ctx_r0.item.target)("tabindex", 0)("aria-label", ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.items);
} }
function AppMenuitemComponent_a_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.item.badge);
} }
function AppMenuitemComponent_a_2_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("pi pi-fw ", ctx_r8.active ? "pi-angle-up" : "pi-angle-down", " ml-auto");
} }
const _c1 = function (a0) { return { exact: a0 }; };
function AppMenuitemComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.itemClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_2_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppMenuitemComponent_a_2_i_5_Template, 1, 3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.class)("routerLink", ctx_r1.item.routerLink)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, !ctx_r1.item.preventExact));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", ctx_r1.item.target)("tabindex", 0)("aria-label", ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.item.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.item.items);
} }
function AppMenuitemComponent_ul_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 13);
} if (rf & 2) {
    const child_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](child_r12.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", child_r12)("index", i_r13)("parentKey", ctx_r11.key);
} }
function AppMenuitemComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_ul_3_ng_template_1_Template, 1, 5, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@children", ctx_r2.active ? "visibleAnimated" : "hiddenAnimated");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.item.items);
} }
class AppMenuitemComponent {
    constructor(app, router, cd, menuService) {
        this.app = app;
        this.router = router;
        this.cd = cd;
        this.menuService = menuService;
        this.active = false;
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe((key) => {
            // deactivate current active menu
            if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
                this.active = false;
            }
        });
        this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
            this.active = false;
        });
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe((params) => {
            if (this.item.routerLink) {
                this.updateActiveStateFromRoute();
            }
            else {
                this.active = false;
            }
        });
    }
    ngOnInit() {
        if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }
        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    }
    updateActiveStateFromRoute() {
        this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
    }
    itemClick(event) {
        event.stopPropagation();
        // avoid processing disabled items
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }
        // notify other items
        this.menuService.onMenuStateChange(this.key);
        // execute command
        if (this.item.command) {
            this.item.command({ originalEvent: event, item: this.item });
        }
        // toggle active state
        if (this.item.items) {
            this.active = !this.active;
        }
        else {
            // activate item
            this.active = true;
            // hide overlay menus
            this.app.menuActiveMobile = false;
            if (this.app.isDesktop() && this.app.isOverlay()) {
                this.app.menuInactiveDesktop = true;
            }
        }
    }
    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }
        if (this.menuResetSubscription) {
            this.menuResetSubscription.unsubscribe();
        }
    }
}
AppMenuitemComponent.ɵfac = function AppMenuitemComponent_Factory(t) { return new (t || AppMenuitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_1__.AppMainComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService)); };
AppMenuitemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppMenuitemComponent, selectors: [["", "app-menuitem", ""]], hostVars: 2, hostBindings: function AppMenuitemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active-menuitem", ctx.active);
    } }, inputs: { item: "item", index: "index", root: "root", parentKey: "parentKey" }, attrs: _c0, decls: 4, vars: 3, consts: [["role", "menuitem", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-menuitem-routerlink router-link-exact-active", "role", "menuitem", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "click", 4, "ngIf"], ["role", "menu", 4, "ngIf"], ["role", "menuitem", "pRipple", "", 3, "ngClass", "click"], [1, "layout-menuitem-icon", 3, "ngClass"], ["class", "menuitem-badge", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "menuitem-badge"], ["routerLinkActive", "active-menuitem-routerlink router-link-exact-active", "role", "menuitem", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "click"], ["class", "p-tag p-badge ml-auto", 4, "ngIf"], [1, "p-tag", "p-badge", "ml-auto"], ["role", "menu"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", "role", "none", 3, "item", "index", "parentKey"]], template: function AppMenuitemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_a_1_Template, 6, 9, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppMenuitemComponent_a_2_Template, 6, 12, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppMenuitemComponent_ul_3_Template, 2, 2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.items && ctx.active && ctx.item.visible !== false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, AppMenuitemComponent], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('children', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                    height: '0px',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hiddenAnimated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                    height: '0px',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visibleAnimated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                    height: '*',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visibleAnimated => hiddenAnimated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('hiddenAnimated => visibleAnimated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => visibleAnimated, visibleAnimated => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 5972:
/*!******************************************************************!*\
  !*** ./src/app/shared/layout/app-topbar/app.topbar.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppTopBarComponent": () => (/* binding */ AppTopBarComponent)
/* harmony export */ });
/* harmony import */ var _Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_main_app_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-main/app.main.component */ 7127);
/* harmony import */ var src_app_shared_providers_wallet_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/providers/wallet-provider.service */ 5687);
/* harmony import */ var src_app_shared_global_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global-alert.service */ 9834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/avatar */ 9713);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/chip */ 4580);
/* harmony import */ var _pipes_short_address_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/short-address.pipe */ 7194);















const _c0 = function (a0) {
  return {
    "layout-topbar-menu-mobile-active": a0
  };
};

const _c1 = function () {
  return [7, "...", 4];
};

class AppTopBarComponent {
  constructor(appMain, provider, alertService) {
    this.appMain = appMain;
    this.provider = provider;
    this.alertService = alertService;
    this.imageDataUrl = '';
    this.connect = "Connect Wallet";
    this.isConected = false;
    this.balance = 0;
    this.isCorrectNetwork = false;
    this.selectedNetwork = "";
    this.chainId = 0;
    this.currentAccount = "";
    this.network = [{
      label: 'network',
      value: null
    }, {
      label: 'Avalanche Testnet',
      value: 43113
    }, {
      label: 'Polygon Testnet',
      value: 80001
    }];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.setupListeners();

      let isConnected = yield _this.provider.isConnected();
      console.log('onInit, isConnected = ', isConnected);

      if (isConnected) {
        try {
          _this.connect = "Connected";

          _this.createBlockie(); // this.provider.getAccounts()

        } catch (error) {
          console.warn('failed to get accounts: ', error);
          _this.connect = "Connect Wallet";
        }
      } else {
        _this.connect = "Connect Wallet";
      }
    })();
  }

  ngOnDestroy() {
    var _a, _b, _c;

    (_a = this.accountSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    (_b = this.networkSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    (_c = this.balanceSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
  }

  onConnectTapped() {
    var _this2 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isConected = yield _this2.provider.connect();
      console.log(`onConnectTapped, isConnected = ${_this2.isConected}`);

      if (_this2.isConected) {
        _this2.connect = "Connected";

        _this2.provider.getAccounts();

        _this2.createBlockie();
      } else {
        _this2.alertService.presentNoConnectionAlert();
      }
    })();
  }

  setupListeners() {
    var _this3 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.networkSubscription = _this3.provider.networkSubject.subscribe(chainId => {
        if (chainId) {
          _this3.isCorrectNetwork = chainId.toString(16).toLowerCase() == _this3.provider.currentNetwork.chainId.toLocaleLowerCase();
          console.log(`Networks: ${chainId} <=> ${_this3.provider.currentNetwork.chainId}`);
          console.log(`isCorrectNetwork: ${_this3.isCorrectNetwork}`);
          console.log(`isConnected: ${_this3.provider.isConnected()}`);
          console.log(`currentAccount: ${_this3.provider.currentAccount}`);
          _this3.currentAccount = _this3.provider.currentAccount;
          _this3.currentNetwork = _this3.provider.currentNetwork;
          console.log(`MaskNetwork: ${_this3.provider.currentNetwork.chainId}`);
          _this3.selectedNetwork = _this3.currentNetwork.chainId;
        }
      });
    })();
  }

  switchNetwork() {
    var _this4 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.provider.addNetwork();
    })();
  }

  createBlockie() {
    var blockie = blockies.create({
      seed: this.account,
      size: 8,
      scale: 2
    });
    this.imageDataUrl = blockie.toDataURL();
  }

}

AppTopBarComponent.ɵfac = function AppTopBarComponent_Factory(t) {
  return new (t || AppTopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_1__.AppMainComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_providers_wallet_provider_service__WEBPACK_IMPORTED_MODULE_2__.WalletProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_global_alert_service__WEBPACK_IMPORTED_MODULE_3__.GlobalAlertService));
};

AppTopBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppTopBarComponent,
  selectors: [["app-topbar"]],
  decls: 17,
  vars: 13,
  consts: [[1, "layout-topbar"], ["routerLink", "", 1, "layout-topbar-logo"], ["alt", "logo", 3, "src"], ["href", "#", 1, "p-link", "layout-menu-button", "layout-topbar-button", 3, "click"], [1, "pi", "pi-bars"], ["href", "#", 1, "p-link", "layout-topbar-menu-button", "layout-topbar-button", 3, "click"], [1, "pi", "pi-ellipsis-v"], ["pButton", "", "type", "button", 1, "", 3, "disabled", "click"], [1, "layout-topbar-menu", 3, "ngClass"], [1, "p-link", "layout-topbar-button", 3, "image"], [1, "p-link", "layout-topbar-address", 3, "label", "image"], ["pButton", "", "type", "button", 1, "", 3, "click"]],
  template: function AppTopBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Angweb3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppTopBarComponent_Template_a_click_5_listener($event) {
        return ctx.appMain.toggleMenu($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppTopBarComponent_Template_a_click_7_listener($event) {
        return ctx.appMain.toggleTopMenu($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_9_listener() {
        return ctx.switchNetwork();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "switchNetwork");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "p-avatar", 9)(13, "p-chip", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "shortAddress");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_15_listener() {
        return ctx.onConnectTapped();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "assets/layout/images/", ctx.appMain.config.dark ? "logo-white" : "logo-dark", ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isCorrectNetwork);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, ctx.appMain.topMenuActive));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("image", ctx.imageDataUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 7, ctx.currentAccount, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c1)))("image", ctx.imageDataUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.connect);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, primeng_avatar__WEBPACK_IMPORTED_MODULE_9__.Avatar, primeng_chip__WEBPACK_IMPORTED_MODULE_10__.Chip],
  pipes: [_pipes_short_address_pipe__WEBPACK_IMPORTED_MODULE_4__.ShortAddressPipe],
  encapsulation: 2
});

/***/ }),

/***/ 3235:
/*!*************************************************************!*\
  !*** ./src/app/shared/layout/service/app.config.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ConfigService {
    constructor() {
        this.config = {
            theme: 'lara-light-indigo',
            dark: false,
            inputStyle: 'outlined',
            ripple: true,
        };
        this.configUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.configUpdate$ = this.configUpdate.asObservable();
    }
    updateConfig(config) {
        this.config = config;
        this.configUpdate.next(config);
    }
    getConfig() {
        return this.config;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac });


/***/ }),

/***/ 4186:
/*!***********************************************************!*\
  !*** ./src/app/shared/layout/service/app.menu.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class MenuService {
    constructor() {
        this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.menuSource$ = this.menuSource.asObservable();
        this.resetSource$ = this.resetSource.asObservable();
    }
    onMenuStateChange(key) {
        this.menuSource.next(key);
    }
    reset() {
        this.resetSource.next(true);
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });


/***/ }),

/***/ 3440:
/*!********************************************************!*\
  !*** ./src/app/shared/model/eip1193/providerErrors.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderErrors": () => (/* binding */ ProviderErrors)
/* harmony export */ });
/**
 * Provider errors as EIP-1193
 * https://eips.ethereum.org/EIPS/eip-1193
 */
const ProviderErrors = {
    '4001': {
        title: 'User Rejected',
        message: 'The user rejected the request',
    },
    '4100': {
        title: 'Unauthorized',
        message: 'The requested method and/or account has not been authorized by the user',
    },
    '4200': {
        title: 'Unsupported Method',
        message: 'The Provider does not support the requested method',
    },
    '4900': {
        title: 'Disconnected',
        message: 'The Provider is disconnected from all chains',
    },
    '4901': {
        title: 'Chain Disconnected',
        message: '	The Provider is not connected to the requested chain',
    },
};


/***/ }),

/***/ 1860:
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/blockie.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockiePipe": () => (/* binding */ BlockiePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BlockiePipe {
    transform(value, args) {
        let size = 8;
        let scale = 2;
        if (args.length >= 2) {
            size = args[0];
            scale = args[1];
        }
        return this.createBlockie(value, size, scale);
    }
    createBlockie(value, size, scale) {
        var blockie = blockies.create({
            seed: value,
            size: size,
            scale: scale
        });
        return blockie.toDataURL();
    }
}
BlockiePipe.ɵfac = function BlockiePipe_Factory(t) { return new (t || BlockiePipe)(); };
BlockiePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "blockie", type: BlockiePipe, pure: true });


/***/ }),

/***/ 6814:
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/eth-formatting.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthFormattingPipe": () => (/* binding */ EthFormattingPipe)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ 6089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class EthFormattingPipe {
    transform(value) {
        return this.formatted(value);
    }
    formatted(price) {
        if (price) {
            return ethers__WEBPACK_IMPORTED_MODULE_0__.formatEther(price);
        }
        else {
            return '-';
        }
    }
}
EthFormattingPipe.ɵfac = function EthFormattingPipe_Factory(t) { return new (t || EthFormattingPipe)(); };
EthFormattingPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "formatEth", type: EthFormattingPipe, pure: true });


/***/ }),

/***/ 1386:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/rounding-pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundingPipe": () => (/* binding */ RoundingPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class RoundingPipe {
    transform(value, args) {
        const num = +value;
        return num.toFixed(args[0]);
    }
}
RoundingPipe.ɵfac = function RoundingPipe_Factory(t) { return new (t || RoundingPipe)(); };
RoundingPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "rounding", type: RoundingPipe, pure: true });


/***/ }),

/***/ 7194:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/short-address.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortAddressPipe": () => (/* binding */ ShortAddressPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ShortAddressPipe {
    transform(value = "", args) {
        if (args.length < 3) {
            return value;
        }
        const headLength = parseInt(args[0], 10);
        const tailLength = parseInt(args[2], 10);
        const concatenator = args[1];
        const head = value.substring(0, headLength);
        const tail = value.substring(value.length - tailLength);
        return `${head}${concatenator}${tail}`;
    }
}
ShortAddressPipe.ɵfac = function ShortAddressPipe_Factory(t) { return new (t || ShortAddressPipe)(); };
ShortAddressPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shortAddress", type: ShortAddressPipe, pure: true });


/***/ }),

/***/ 1771:
/*!******************************************!*\
  !*** ./src/app/shared/primeng.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimengModule": () => (/* binding */ PrimengModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! primeng/styleclass */ 1928);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/accordion */ 5456);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/autocomplete */ 1338);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/avatar */ 9713);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/avatargroup */ 2348);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/badge */ 3758);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/breadcrumb */ 1815);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 1229);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/carousel */ 87);
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/cascadeselect */ 1828);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/chart */ 3252);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/checkbox */ 8271);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/chip */ 4580);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/chips */ 111);
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/codehighlighter */ 5763);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/confirmdialog */ 6625);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/confirmpopup */ 4296);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/colorpicker */ 634);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/contextmenu */ 5481);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dataview */ 6796);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/divider */ 9026);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dropdown */ 4086);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/fieldset */ 9246);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/fileupload */ 7197);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/galleria */ 911);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/image */ 796);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/inplace */ 5219);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/inputnumber */ 9721);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/inputmask */ 307);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/inputswitch */ 2236);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/inputtextarea */ 7288);
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/knob */ 7925);
/* harmony import */ var primeng_lightbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/lightbox */ 8866);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/listbox */ 3803);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/megamenu */ 6307);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/menu */ 5207);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/menubar */ 4050);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/messages */ 2530);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/message */ 8129);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/multiselect */ 2460);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/orderlist */ 1046);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/organizationchart */ 7430);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/overlaypanel */ 9245);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/paginator */ 1066);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/panelmenu */ 1862);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/password */ 6538);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/picklist */ 8801);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/progressbar */ 9858);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/radiobutton */ 5949);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/rating */ 8887);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/scrollpanel */ 5625);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/scrolltop */ 2071);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! primeng/selectbutton */ 5260);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/sidebar */ 9734);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/skeleton */ 7377);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/slidemenu */ 3641);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/slider */ 1298);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/splitbutton */ 831);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/splitter */ 5957);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/steps */ 7798);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/tabmenu */ 1227);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/tabview */ 2050);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/tag */ 5277);
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/terminal */ 4911);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/tieredmenu */ 7533);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/timeline */ 8554);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/togglebutton */ 4816);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/toolbar */ 1722);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/tooltip */ 1210);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/tree */ 7011);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/treeselect */ 7207);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/treetable */ 9002);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! primeng/virtualscroller */ 345);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);




















































































class PrimengModule {
}
PrimengModule.ɵfac = function PrimengModule_Factory(t) { return new (t || PrimengModule)(); };
PrimengModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrimengModule });
PrimengModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            primeng_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionModule,
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__.AutoCompleteModule,
            primeng_avatar__WEBPACK_IMPORTED_MODULE_5__.AvatarModule,
            primeng_avatargroup__WEBPACK_IMPORTED_MODULE_6__.AvatarGroupModule,
            primeng_badge__WEBPACK_IMPORTED_MODULE_7__.BadgeModule,
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_11__.CardModule,
            primeng_carousel__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
            primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_13__.CascadeSelectModule,
            primeng_chart__WEBPACK_IMPORTED_MODULE_14__.ChartModule,
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__.CheckboxModule,
            primeng_chips__WEBPACK_IMPORTED_MODULE_16__.ChipsModule,
            primeng_chip__WEBPACK_IMPORTED_MODULE_17__.ChipModule,
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_18__.CodeHighlighterModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__.ConfirmDialogModule,
            primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_20__.ConfirmPopupModule,
            primeng_colorpicker__WEBPACK_IMPORTED_MODULE_21__.ColorPickerModule,
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22__.ContextMenuModule,
            primeng_dataview__WEBPACK_IMPORTED_MODULE_23__.DataViewModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogModule,
            primeng_divider__WEBPACK_IMPORTED_MODULE_25__.DividerModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__.DropdownModule,
            primeng_fieldset__WEBPACK_IMPORTED_MODULE_27__.FieldsetModule,
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_28__.FileUploadModule,
            primeng_galleria__WEBPACK_IMPORTED_MODULE_29__.GalleriaModule,
            primeng_image__WEBPACK_IMPORTED_MODULE_30__.ImageModule,
            primeng_inplace__WEBPACK_IMPORTED_MODULE_31__.InplaceModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__.InputNumberModule,
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_33__.InputMaskModule,
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_34__.InputSwitchModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_35__.InputTextModule,
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_36__.InputTextareaModule,
            primeng_knob__WEBPACK_IMPORTED_MODULE_37__.KnobModule,
            primeng_lightbox__WEBPACK_IMPORTED_MODULE_38__.LightboxModule,
            primeng_listbox__WEBPACK_IMPORTED_MODULE_39__.ListboxModule,
            primeng_megamenu__WEBPACK_IMPORTED_MODULE_40__.MegaMenuModule,
            primeng_menu__WEBPACK_IMPORTED_MODULE_41__.MenuModule,
            primeng_menubar__WEBPACK_IMPORTED_MODULE_42__.MenubarModule,
            primeng_message__WEBPACK_IMPORTED_MODULE_43__.MessageModule,
            primeng_messages__WEBPACK_IMPORTED_MODULE_44__.MessagesModule,
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_45__.MultiSelectModule,
            primeng_orderlist__WEBPACK_IMPORTED_MODULE_46__.OrderListModule,
            primeng_organizationchart__WEBPACK_IMPORTED_MODULE_47__.OrganizationChartModule,
            primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_48__.OverlayPanelModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_49__.PaginatorModule,
            primeng_panel__WEBPACK_IMPORTED_MODULE_50__.PanelModule,
            primeng_panelmenu__WEBPACK_IMPORTED_MODULE_51__.PanelMenuModule,
            primeng_password__WEBPACK_IMPORTED_MODULE_52__.PasswordModule,
            primeng_picklist__WEBPACK_IMPORTED_MODULE_53__.PickListModule,
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_54__.ProgressBarModule,
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__.RadioButtonModule,
            primeng_rating__WEBPACK_IMPORTED_MODULE_56__.RatingModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_57__.RippleModule,
            primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_58__.ScrollPanelModule,
            primeng_scrolltop__WEBPACK_IMPORTED_MODULE_59__.ScrollTopModule,
            primeng_selectbutton__WEBPACK_IMPORTED_MODULE_60__.SelectButtonModule,
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_61__.SidebarModule,
            primeng_skeleton__WEBPACK_IMPORTED_MODULE_62__.SkeletonModule,
            primeng_slidemenu__WEBPACK_IMPORTED_MODULE_63__.SlideMenuModule,
            primeng_slider__WEBPACK_IMPORTED_MODULE_64__.SliderModule,
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_65__.SplitButtonModule,
            primeng_splitter__WEBPACK_IMPORTED_MODULE_66__.SplitterModule,
            primeng_steps__WEBPACK_IMPORTED_MODULE_67__.StepsModule,
            primeng_tag__WEBPACK_IMPORTED_MODULE_68__.TagModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_69__.TableModule,
            primeng_tabmenu__WEBPACK_IMPORTED_MODULE_70__.TabMenuModule,
            primeng_tabview__WEBPACK_IMPORTED_MODULE_71__.TabViewModule,
            primeng_terminal__WEBPACK_IMPORTED_MODULE_72__.TerminalModule,
            primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_73__.TieredMenuModule,
            primeng_timeline__WEBPACK_IMPORTED_MODULE_74__.TimelineModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_75__.ToastModule,
            primeng_togglebutton__WEBPACK_IMPORTED_MODULE_76__.ToggleButtonModule,
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_77__.ToolbarModule,
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_78__.TooltipModule,
            primeng_tree__WEBPACK_IMPORTED_MODULE_79__.TreeModule,
            primeng_treeselect__WEBPACK_IMPORTED_MODULE_80__.TreeSelectModule,
            primeng_treetable__WEBPACK_IMPORTED_MODULE_81__.TreeTableModule,
            primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_82__.VirtualScrollerModule,
            primeng_styleclass__WEBPACK_IMPORTED_MODULE_83__.StyleClassModule,
        ], primeng_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__.AutoCompleteModule,
        primeng_avatar__WEBPACK_IMPORTED_MODULE_5__.AvatarModule,
        primeng_avatargroup__WEBPACK_IMPORTED_MODULE_6__.AvatarGroupModule,
        primeng_badge__WEBPACK_IMPORTED_MODULE_7__.BadgeModule,
        primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_11__.CardModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
        primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_13__.CascadeSelectModule,
        primeng_chart__WEBPACK_IMPORTED_MODULE_14__.ChartModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__.CheckboxModule,
        primeng_chips__WEBPACK_IMPORTED_MODULE_16__.ChipsModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_17__.ChipModule,
        primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_18__.CodeHighlighterModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__.ConfirmDialogModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_20__.ConfirmPopupModule,
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_21__.ColorPickerModule,
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22__.ContextMenuModule,
        primeng_dataview__WEBPACK_IMPORTED_MODULE_23__.DataViewModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_25__.DividerModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__.DropdownModule,
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_27__.FieldsetModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_28__.FileUploadModule,
        primeng_galleria__WEBPACK_IMPORTED_MODULE_29__.GalleriaModule,
        primeng_image__WEBPACK_IMPORTED_MODULE_30__.ImageModule,
        primeng_inplace__WEBPACK_IMPORTED_MODULE_31__.InplaceModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__.InputNumberModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_33__.InputMaskModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_34__.InputSwitchModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_35__.InputTextModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_36__.InputTextareaModule,
        primeng_knob__WEBPACK_IMPORTED_MODULE_37__.KnobModule,
        primeng_lightbox__WEBPACK_IMPORTED_MODULE_38__.LightboxModule,
        primeng_listbox__WEBPACK_IMPORTED_MODULE_39__.ListboxModule,
        primeng_megamenu__WEBPACK_IMPORTED_MODULE_40__.MegaMenuModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_41__.MenuModule,
        primeng_menubar__WEBPACK_IMPORTED_MODULE_42__.MenubarModule,
        primeng_message__WEBPACK_IMPORTED_MODULE_43__.MessageModule,
        primeng_messages__WEBPACK_IMPORTED_MODULE_44__.MessagesModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_45__.MultiSelectModule,
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_46__.OrderListModule,
        primeng_organizationchart__WEBPACK_IMPORTED_MODULE_47__.OrganizationChartModule,
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_48__.OverlayPanelModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_49__.PaginatorModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_50__.PanelModule,
        primeng_panelmenu__WEBPACK_IMPORTED_MODULE_51__.PanelMenuModule,
        primeng_password__WEBPACK_IMPORTED_MODULE_52__.PasswordModule,
        primeng_picklist__WEBPACK_IMPORTED_MODULE_53__.PickListModule,
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_54__.ProgressBarModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__.RadioButtonModule,
        primeng_rating__WEBPACK_IMPORTED_MODULE_56__.RatingModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_57__.RippleModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_58__.ScrollPanelModule,
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_59__.ScrollTopModule,
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_60__.SelectButtonModule,
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_61__.SidebarModule,
        primeng_skeleton__WEBPACK_IMPORTED_MODULE_62__.SkeletonModule,
        primeng_slidemenu__WEBPACK_IMPORTED_MODULE_63__.SlideMenuModule,
        primeng_slider__WEBPACK_IMPORTED_MODULE_64__.SliderModule,
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_65__.SplitButtonModule,
        primeng_splitter__WEBPACK_IMPORTED_MODULE_66__.SplitterModule,
        primeng_steps__WEBPACK_IMPORTED_MODULE_67__.StepsModule,
        primeng_tag__WEBPACK_IMPORTED_MODULE_68__.TagModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_69__.TableModule,
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_70__.TabMenuModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_71__.TabViewModule,
        primeng_terminal__WEBPACK_IMPORTED_MODULE_72__.TerminalModule,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_73__.TieredMenuModule,
        primeng_timeline__WEBPACK_IMPORTED_MODULE_74__.TimelineModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_75__.ToastModule,
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_76__.ToggleButtonModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_77__.ToolbarModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_78__.TooltipModule,
        primeng_tree__WEBPACK_IMPORTED_MODULE_79__.TreeModule,
        primeng_treeselect__WEBPACK_IMPORTED_MODULE_80__.TreeSelectModule,
        primeng_treetable__WEBPACK_IMPORTED_MODULE_81__.TreeTableModule,
        primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_82__.VirtualScrollerModule,
        primeng_styleclass__WEBPACK_IMPORTED_MODULE_83__.StyleClassModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimengModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__.AutoCompleteModule,
        primeng_avatar__WEBPACK_IMPORTED_MODULE_5__.AvatarModule,
        primeng_avatargroup__WEBPACK_IMPORTED_MODULE_6__.AvatarGroupModule,
        primeng_badge__WEBPACK_IMPORTED_MODULE_7__.BadgeModule,
        primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_11__.CardModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
        primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_13__.CascadeSelectModule,
        primeng_chart__WEBPACK_IMPORTED_MODULE_14__.ChartModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__.CheckboxModule,
        primeng_chips__WEBPACK_IMPORTED_MODULE_16__.ChipsModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_17__.ChipModule,
        primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_18__.CodeHighlighterModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__.ConfirmDialogModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_20__.ConfirmPopupModule,
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_21__.ColorPickerModule,
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22__.ContextMenuModule,
        primeng_dataview__WEBPACK_IMPORTED_MODULE_23__.DataViewModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_25__.DividerModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__.DropdownModule,
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_27__.FieldsetModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_28__.FileUploadModule,
        primeng_galleria__WEBPACK_IMPORTED_MODULE_29__.GalleriaModule,
        primeng_image__WEBPACK_IMPORTED_MODULE_30__.ImageModule,
        primeng_inplace__WEBPACK_IMPORTED_MODULE_31__.InplaceModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__.InputNumberModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_33__.InputMaskModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_34__.InputSwitchModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_35__.InputTextModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_36__.InputTextareaModule,
        primeng_knob__WEBPACK_IMPORTED_MODULE_37__.KnobModule,
        primeng_lightbox__WEBPACK_IMPORTED_MODULE_38__.LightboxModule,
        primeng_listbox__WEBPACK_IMPORTED_MODULE_39__.ListboxModule,
        primeng_megamenu__WEBPACK_IMPORTED_MODULE_40__.MegaMenuModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_41__.MenuModule,
        primeng_menubar__WEBPACK_IMPORTED_MODULE_42__.MenubarModule,
        primeng_message__WEBPACK_IMPORTED_MODULE_43__.MessageModule,
        primeng_messages__WEBPACK_IMPORTED_MODULE_44__.MessagesModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_45__.MultiSelectModule,
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_46__.OrderListModule,
        primeng_organizationchart__WEBPACK_IMPORTED_MODULE_47__.OrganizationChartModule,
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_48__.OverlayPanelModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_49__.PaginatorModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_50__.PanelModule,
        primeng_panelmenu__WEBPACK_IMPORTED_MODULE_51__.PanelMenuModule,
        primeng_password__WEBPACK_IMPORTED_MODULE_52__.PasswordModule,
        primeng_picklist__WEBPACK_IMPORTED_MODULE_53__.PickListModule,
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_54__.ProgressBarModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__.RadioButtonModule,
        primeng_rating__WEBPACK_IMPORTED_MODULE_56__.RatingModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_57__.RippleModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_58__.ScrollPanelModule,
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_59__.ScrollTopModule,
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_60__.SelectButtonModule,
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_61__.SidebarModule,
        primeng_skeleton__WEBPACK_IMPORTED_MODULE_62__.SkeletonModule,
        primeng_slidemenu__WEBPACK_IMPORTED_MODULE_63__.SlideMenuModule,
        primeng_slider__WEBPACK_IMPORTED_MODULE_64__.SliderModule,
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_65__.SplitButtonModule,
        primeng_splitter__WEBPACK_IMPORTED_MODULE_66__.SplitterModule,
        primeng_steps__WEBPACK_IMPORTED_MODULE_67__.StepsModule,
        primeng_tag__WEBPACK_IMPORTED_MODULE_68__.TagModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_69__.TableModule,
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_70__.TabMenuModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_71__.TabViewModule,
        primeng_terminal__WEBPACK_IMPORTED_MODULE_72__.TerminalModule,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_73__.TieredMenuModule,
        primeng_timeline__WEBPACK_IMPORTED_MODULE_74__.TimelineModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_75__.ToastModule,
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_76__.ToggleButtonModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_77__.ToolbarModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_78__.TooltipModule,
        primeng_tree__WEBPACK_IMPORTED_MODULE_79__.TreeModule,
        primeng_treeselect__WEBPACK_IMPORTED_MODULE_80__.TreeSelectModule,
        primeng_treetable__WEBPACK_IMPORTED_MODULE_81__.TreeTableModule,
        primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_82__.VirtualScrollerModule,
        primeng_styleclass__WEBPACK_IMPORTED_MODULE_83__.StyleClassModule], exports: [primeng_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__.AutoCompleteModule,
        primeng_avatar__WEBPACK_IMPORTED_MODULE_5__.AvatarModule,
        primeng_avatargroup__WEBPACK_IMPORTED_MODULE_6__.AvatarGroupModule,
        primeng_badge__WEBPACK_IMPORTED_MODULE_7__.BadgeModule,
        primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.CalendarModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_11__.CardModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
        primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_13__.CascadeSelectModule,
        primeng_chart__WEBPACK_IMPORTED_MODULE_14__.ChartModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__.CheckboxModule,
        primeng_chips__WEBPACK_IMPORTED_MODULE_16__.ChipsModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_17__.ChipModule,
        primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_18__.CodeHighlighterModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__.ConfirmDialogModule,
        primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_20__.ConfirmPopupModule,
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_21__.ColorPickerModule,
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_22__.ContextMenuModule,
        primeng_dataview__WEBPACK_IMPORTED_MODULE_23__.DataViewModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_24__.DialogModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_25__.DividerModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__.DropdownModule,
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_27__.FieldsetModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_28__.FileUploadModule,
        primeng_galleria__WEBPACK_IMPORTED_MODULE_29__.GalleriaModule,
        primeng_image__WEBPACK_IMPORTED_MODULE_30__.ImageModule,
        primeng_inplace__WEBPACK_IMPORTED_MODULE_31__.InplaceModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_32__.InputNumberModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_33__.InputMaskModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_34__.InputSwitchModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_35__.InputTextModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_36__.InputTextareaModule,
        primeng_knob__WEBPACK_IMPORTED_MODULE_37__.KnobModule,
        primeng_lightbox__WEBPACK_IMPORTED_MODULE_38__.LightboxModule,
        primeng_listbox__WEBPACK_IMPORTED_MODULE_39__.ListboxModule,
        primeng_megamenu__WEBPACK_IMPORTED_MODULE_40__.MegaMenuModule,
        primeng_menu__WEBPACK_IMPORTED_MODULE_41__.MenuModule,
        primeng_menubar__WEBPACK_IMPORTED_MODULE_42__.MenubarModule,
        primeng_message__WEBPACK_IMPORTED_MODULE_43__.MessageModule,
        primeng_messages__WEBPACK_IMPORTED_MODULE_44__.MessagesModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_45__.MultiSelectModule,
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_46__.OrderListModule,
        primeng_organizationchart__WEBPACK_IMPORTED_MODULE_47__.OrganizationChartModule,
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_48__.OverlayPanelModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_49__.PaginatorModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_50__.PanelModule,
        primeng_panelmenu__WEBPACK_IMPORTED_MODULE_51__.PanelMenuModule,
        primeng_password__WEBPACK_IMPORTED_MODULE_52__.PasswordModule,
        primeng_picklist__WEBPACK_IMPORTED_MODULE_53__.PickListModule,
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_54__.ProgressBarModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__.RadioButtonModule,
        primeng_rating__WEBPACK_IMPORTED_MODULE_56__.RatingModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_57__.RippleModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_58__.ScrollPanelModule,
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_59__.ScrollTopModule,
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_60__.SelectButtonModule,
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_61__.SidebarModule,
        primeng_skeleton__WEBPACK_IMPORTED_MODULE_62__.SkeletonModule,
        primeng_slidemenu__WEBPACK_IMPORTED_MODULE_63__.SlideMenuModule,
        primeng_slider__WEBPACK_IMPORTED_MODULE_64__.SliderModule,
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_65__.SplitButtonModule,
        primeng_splitter__WEBPACK_IMPORTED_MODULE_66__.SplitterModule,
        primeng_steps__WEBPACK_IMPORTED_MODULE_67__.StepsModule,
        primeng_tag__WEBPACK_IMPORTED_MODULE_68__.TagModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_69__.TableModule,
        primeng_tabmenu__WEBPACK_IMPORTED_MODULE_70__.TabMenuModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_71__.TabViewModule,
        primeng_terminal__WEBPACK_IMPORTED_MODULE_72__.TerminalModule,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_73__.TieredMenuModule,
        primeng_timeline__WEBPACK_IMPORTED_MODULE_74__.TimelineModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_75__.ToastModule,
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_76__.ToggleButtonModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_77__.ToolbarModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_78__.TooltipModule,
        primeng_tree__WEBPACK_IMPORTED_MODULE_79__.TreeModule,
        primeng_treeselect__WEBPACK_IMPORTED_MODULE_80__.TreeSelectModule,
        primeng_treetable__WEBPACK_IMPORTED_MODULE_81__.TreeTableModule,
        primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_82__.VirtualScrollerModule,
        primeng_styleclass__WEBPACK_IMPORTED_MODULE_83__.StyleClassModule] }); })();


/***/ }),

/***/ 5687:
/*!*************************************************************!*\
  !*** ./src/app/shared/providers/wallet-provider.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletProviderService": () => (/* binding */ WalletProviderService)
/* harmony export */ });
/* harmony import */ var _Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ 352);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ 2039);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @metamask/detect-provider */ 2890);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);






class WalletProviderService {
  constructor() {
    this.connectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.accountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.networkSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.initializeNetworkConnection();
  }

  connect() {
    var _this = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let ethereum = yield _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default()();
        console.log('ethereum = ', ethereum);

        if (ethereum) {
          yield _this.startApp(ethereum);
          return ethereum != undefined;
        } else {
          return false;
        }
      } catch (error) {
        console.error('unable to detect ethereum provider: ', error);
        return false;
      }
    })();
  }

  isConnected() {
    return this.currentAccount != null && this.currentAccount != undefined;
  }

  startApp(ethereum) {
    var _this2 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.Web3Provider(ethereum, 'any');
      _this2.signer = yield _this2.provider.getSigner();

      _this2.registerHandlers();

      if (ethereum.selectedAddress) {
        ethereum.enable();

        _this2.setCurrentAccount(ethereum.selectedAddress);
      } else {} // if (provider !== window.ethereum) {
      //   console.error('multiple wallets installed')
      // } else {
      //   let trySigner = await eth.getSigner()
      //   console.log('trySigner = ', trySigner)
      // }

    })();
  }

  addNetwork() {
    var _this3 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.provider || !_this3.currentNetwork) {
        return;
      }

      console.log('about to add: ', _this3.currentNetwork);

      _this3.provider.send('wallet_addEthereumChain', [_this3.currentNetwork]).catch(error => {
        console.log(error);
      });
    })();
  }

  addToken(address, symbol, decimals, image) {
    var _this4 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.provider.send('wallet_watchAsset', {
        type: 'ERC20',
        options: {
          address,
          symbol,
          decimals,
          image
        }
      }).then(success => {
        if (success) {
          console.log('successfully added to wallet!');
        } else {
          throw new Error('Something went wrong.');
        }
      }).catch(console.error);
    })();
  }

  getAccounts() {
    var _this5 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.provider) {
        return;
      }

      console.log('getting accounts');
      const accounts = yield _this5.provider.send('eth_requestAccounts', []);

      if (accounts.length > 0) {
        _this5.setCurrentAccount(accounts[0]);
      } else {
        let accounts = yield _this5.enableEthereum();

        if (accounts.length > 0) {
          _this5.setCurrentAccount(accounts[0]);
        } else {
          _this5.setCurrentAccount(null);
        }
      }

      _this5.signer = _this5.provider.getSigner();
      console.log('signer is now ', _this5.signer);
      return accounts;
    })();
  }

  getUserAccountAddressSubject() {
    return this.accountSubject.asObservable();
  }

  getaccountSubject() {
    return this.accountSubject.asObservable();
  }

  getnetworkSubject() {
    return this.networkSubject.asObservable();
  }

  disconnect() {// not the right call
    // await this.ethereum.disconnect()

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  checkBalance() {
    var _this6 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.currentAccount) {
        return yield _this6.provider.getBalance(_this6.currentAccount);
      } else {
        return ethers__WEBPACK_IMPORTED_MODULE_5__.BigNumber.from(0);
      }
    })();
  }

  balanceIsOver(value) {
    var _this7 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.currentAccount) {
        const balance = yield _this7.provider.getBalance(_this7.currentAccount);
        console.log(`Balance=${balance}, value=${value}`);
        return balance.gt(value); // must be strictly > to account for gas cost.
      } else {
        return false;
      }
    })();
  }

  enableEthereum() {
    var _this8 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this8.provider.enable();
    })();
  }

  registerHandlers() {
    var _this9 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('registering handlers');

      _this9.provider.on('connect', _this9.handleAccountConnected.bind(_this9));

      _this9.provider.on('disconnect', _this9.handleAccountDisconnected.bind(_this9));

      _this9.provider.on('network', _this9.handledChainChanged.bind(_this9));

      _this9.provider.on('accountsChanged', _this9.handleAccountChanged.bind(_this9));

      _this9.provider.on('chainChanged', _chainId => window.location.reload());
    })();
  }

  handleAccountConnected(accounts) {
    console.log('>>> Account connected: ', accounts);
  }

  handleAccountDisconnected(accounts) {
    console.log('>>> Account disconnected: ', accounts);
  }

  handledChainChanged(network) {
    console.log('>>> Chain changed to: ', network);
    this.networkSubject.next(this.getHexString(network.chainId));
  }

  handleAccountChanged(accounts) {
    if (accounts.length > 0) {
      this.setCurrentAccount(accounts[0]);
    } else {
      this.setCurrentAccount(null);
    }

    console.log('>>> Account changed to: ', accounts);
  }

  setCurrentAccount(account) {
    this.currentAccount = account;
    this.accountSubject.next(account);
  }

  initializeNetworkConnection() {
    let eth = window.ethereum;

    if (eth) {
      let hexVersion = this.getHexString(eth.networkVersion);
      console.log('current network version is: ', hexVersion);
      this.handledChainChanged(hexVersion);
    } else {
      console.log('no ethereum');
    }

    let cNetwork = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.config.networkParams;

    if (cNetwork && cNetwork.chainId) {}

    this.currentNetwork = cNetwork;
    this.currentConfig = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.config;
  }

  getHexString(networkCode) {
    return `0x${(+networkCode).toString(16)}`;
  }

  currencyName() {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.config.networkParams.nativeCurrency.symbol;
  }

  onboard() {}

}

WalletProviderService.ɵfac = function WalletProviderService_Factory(t) {
  return new (t || WalletProviderService)();
};

WalletProviderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: WalletProviderService,
  factory: WalletProviderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _primeng_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primeng.module */ 1771);
/* harmony import */ var _global_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-alert.service */ 9834);
/* harmony import */ var _pipes_blockie_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/blockie.pipe */ 1860);
/* harmony import */ var _pipes_eth_formatting_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/eth-formatting.pipe */ 6814);
/* harmony import */ var _pipes_rounding_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/rounding-pipe */ 1386);
/* harmony import */ var _pipes_short_address_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/short-address.pipe */ 7194);
/* harmony import */ var _layout_app_config_app_config_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/app-config/app.config.component */ 9684);
/* harmony import */ var _layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/app-footer/app.footer.component */ 5854);
/* harmony import */ var _layout_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/app-main/app.main.component */ 7127);
/* harmony import */ var _layout_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/app-menu/app.menu.component */ 2826);
/* harmony import */ var _layout_app_menu_app_menuitem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/app-menu/app.menuitem.component */ 9181);
/* harmony import */ var _layout_app_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/app-topbar/app.topbar.component */ 5972);
/* harmony import */ var _layout_service_app_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/service/app.config.service */ 3235);
/* harmony import */ var _layout_service_app_menu_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/service/app.menu.service */ 4186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toast */ 2802);




















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_global_alert_service__WEBPACK_IMPORTED_MODULE_1__.GlobalAlertService, _layout_service_app_menu_service__WEBPACK_IMPORTED_MODULE_13__.MenuService,
        _layout_service_app_config_service__WEBPACK_IMPORTED_MODULE_12__.ConfigService,], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimengModule
        ], _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimengModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_short_address_pipe__WEBPACK_IMPORTED_MODULE_5__.ShortAddressPipe,
        _pipes_eth_formatting_pipe__WEBPACK_IMPORTED_MODULE_3__.EthFormattingPipe,
        _pipes_blockie_pipe__WEBPACK_IMPORTED_MODULE_2__.BlockiePipe,
        _pipes_rounding_pipe__WEBPACK_IMPORTED_MODULE_4__.RoundingPipe,
        _layout_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_8__.AppMainComponent,
        _layout_app_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_11__.AppTopBarComponent,
        _layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_7__.AppFooterComponent,
        _layout_app_config_app_config_component__WEBPACK_IMPORTED_MODULE_6__.AppConfigComponent,
        _layout_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_9__.AppMenuComponent,
        _layout_app_menu_app_menuitem_component__WEBPACK_IMPORTED_MODULE_10__.AppMenuitemComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimengModule], exports: [_layout_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_8__.AppMainComponent,
        _layout_app_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_11__.AppTopBarComponent,
        _layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_7__.AppFooterComponent,
        _layout_app_config_app_config_component__WEBPACK_IMPORTED_MODULE_6__.AppConfigComponent,
        _layout_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_9__.AppMenuComponent,
        _layout_app_menu_app_menuitem_component__WEBPACK_IMPORTED_MODULE_10__.AppMenuitemComponent,
        _pipes_short_address_pipe__WEBPACK_IMPORTED_MODULE_5__.ShortAddressPipe,
        _pipes_eth_formatting_pipe__WEBPACK_IMPORTED_MODULE_3__.EthFormattingPipe,
        _pipes_blockie_pipe__WEBPACK_IMPORTED_MODULE_2__.BlockiePipe,
        _pipes_rounding_pipe__WEBPACK_IMPORTED_MODULE_4__.RoundingPipe,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimengModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetComponentScope"](_layout_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_8__.AppMainComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _layout_app_topbar_app_topbar_component__WEBPACK_IMPORTED_MODULE_11__.AppTopBarComponent,
    _layout_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_9__.AppMenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_7__.AppFooterComponent,
    _layout_app_config_app_config_component__WEBPACK_IMPORTED_MODULE_6__.AppConfigComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, primeng_toast__WEBPACK_IMPORTED_MODULE_18__.Toast], []);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    environmentName: 'Avalanche Testnet C-Chain',
    jsonRpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
    config: {
        contracts: {
            USDC: '',
            mUSDC: '',
            WrappedNative: '',
            Faucet: '',
            Greeter: "0x2b7Ca997504485BFA6dDED203A25F8aAFc9496A8",
        },
        networkParams: {
            chainId: '0xA869',
            chainName: 'Avalanche Testnet C-Chain',
            nativeCurrency: {
                name: 'Avalanche',
                symbol: 'AVAX',
                decimals: 18
            },
            rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
            blockExplorerUrls: ['https://testnet.snowtrace.io/']
        },
        ui: {
            chainName: 'Avalanche',
            logo: '/assets/logos/avalanche-avax-logo.png',
            txUrlPrefix: 'https://testnet.snowtrace.io/tx/'
        }
    },
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6601:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map