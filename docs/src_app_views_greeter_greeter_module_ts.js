"use strict";
(self["webpackChunkAngweb3"] = self["webpackChunkAngweb3"] || []).push([["src_app_views_greeter_greeter_module_ts"],{

/***/ 1479:
/*!**********************************************!*\
  !*** ./src/app/contracts/greeter.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreeterService": () => (/* binding */ GreeterService)
/* harmony export */ });
/* harmony import */ var _Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ 8838);
/* harmony import */ var _artifacts_Greeter_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artifacts/Greeter.json */ 8785);
/* harmony import */ var _shared_providers_default_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/providers/default-provider.service */ 1317);
/* harmony import */ var _shared_providers_wallet_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/providers/wallet-provider.service */ 5687);
/* harmony import */ var _shared_model_eip1193_providerErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/model/eip1193/providerErrors */ 3440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);











class GreeterService {
  constructor(provider, wallet, http) {
    this.provider = provider;
    this.wallet = wallet;
    this.http = http;
    this.greeterContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(wallet.currentConfig.contracts.Greeter, _artifacts_Greeter_json__WEBPACK_IMPORTED_MODULE_1__.abi, provider.provider);
  }

  greet() {
    var _this = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let greet = yield _this.greeterContract.greet();
      return greet;
    })();
  }

  setGreeting(greeting) {
    var _this2 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let greet = _this2.greeterContract.connect(_this2.wallet.signer).setGreeting(greeting).then(() => {}).catch(err => {
        if (err.code == 4001) {
          console.error("error", _shared_model_eip1193_providerErrors__WEBPACK_IMPORTED_MODULE_4__.ProviderErrors[err.code].title);
        }
      });

      return greet;
    })();
  }

}

GreeterService.ɵfac = function GreeterService_Factory(t) {
  return new (t || GreeterService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_providers_default_provider_service__WEBPACK_IMPORTED_MODULE_2__.DefaultProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_providers_wallet_provider_service__WEBPACK_IMPORTED_MODULE_3__.WalletProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
};

GreeterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: GreeterService,
  factory: GreeterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1317:
/*!**************************************************************!*\
  !*** ./src/app/shared/providers/default-provider.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultProviderService": () => (/* binding */ DefaultProviderService)
/* harmony export */ });
/* harmony import */ var _Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ 9127);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class DefaultProviderService {
  constructor() {
    this.provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.JsonRpcProvider(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jsonRpcUrl);
  }

  getBlockNumber() {
    var _this = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const blockNumber = yield _this.provider.getBlockNumber();
      console.log('block number is: ', blockNumber);
    })();
  }

  getNetwork() {
    var _this2 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const getNetwork = yield _this2.provider.getNetwork;
      console.log(' Network is: ', getNetwork);
    })();
  }

  getGasPrice() {
    var _this3 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const GasPrice = yield _this3.provider.getGasPrice;
      console.log(' GasPrice is: ', GasPrice);
    })();
  }

  getBalance(address) {
    var _this4 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const balance = yield _this4.provider.getBalance(address);
      console.log(' balance is: ', balance);
    })();
  }

}

DefaultProviderService.ɵfac = function DefaultProviderService_Factory(t) {
  return new (t || DefaultProviderService)();
};

DefaultProviderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DefaultProviderService,
  factory: DefaultProviderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3536:
/*!*******************************************************!*\
  !*** ./src/app/views/greeter/greet-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreetRoutingModule": () => (/* binding */ GreetRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_layout_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/layout/app-main/app.main.component */ 7127);
/* harmony import */ var _greet_greet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greet/greet.component */ 4788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: src_app_shared_layout_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_0__.AppMainComponent,
        children: [{ path: '', component: _greet_greet_component__WEBPACK_IMPORTED_MODULE_1__.GreetComponent }],
    }
];
class GreetRoutingModule {
}
GreetRoutingModule.ɵfac = function GreetRoutingModule_Factory(t) { return new (t || GreetRoutingModule)(); };
GreetRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GreetRoutingModule });
GreetRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GreetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 4788:
/*!********************************************************!*\
  !*** ./src/app/views/greeter/greet/greet.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreetComponent": () => (/* binding */ GreetComponent)
/* harmony export */ });
/* harmony import */ var _Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_contracts_greeter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/contracts/greeter.service */ 1479);
/* harmony import */ var src_app_shared_providers_wallet_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/providers/wallet-provider.service */ 5687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 5583);











class GreetComponent {
  constructor(wallet, greeterService) {
    this.wallet = wallet;
    this.greeterService = greeterService;
    this.gform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      saysame: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
    });
  }

  greetMe() {
    var _this = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.greet = yield _this.greeterService.greet();
      console.log(_this.greet);
    })();
  }

  onApproveClicked() {
    var _this2 = this;

    return (0,_Users_muratonurkaradeniz_workspace_sade_code_clone_Angular_web3_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('onApproveClicked');
      yield _this2.greeterService.setGreeting(_this2.gform.value.saysame);
    })();
  }

}

GreetComponent.ɵfac = function GreetComponent_Factory(t) {
  return new (t || GreetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_providers_wallet_provider_service__WEBPACK_IMPORTED_MODULE_2__.WalletProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_contracts_greeter_service__WEBPACK_IMPORTED_MODULE_1__.GreeterService));
};

GreetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: GreetComponent,
  selectors: [["app-greet"]],
  decls: 22,
  vars: 2,
  consts: [[1, "grid"], [1, "col-12", "md:col-6"], [1, "card", "p-fluid"], [1, "formgroup-inline"], [1, "field"], ["pButton", "", "pRipple", "", "type", "button", "label", "Get Greet", 1, "p-button-secondary", "mr-2", "mb-2", 3, "click"], [1, "font-medium", "ml-2"], [1, "normal-text-color", 3, "formGroup"], [1, "col-12", "md:col-4"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], ["type", "text", "pInputText", "", "placeholder", "sayed", "formControlName", "saysame"], ["pButton", "", "pRipple", "", "type", "button", "label", "Write", 1, "p-button-secondary", "mr-2", "mb-2", 3, "click"]],
  template: function GreetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Read Contract");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GreetComponent_Template_button_click_7_listener() {
        return ctx.greetMe();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 1)(12, "div", 2)(13, "form", 7)(14, "div", 8)(15, "div", 9)(16, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Say Sameting");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 8)(20, "div", 9)(21, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GreetComponent_Template_button_click_21_listener() {
        return ctx.onApproveClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.greet, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.gform);
    }
  },
  directives: [primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmVldC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 9700:
/*!*************************************************!*\
  !*** ./src/app/views/greeter/greeter.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreeterModule": () => (/* binding */ GreeterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _greet_greet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greet/greet.component */ 4788);
/* harmony import */ var _greet_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greet-routing.module */ 3536);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class GreeterModule {
}
GreeterModule.ɵfac = function GreeterModule_Factory(t) { return new (t || GreeterModule)(); };
GreeterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GreeterModule });
GreeterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _greet_routing_module__WEBPACK_IMPORTED_MODULE_1__.GreetRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GreeterModule, { declarations: [_greet_greet_component__WEBPACK_IMPORTED_MODULE_0__.GreetComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _greet_routing_module__WEBPACK_IMPORTED_MODULE_1__.GreetRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 5667:
/*!*************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/_version.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
const version = "abi/5.6.1";


/***/ }),

/***/ 9625:
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/abi-coder.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbiCoder": () => (/* binding */ AbiCoder),
/* harmony export */   "defaultAbiCoder": () => (/* binding */ defaultAbiCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ethersproject/bytes */ 9887);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ 5111);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 3686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ 5667);
/* harmony import */ var _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./coders/abstract-coder */ 822);
/* harmony import */ var _coders_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coders/address */ 6539);
/* harmony import */ var _coders_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coders/array */ 754);
/* harmony import */ var _coders_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coders/boolean */ 4401);
/* harmony import */ var _coders_bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coders/bytes */ 5812);
/* harmony import */ var _coders_fixed_bytes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coders/fixed-bytes */ 7290);
/* harmony import */ var _coders_null__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coders/null */ 8159);
/* harmony import */ var _coders_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coders/number */ 2183);
/* harmony import */ var _coders_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coders/string */ 330);
/* harmony import */ var _coders_tuple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coders/tuple */ 3076);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fragments */ 6935);

// See: https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI




const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);











const paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
const paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
class AbiCoder {
    constructor(coerceFunc) {
        logger.checkNew(new.target, AbiCoder);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "coerceFunc", coerceFunc || null);
    }
    _getCoder(param) {
        switch (param.baseType) {
            case "address":
                return new _coders_address__WEBPACK_IMPORTED_MODULE_3__.AddressCoder(param.name);
            case "bool":
                return new _coders_boolean__WEBPACK_IMPORTED_MODULE_4__.BooleanCoder(param.name);
            case "string":
                return new _coders_string__WEBPACK_IMPORTED_MODULE_5__.StringCoder(param.name);
            case "bytes":
                return new _coders_bytes__WEBPACK_IMPORTED_MODULE_6__.BytesCoder(param.name);
            case "array":
                return new _coders_array__WEBPACK_IMPORTED_MODULE_7__.ArrayCoder(this._getCoder(param.arrayChildren), param.arrayLength, param.name);
            case "tuple":
                return new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder((param.components || []).map((component) => {
                    return this._getCoder(component);
                }), param.name);
            case "":
                return new _coders_null__WEBPACK_IMPORTED_MODULE_9__.NullCoder(param.name);
        }
        // u?int[0-9]*
        let match = param.type.match(paramTypeNumber);
        if (match) {
            let size = parseInt(match[2] || "256");
            if (size === 0 || size > 256 || (size % 8) !== 0) {
                logger.throwArgumentError("invalid " + match[1] + " bit length", "param", param);
            }
            return new _coders_number__WEBPACK_IMPORTED_MODULE_10__.NumberCoder(size / 8, (match[1] === "int"), param.name);
        }
        // bytes[0-9]+
        match = param.type.match(paramTypeBytes);
        if (match) {
            let size = parseInt(match[1]);
            if (size === 0 || size > 32) {
                logger.throwArgumentError("invalid bytes length", "param", param);
            }
            return new _coders_fixed_bytes__WEBPACK_IMPORTED_MODULE_11__.FixedBytesCoder(size, param.name);
        }
        return logger.throwArgumentError("invalid type", "type", param.type);
    }
    _getWordSize() { return 32; }
    _getReader(data, allowLoose) {
        return new _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_12__.Reader(data, this._getWordSize(), this.coerceFunc, allowLoose);
    }
    _getWriter() {
        return new _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_12__.Writer(this._getWordSize());
    }
    getDefaultValue(types) {
        const coders = types.map((type) => this._getCoder(_fragments__WEBPACK_IMPORTED_MODULE_13__.ParamType.from(type)));
        const coder = new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder(coders, "_");
        return coder.defaultValue();
    }
    encode(types, values) {
        if (types.length !== values.length) {
            logger.throwError("types/values length mismatch", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
                count: { types: types.length, values: values.length },
                value: { types: types, values: values }
            });
        }
        const coders = types.map((type) => this._getCoder(_fragments__WEBPACK_IMPORTED_MODULE_13__.ParamType.from(type)));
        const coder = (new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder(coders, "_"));
        const writer = this._getWriter();
        coder.encode(writer, values);
        return writer.data;
    }
    decode(types, data, loose) {
        const coders = types.map((type) => this._getCoder(_fragments__WEBPACK_IMPORTED_MODULE_13__.ParamType.from(type)));
        const coder = new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder(coders, "_");
        return coder.decode(this._getReader((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_14__.arrayify)(data), loose));
    }
}
const defaultAbiCoder = new AbiCoder();


/***/ }),

/***/ 822:
/*!**************************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Coder": () => (/* binding */ Coder),
/* harmony export */   "Reader": () => (/* binding */ Reader),
/* harmony export */   "Writer": () => (/* binding */ Writer),
/* harmony export */   "checkResultErrors": () => (/* binding */ checkResultErrors)
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/bytes */ 9887);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/bignumber */ 2039);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ 5111);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 3686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version */ 5667);






