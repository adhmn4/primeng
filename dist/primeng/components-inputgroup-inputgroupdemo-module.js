(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inputgroup-inputgroupdemo-module"],{

/***/ "./src/app/components/button/button.ts":
/*!*********************************************!*\
  !*** ./src/app/components/button/button.ts ***!
  \*********************************************/
/*! exports provided: ButtonDirective, Button, ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return ButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dom_domhandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/domhandler */ "./src/app/components/dom/domhandler.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonDirective = /** @class */ (function () {
    function ButtonDirective(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.iconPos = 'left';
        this.cornerStyleClass = 'ui-corner-all';
    }
    ButtonDirective.prototype.ngAfterViewInit = function () {
        this.domHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
        if (this.icon) {
            var iconElement = document.createElement("span");
            iconElement.setAttribute("aria-hidden", "true");
            var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
            iconElement.className = iconPosClass + ' ui-clickable fa fa-fw ' + this.icon;
            this.el.nativeElement.appendChild(iconElement);
        }
        var labelElement = document.createElement("span");
        labelElement.className = 'ui-button-text ui-clickable';
        labelElement.appendChild(document.createTextNode(this.label || 'ui-btn'));
        this.el.nativeElement.appendChild(labelElement);
        this.initialized = true;
    };
    ButtonDirective.prototype.getStyleClass = function () {
        var styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;
        if (this.icon) {
            if (this.label != null && this.label != undefined) {
                if (this.iconPos == 'left')
                    styleClass = styleClass + ' ui-button-text-icon-left';
                else
                    styleClass = styleClass + ' ui-button-text-icon-right';
            }
            else {
                styleClass = styleClass + ' ui-button-icon-only';
            }
        }
        else {
            if (this.label) {
                styleClass = styleClass + ' ui-button-text-only';
            }
            else {
                styleClass = styleClass + ' ui-button-text-empty';
            }
        }
        return styleClass;
    };
    Object.defineProperty(ButtonDirective.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            this._label = val;
            if (this.initialized) {
                this.domHandler.findSingle(this.el.nativeElement, '.ui-button-text').textContent = this._label;
                if (!this.icon) {
                    if (this._label) {
                        this.domHandler.removeClass(this.el.nativeElement, 'ui-button-text-empty');
                        this.domHandler.addClass(this.el.nativeElement, 'ui-button-text-only');
                    }
                    else {
                        this.domHandler.addClass(this.el.nativeElement, 'ui-button-text-empty');
                        this.domHandler.removeClass(this.el.nativeElement, 'ui-button-text-only');
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (val) {
            this._icon = val;
            if (this.initialized) {
                var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
                this.domHandler.findSingle(this.el.nativeElement, '.fa').className =
                    iconPosClass + ' ui-clickable fa fa-fw ' + this.icon;
            }
        },
        enumerable: true,
        configurable: true
    });
    ButtonDirective.prototype.ngOnDestroy = function () {
        while (this.el.nativeElement.hasChildNodes()) {
            this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
        }
        this.initialized = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonDirective.prototype, "iconPos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonDirective.prototype, "cornerStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonDirective.prototype, "label", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ButtonDirective.prototype, "icon", null);
    ButtonDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pButton]',
            providers: [_dom_domhandler__WEBPACK_IMPORTED_MODULE_1__["DomHandler"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _dom_domhandler__WEBPACK_IMPORTED_MODULE_1__["DomHandler"]])
    ], ButtonDirective);
    return ButtonDirective;
}());

var Button = /** @class */ (function () {
    function Button() {
        this.type = 'button';
        this.iconPos = 'left';
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Button.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Button.prototype, "iconPos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Button.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Button.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Button.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Button.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Button.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Button.prototype, "onClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Button.prototype, "onFocus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Button.prototype, "onBlur", void 0);
    Button = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-button',
            template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [style]=\"style\" [disabled]=\"disabled\"\n            [ngClass]=\"{'ui-button ui-widget ui-state-default ui-corner-all':true,\n                        'ui-button-icon-only': (icon && !label),\n                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),\n                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),\n                        'ui-button-text-only': (!icon && label),\n                        'ui-button-text-empty': (!icon && !label),\n                        'ui-state-disabled': disabled}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\">\n            <ng-content></ng-content>\n            <span [ngClass]=\"{'ui-clickable': true,\n                        'ui-button-icon-left': (iconPos === 'left'), \n                        'ui-button-icon-right': (iconPos === 'right')}\"\n                        [class]=\"icon\" *ngIf=\"icon\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{label||'ui-btn'}}</span>\n        </button>\n    "
        })
    ], Button);
    return Button;
}());