const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
function checkResultErrors(result) {
    // Find the first error (if any)
    const errors = [];
    const checkErrors = function (path, object) {
        if (!Array.isArray(object)) {
            return;
        }
        for (let key in object) {
            const childPath = path.slice();
            childPath.push(key);
            try {
                checkErrors(childPath, object[key]);
            }
            catch (error) {
                errors.push({ path: childPath, error: error });
            }
        }
    };
    checkErrors([], result);
    return errors;
}
class Coder {
    constructor(name, type, localName, dynamic) {
        // @TODO: defineReadOnly these
        this.name = name;
        this.type = type;
        this.localName = localName;
        this.dynamic = dynamic;
    }
    _throwError(message, value) {
        logger.throwArgumentError(message, this.localName, value);
    }
}
class Writer {
    constructor(wordSize) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "wordSize", wordSize || 32);
        this._data = [];
        this._dataLength = 0;
        this._padding = new Uint8Array(wordSize);
    }
    get data() {
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)(this._data);
    }
    get length() { return this._dataLength; }
    _writeData(data) {
        this._data.push(data);
        this._dataLength += data.length;
        return data.length;
    }
    appendWriter(writer) {
        return this._writeData((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)(writer._data));
    }
    // Arrayish items; padded on the right to wordSize
    writeBytes(value) {
        let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(value);
        const paddingOffset = bytes.length % this.wordSize;
        if (paddingOffset) {
            bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([bytes, this._padding.slice(paddingOffset)]);
        }
        return this._writeData(bytes);
    }
    _getValue(value) {
        let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(value));
        if (bytes.length > this.wordSize) {
            logger.throwError("value out-of-bounds", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN, {
                length: this.wordSize,
                offset: bytes.length
            });
        }
        if (bytes.length % this.wordSize) {
            bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([this._padding.slice(bytes.length % this.wordSize), bytes]);
        }
        return bytes;
    }
    // BigNumberish items; padded on the left to wordSize
    writeValue(value) {
        return this._writeData(this._getValue(value));
    }
    writeUpdatableValue() {
        const offset = this._data.length;
        this._data.push(this._padding);
        this._dataLength += this.wordSize;
        return (value) => {
            this._data[offset] = this._getValue(value);
        };
    }
}
class Reader {
    constructor(data, wordSize, coerceFunc, allowLoose) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "_data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(data));
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "wordSize", wordSize || 32);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "_coerceFunc", coerceFunc);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "allowLoose", allowLoose);
        this._offset = 0;
    }
    get data() { return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(this._data); }
    get consumed() { return this._offset; }
    // The default Coerce function
    static coerce(name, value) {
        let match = name.match("^u?int([0-9]+)$");
        if (match && parseInt(match[1]) <= 48) {
            value = value.toNumber();
        }
        return value;
    }
    coerce(name, value) {
        if (this._coerceFunc) {
            return this._coerceFunc(name, value);
        }
        return Reader.coerce(name, value);
    }
    _peekBytes(offset, length, loose) {
        let alignedLength = Math.ceil(length / this.wordSize) * this.wordSize;
        if (this._offset + alignedLength > this._data.length) {
            if (this.allowLoose && loose && this._offset + length <= this._data.length) {
                alignedLength = length;
            }
            else {
                logger.throwError("data out-of-bounds", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN, {
                    length: this._data.length,
                    offset: this._offset + alignedLength
                });
            }
        }
        return this._data.slice(this._offset, this._offset + alignedLength);
    }
    subReader(offset) {
        return new Reader(this._data.slice(this._offset + offset), this.wordSize, this._coerceFunc, this.allowLoose);
    }
    readBytes(length, loose) {
        let bytes = this._peekBytes(0, length, !!loose);
        this._offset += bytes.length;
        // @TODO: Make sure the length..end bytes are all 0?
        return bytes.slice(0, length);
    }
    readValue() {
        return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(this.readBytes(this.wordSize));
    }
}


/***/ }),

/***/ 6539:
/*!*******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/address.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressCoder": () => (/* binding */ AddressCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/address */ 8394);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/bytes */ 9887);
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 822);




class AddressCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(localName) {
        super("address", "address", localName, false);
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000";
    }
    encode(writer, value) {
        try {
            value = (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_1__.getAddress)(value);
        }
        catch (error) {
            this._throwError(error.message, value);
        }
        return writer.writeValue(value);
    }
    decode(reader) {
        return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_1__.getAddress)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexZeroPad)(reader.readValue().toHexString(), 20));
    }
}


/***/ }),

/***/ 2116:
/*!*********************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/anonymous.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnonymousCoder": () => (/* binding */ AnonymousCoder)
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 822);


// Clones the functionality of an existing Coder, but without a localName
class AnonymousCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(coder) {
        super(coder.name, coder.type, undefined, coder.dynamic);
        this.coder = coder;
    }
    defaultValue() {
        return this.coder.defaultValue();
    }
    encode(writer, value) {
        return this.coder.encode(writer, value);
    }
    decode(reader) {
        return this.coder.decode(reader);
    }
}


/***/ }),

/***/ 754:
/*!*****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayCoder": () => (/* binding */ ArrayCoder),
/* harmony export */   "pack": () => (/* binding */ pack),
/* harmony export */   "unpack": () => (/* binding */ unpack)
/* harmony export */ });
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 3686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version */ 5667);
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-coder */ 822);
/* harmony import */ var _anonymous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anonymous */ 2116);



const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);


function pack(writer, coders, values) {
    let arrayValues = null;
    if (Array.isArray(values)) {
        arrayValues = values;
    }
    else if (values && typeof (values) === "object") {
        let unique = {};
        arrayValues = coders.map((coder) => {
            const name = coder.localName;
            if (!name) {
                logger.throwError("cannot encode object for signature with missing names", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
                    argument: "values",
                    coder: coder,
                    value: values
                });
            }
            if (unique[name]) {
                logger.throwError("cannot encode object for signature with duplicate names", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
                    argument: "values",
                    coder: coder,
                    value: values
                });
            }
            unique[name] = true;
            return values[name];
        });
    }
    else {
        logger.throwArgumentError("invalid tuple value", "tuple", values);
    }
    if (coders.length !== arrayValues.length) {
        logger.throwArgumentError("types/value length mismatch", "tuple", values);
    }
    let staticWriter = new _abstract_coder__WEBPACK_IMPORTED_MODULE_2__.Writer(writer.wordSize);
    let dynamicWriter = new _abstract_coder__WEBPACK_IMPORTED_MODULE_2__.Writer(writer.wordSize);
    let updateFuncs = [];
    coders.forEach((coder, index) => {
        let value = arrayValues[index];
        if (coder.dynamic) {
            // Get current dynamic offset (for the future pointer)
            let dynamicOffset = dynamicWriter.length;
            // Encode the dynamic value into the dynamicWriter
            coder.encode(dynamicWriter, value);
            // Prepare to populate the correct offset once we are done
            let updateFunc = staticWriter.writeUpdatableValue();
            updateFuncs.push((baseOffset) => {
                updateFunc(baseOffset + dynamicOffset);
            });
        }
        else {
            coder.encode(staticWriter, value);
        }
    });
    // Backfill all the dynamic offsets, now that we know the static length
    updateFuncs.forEach((func) => { func(staticWriter.length); });
    let length = writer.appendWriter(staticWriter);
    length += writer.appendWriter(dynamicWriter);
    return length;
}
function unpack(reader, coders) {
    let values = [];
    // A reader anchored to this base
    let baseReader = reader.subReader(0);
    coders.forEach((coder) => {
        let value = null;
        if (coder.dynamic) {
            let offset = reader.readValue();
            let offsetReader = baseReader.subReader(offset.toNumber());
            try {
                value = coder.decode(offsetReader);
            }
            catch (error) {
                // Cannot recover from this
                if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN) {
                    throw error;
                }
                value = error;
                value.baseType = coder.name;
                value.name = coder.localName;
                value.type = coder.type;
            }
        }
        else {
            try {
                value = coder.decode(reader);
            }
            catch (error) {
                // Cannot recover from this
                if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN) {
                    throw error;
                }
                value = error;
                value.baseType = coder.name;
                value.name = coder.localName;
                value.type = coder.type;
            }
        }
        if (value != undefined) {
            values.push(value);
        }
    });
    // We only output named properties for uniquely named coders
    const uniqueNames = coders.reduce((accum, coder) => {
        const name = coder.localName;
        if (name) {
            if (!accum[name]) {
                accum[name] = 0;
            }
            accum[name]++;
        }
        return accum;
    }, {});
    // Add any named parameters (i.e. tuples)
    coders.forEach((coder, index) => {
        let name = coder.localName;
        if (!name || uniqueNames[name] !== 1) {
            return;
        }
        if (name === "length") {
            name = "_length";
        }
        if (values[name] != null) {
            return;
        }
        const value = values[index];
        if (value instanceof Error) {
            Object.defineProperty(values, name, {
                enumerable: true,
                get: () => { throw value; }
            });
        }
        else {
            values[name] = value;
        }
    });
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if (value instanceof Error) {
            Object.defineProperty(values, i, {
                enumerable: true,
                get: () => { throw value; }
            });
        }
    }
    return Object.freeze(values);
}
class ArrayCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_2__.Coder {
    constructor(coder, length, localName) {
        const type = (coder.type + "[" + (length >= 0 ? length : "") + "]");
        const dynamic = (length === -1 || coder.dynamic);
        super("array", type, localName, dynamic);
        this.coder = coder;
        this.length = length;
    }
    defaultValue() {
        // Verifies the child coder is valid (even if the array is dynamic or 0-length)
        const defaultChild = this.coder.defaultValue();
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(defaultChild);
        }
        return result;
    }
    encode(writer, value) {
        if (!Array.isArray(value)) {
            this._throwError("expected array value", value);
        }
        let count = this.length;
        if (count === -1) {
            count = value.length;
            writer.writeValue(value.length);
        }
        logger.checkArgumentCount(value.length, count, "coder array" + (this.localName ? (" " + this.localName) : ""));
        let coders = [];
        for (let i = 0; i < value.length; i++) {
            coders.push(this.coder);
        }
        return pack(writer, coders, value);
    }
    decode(reader) {
        let count = this.length;
        if (count === -1) {
            count = reader.readValue().toNumber();
            // Check that there is *roughly* enough data to ensure
            // stray random data is not being read as a length. Each
            // slot requires at least 32 bytes for their value (or 32
            // bytes as a link to the data). This could use a much
            // tighter bound, but we are erroring on the side of safety.
            if (count * 32 > reader._data.length) {
                logger.throwError("insufficient data length", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN, {
                    length: reader._data.length,
                    count: count
                });
            }
        }
        let coders = [];
        for (let i = 0; i < count; i++) {
            coders.push(new _anonymous__WEBPACK_IMPORTED_MODULE_3__.AnonymousCoder(this.coder));
        }
        return reader.coerce(this.name, unpack(reader, coders));
    }
}


/***/ }),

/***/ 4401:
/*!*******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/boolean.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanCoder": () => (/* binding */ BooleanCoder)
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 822);


class BooleanCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(localName) {
        super("bool", "bool", localName, false);
    }
    defaultValue() {
        return false;
    }
    encode(writer, value) {
        return writer.writeValue(value ? 1 : 0);
    }
    decode(reader) {
        return reader.coerce(this.type, !reader.readValue().isZero());
    }
}


/***/ }),

/***/ 5812:
/*!*****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/bytes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BytesCoder": () => (/* binding */ BytesCoder),
/* harmony export */   "DynamicBytesCoder": () => (/* binding */ DynamicBytesCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bytes */ 9887);
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 822);



class DynamicBytesCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(type, localName) {
        super(type, type, localName, true);
    }
    defaultValue() {
        return "0x";
    }
    encode(writer, value) {
        value = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.arrayify)(value);
        let length = writer.writeValue(value.length);
        length += writer.writeBytes(value);
        return length;
    }
    decode(reader) {
        return reader.readBytes(reader.readValue().toNumber(), true);
    }
}
class BytesCoder extends DynamicBytesCoder {
    constructor(localName) {
        super("bytes", localName);
    }
    decode(reader) {
        return reader.coerce(this.name, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.hexlify)(super.decode(reader)));
    }
}


/***/ }),

/***/ 7290:
/*!***********************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/fixed-bytes.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedBytesCoder": () => (/* binding */ FixedBytesCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bytes */ 9887);
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 822);



// @TODO: Merge this with bytes
class FixedBytesCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(size, localName) {
        let name = "bytes" + String(size);
        super(name, name, localName, false);
        this.size = size;
    }
    defaultValue() {
        return ("0x0000000000000000000000000000000000000000000000000000000000000000").substring(0, 2 + this.size * 2);
    }
    encode(writer, value) {
        let data = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.arrayify)(value);
        if (data.length !== this.size) {
            this._throwError("incorrect data length", value);
        }
        return writer.writeBytes(data);
    }
    decode(reader) {
        return reader.coerce(this.name, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.hexlify)(reader.readBytes(this.size)));
    }
}


/***/ }),

/***/ 8159:
/*!****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/null.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NullCoder": () => (/* binding */ NullCoder)
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 822);


class NullCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(localName) {
        super("null", "", localName, false);
    }
    defaultValue() {
        return null;
    }
    encode(writer, value) {
        if (value != null) {
            this._throwError("not null", value);
        }
        return writer.writeBytes([]);
    }
    decode(reader) {
        reader.readBytes(0);
        return reader.coerce(this.name, null);
    }
}


/***/ }),

/***/ 2183:
/*!******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/number.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberCoder": () => (/* binding */ NumberCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bignumber */ 2039);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/constants */ 6556);
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 822);




class NumberCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(size, signed, localName) {
        const name = ((signed ? "int" : "uint") + (size * 8));
        super(name, name, localName, false);
        this.size = size;
        this.signed = signed;
    }
    defaultValue() {
        return 0;
    }
    encode(writer, value) {
        let v = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(value);
        // Check bounds are safe for encoding
        let maxUintValue = _ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.MaxUint256.mask(writer.wordSize * 8);
        if (this.signed) {
            let bounds = maxUintValue.mask(this.size * 8 - 1);
            if (v.gt(bounds) || v.lt(bounds.add(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.One).mul(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.NegativeOne))) {
                this._throwError("value out-of-bounds", value);
            }
        }
        else if (v.lt(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.Zero) || v.gt(maxUintValue.mask(this.size * 8))) {
            this._throwError("value out-of-bounds", value);
        }
        v = v.toTwos(this.size * 8).mask(this.size * 8);
        if (this.signed) {
            v = v.fromTwos(this.size * 8).toTwos(8 * writer.wordSize);
        }
        return writer.writeValue(v);
    }
    decode(reader) {
        let value = reader.readValue().mask(this.size * 8);
        if (this.signed) {
            value = value.fromTwos(this.size * 8);
        }
        return reader.coerce(this.name, value);
    }
}


/***/ }),

/***/ 330:
/*!******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/string.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringCoder": () => (/* binding */ StringCoder)
/* harmony export */ });
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/strings */ 151);
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytes */ 5812);



class StringCoder extends _bytes__WEBPACK_IMPORTED_MODULE_0__.DynamicBytesCoder {
    constructor(localName) {
        super("string", localName);
    }
    defaultValue() {
        return "";
    }
    encode(writer, value) {
        return super.encode(writer, (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__.toUtf8Bytes)(value));
    }
    decode(reader) {
        return (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__.toUtf8String)(super.decode(reader));
    }
}


/***/ }),

/***/ 3076:
/*!*****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/tuple.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TupleCoder": () => (/* binding */ TupleCoder)
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ 822);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ 754);



class TupleCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(coders, localName) {
        let dynamic = false;
        const types = [];
        coders.forEach((coder) => {
            if (coder.dynamic) {
                dynamic = true;
            }
            types.push(coder.type);
        });
        const type = ("tuple(" + types.join(",") + ")");
        super("tuple", type, localName, dynamic);
        this.coders = coders;
    }
    defaultValue() {
        const values = [];
        this.coders.forEach((coder) => {
            values.push(coder.defaultValue());
        });
        // We only output named properties for uniquely named coders
        const uniqueNames = this.coders.reduce((accum, coder) => {
            const name = coder.localName;
            if (name) {
                if (!accum[name]) {
                    accum[name] = 0;
                }
                accum[name]++;
            }
            return accum;
        }, {});
        // Add named values
        this.coders.forEach((coder, index) => {
            let name = coder.localName;
            if (!name || uniqueNames[name] !== 1) {
                return;
            }
            if (name === "length") {
                name = "_length";
            }
            if (values[name] != null) {
                return;
            }
            values[name] = values[index];
        });
        return Object.freeze(values);
    }
    encode(writer, value) {
        return (0,_array__WEBPACK_IMPORTED_MODULE_1__.pack)(writer, this.coders, value);
    }
    decode(reader) {
        return reader.coerce(this.name, (0,_array__WEBPACK_IMPORTED_MODULE_1__.unpack)(reader, this.coders));
    }
}


/***/ }),

/***/ 6935:
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/fragments.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructorFragment": () => (/* binding */ ConstructorFragment),
/* harmony export */   "ErrorFragment": () => (/* binding */ ErrorFragment),
/* harmony export */   "EventFragment": () => (/* binding */ EventFragment),
/* harmony export */   "FormatTypes": () => (/* binding */ FormatTypes),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "FunctionFragment": () => (/* binding */ FunctionFragment),
/* harmony export */   "ParamType": () => (/* binding */ ParamType)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/bignumber */ 2039);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ 5111);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 3686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ 5667);





const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
;
const _constructorGuard = {};
let ModifiersBytes = { calldata: true, memory: true, storage: true };
let ModifiersNest = { calldata: true, memory: true };
function checkModifier(type, name) {
    if (type === "bytes" || type === "string") {
        if (ModifiersBytes[name]) {
            return true;
        }
    }
    else if (type === "address") {
        if (name === "payable") {
            return true;
        }
    }
    else if (type.indexOf("[") >= 0 || type === "tuple") {
        if (ModifiersNest[name]) {
            return true;
        }
    }
    if (ModifiersBytes[name] || name === "payable") {
        logger.throwArgumentError("invalid modifier", "name", name);
    }
    return false;
}
// @TODO: Make sure that children of an indexed tuple are marked with a null indexed
function parseParamType(param, allowIndexed) {
    let originalParam = param;
    function throwError(i) {
        logger.throwArgumentError(`unexpected character at position ${i}`, "param", param);
    }
    param = param.replace(/\s/g, " ");
    function newNode(parent) {
        let node = { type: "", name: "", parent: parent, state: { allowType: true } };
        if (allowIndexed) {
            node.indexed = false;
        }
        return node;
    }
    let parent = { type: "", name: "", state: { allowType: true } };
    let node = parent;
    for (let i = 0; i < param.length; i++) {
        let c = param[i];
        switch (c) {
            case "(":
                if (node.state.allowType && node.type === "") {
                    node.type = "tuple";
                }
                else if (!node.state.allowParams) {
                    throwError(i);
                }
                node.state.allowType = false;
                node.type = verifyType(node.type);
                node.components = [newNode(node)];
                node = node.components[0];
                break;
            case ")":
                delete node.state;
                if (node.name === "indexed") {
                    if (!allowIndexed) {
                        throwError(i);
                    }
                    node.indexed = true;
                    node.name = "";
                }
                if (checkModifier(node.type, node.name)) {
                    node.name = "";
                }
                node.type = verifyType(node.type);
                let child = node;
                node = node.parent;
                if (!node) {
                    throwError(i);
                }
                delete child.parent;
                node.state.allowParams = false;
                node.state.allowName = true;
                node.state.allowArray = true;
                break;
            case ",":
                delete node.state;
                if (node.name === "indexed") {
                    if (!allowIndexed) {
                        throwError(i);
                    }
                    node.indexed = true;
                    node.name = "";
                }
                if (checkModifier(node.type, node.name)) {
                    node.name = "";
                }
                node.type = verifyType(node.type);
                let sibling = newNode(node.parent);
                //{ type: "", name: "", parent: node.parent, state: { allowType: true } };
                node.parent.components.push(sibling);
                delete node.parent;
                node = sibling;
                break;
            // Hit a space...
            case " ":
                // If reading type, the type is done and may read a param or name
                if (node.state.allowType) {
                    if (node.type !== "") {
                        node.type = verifyType(node.type);
                        delete node.state.allowType;
                        node.state.allowName = true;
                        node.state.allowParams = true;
                    }
                }
                // If reading name, the name is done
                if (node.state.allowName) {
                    if (node.name !== "") {
                        if (node.name === "indexed") {
                            if (!allowIndexed) {
                                throwError(i);
                            }
                            if (node.indexed) {
                                throwError(i);
                            }
                            node.indexed = true;
                            node.name = "";
                        }
                        else if (checkModifier(node.type, node.name)) {
                            node.name = "";
                        }
                        else {
                            node.state.allowName = false;
                        }
                    }
                }
                break;
            case "[":
                if (!node.state.allowArray) {
                    throwError(i);
                }
                node.type += c;
                node.state.allowArray = false;
                node.state.allowName = false;
                node.state.readArray = true;
                break;
            case "]":
                if (!node.state.readArray) {
                    throwError(i);
                }
                node.type += c;
                node.state.readArray = false;
                node.state.allowArray = true;
                node.state.allowName = true;
                break;
            default:
                if (node.state.allowType) {
                    node.type += c;
                    node.state.allowParams = true;
                    node.state.allowArray = true;
                }
                else if (node.state.allowName) {
                    node.name += c;
                    delete node.state.allowArray;
                }
                else if (node.state.readArray) {
                    node.type += c;
                }
                else {
                    throwError(i);
                }
        }
    }
    if (node.parent) {
        logger.throwArgumentError("unexpected eof", "param", param);
    }
    delete parent.state;
    if (node.name === "indexed") {
        if (!allowIndexed) {
            throwError(originalParam.length - 7);
        }
        if (node.indexed) {
            throwError(originalParam.length - 7);
        }
        node.indexed = true;
        node.name = "";
    }
    else if (checkModifier(node.type, node.name)) {
        node.name = "";
    }
    parent.type = verifyType(parent.type);
    return parent;
}
function populate(object, params) {
    for (let key in params) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(object, key, params[key]);
    }
}
const FormatTypes = Object.freeze({
    // Bare formatting, as is needed for computing a sighash of an event or function
    sighash: "sighash",
    // Human-Readable with Minimal spacing and without names (compact human-readable)
    minimal: "minimal",
    // Human-Readable with nice spacing, including all names
    full: "full",
    // JSON-format a la Solidity
    json: "json"
});
const paramTypeArray = new RegExp(/^(.*)\[([0-9]*)\]$/);
class ParamType {
    constructor(constructorGuard, params) {
        if (constructorGuard !== _constructorGuard) {
            logger.throwError("use fromString", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "new ParamType()"
            });
        }
        populate(this, params);
        let match = this.type.match(paramTypeArray);
        if (match) {
            populate(this, {
                arrayLength: parseInt(match[2] || "-1"),
                arrayChildren: ParamType.fromObject({
                    type: match[1],
                    components: this.components
                }),
                baseType: "array"
            });
        }
        else {
            populate(this, {
                arrayLength: null,
                arrayChildren: null,
                baseType: ((this.components != null) ? "tuple" : this.type)
            });
        }
        this._isParamType = true;
        Object.freeze(this);
    }
    // Format the parameter fragment
    //   - sighash: "(uint256,address)"
    //   - minimal: "tuple(uint256,address) indexed"
    //   - full:    "tuple(uint256 foo, address bar) indexed baz"
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            let result = {
                type: ((this.baseType === "tuple") ? "tuple" : this.type),
                name: (this.name || undefined)
            };
            if (typeof (this.indexed) === "boolean") {
                result.indexed = this.indexed;
            }
            if (this.components) {
                result.components = this.components.map((comp) => JSON.parse(comp.format(format)));
            }
            return JSON.stringify(result);
        }
        let result = "";
        // Array
        if (this.baseType === "array") {
            result += this.arrayChildren.format(format);
            result += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]";
        }
        else {
            if (this.baseType === "tuple") {
                if (format !== FormatTypes.sighash) {
                    result += this.type;
                }
                result += "(" + this.components.map((comp) => comp.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ")";
            }
            else {
                result += this.type;
            }
        }
        if (format !== FormatTypes.sighash) {
            if (this.indexed === true) {
                result += " indexed";
            }
            if (format === FormatTypes.full && this.name) {
                result += " " + this.name;
            }
        }
        return result;
    }
    static from(value, allowIndexed) {
        if (typeof (value) === "string") {
            return ParamType.fromString(value, allowIndexed);
        }
        return ParamType.fromObject(value);
    }
    static fromObject(value) {
        if (ParamType.isParamType(value)) {
            return value;
        }
        return new ParamType(_constructorGuard, {
            name: (value.name || null),
            type: verifyType(value.type),
            indexed: ((value.indexed == null) ? null : !!value.indexed),
            components: (value.components ? value.components.map(ParamType.fromObject) : null)
        });
    }
    static fromString(value, allowIndexed) {
        function ParamTypify(node) {
            return ParamType.fromObject({
                name: node.name,
                type: node.type,
                indexed: node.indexed,
                components: node.components
            });
        }
        return ParamTypify(parseParamType(value, !!allowIndexed));
    }
    static isParamType(value) {
        return !!(value != null && value._isParamType);
    }
}
;
function parseParams(value, allowIndex) {
    return splitNesting(value).map((param) => ParamType.fromString(param, allowIndex));
}
class Fragment {
    constructor(constructorGuard, params) {
        if (constructorGuard !== _constructorGuard) {
            logger.throwError("use a static from method", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "new Fragment()"
            });
        }
        populate(this, params);
        this._isFragment = true;
        Object.freeze(this);
    }
    static from(value) {
        if (Fragment.isFragment(value)) {
            return value;
        }
        if (typeof (value) === "string") {
            return Fragment.fromString(value);
        }
        return Fragment.fromObject(value);
    }
    static fromObject(value) {
        if (Fragment.isFragment(value)) {
            return value;
        }
        switch (value.type) {
            case "function":
                return FunctionFragment.fromObject(value);
            case "event":
                return EventFragment.fromObject(value);
            case "constructor":
                return ConstructorFragment.fromObject(value);
            case "error":
                return ErrorFragment.fromObject(value);
            case "fallback":
            case "receive":
                // @TODO: Something? Maybe return a FunctionFragment? A custom DefaultFunctionFragment?
                return null;
        }
        return logger.throwArgumentError("invalid fragment object", "value", value);
    }
    static fromString(value) {
        // Make sure the "returns" is surrounded by a space and all whitespace is exactly one space
        value = value.replace(/\s/g, " ");
        value = value.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ");
        value = value.trim();
        if (value.split(" ")[0] === "event") {
            return EventFragment.fromString(value.substring(5).trim());
        }
        else if (value.split(" ")[0] === "function") {
            return FunctionFragment.fromString(value.substring(8).trim());
        }
        else if (value.split("(")[0].trim() === "constructor") {
            return ConstructorFragment.fromString(value.trim());
        }
        else if (value.split(" ")[0] === "error") {
            return ErrorFragment.fromString(value.substring(5).trim());
        }
        return logger.throwArgumentError("unsupported fragment", "value", value);
    }
    static isFragment(value) {
        return !!(value && value._isFragment);
    }
}
class EventFragment extends Fragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "event",
                anonymous: this.anonymous,
                name: this.name,
                inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
            });
        }
        let result = "";
        if (format !== FormatTypes.sighash) {
            result += "event ";
        }
        result += this.name + "(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        if (format !== FormatTypes.sighash) {
            if (this.anonymous) {
                result += "anonymous ";
            }
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return EventFragment.fromString(value);
        }
        return EventFragment.fromObject(value);
    }
    static fromObject(value) {
        if (EventFragment.isEventFragment(value)) {
            return value;
        }
        if (value.type !== "event") {
            logger.throwArgumentError("invalid event object", "value", value);
        }
        const params = {
            name: verifyIdentifier(value.name),
            anonymous: value.anonymous,
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : []),
            type: "event"
        };
        return new EventFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let match = value.match(regexParen);
        if (!match) {
            logger.throwArgumentError("invalid event string", "value", value);
        }
        let anonymous = false;
        match[3].split(" ").forEach((modifier) => {
            switch (modifier.trim()) {
                case "anonymous":
                    anonymous = true;
                    break;
                case "":
                    break;
                default:
                    logger.warn("unknown modifier: " + modifier);
            }
        });
        return EventFragment.fromObject({
            name: match[1].trim(),
            anonymous: anonymous,
            inputs: parseParams(match[2], true),
            type: "event"
        });
    }
    static isEventFragment(value) {
        return (value && value._isFragment && value.type === "event");
    }
}
function parseGas(value, params) {
    params.gas = null;
    let comps = value.split("@");
    if (comps.length !== 1) {
        if (comps.length > 2) {
            logger.throwArgumentError("invalid human-readable ABI signature", "value", value);
        }
        if (!comps[1].match(/^[0-9]+$/)) {
            logger.throwArgumentError("invalid human-readable ABI signature gas", "value", value);
        }
        params.gas = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(comps[1]);
        return comps[0];
    }
    return value;
}
function parseModifiers(value, params) {
    params.constant = false;
    params.payable = false;
    params.stateMutability = "nonpayable";
    value.split(" ").forEach((modifier) => {
        switch (modifier.trim()) {
            case "constant":
                params.constant = true;
                break;
            case "payable":
                params.payable = true;
                params.stateMutability = "payable";
                break;
            case "nonpayable":
                params.payable = false;
                params.stateMutability = "nonpayable";
                break;
            case "pure":
                params.constant = true;
                params.stateMutability = "pure";
                break;
            case "view":
                params.constant = true;
                params.stateMutability = "view";
                break;
            case "external":
            case "public":
            case "":
                break;
            default:
                console.log("unknown modifier: " + modifier);
        }
    });
}
function verifyState(value) {
    let result = {
        constant: false,
        payable: true,
        stateMutability: "payable"
    };
    if (value.stateMutability != null) {
        result.stateMutability = value.stateMutability;
        // Set (and check things are consistent) the constant property
        result.constant = (result.stateMutability === "view" || result.stateMutability === "pure");
        if (value.constant != null) {
            if ((!!value.constant) !== result.constant) {
                logger.throwArgumentError("cannot have constant function with mutability " + result.stateMutability, "value", value);
            }
        }
        // Set (and check things are consistent) the payable property
        result.payable = (result.stateMutability === "payable");
        if (value.payable != null) {
            if ((!!value.payable) !== result.payable) {
                logger.throwArgumentError("cannot have payable function with mutability " + result.stateMutability, "value", value);
            }
        }
    }
    else if (value.payable != null) {
        result.payable = !!value.payable;
        // If payable we can assume non-constant; otherwise we can't assume
        if (value.constant == null && !result.payable && value.type !== "constructor") {
            logger.throwArgumentError("unable to determine stateMutability", "value", value);
        }
        result.constant = !!value.constant;
        if (result.constant) {
            result.stateMutability = "view";
        }
        else {
            result.stateMutability = (result.payable ? "payable" : "nonpayable");
        }
        if (result.payable && result.constant) {
            logger.throwArgumentError("cannot have constant payable function", "value", value);
        }
    }
    else if (value.constant != null) {
        result.constant = !!value.constant;
        result.payable = !result.constant;
        result.stateMutability = (result.constant ? "view" : "payable");
    }
    else if (value.type !== "constructor") {
        logger.throwArgumentError("unable to determine stateMutability", "value", value);
    }
    return result;
}
class ConstructorFragment extends Fragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "constructor",
                stateMutability: ((this.stateMutability !== "nonpayable") ? this.stateMutability : undefined),
                payable: this.payable,
                gas: (this.gas ? this.gas.toNumber() : undefined),
                inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
            });
        }
        if (format === FormatTypes.sighash) {
            logger.throwError("cannot format a constructor for sighash", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "format(sighash)"
            });
        }
        let result = "constructor(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        if (this.stateMutability && this.stateMutability !== "nonpayable") {
            result += this.stateMutability + " ";
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return ConstructorFragment.fromString(value);
        }
        return ConstructorFragment.fromObject(value);
    }
    static fromObject(value) {
        if (ConstructorFragment.isConstructorFragment(value)) {
            return value;
        }
        if (value.type !== "constructor") {
            logger.throwArgumentError("invalid constructor object", "value", value);
        }
        let state = verifyState(value);
        if (state.constant) {
            logger.throwArgumentError("constructor cannot be constant", "value", value);
        }
        const params = {
            name: null,
            type: value.type,
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : []),
            payable: state.payable,
            stateMutability: state.stateMutability,
            gas: (value.gas ? _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(value.gas) : null)
        };
        return new ConstructorFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let params = { type: "constructor" };
        value = parseGas(value, params);
        let parens = value.match(regexParen);
        if (!parens || parens[1].trim() !== "constructor") {
            logger.throwArgumentError("invalid constructor string", "value", value);
        }
        params.inputs = parseParams(parens[2].trim(), false);
        parseModifiers(parens[3].trim(), params);
        return ConstructorFragment.fromObject(params);
    }
    static isConstructorFragment(value) {
        return (value && value._isFragment && value.type === "constructor");
    }
}
class FunctionFragment extends ConstructorFragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "function",
                name: this.name,
                constant: this.constant,
                stateMutability: ((this.stateMutability !== "nonpayable") ? this.stateMutability : undefined),
                payable: this.payable,
                gas: (this.gas ? this.gas.toNumber() : undefined),
                inputs: this.inputs.map((input) => JSON.parse(input.format(format))),
                outputs: this.outputs.map((output) => JSON.parse(output.format(format))),
            });
        }
        let result = "";
        if (format !== FormatTypes.sighash) {
            result += "function ";
        }
        result += this.name + "(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        if (format !== FormatTypes.sighash) {
            if (this.stateMutability) {
                if (this.stateMutability !== "nonpayable") {
                    result += (this.stateMutability + " ");
                }
            }
            else if (this.constant) {
                result += "view ";
            }
            if (this.outputs && this.outputs.length) {
                result += "returns (" + this.outputs.map((output) => output.format(format)).join(", ") + ") ";
            }
            if (this.gas != null) {
                result += "@" + this.gas.toString() + " ";
            }
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return FunctionFragment.fromString(value);
        }
        return FunctionFragment.fromObject(value);
    }
    static fromObject(value) {
        if (FunctionFragment.isFunctionFragment(value)) {
            return value;
        }
        if (value.type !== "function") {
            logger.throwArgumentError("invalid function object", "value", value);
        }
        let state = verifyState(value);
        const params = {
            type: value.type,
            name: verifyIdentifier(value.name),
            constant: state.constant,
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : []),
            outputs: (value.outputs ? value.outputs.map(ParamType.fromObject) : []),
            payable: state.payable,
            stateMutability: state.stateMutability,
            gas: (value.gas ? _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(value.gas) : null)
        };
        return new FunctionFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let params = { type: "function" };
        value = parseGas(value, params);
        let comps = value.split(" returns ");
        if (comps.length > 2) {
            logger.throwArgumentError("invalid function string", "value", value);
        }
        let parens = comps[0].match(regexParen);
        if (!parens) {
            logger.throwArgumentError("invalid function signature", "value", value);
        }
        params.name = parens[1].trim();
        if (params.name) {
            verifyIdentifier(params.name);
        }
        params.inputs = parseParams(parens[2], false);
        parseModifiers(parens[3].trim(), params);
        // We have outputs
        if (comps.length > 1) {
            let returns = comps[1].match(regexParen);
            if (returns[1].trim() != "" || returns[3].trim() != "") {
                logger.throwArgumentError("unexpected tokens", "value", value);
            }
            params.outputs = parseParams(returns[2], false);
        }
        else {
            params.outputs = [];
        }
        return FunctionFragment.fromObject(params);
    }
    static isFunctionFragment(value) {
        return (value && value._isFragment && value.type === "function");
    }
}
//export class StructFragment extends Fragment {
//}
function checkForbidden(fragment) {
    const sig = fragment.format();
    if (sig === "Error(string)" || sig === "Panic(uint256)") {
        logger.throwArgumentError(`cannot specify user defined ${sig} error`, "fragment", fragment);
    }
    return fragment;
}
class ErrorFragment extends Fragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "error",
                name: this.name,
                inputs: this.inputs.map((input) => JSON.parse(input.format(format))),
            });
        }
        let result = "";
        if (format !== FormatTypes.sighash) {
            result += "error ";
        }
        result += this.name + "(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return ErrorFragment.fromString(value);
        }
        return ErrorFragment.fromObject(value);
    }
    static fromObject(value) {
        if (ErrorFragment.isErrorFragment(value)) {
            return value;
        }
        if (value.type !== "error") {
            logger.throwArgumentError("invalid error object", "value", value);
        }
        const params = {
            type: value.type,
            name: verifyIdentifier(value.name),
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : [])
        };
        return checkForbidden(new ErrorFragment(_constructorGuard, params));
    }
    static fromString(value) {
        let params = { type: "error" };
        let parens = value.match(regexParen);
        if (!parens) {
            logger.throwArgumentError("invalid error signature", "value", value);
        }
        params.name = parens[1].trim();
        if (params.name) {
            verifyIdentifier(params.name);
        }
        params.inputs = parseParams(parens[2], false);
        return checkForbidden(ErrorFragment.fromObject(params));
    }
    static isErrorFragment(value) {
        return (value && value._isFragment && value.type === "error");
    }
}
function verifyType(type) {
    // These need to be transformed to their full description
    if (type.match(/^uint($|[^1-9])/)) {
        type = "uint256" + type.substring(4);
    }
    else if (type.match(/^int($|[^1-9])/)) {
        type = "int256" + type.substring(3);
    }
    // @TODO: more verification
    return type;
}
// See: https://github.com/ethereum/solidity/blob/1f8f1a3db93a548d0555e3e14cfc55a10e25b60e/docs/grammar/SolidityLexer.g4#L234
const regexIdentifier = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
function verifyIdentifier(value) {
    if (!value || !value.match(regexIdentifier)) {
        logger.throwArgumentError(`invalid identifier "${value}"`, "value", value);
    }
    return value;
}
const regexParen = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
function splitNesting(value) {
    value = value.trim();
    let result = [];
    let accum = "";
    let depth = 0;
    for (let offset = 0; offset < value.length; offset++) {
        let c = value[offset];
        if (c === "," && depth === 0) {
            result.push(accum);
            accum = "";
        }
        else {
            accum += c;
            if (c === "(") {
                depth++;
            }
            else if (c === ")") {
                depth--;
                if (depth === -1) {
                    logger.throwArgumentError("unbalanced parenthesis", "value", value);
                }
            }
        }
    }
    if (accum) {
        result.push(accum);
    }
    return result;
}