var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [ButtonDirective, Button],
            declarations: [ButtonDirective, Button]
        })
    ], ButtonModule);
    return ButtonModule;
}());



/***/ }),

/***/ "./src/app/components/inputtext/inputtext.ts":
/*!***************************************************!*\
  !*** ./src/app/components/inputtext/inputtext.ts ***!
  \***************************************************/
/*! exports provided: InputText, InputTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return InputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextModule", function() { return InputTextModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var InputText = /** @class */ (function () {
    function InputText(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    InputText.prototype.ngDoCheck = function () {
        this.updateFilledState();
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputText.prototype.onInput = function (e) {
        this.updateFilledState();
    };
    InputText.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputText.prototype, "onInput", null);
    InputText = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pInputText]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]])
    ], InputText);
    return InputText;
}());

var InputTextModule = /** @class */ (function () {
    function InputTextModule() {
    }
    InputTextModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [InputText],
            declarations: [InputText]
        })
    ], InputTextModule);
    return InputTextModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputgroup/inputgroupdemo-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/showcase/components/inputgroup/inputgroupdemo-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: InputGroupDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupDemoRoutingModule", function() { return InputGroupDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inputgroupdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputgroupdemo */ "./src/app/showcase/components/inputgroup/inputgroupdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputGroupDemoRoutingModule = /** @class */ (function () {
    function InputGroupDemoRoutingModule() {
    }
    InputGroupDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _inputgroupdemo__WEBPACK_IMPORTED_MODULE_2__["InputGroupDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], InputGroupDemoRoutingModule);
    return InputGroupDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputgroup/inputgroupdemo.html":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/inputgroup/inputgroupdemo.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">InputGroup</span>\r\n        <span>Text, icon, buttons and other content can be grouped next to an input by wrapping the addons and input inside\r\n            .ui-inputgroup element. Multiple addons can be used within the same group as well.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Addons</h3>\r\n    <div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n                <input type=\"text\" pInputText placeholder=\"Username\">         \r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\">$</span>\r\n                <input type=\"text\" pInputText placeholder=\"Price\">   \r\n                <span class=\"ui-inputgroup-addon\">.00</span>      \r\n            </div>\r\n        </div>\r\n                \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\">www</span>\r\n                <input type=\"text\" pInputText placeholder=\"Website\">      \r\n            </div>\r\n        </div>\r\n    </div>\r\n        \r\n    <h3>Multiple Addons</h3>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-credit-card\"></i></span>  \r\n                <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-cc-visa\"></i></span>   \r\n                <input type=\"text\" pInputText placeholder=\"Price\"> \r\n                <span class=\"ui-inputgroup-addon\">$</span>  \r\n                <span class=\"ui-inputgroup-addon\">.00</span>      \r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <h3>Button Addons</h3>\r\n    <div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <button pButton type=\"button\" label=\"Search\"></button>\r\n                <input type=\"text\" pInputText placeholder=\"Keyword\">         \r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <input type=\"text\" pInputText placeholder=\"Keyword\">   \r\n                <button pButton type=\"button\" icon=\"fa-superpowers\" class=\"ui-button-secondary\"></button>      \r\n            </div>\r\n        </div>\r\n                \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <button pButton type=\"button\" icon=\"fa-check\" class=\"ui-button-success\"></button>    \r\n                <input type=\"text\" pInputText placeholder=\"Vote\">   \r\n                <button pButton type=\"button\" icon=\"fa-close\" class=\"ui-button-danger\"></button>      \r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <h3>Checkbox and RadioButton</h3>\r\n    <div class=\"ui-g ui-fluid\">\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><p-checkbox></p-checkbox></span>\r\n                <input type=\"text\" pInputText placeholder=\"Username\">         \r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <input type=\"text\" pInputText placeholder=\"Price\">   \r\n                <span class=\"ui-inputgroup-addon\"><p-radioButton></p-radioButton></span>      \r\n            </div>\r\n        </div>\r\n                \r\n        <div class=\"ui-g-12 ui-md-4\">\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><p-checkbox></p-checkbox></span>\r\n                <input type=\"text\" pInputText placeholder=\"Website\">      \r\n                <span class=\"ui-inputgroup-addon\"><p-radioButton></p-radioButton></span> \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"inputgroupdemo.html\">\r\n<a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/inputgroup\" class=\"btn-viewsource\" target=\"_blank\">\r\n    <i class=\"fa fa-github\"></i>\r\n    <span>View on GitHub</span>\r\n</a>\r\n\r\n    <pre>\r\n    <code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Addons&lt;/h3&gt;\r\n&lt;div class=\"ui-g ui-fluid\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"fa fa-user\"&gt;&lt;/i&gt;&lt;/span&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Username\"&gt;         \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;$&lt;/span&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Price\"&gt;   \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;.00&lt;/span&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n            \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;www&lt;/span&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Website\"&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n    \r\n&lt;h3&gt;Multiple Addons&lt;/h3&gt;\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"fa fa-credit-card\"&gt;&lt;/i&gt;&lt;/span&gt;  \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;i class=\"fa fa-cc-visa\"&gt;&lt;/i&gt;&lt;/span&gt;   \r\n            &lt;input type=\"text\" pInputText placeholder=\"Price\"&gt; \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;$&lt;/span&gt;  \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;.00&lt;/span&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Button Addons&lt;/h3&gt;\r\n&lt;div class=\"ui-g ui-fluid\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;button pButton type=\"button\" label=\"Search\"&gt;&lt;/button&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Keyword\"&gt;         \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Keyword\"&gt;   \r\n            &lt;button pButton type=\"button\" icon=\"fa-superpowers\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n            \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;button pButton type=\"button\" icon=\"fa-check\" class=\"ui-button-success\"&gt;&lt;/button&gt;    \r\n            &lt;input type=\"text\" pInputText placeholder=\"Vote\"&gt;   \r\n            &lt;button pButton type=\"button\" icon=\"fa-close\" class=\"ui-button-danger\"&gt;&lt;/button&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n\r\n&lt;h3&gt;Checkbox and RadioButton&lt;/h3&gt;\r\n&lt;div class=\"ui-g ui-fluid\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-checkbox&gt;&lt;/p-checkbox&gt;&lt;/span&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Username\"&gt;         \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Price\"&gt;   \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-radioButton&gt;&lt;/p-radioButton&gt;&lt;/span&gt;      \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n            \r\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\r\n        &lt;div class=\"ui-inputgroup\"&gt;\r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-checkbox&gt;&lt;/p-checkbox&gt;&lt;/span&gt;\r\n            &lt;input type=\"text\" pInputText placeholder=\"Website\"&gt;      \r\n            &lt;span class=\"ui-inputgroup-addon\"&gt;&lt;p-radioButton&gt;&lt;/p-radioButton&gt;&lt;/span&gt; \r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n        \r\n        <p-tabPanel header=\"inputgroupdemo.ts\">\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class InputGroupDemo &#123;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/inputgroup/inputgroupdemo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/inputgroup/inputgroupdemo.module.ts ***!
  \*************************************************************************/
/*! exports provided: InputGroupDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupDemoModule", function() { return InputGroupDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inputgroupdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputgroupdemo */ "./src/app/showcase/components/inputgroup/inputgroupdemo.ts");
/* harmony import */ var _inputgroupdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputgroupdemo-routing.module */ "./src/app/showcase/components/inputgroup/inputgroupdemo-routing.module.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/checkbox/checkbox */ "./src/app/components/checkbox/checkbox.ts");
/* harmony import */ var _components_radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/radiobutton/radiobutton */ "./src/app/components/radiobutton/radiobutton.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var InputGroupDemoModule = /** @class */ (function () {
    function InputGroupDemoModule() {
    }
    InputGroupDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _inputgroupdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["InputGroupDemoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                _components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_6__["CheckboxModule"],
                _components_radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_7__["RadioButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_9__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_10__["CodeHighlighterModule"]
            ],
            declarations: [
                _inputgroupdemo__WEBPACK_IMPORTED_MODULE_3__["InputGroupDemo"]
            ]
        })
    ], InputGroupDemoModule);
    return InputGroupDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/inputgroup/inputgroupdemo.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/inputgroup/inputgroupdemo.ts ***!
  \******************************************************************/
/*! exports provided: InputGroupDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupDemo", function() { return InputGroupDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InputGroupDemo = /** @class */ (function () {
    function InputGroupDemo() {
    }
    InputGroupDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./inputgroupdemo.html */ "./src/app/showcase/components/inputgroup/inputgroupdemo.html")
        })
    ], InputGroupDemo);
    return InputGroupDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-inputgroup-inputgroupdemo-module.js.map