/***/ }),

/***/ 4641:
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/interface.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorDescription": () => (/* binding */ ErrorDescription),
/* harmony export */   "Indexed": () => (/* binding */ Indexed),
/* harmony export */   "Interface": () => (/* binding */ Interface),
/* harmony export */   "LogDescription": () => (/* binding */ LogDescription),
/* harmony export */   "TransactionDescription": () => (/* binding */ TransactionDescription),
/* harmony export */   "checkResultErrors": () => (/* reexport safe */ _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_2__.checkResultErrors)
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/address */ 8394);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ethersproject/bignumber */ 2039);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/bytes */ 9887);
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ethersproject/hash */ 9019);
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ethersproject/keccak256 */ 9948);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/properties */ 5111);
/* harmony import */ var _abi_coder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abi-coder */ 9625);
/* harmony import */ var _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coders/abstract-coder */ 822);
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fragments */ 6935);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 3686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ 5667);












const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);

class LogDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {
}
class TransactionDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {
}
class ErrorDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {
}
class Indexed extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {
    static isIndexed(value) {
        return !!(value && value._isIndexed);
    }
}
const BuiltinErrors = {
    "0x08c379a0": { signature: "Error(string)", name: "Error", inputs: ["string"], reason: true },
    "0x4e487b71": { signature: "Panic(uint256)", name: "Panic", inputs: ["uint256"] }
};
function wrapAccessError(property, error) {
    const wrap = new Error(`deferred error during ABI decoding triggered accessing ${property}`);
    wrap.error = error;
    return wrap;
}
/*
function checkNames(fragment: Fragment, type: "input" | "output", params: Array<ParamType>): void {
    params.reduce((accum, param) => {
        if (param.name) {
            if (accum[param.name]) {
                logger.throwArgumentError(`duplicate ${ type } parameter ${ JSON.stringify(param.name) } in ${ fragment.format("full") }`, "fragment", fragment);
            }
            accum[param.name] = true;
        }
        return accum;
    }, <{ [ name: string ]: boolean }>{ });
}
*/
class Interface {
    constructor(fragments) {
        logger.checkNew(new.target, Interface);
        let abi = [];
        if (typeof (fragments) === "string") {
            abi = JSON.parse(fragments);
        }
        else {
            abi = fragments;
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "fragments", abi.map((fragment) => {
            return _fragments__WEBPACK_IMPORTED_MODULE_4__.Fragment.from(fragment);
        }).filter((fragment) => (fragment != null)));
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_abiCoder", (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(new.target, "getAbiCoder")());
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "functions", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "errors", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "events", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "structs", {});
        // Add all fragments by their signature
        this.fragments.forEach((fragment) => {
            let bucket = null;
            switch (fragment.type) {
                case "constructor":
                    if (this.deploy) {
                        logger.warn("duplicate definition - constructor");
                        return;
                    }
                    //checkNames(fragment, "input", fragment.inputs);
                    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "deploy", fragment);
                    return;
                case "function":
                    //checkNames(fragment, "input", fragment.inputs);
                    //checkNames(fragment, "output", (<FunctionFragment>fragment).outputs);
                    bucket = this.functions;
                    break;
                case "event":
                    //checkNames(fragment, "input", fragment.inputs);
                    bucket = this.events;
                    break;
                case "error":
                    bucket = this.errors;
                    break;
                default:
                    return;
            }
            let signature = fragment.format();
            if (bucket[signature]) {
                logger.warn("duplicate definition - " + signature);
                return;
            }
            bucket[signature] = fragment;
        });
        // If we do not have a constructor add a default
        if (!this.deploy) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "deploy", _fragments__WEBPACK_IMPORTED_MODULE_4__.ConstructorFragment.from({
                payable: false,
                type: "constructor"
            }));
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_isInterface", true);
    }
    format(format) {
        if (!format) {
            format = _fragments__WEBPACK_IMPORTED_MODULE_4__.FormatTypes.full;
        }
        if (format === _fragments__WEBPACK_IMPORTED_MODULE_4__.FormatTypes.sighash) {
            logger.throwArgumentError("interface does not support formatting sighash", "format", format);
        }
        const abi = this.fragments.map((fragment) => fragment.format(format));
        // We need to re-bundle the JSON fragments a bit
        if (format === _fragments__WEBPACK_IMPORTED_MODULE_4__.FormatTypes.json) {
            return JSON.stringify(abi.map((j) => JSON.parse(j)));
        }
        return abi;
    }
    // Sub-classes can override these to handle other blockchains
    static getAbiCoder() {
        return _abi_coder__WEBPACK_IMPORTED_MODULE_5__.defaultAbiCoder;
    }
    static getAddress(address) {
        return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_6__.getAddress)(address);
    }
    static getSighash(fragment) {
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexDataSlice)((0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(fragment.format()), 0, 4);
    }
    static getEventTopic(eventFragment) {
        return (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(eventFragment.format());
    }
    // Find a function definition by any means necessary (unless it is ambiguous)
    getFunction(nameOrSignatureOrSighash) {
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(nameOrSignatureOrSighash)) {
            for (const name in this.functions) {
                if (nameOrSignatureOrSighash === this.getSighash(name)) {
                    return this.functions[name];
                }
            }
            logger.throwArgumentError("no matching function", "sighash", nameOrSignatureOrSighash);
        }
        // It is a bare name, look up the function (will return null if ambiguous)
        if (nameOrSignatureOrSighash.indexOf("(") === -1) {
            const name = nameOrSignatureOrSighash.trim();
            const matching = Object.keys(this.functions).filter((f) => (f.split("(" /* fix:) */)[0] === name));
            if (matching.length === 0) {
                logger.throwArgumentError("no matching function", "name", name);
            }
            else if (matching.length > 1) {
                logger.throwArgumentError("multiple matching functions", "name", name);
            }
            return this.functions[matching[0]];
        }
        // Normalize the signature and lookup the function
        const result = this.functions[_fragments__WEBPACK_IMPORTED_MODULE_4__.FunctionFragment.fromString(nameOrSignatureOrSighash).format()];
        if (!result) {
            logger.throwArgumentError("no matching function", "signature", nameOrSignatureOrSighash);
        }
        return result;
    }
    // Find an event definition by any means necessary (unless it is ambiguous)
    getEvent(nameOrSignatureOrTopic) {
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(nameOrSignatureOrTopic)) {
            const topichash = nameOrSignatureOrTopic.toLowerCase();
            for (const name in this.events) {
                if (topichash === this.getEventTopic(name)) {
                    return this.events[name];
                }
            }
            logger.throwArgumentError("no matching event", "topichash", topichash);
        }
        // It is a bare name, look up the function (will return null if ambiguous)
        if (nameOrSignatureOrTopic.indexOf("(") === -1) {
            const name = nameOrSignatureOrTopic.trim();
            const matching = Object.keys(this.events).filter((f) => (f.split("(" /* fix:) */)[0] === name));
            if (matching.length === 0) {
                logger.throwArgumentError("no matching event", "name", name);
            }
            else if (matching.length > 1) {
                logger.throwArgumentError("multiple matching events", "name", name);
            }
            return this.events[matching[0]];
        }
        // Normalize the signature and lookup the function
        const result = this.events[_fragments__WEBPACK_IMPORTED_MODULE_4__.EventFragment.fromString(nameOrSignatureOrTopic).format()];
        if (!result) {
            logger.throwArgumentError("no matching event", "signature", nameOrSignatureOrTopic);
        }
        return result;
    }
    // Find a function definition by any means necessary (unless it is ambiguous)
    getError(nameOrSignatureOrSighash) {
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(nameOrSignatureOrSighash)) {
            const getSighash = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getSighash");
            for (const name in this.errors) {
                const error = this.errors[name];
                if (nameOrSignatureOrSighash === getSighash(error)) {
                    return this.errors[name];
                }
            }
            logger.throwArgumentError("no matching error", "sighash", nameOrSignatureOrSighash);
        }
        // It is a bare name, look up the function (will return null if ambiguous)
        if (nameOrSignatureOrSighash.indexOf("(") === -1) {
            const name = nameOrSignatureOrSighash.trim();
            const matching = Object.keys(this.errors).filter((f) => (f.split("(" /* fix:) */)[0] === name));
            if (matching.length === 0) {
                logger.throwArgumentError("no matching error", "name", name);
            }
            else if (matching.length > 1) {
                logger.throwArgumentError("multiple matching errors", "name", name);
            }
            return this.errors[matching[0]];
        }
        // Normalize the signature and lookup the function
        const result = this.errors[_fragments__WEBPACK_IMPORTED_MODULE_4__.FunctionFragment.fromString(nameOrSignatureOrSighash).format()];
        if (!result) {
            logger.throwArgumentError("no matching error", "signature", nameOrSignatureOrSighash);
        }
        return result;
    }
    // Get the sighash (the bytes4 selector) used by Solidity to identify a function
    getSighash(fragment) {
        if (typeof (fragment) === "string") {
            try {
                fragment = this.getFunction(fragment);
            }
            catch (error) {
                try {
                    fragment = this.getError(fragment);
                }
                catch (_) {
                    throw error;
                }
            }
        }
        return (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getSighash")(fragment);
    }
    // Get the topic (the bytes32 hash) used by Solidity to identify an event
    getEventTopic(eventFragment) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        return (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getEventTopic")(eventFragment);
    }
    _decodeParams(params, data) {
        return this._abiCoder.decode(params, data);
    }
    _encodeParams(params, values) {
        return this._abiCoder.encode(params, values);
    }
    encodeDeploy(values) {
        return this._encodeParams(this.deploy.inputs, values || []);
    }
    decodeErrorResult(fragment, data) {
        if (typeof (fragment) === "string") {
            fragment = this.getError(fragment);
        }
        const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.arrayify)(data);
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes.slice(0, 4)) !== this.getSighash(fragment)) {
            logger.throwArgumentError(`data signature does not match error ${fragment.name}.`, "data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes));
        }
        return this._decodeParams(fragment.inputs, bytes.slice(4));
    }
    encodeErrorResult(fragment, values) {
        if (typeof (fragment) === "string") {
            fragment = this.getError(fragment);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.concat)([
            this.getSighash(fragment),
            this._encodeParams(fragment.inputs, values || [])
        ]));
    }
    // Decode the data for a function call (e.g. tx.data)
    decodeFunctionData(functionFragment, data) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.arrayify)(data);
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes.slice(0, 4)) !== this.getSighash(functionFragment)) {
            logger.throwArgumentError(`data signature does not match function ${functionFragment.name}.`, "data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes));
        }
        return this._decodeParams(functionFragment.inputs, bytes.slice(4));
    }
    // Encode the data for a function call (e.g. tx.data)
    encodeFunctionData(functionFragment, values) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.concat)([
            this.getSighash(functionFragment),
            this._encodeParams(functionFragment.inputs, values || [])
        ]));
    }
    // Decode the result from a function call (e.g. from eth_call)
    decodeFunctionResult(functionFragment, data) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.arrayify)(data);
        let reason = null;
        let message = "";
        let errorArgs = null;
        let errorName = null;
        let errorSignature = null;
        switch (bytes.length % this._abiCoder._getWordSize()) {
            case 0:
                try {
                    return this._abiCoder.decode(functionFragment.outputs, bytes);
                }
                catch (error) { }
                break;
            case 4: {
                const selector = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes.slice(0, 4));
                const builtin = BuiltinErrors[selector];
                if (builtin) {
                    errorArgs = this._abiCoder.decode(builtin.inputs, bytes.slice(4));
                    errorName = builtin.name;
                    errorSignature = builtin.signature;
                    if (builtin.reason) {
                        reason = errorArgs[0];
                    }
                    if (errorName === "Error") {
                        message = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(errorArgs[0])}`;
                    }
                    else if (errorName === "Panic") {
                        message = `; VM Exception while processing transaction: reverted with panic code ${errorArgs[0]}`;
                    }
                }
                else {
                    try {
                        const error = this.getError(selector);
                        errorArgs = this._abiCoder.decode(error.inputs, bytes.slice(4));
                        errorName = error.name;
                        errorSignature = error.format();
                    }
                    catch (error) { }
                }
                break;
            }
        }
        return logger.throwError("call revert exception" + message, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.CALL_EXCEPTION, {
            method: functionFragment.format(),
            data: (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(data), errorArgs, errorName, errorSignature, reason
        });
    }
    // Encode the result for a function call (e.g. for eth_call)
    encodeFunctionResult(functionFragment, values) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(this._abiCoder.encode(functionFragment.outputs, values || []));
    }
    // Create the filter for the event with search criteria (e.g. for eth_filterLog)
    encodeFilterTopics(eventFragment, values) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        if (values.length > eventFragment.inputs.length) {
            logger.throwError("too many arguments for " + eventFragment.format(), _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNEXPECTED_ARGUMENT, {
                argument: "values",
                value: values
            });
        }
        let topics = [];
        if (!eventFragment.anonymous) {
            topics.push(this.getEventTopic(eventFragment));
        }
        const encodeTopic = (param, value) => {
            if (param.type === "string") {
                return (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(value);
            }
            else if (param.type === "bytes") {
                return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_9__.keccak256)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(value));
            }
            // Check addresses are valid
            if (param.type === "address") {
                this._abiCoder.encode(["address"], [value]);
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexZeroPad)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(value), 32);
        };
        values.forEach((value, index) => {
            let param = eventFragment.inputs[index];
            if (!param.indexed) {
                if (value != null) {
                    logger.throwArgumentError("cannot filter non-indexed parameters; must be null", ("contract." + param.name), value);
                }
                return;
            }
            if (value == null) {
                topics.push(null);
            }
            else if (param.baseType === "array" || param.baseType === "tuple") {
                logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
            }
            else if (Array.isArray(value)) {
                topics.push(value.map((value) => encodeTopic(param, value)));
            }
            else {
                topics.push(encodeTopic(param, value));
            }
        });
        // Trim off trailing nulls
        while (topics.length && topics[topics.length - 1] === null) {
            topics.pop();
        }
        return topics;
    }
    encodeEventLog(eventFragment, values) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        const topics = [];
        const dataTypes = [];
        const dataValues = [];
        if (!eventFragment.anonymous) {
            topics.push(this.getEventTopic(eventFragment));
        }
        if (values.length !== eventFragment.inputs.length) {
            logger.throwArgumentError("event arguments/values mismatch", "values", values);
        }
        eventFragment.inputs.forEach((param, index) => {
            const value = values[index];
            if (param.indexed) {
                if (param.type === "string") {
                    topics.push((0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(value));
                }
                else if (param.type === "bytes") {
                    topics.push((0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_9__.keccak256)(value));
                }
                else if (param.baseType === "tuple" || param.baseType === "array") {
                    // @TODO
                    throw new Error("not implemented");
                }
                else {
                    topics.push(this._abiCoder.encode([param.type], [value]));
                }
            }
            else {
                dataTypes.push(param);
                dataValues.push(value);
            }
        });
        return {
            data: this._abiCoder.encode(dataTypes, dataValues),
            topics: topics
        };
    }
    // Decode a filter for the event and the search criteria
    decodeEventLog(eventFragment, data, topics) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        if (topics != null && !eventFragment.anonymous) {
            let topicHash = this.getEventTopic(eventFragment);
            if (!(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(topics[0], 32) || topics[0].toLowerCase() !== topicHash) {
                logger.throwError("fragment/topic mismatch", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, { argument: "topics[0]", expected: topicHash, value: topics[0] });
            }
            topics = topics.slice(1);
        }
        let indexed = [];
        let nonIndexed = [];
        let dynamic = [];
        eventFragment.inputs.forEach((param, index) => {
            if (param.indexed) {
                if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
                    indexed.push(_fragments__WEBPACK_IMPORTED_MODULE_4__.ParamType.fromObject({ type: "bytes32", name: param.name }));
                    dynamic.push(true);
                }
                else {
                    indexed.push(param);
                    dynamic.push(false);
                }
            }
            else {
                nonIndexed.push(param);
                dynamic.push(false);
            }
        });
        let resultIndexed = (topics != null) ? this._abiCoder.decode(indexed, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.concat)(topics)) : null;
        let resultNonIndexed = this._abiCoder.decode(nonIndexed, data, true);
        let result = [];
        let nonIndexedIndex = 0, indexedIndex = 0;
        eventFragment.inputs.forEach((param, index) => {
            if (param.indexed) {
                if (resultIndexed == null) {
                    result[index] = new Indexed({ _isIndexed: true, hash: null });
                }
                else if (dynamic[index]) {
                    result[index] = new Indexed({ _isIndexed: true, hash: resultIndexed[indexedIndex++] });
                }
                else {
                    try {
                        result[index] = resultIndexed[indexedIndex++];
                    }
                    catch (error) {
                        result[index] = error;
                    }
                }
            }
            else {
                try {
                    result[index] = resultNonIndexed[nonIndexedIndex++];
                }
                catch (error) {
                    result[index] = error;
                }
            }
            // Add the keyword argument if named and safe
            if (param.name && result[param.name] == null) {
                const value = result[index];
                // Make error named values throw on access
                if (value instanceof Error) {
                    Object.defineProperty(result, param.name, {
                        enumerable: true,
                        get: () => { throw wrapAccessError(`property ${JSON.stringify(param.name)}`, value); }
                    });
                }
                else {
                    result[param.name] = value;
                }
            }
        });
        // Make all error indexed values throw on access
        for (let i = 0; i < result.length; i++) {
            const value = result[i];
            if (value instanceof Error) {
                Object.defineProperty(result, i, {
                    enumerable: true,
                    get: () => { throw wrapAccessError(`index ${i}`, value); }
                });
            }
        }
        return Object.freeze(result);
    }
    // Given a transaction, find the matching function fragment (if any) and
    // determine all its properties and call parameters
    parseTransaction(tx) {
        let fragment = this.getFunction(tx.data.substring(0, 10).toLowerCase());
        if (!fragment) {
            return null;
        }
        return new TransactionDescription({
            args: this._abiCoder.decode(fragment.inputs, "0x" + tx.data.substring(10)),
            functionFragment: fragment,
            name: fragment.name,
            signature: fragment.format(),
            sighash: this.getSighash(fragment),
            value: _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(tx.value || "0"),
        });
    }
    // @TODO
    //parseCallResult(data: BytesLike): ??
    // Given an event log, find the matching event fragment (if any) and
    // determine all its properties and values
    parseLog(log) {
        let fragment = this.getEvent(log.topics[0]);
        if (!fragment || fragment.anonymous) {
            return null;
        }
        // @TODO: If anonymous, and the only method, and the input count matches, should we parse?
        //        Probably not, because just because it is the only event in the ABI does
        //        not mean we have the full ABI; maybe just a fragment?
        return new LogDescription({
            eventFragment: fragment,
            name: fragment.name,
            signature: fragment.format(),
            topic: this.getEventTopic(fragment),
            args: this.decodeEventLog(fragment, log.data, log.topics)
        });
    }
    parseError(data) {
        const hexData = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(data);
        let fragment = this.getError(hexData.substring(0, 10).toLowerCase());
        if (!fragment) {
            return null;
        }
        return new ErrorDescription({
            args: this._abiCoder.decode(fragment.inputs, "0x" + hexData.substring(10)),
            errorFragment: fragment,
            name: fragment.name,
            signature: fragment.format(),
            sighash: this.getSighash(fragment),
        });
    }
    /*
    static from(value: Array<Fragment | string | JsonAbi> | string | Interface) {
        if (Interface.isInterface(value)) {
            return value;
        }
        if (typeof(value) === "string") {
            return new Interface(JSON.parse(value));
        }
        return new Interface(value);
    }
    */
    static isInterface(value) {
        return !!(value && value._isInterface);
    }
}


/***/ }),

/***/ 2497:
/*!*******************************************************************!*\
  !*** ./node_modules/@ethersproject/contracts/lib.esm/_version.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
const version = "contracts/5.6.0";


/***/ }),

/***/ 8838:
/*!****************************************************************!*\
  !*** ./node_modules/@ethersproject/contracts/lib.esm/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseContract": () => (/* binding */ BaseContract),
/* harmony export */   "Contract": () => (/* binding */ Contract),
/* harmony export */   "ContractFactory": () => (/* binding */ ContractFactory)
/* harmony export */ });
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/abi */ 822);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ethersproject/abi */ 4641);
/* harmony import */ var _ethersproject_abstract_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ethersproject/abstract-provider */ 4019);
/* harmony import */ var _ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ethersproject/abstract-signer */ 3481);
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/address */ 8394);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/bignumber */ 2039);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/bytes */ 9887);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/properties */ 5111);
/* harmony import */ var _ethersproject_transactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/transactions */ 7038);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ 3686);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ 2497);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
;
;
///////////////////////////////
const allowedTransactionKeys = {
    chainId: true, data: true, from: true, gasLimit: true, gasPrice: true, nonce: true, to: true, value: true,
    type: true, accessList: true,
    maxFeePerGas: true, maxPriorityFeePerGas: true,
    customData: true,
    ccipReadEnabled: true
};
function resolveName(resolver, nameOrPromise) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = yield nameOrPromise;
        if (typeof (name) !== "string") {
            logger.throwArgumentError("invalid address or ENS name", "name", name);
        }
        // If it is already an address, just use it (after adding checksum)
        try {
            return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getAddress)(name);
        }
        catch (error) { }
        if (!resolver) {
            logger.throwError("a provider or signer is needed to resolve ENS names", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "resolveName"
            });
        }
        const address = yield resolver.resolveName(name);
        if (address == null) {
            logger.throwArgumentError("resolver or addr is not configured for ENS name", "name", name);
        }
        return address;
    });
}
// Recursively replaces ENS names with promises to resolve the name and resolves all properties
function resolveAddresses(resolver, value, paramType) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Array.isArray(paramType)) {
            return yield Promise.all(paramType.map((paramType, index) => {
                return resolveAddresses(resolver, ((Array.isArray(value)) ? value[index] : value[paramType.name]), paramType);
            }));
        }
        if (paramType.type === "address") {
            return yield resolveName(resolver, value);
        }
        if (paramType.type === "tuple") {
            return yield resolveAddresses(resolver, value, paramType.components);
        }
        if (paramType.baseType === "array") {
            if (!Array.isArray(value)) {
                return Promise.reject(logger.makeError("invalid value for array", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
                    argument: "value",
                    value
                }));
            }
            return yield Promise.all(value.map((v) => resolveAddresses(resolver, v, paramType.arrayChildren)));
        }
        return value;
    });
}
function populateTransaction(contract, fragment, args) {
    return __awaiter(this, void 0, void 0, function* () {
        // If an extra argument is given, it is overrides
        let overrides = {};
        if (args.length === fragment.inputs.length + 1 && typeof (args[args.length - 1]) === "object") {
            overrides = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(args.pop());
        }
        // Make sure the parameter count matches
        logger.checkArgumentCount(args.length, fragment.inputs.length, "passed to contract");
        // Populate "from" override (allow promises)
        if (contract.signer) {
            if (overrides.from) {
                // Contracts with a Signer are from the Signer's frame-of-reference;
                // but we allow overriding "from" if it matches the signer
                overrides.from = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.resolveProperties)({
                    override: resolveName(contract.signer, overrides.from),
                    signer: contract.signer.getAddress()
                }).then((check) => __awaiter(this, void 0, void 0, function* () {
                    if ((0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getAddress)(check.signer) !== check.override) {
                        logger.throwError("Contract with a Signer cannot override from", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.from"
                        });
                    }
                    return check.override;
                }));
            }
            else {
                overrides.from = contract.signer.getAddress();
            }
        }
        else if (overrides.from) {
            overrides.from = resolveName(contract.provider, overrides.from);
            //} else {
            // Contracts without a signer can override "from", and if
            // unspecified the zero address is used
            //overrides.from = AddressZero;
        }
        // Wait for all dependencies to be resolved (prefer the signer over the provider)
        const resolved = yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.resolveProperties)({
            args: resolveAddresses(contract.signer || contract.provider, args, fragment.inputs),
            address: contract.resolvedAddress,
            overrides: ((0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.resolveProperties)(overrides) || {})
        });
        // The ABI coded transaction
        const data = contract.interface.encodeFunctionData(fragment, resolved.args);
        const tx = {
            data: data,
            to: resolved.address
        };
        // Resolved Overrides
        const ro = resolved.overrides;
        // Populate simple overrides
        if (ro.nonce != null) {
            tx.nonce = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.nonce).toNumber();
        }
        if (ro.gasLimit != null) {
            tx.gasLimit = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.gasLimit);
        }
        if (ro.gasPrice != null) {
            tx.gasPrice = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.gasPrice);
        }
        if (ro.maxFeePerGas != null) {
            tx.maxFeePerGas = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.maxFeePerGas);
        }
        if (ro.maxPriorityFeePerGas != null) {
            tx.maxPriorityFeePerGas = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.maxPriorityFeePerGas);
        }
        if (ro.from != null) {
            tx.from = ro.from;
        }
        if (ro.type != null) {
            tx.type = ro.type;
        }
        if (ro.accessList != null) {
            tx.accessList = (0,_ethersproject_transactions__WEBPACK_IMPORTED_MODULE_5__.accessListify)(ro.accessList);
        }
        // If there was no "gasLimit" override, but the ABI specifies a default, use it
        if (tx.gasLimit == null && fragment.gas != null) {
            // Compute the intrinsic gas cost for this transaction
            // @TODO: This is based on the yellow paper as of Petersburg; this is something
            // we may wish to parameterize in v6 as part of the Network object. Since this
            // is always a non-nil to address, we can ignore G_create, but may wish to add
            // similar logic to the ContractFactory.
            let intrinsic = 21000;
            const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.arrayify)(data);
            for (let i = 0; i < bytes.length; i++) {
                intrinsic += 4;
                if (bytes[i]) {
                    intrinsic += 64;
                }
            }
            tx.gasLimit = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(fragment.gas).add(intrinsic);
        }
        // Populate "value" override
        if (ro.value) {
            const roValue = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.value);
            if (!roValue.isZero() && !fragment.payable) {
                logger.throwError("non-payable method cannot override value", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "overrides.value",
                    value: overrides.value
                });
            }
            tx.value = roValue;
        }
        if (ro.customData) {
            tx.customData = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(ro.customData);
        }
        if (ro.ccipReadEnabled) {
            tx.ccipReadEnabled = !!ro.ccipReadEnabled;
        }
        // Remove the overrides
        delete overrides.nonce;
        delete overrides.gasLimit;
        delete overrides.gasPrice;
        delete overrides.from;
        delete overrides.value;
        delete overrides.type;
        delete overrides.accessList;
        delete overrides.maxFeePerGas;
        delete overrides.maxPriorityFeePerGas;
        delete overrides.customData;
        delete overrides.ccipReadEnabled;
        // Make sure there are no stray overrides, which may indicate a
        // typo or using an unsupported key.
        const leftovers = Object.keys(overrides).filter((key) => (overrides[key] != null));
        if (leftovers.length) {
            logger.throwError(`cannot override ${leftovers.map((l) => JSON.stringify(l)).join(",")}`, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "overrides",
                overrides: leftovers
            });
        }
        return tx;
    });
}
function buildPopulate(contract, fragment) {
    return function (...args) {
        return populateTransaction(contract, fragment, args);
    };
}
function buildEstimate(contract, fragment) {
    const signerOrProvider = (contract.signer || contract.provider);
    return function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!signerOrProvider) {
                logger.throwError("estimate require a provider or signer", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "estimateGas"
                });
            }
            const tx = yield populateTransaction(contract, fragment, args);
            return yield signerOrProvider.estimateGas(tx);
        });
    };
}
function addContractWait(contract, tx) {
    const wait = tx.wait.bind(tx);
    tx.wait = (confirmations) => {
        return wait(confirmations).then((receipt) => {
            receipt.events = receipt.logs.map((log) => {
                let event = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.deepCopy)(log);
                let parsed = null;
                try {
                    parsed = contract.interface.parseLog(log);
                }
                catch (e) { }
                // Successfully parsed the event log; include it
                if (parsed) {
                    event.args = parsed.args;
                    event.decode = (data, topics) => {
                        return contract.interface.decodeEventLog(parsed.eventFragment, data, topics);
                    };
                    event.event = parsed.name;
                    event.eventSignature = parsed.signature;
                }
                // Useful operations
                event.removeListener = () => { return contract.provider; };
                event.getBlock = () => {
                    return contract.provider.getBlock(receipt.blockHash);
                };
                event.getTransaction = () => {
                    return contract.provider.getTransaction(receipt.transactionHash);
                };
                event.getTransactionReceipt = () => {
                    return Promise.resolve(receipt);
                };
                return event;
            });
            return receipt;
        });
    };
}
function buildCall(contract, fragment, collapseSimple) {
    const signerOrProvider = (contract.signer || contract.provider);
    return function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            // Extract the "blockTag" override if present
            let blockTag = undefined;
            if (args.length === fragment.inputs.length + 1 && typeof (args[args.length - 1]) === "object") {
                const overrides = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(args.pop());
                if (overrides.blockTag != null) {
                    blockTag = yield overrides.blockTag;
                }
                delete overrides.blockTag;
                args.push(overrides);
            }
            // If the contract was just deployed, wait until it is mined
            if (contract.deployTransaction != null) {
                yield contract._deployed(blockTag);
            }
            // Call a node and get the result
            const tx = yield populateTransaction(contract, fragment, args);
            const result = yield signerOrProvider.call(tx, blockTag);
            try {
                let value = contract.interface.decodeFunctionResult(fragment, result);
                if (collapseSimple && fragment.outputs.length === 1) {
                    value = value[0];
                }
                return value;
            }
            catch (error) {
                if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.CALL_EXCEPTION) {
                    error.address = contract.address;
                    error.args = args;
                    error.transaction = tx;
                }
                throw error;
            }
        });
    };
}
function buildSend(contract, fragment) {
    return function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!contract.signer) {
                logger.throwError("sending a transaction requires a signer", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "sendTransaction"
                });
            }
            // If the contract was just deployed, wait until it is mined
            if (contract.deployTransaction != null) {
                yield contract._deployed();
            }
            const txRequest = yield populateTransaction(contract, fragment, args);
            const tx = yield contract.signer.sendTransaction(txRequest);
            // Tweak the tx.wait so the receipt has extra properties
            addContractWait(contract, tx);
            return tx;
        });
    };
}
function buildDefault(contract, fragment, collapseSimple) {
    if (fragment.constant) {
        return buildCall(contract, fragment, collapseSimple);
    }
    return buildSend(contract, fragment);
}
function getEventTag(filter) {
    if (filter.address && (filter.topics == null || filter.topics.length === 0)) {
        return "*";
    }
    return (filter.address || "*") + "@" + (filter.topics ? filter.topics.map((topic) => {
        if (Array.isArray(topic)) {
            return topic.join("|");
        }
        return topic;
    }).join(":") : "");
}
class RunningEvent {
    constructor(tag, filter) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "tag", tag);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "filter", filter);
        this._listeners = [];
    }
    addListener(listener, once) {
        this._listeners.push({ listener: listener, once: once });
    }
    removeListener(listener) {
        let done = false;
        this._listeners = this._listeners.filter((item) => {
            if (done || item.listener !== listener) {
                return true;
            }
            done = true;
            return false;
        });
    }
    removeAllListeners() {
        this._listeners = [];
    }
    listeners() {
        return this._listeners.map((i) => i.listener);
    }
    listenerCount() {
        return this._listeners.length;
    }
    run(args) {
        const listenerCount = this.listenerCount();
        this._listeners = this._listeners.filter((item) => {
            const argsCopy = args.slice();
            // Call the callback in the next event loop
            setTimeout(() => {
                item.listener.apply(this, argsCopy);
            }, 0);
            // Reschedule it if it not "once"
            return !(item.once);
        });
        return listenerCount;
    }
    prepareEvent(event) {
    }
    // Returns the array that will be applied to an emit
    getEmit(event) {
        return [event];
    }
}
class ErrorRunningEvent extends RunningEvent {
    constructor() {
        super("error", null);
    }
}
// @TODO Fragment should inherit Wildcard? and just override getEmit?
//       or have a common abstract super class, with enough constructor
//       options to configure both.
// A Fragment Event will populate all the properties that Wildcard
// will, and additionally dereference the arguments when emitting
class FragmentRunningEvent extends RunningEvent {
    constructor(address, contractInterface, fragment, topics) {
        const filter = {
            address: address
        };
        let topic = contractInterface.getEventTopic(fragment);
        if (topics) {
            if (topic !== topics[0]) {
                logger.throwArgumentError("topic mismatch", "topics", topics);
            }
            filter.topics = topics.slice();
        }
        else {
            filter.topics = [topic];
        }
        super(getEventTag(filter), filter);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "address", address);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", contractInterface);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "fragment", fragment);
    }
    prepareEvent(event) {
        super.prepareEvent(event);
        event.event = this.fragment.name;
        event.eventSignature = this.fragment.format();
        event.decode = (data, topics) => {
            return this.interface.decodeEventLog(this.fragment, data, topics);
        };
        try {
            event.args = this.interface.decodeEventLog(this.fragment, event.data, event.topics);
        }
        catch (error) {
            event.args = null;
            event.decodeError = error;
        }
    }
    getEmit(event) {
        const errors = (0,_ethersproject_abi__WEBPACK_IMPORTED_MODULE_7__.checkResultErrors)(event.args);
        if (errors.length) {
            throw errors[0].error;
        }
        const args = (event.args || []).slice();
        args.push(event);
        return args;
    }
}
// A Wildcard Event will attempt to populate:
//  - event            The name of the event name
//  - eventSignature   The full signature of the event
//  - decode           A function to decode data and topics
//  - args             The decoded data and topics
class WildcardRunningEvent extends RunningEvent {
    constructor(address, contractInterface) {
        super("*", { address: address });
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "address", address);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", contractInterface);
    }
    prepareEvent(event) {
        super.prepareEvent(event);
        try {
            const parsed = this.interface.parseLog(event);
            event.event = parsed.name;
            event.eventSignature = parsed.signature;
            event.decode = (data, topics) => {
                return this.interface.decodeEventLog(parsed.eventFragment, data, topics);
            };
            event.args = parsed.args;
        }
        catch (error) {
            // No matching event
        }
    }
}
class BaseContract {
    constructor(addressOrName, contractInterface, signerOrProvider) {
        logger.checkNew(new.target, Contract);
        // @TODO: Maybe still check the addressOrName looks like a valid address or name?
        //address = getAddress(address);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(new.target, "getInterface")(contractInterface));
        if (signerOrProvider == null) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "provider", null);
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", null);
        }
        else if (_ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__.Signer.isSigner(signerOrProvider)) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "provider", signerOrProvider.provider || null);
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", signerOrProvider);
        }
        else if (_ethersproject_abstract_provider__WEBPACK_IMPORTED_MODULE_9__.Provider.isProvider(signerOrProvider)) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "provider", signerOrProvider);
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", null);
        }
        else {
            logger.throwArgumentError("invalid signer or provider", "signerOrProvider", signerOrProvider);
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "callStatic", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "estimateGas", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "functions", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "populateTransaction", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "filters", {});
        {
            const uniqueFilters = {};
            Object.keys(this.interface.events).forEach((eventSignature) => {
                const event = this.interface.events[eventSignature];
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.filters, eventSignature, (...args) => {
                    return {
                        address: this.address,
                        topics: this.interface.encodeFilterTopics(event, args)
                    };
                });
                if (!uniqueFilters[event.name]) {
                    uniqueFilters[event.name] = [];
                }
                uniqueFilters[event.name].push(eventSignature);
            });
            Object.keys(uniqueFilters).forEach((name) => {
                const filters = uniqueFilters[name];
                if (filters.length === 1) {
                    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.filters, name, this.filters[filters[0]]);
                }
                else {
                    logger.warn(`Duplicate definition of ${name} (${filters.join(", ")})`);
                }
            });
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_runningEvents", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_wrappedEmits", {});
        if (addressOrName == null) {
            logger.throwArgumentError("invalid contract address or ENS name", "addressOrName", addressOrName);
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "address", addressOrName);
        if (this.provider) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "resolvedAddress", resolveName(this.provider, addressOrName));
        }
        else {
            try {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "resolvedAddress", Promise.resolve((0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getAddress)(addressOrName)));
            }
            catch (error) {
                // Without a provider, we cannot use ENS names
                logger.throwError("provider is required to use ENS name as contract address", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new Contract"
                });
            }
        }
        // Swallow bad ENS names to prevent Unhandled Exceptions
        this.resolvedAddress.catch((e) => { });
        const uniqueNames = {};
        const uniqueSignatures = {};
        Object.keys(this.interface.functions).forEach((signature) => {
            const fragment = this.interface.functions[signature];
            // Check that the signature is unique; if not the ABI generation has
            // not been cleaned or may be incorrectly generated
            if (uniqueSignatures[signature]) {
                logger.warn(`Duplicate ABI entry for ${JSON.stringify(signature)}`);
                return;
            }
            uniqueSignatures[signature] = true;
            // Track unique names; we only expose bare named functions if they
            // are ambiguous
            {
                const name = fragment.name;
                if (!uniqueNames[`%${name}`]) {
                    uniqueNames[`%${name}`] = [];
                }
                uniqueNames[`%${name}`].push(signature);
            }
            if (this[signature] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, signature, buildDefault(this, fragment, true));
            }
            // We do not collapse simple calls on this bucket, which allows
            // frameworks to safely use this without introspection as well as
            // allows decoding error recovery.
            if (this.functions[signature] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.functions, signature, buildDefault(this, fragment, false));
            }
            if (this.callStatic[signature] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.callStatic, signature, buildCall(this, fragment, true));
            }
            if (this.populateTransaction[signature] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.populateTransaction, signature, buildPopulate(this, fragment));
            }
            if (this.estimateGas[signature] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.estimateGas, signature, buildEstimate(this, fragment));
            }
        });
        Object.keys(uniqueNames).forEach((name) => {
            // Ambiguous names to not get attached as bare names
            const signatures = uniqueNames[name];
            if (signatures.length > 1) {
                return;
            }
            // Strip off the leading "%" used for prototype protection
            name = name.substring(1);
            const signature = signatures[0];
            // If overwriting a member property that is null, swallow the error
            try {
                if (this[name] == null) {
                    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, name, this[signature]);
                }
            }
            catch (e) { }
            if (this.functions[name] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.functions, name, this.functions[signature]);
            }
            if (this.callStatic[name] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.callStatic, name, this.callStatic[signature]);
            }
            if (this.populateTransaction[name] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.populateTransaction, name, this.populateTransaction[signature]);
            }
            if (this.estimateGas[name] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.estimateGas, name, this.estimateGas[signature]);
            }
        });
    }
    static getContractAddress(transaction) {
        return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getContractAddress)(transaction);
    }
    static getInterface(contractInterface) {
        if (_ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__.Interface.isInterface(contractInterface)) {
            return contractInterface;
        }
        return new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__.Interface(contractInterface);
    }
    // @TODO: Allow timeout?
    deployed() {
        return this._deployed();
    }
    _deployed(blockTag) {
        if (!this._deployedPromise) {
            // If we were just deployed, we know the transaction we should occur in
            if (this.deployTransaction) {
                this._deployedPromise = this.deployTransaction.wait().then(() => {
                    return this;
                });
            }
            else {
                // @TODO: Once we allow a timeout to be passed in, we will wait
                // up to that many blocks for getCode
                // Otherwise, poll for our code to be deployed
                this._deployedPromise = this.provider.getCode(this.address, blockTag).then((code) => {
                    if (code === "0x") {
                        logger.throwError("contract not deployed", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                            contractAddress: this.address,
                            operation: "getDeployed"
                        });
                    }
                    return this;
                });
            }
        }
        return this._deployedPromise;
    }
    // @TODO:
    // estimateFallback(overrides?: TransactionRequest): Promise<BigNumber>
    // @TODO:
    // estimateDeploy(bytecode: string, ...args): Promise<BigNumber>
    fallback(overrides) {
        if (!this.signer) {
            logger.throwError("sending a transactions require a signer", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, { operation: "sendTransaction(fallback)" });
        }
        const tx = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(overrides || {});
        ["from", "to"].forEach(function (key) {
            if (tx[key] == null) {
                return;
            }
            logger.throwError("cannot override " + key, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, { operation: key });
        });
        tx.to = this.resolvedAddress;
        return this.deployed().then(() => {
            return this.signer.sendTransaction(tx);
        });
    }
    // Reconnect to a different signer or provider
    connect(signerOrProvider) {
        if (typeof (signerOrProvider) === "string") {
            signerOrProvider = new _ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__.VoidSigner(signerOrProvider, this.provider);
        }
        const contract = new (this.constructor)(this.address, this.interface, signerOrProvider);
        if (this.deployTransaction) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(contract, "deployTransaction", this.deployTransaction);
        }
        return contract;
    }
    // Re-attach to a different on-chain instance of this contract
    attach(addressOrName) {
        return new (this.constructor)(addressOrName, this.interface, this.signer || this.provider);
    }
    static isIndexed(value) {
        return _ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__.Indexed.isIndexed(value);
    }
    _normalizeRunningEvent(runningEvent) {
        // Already have an instance of this event running; we can re-use it
        if (this._runningEvents[runningEvent.tag]) {
            return this._runningEvents[runningEvent.tag];
        }
        return runningEvent;
    }
    _getRunningEvent(eventName) {
        if (typeof (eventName) === "string") {
            // Listen for "error" events (if your contract has an error event, include
            // the full signature to bypass this special event keyword)
            if (eventName === "error") {
                return this._normalizeRunningEvent(new ErrorRunningEvent());
            }
            // Listen for any event that is registered
            if (eventName === "event") {
                return this._normalizeRunningEvent(new RunningEvent("event", null));
            }
            // Listen for any event
            if (eventName === "*") {
                return this._normalizeRunningEvent(new WildcardRunningEvent(this.address, this.interface));
            }
            // Get the event Fragment (throws if ambiguous/unknown event)
            const fragment = this.interface.getEvent(eventName);
            return this._normalizeRunningEvent(new FragmentRunningEvent(this.address, this.interface, fragment));
        }
        // We have topics to filter by...
        if (eventName.topics && eventName.topics.length > 0) {
            // Is it a known topichash? (throws if no matching topichash)
            try {
                const topic = eventName.topics[0];
                if (typeof (topic) !== "string") {
                    throw new Error("invalid topic"); // @TODO: May happen for anonymous events
                }
                const fragment = this.interface.getEvent(topic);
                return this._normalizeRunningEvent(new FragmentRunningEvent(this.address, this.interface, fragment, eventName.topics));
            }
            catch (error) { }
            // Filter by the unknown topichash
            const filter = {
                address: this.address,
                topics: eventName.topics
            };
            return this._normalizeRunningEvent(new RunningEvent(getEventTag(filter), filter));
        }
        return this._normalizeRunningEvent(new WildcardRunningEvent(this.address, this.interface));
    }
    _checkRunningEvents(runningEvent) {
        if (runningEvent.listenerCount() === 0) {
            delete this._runningEvents[runningEvent.tag];
            // If we have a poller for this, remove it
            const emit = this._wrappedEmits[runningEvent.tag];
            if (emit && runningEvent.filter) {
                this.provider.off(runningEvent.filter, emit);
                delete this._wrappedEmits[runningEvent.tag];
            }
        }
    }
    // Subclasses can override this to gracefully recover
    // from parse errors if they wish
    _wrapEvent(runningEvent, log, listener) {
        const event = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.deepCopy)(log);
        event.removeListener = () => {
            if (!listener) {
                return;
            }
            runningEvent.removeListener(listener);
            this._checkRunningEvents(runningEvent);
        };
        event.getBlock = () => { return this.provider.getBlock(log.blockHash); };
        event.getTransaction = () => { return this.provider.getTransaction(log.transactionHash); };
        event.getTransactionReceipt = () => { return this.provider.getTransactionReceipt(log.transactionHash); };
        // This may throw if the topics and data mismatch the signature
        runningEvent.prepareEvent(event);
        return event;
    }
    _addEventListener(runningEvent, listener, once) {
        if (!this.provider) {
            logger.throwError("events require a provider or a signer with a provider", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, { operation: "once" });
        }
        runningEvent.addListener(listener, once);
        // Track this running event and its listeners (may already be there; but no hard in updating)
        this._runningEvents[runningEvent.tag] = runningEvent;
        // If we are not polling the provider, start polling
        if (!this._wrappedEmits[runningEvent.tag]) {
            const wrappedEmit = (log) => {
                let event = this._wrapEvent(runningEvent, log, listener);
                // Try to emit the result for the parameterized event...
                if (event.decodeError == null) {
                    try {
                        const args = runningEvent.getEmit(event);
                        this.emit(runningEvent.filter, ...args);
                    }
                    catch (error) {
                        event.decodeError = error.error;
                    }
                }
                // Always emit "event" for fragment-base events
                if (runningEvent.filter != null) {
                    this.emit("event", event);
                }
                // Emit "error" if there was an error
                if (event.decodeError != null) {
                    this.emit("error", event.decodeError, event);
                }
            };
            this._wrappedEmits[runningEvent.tag] = wrappedEmit;
            // Special events, like "error" do not have a filter
            if (runningEvent.filter != null) {
                this.provider.on(runningEvent.filter, wrappedEmit);
            }
        }
    }
    queryFilter(event, fromBlockOrBlockhash, toBlock) {
        const runningEvent = this._getRunningEvent(event);
        const filter = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(runningEvent.filter);
        if (typeof (fromBlockOrBlockhash) === "string" && (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isHexString)(fromBlockOrBlockhash, 32)) {
            if (toBlock != null) {
                logger.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", toBlock);
            }
            filter.blockHash = fromBlockOrBlockhash;
        }
        else {
            filter.fromBlock = ((fromBlockOrBlockhash != null) ? fromBlockOrBlockhash : 0);
            filter.toBlock = ((toBlock != null) ? toBlock : "latest");
        }
        return this.provider.getLogs(filter).then((logs) => {
            return logs.map((log) => this._wrapEvent(runningEvent, log, null));
        });
    }
    on(event, listener) {
        this._addEventListener(this._getRunningEvent(event), listener, false);
        return this;
    }
    once(event, listener) {
        this._addEventListener(this._getRunningEvent(event), listener, true);
        return this;
    }
    emit(eventName, ...args) {
        if (!this.provider) {
            return false;
        }
        const runningEvent = this._getRunningEvent(eventName);
        const result = (runningEvent.run(args) > 0);
        // May have drained all the "once" events; check for living events
        this._checkRunningEvents(runningEvent);
        return result;
    }
    listenerCount(eventName) {
        if (!this.provider) {
            return 0;
        }
        if (eventName == null) {
            return Object.keys(this._runningEvents).reduce((accum, key) => {
                return accum + this._runningEvents[key].listenerCount();
            }, 0);
        }
        return this._getRunningEvent(eventName).listenerCount();
    }
    listeners(eventName) {
        if (!this.provider) {
            return [];
        }
        if (eventName == null) {
            const result = [];
            for (let tag in this._runningEvents) {
                this._runningEvents[tag].listeners().forEach((listener) => {
                    result.push(listener);
                });
            }
            return result;
        }
        return this._getRunningEvent(eventName).listeners();
    }
    removeAllListeners(eventName) {
        if (!this.provider) {
            return this;
        }
        if (eventName == null) {
            for (const tag in this._runningEvents) {
                const runningEvent = this._runningEvents[tag];
                runningEvent.removeAllListeners();
                this._checkRunningEvents(runningEvent);
            }
            return this;
        }
        // Delete any listeners
        const runningEvent = this._getRunningEvent(eventName);
        runningEvent.removeAllListeners();
        this._checkRunningEvents(runningEvent);
        return this;
    }
    off(eventName, listener) {
        if (!this.provider) {
            return this;
        }
        const runningEvent = this._getRunningEvent(eventName);
        runningEvent.removeListener(listener);
        this._checkRunningEvents(runningEvent);
        return this;
    }
    removeListener(eventName, listener) {
        return this.off(eventName, listener);
    }
}
class Contract extends BaseContract {
}
class ContractFactory {
    constructor(contractInterface, bytecode, signer) {
        let bytecodeHex = null;
        if (typeof (bytecode) === "string") {
            bytecodeHex = bytecode;
        }
        else if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isBytes)(bytecode)) {
            bytecodeHex = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(bytecode);
        }
        else if (bytecode && typeof (bytecode.object) === "string") {
            // Allow the bytecode object from the Solidity compiler
            bytecodeHex = bytecode.object;
        }
        else {
            // Crash in the next verification step
            bytecodeHex = "!";
        }
        // Make sure it is 0x prefixed
        if (bytecodeHex.substring(0, 2) !== "0x") {
            bytecodeHex = "0x" + bytecodeHex;
        }
        // Make sure the final result is valid bytecode
        if (!(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isHexString)(bytecodeHex) || (bytecodeHex.length % 2)) {
            logger.throwArgumentError("invalid bytecode", "bytecode", bytecode);
        }
        // If we have a signer, make sure it is valid
        if (signer && !_ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__.Signer.isSigner(signer)) {
            logger.throwArgumentError("invalid signer", "signer", signer);
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "bytecode", bytecodeHex);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(new.target, "getInterface")(contractInterface));
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", signer || null);
    }
    // @TODO: Future; rename to populateTransaction?
    getDeployTransaction(...args) {
        let tx = {};
        // If we have 1 additional argument, we allow transaction overrides
        if (args.length === this.interface.deploy.inputs.length + 1 && typeof (args[args.length - 1]) === "object") {
            tx = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(args.pop());
            for (const key in tx) {
                if (!allowedTransactionKeys[key]) {
                    throw new Error("unknown transaction override " + key);
                }
            }
        }
        // Do not allow these to be overridden in a deployment transaction
        ["data", "from", "to"].forEach((key) => {
            if (tx[key] == null) {
                return;
            }
            logger.throwError("cannot override " + key, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, { operation: key });
        });
        if (tx.value) {
            const value = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(tx.value);
            if (!value.isZero() && !this.interface.deploy.payable) {
                logger.throwError("non-payable constructor cannot override value", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "overrides.value",
                    value: tx.value
                });
            }
        }
        // Make sure the call matches the constructor signature
        logger.checkArgumentCount(args.length, this.interface.deploy.inputs.length, " in Contract constructor");
        // Set the data to the bytecode + the encoded constructor arguments
        tx.data = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.concat)([
            this.bytecode,
            this.interface.encodeDeploy(args)
        ]));
        return tx;
    }
    deploy(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            let overrides = {};
            // If 1 extra parameter was passed in, it contains overrides
            if (args.length === this.interface.deploy.inputs.length + 1) {
                overrides = args.pop();
            }
            // Make sure the call matches the constructor signature
            logger.checkArgumentCount(args.length, this.interface.deploy.inputs.length, " in Contract constructor");
            // Resolve ENS names and promises in the arguments
            const params = yield resolveAddresses(this.signer, args, this.interface.deploy.inputs);
            params.push(overrides);
            // Get the deployment transaction (with optional overrides)
            const unsignedTx = this.getDeployTransaction(...params);
            // Send the deployment transaction
            const tx = yield this.signer.sendTransaction(unsignedTx);
            const address = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getContractAddress")(tx);
            const contract = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getContract")(address, this.interface, this.signer);
            // Add the modified wait that wraps events
            addContractWait(contract, tx);
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(contract, "deployTransaction", tx);
            return contract;
        });
    }
    attach(address) {
        return (this.constructor).getContract(address, this.interface, this.signer);
    }
    connect(signer) {
        return new (this.constructor)(this.interface, this.bytecode, signer);
    }
    static fromSolidity(compilerOutput, signer) {
        if (compilerOutput == null) {
            logger.throwError("missing compiler output", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.MISSING_ARGUMENT, { argument: "compilerOutput" });
        }
        if (typeof (compilerOutput) === "string") {
            compilerOutput = JSON.parse(compilerOutput);
        }
        const abi = compilerOutput.abi;
        let bytecode = null;
        if (compilerOutput.bytecode) {
            bytecode = compilerOutput.bytecode;
        }
        else if (compilerOutput.evm && compilerOutput.evm.bytecode) {
            bytecode = compilerOutput.evm.bytecode;
        }
        return new this(abi, bytecode, signer);
    }
    static getInterface(contractInterface) {
        return Contract.getInterface(contractInterface);
    }
    static getContractAddress(tx) {
        return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getContractAddress)(tx);
    }
    static getContract(address, contractInterface, signer) {
        return new Contract(address, contractInterface, signer);
    }
}


/***/ }),

/***/ 8785:
/*!****************************************!*\
  !*** ./src/app/artifacts/Greeter.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"Greeter","sourceName":"contracts/Greeter.sol","abi":[{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"GreeterError","type":"error"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"greeting","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"throwError","outputs":[],"stateMutability":"pure","type":"function"}],"bytecode":"0x60806040523480156200001157600080fd5b5060405162000977380380620009778339810160408190526200003491620001e2565b620000646040518060600160405280602281526020016200095560229139826200008160201b620002911760201c565b805162000079906000906020840190620000f3565b505062000336565b620000ce82826040516024016200009a929190620002c8565b60408051601f198184030181529190526020810180516001600160e01b03908116634b5c427760e01b17909152620000d216565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280546200010190620002fa565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620001cc578181015183820152602001620001b2565b83811115620001dc576000848401525b50505050565b600060208284031215620001f557600080fd5b81516001600160401b03808211156200020d57600080fd5b818401915084601f8301126200022257600080fd5b81518181111562000237576200023762000199565b604051601f8201601f19908116603f0116810190838211818310171562000262576200026262000199565b816040528281528760208487010111156200027c57600080fd5b6200028f836020830160208801620001af565b979650505050505050565b60008151808452620002b4816020860160208601620001af565b601f01601f19169290920160200192915050565b604081526000620002dd60408301856200029a565b8281036020840152620002f181856200029a565b95945050505050565b600181811c908216806200030f57607f821691505b6020821081036200033057634e487b7160e01b600052602260045260246000fd5b50919050565b61060f80620003466000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632f7643a814610051578063a41368621461005b578063cfae32171461006e578063ef690cc01461008c575b600080fd5b610059610094565b005b61005961006936600461041c565b6100ad565b610076610171565b604051610083919061051a565b60405180910390f35b610076610203565b60405163c8508fc360e01b815260040160405180910390fd5b61015a6040518060600160405280602381526020016105e060239139600080546100d690610534565b80601f016020809104026020016040519081016040528092919081815260200182805461010290610534565b801561014f5780601f106101245761010080835404028352916020019161014f565b820191906000526020600020905b81548152906001019060200180831161013257829003601f168201915b5050505050836102eb565b805161016d90600090602084019061036d565b5050565b60606000805461018090610534565b80601f01602080910402602001604051908101604052809291908181526020018280546101ac90610534565b80156101f95780601f106101ce576101008083540402835291602001916101f9565b820191906000526020600020905b8154815290600101906020018083116101dc57829003601f168201915b5050505050905090565b6000805461021090610534565b80601f016020809104026020016040519081016040528092919081815260200182805461023c90610534565b80156102895780601f1061025e57610100808354040283529160200191610289565b820191906000526020600020905b81548152906001019060200180831161026c57829003601f168201915b505050505081565b61016d82826040516024016102a792919061056e565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16634b5c427760e01b17905261034c565b6103478383836040516024016103039392919061059c565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16632ced7cef60e01b17905261034c565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b82805461037990610534565b90600052602060002090601f01602090048101928261039b57600085556103e1565b82601f106103b457805160ff19168380011785556103e1565b828001600101855582156103e1579182015b828111156103e15782518255916020019190600101906103c6565b506103ed9291506103f1565b5090565b5b808211156103ed57600081556001016103f2565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561042e57600080fd5b813567ffffffffffffffff8082111561044657600080fd5b818401915084601f83011261045a57600080fd5b81358181111561046c5761046c610406565b604051601f8201601f19908116603f0116810190838211818310171561049457610494610406565b816040528281528760208487010111156104ad57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000815180845260005b818110156104f3576020818501810151868301820152016104d7565b81811115610505576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061052d60208301846104cd565b9392505050565b600181811c9082168061054857607f821691505b60208210810361056857634e487b7160e01b600052602260045260246000fd5b50919050565b60408152600061058160408301856104cd565b828103602084015261059381856104cd565b95945050505050565b6060815260006105af60608301866104cd565b82810360208401526105c181866104cd565b905082810360408401526105d581856104cd565b969550505050505056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a164736f6c634300080d000a4465706c6f79696e67206120477265657465722077697468206772656574696e673a","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80632f7643a814610051578063a41368621461005b578063cfae32171461006e578063ef690cc01461008c575b600080fd5b610059610094565b005b61005961006936600461041c565b6100ad565b610076610171565b604051610083919061051a565b60405180910390f35b610076610203565b60405163c8508fc360e01b815260040160405180910390fd5b61015a6040518060600160405280602381526020016105e060239139600080546100d690610534565b80601f016020809104026020016040519081016040528092919081815260200182805461010290610534565b801561014f5780601f106101245761010080835404028352916020019161014f565b820191906000526020600020905b81548152906001019060200180831161013257829003601f168201915b5050505050836102eb565b805161016d90600090602084019061036d565b5050565b60606000805461018090610534565b80601f01602080910402602001604051908101604052809291908181526020018280546101ac90610534565b80156101f95780601f106101ce576101008083540402835291602001916101f9565b820191906000526020600020905b8154815290600101906020018083116101dc57829003601f168201915b5050505050905090565b6000805461021090610534565b80601f016020809104026020016040519081016040528092919081815260200182805461023c90610534565b80156102895780601f1061025e57610100808354040283529160200191610289565b820191906000526020600020905b81548152906001019060200180831161026c57829003601f168201915b505050505081565b61016d82826040516024016102a792919061056e565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16634b5c427760e01b17905261034c565b6103478383836040516024016103039392919061059c565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16632ced7cef60e01b17905261034c565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b82805461037990610534565b90600052602060002090601f01602090048101928261039b57600085556103e1565b82601f106103b457805160ff19168380011785556103e1565b828001600101855582156103e1579182015b828111156103e15782518255916020019190600101906103c6565b506103ed9291506103f1565b5090565b5b808211156103ed57600081556001016103f2565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561042e57600080fd5b813567ffffffffffffffff8082111561044657600080fd5b818401915084601f83011261045a57600080fd5b81358181111561046c5761046c610406565b604051601f8201601f19908116603f0116810190838211818310171561049457610494610406565b816040528281528760208487010111156104ad57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000815180845260005b818110156104f3576020818501810151868301820152016104d7565b81811115610505576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061052d60208301846104cd565b9392505050565b600181811c9082168061054857607f821691505b60208210810361056857634e487b7160e01b600052602260045260246000fd5b50919050565b60408152600061058160408301856104cd565b828103602084015261059381856104cd565b95945050505050565b6060815260006105af60608301866104cd565b82810360208401526105c181866104cd565b905082810360408401526105d581856104cd565b969550505050505056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a164736f6c634300080d000a","linkReferences":{},"deployedLinkReferences":{}}');

/***/ })

}]);
//# sourceMappingURL=src_app_views_greeter_greeter_module_ts.js.map