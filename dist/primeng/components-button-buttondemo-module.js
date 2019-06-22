(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-button-buttondemo-module"],{

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

/***/ "./src/app/showcase/components/button/buttondemo-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/button/buttondemo-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ButtonDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemoRoutingModule", function() { return ButtonDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buttondemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttondemo */ "./src/app/showcase/components/button/buttondemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ButtonDemoRoutingModule = /** @class */ (function () {
    function ButtonDemoRoutingModule() {
    }
    ButtonDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _buttondemo__WEBPACK_IMPORTED_MODULE_2__["ButtonDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ButtonDemoRoutingModule);
    return ButtonDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/button/buttondemo.html":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/button/buttondemo.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">Button</span>\r\n        <span>Button is an extension to standard input element with icons and theming.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3>Button Component</h3>\r\n    <p-button (onClick)=\"count()\" label=\"Click\"></p-button>\r\n    \r\n    <p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" label=\"Click\"></p-button>\r\n    \r\n    <p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" iconPos=\"right\" label=\"Click\"></p-button>\r\n    \r\n    <p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-close\"></p-button>\r\n    \r\n    <p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" [disabled]=\"true\" label=\"Disabled\"></p-button>\r\n\r\n    <h3>Button Directive</h3>\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Click\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" label=\"Click\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" iconPos=\"right\" label=\"Click\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-close\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" [disabled]=\"true\" label=\"Disabled\"></button>\r\n\r\n    <h3>Severity Buttons</h3>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Primary\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Secondary\" class=\"ui-button-secondary\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Success\" class=\"ui-button-success\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Info\"  class=\"ui-button-info\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Warning\"  class=\"ui-button-warning\"></button>\r\n\r\n    <button pButton type=\"button\" (click)=\"count()\" label=\"Danger\"  class=\"ui-button-danger\"></button>\r\n\r\n    <br /><br />\r\n    Number of clicks: {{clicks}}\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n                    <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ButtonModule&#125; from 'primeng/button';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>Button is either applies as a component using p-button element or a directive using pButton attribute. Directive enhances an existing button whereas \r\n                p-button is an element on its own.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;button pButton type=\"button\" label=\"Click\" &gt;&lt;/button&gt;\r\n&lt;p-button label=\"Click\" &gt;&lt;/p-button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Events</h3>\r\n            <p>Events are defined using standard notation in pButton and with on* prefix at p-button.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;button pButton type=\"button\" label=\"Click\" (click)=\"handleClick($event)\"&gt;&lt;/button&gt;\r\n&lt;p-button label=\"Click\" (onClick)=\"handleClick($event)\"&gt;&lt;/p-button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class Model &#123;\r\n\r\n    handleClick() &#123;\r\n        //execute action\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Icons</h3>\r\n            <p>Icon on a button is specified with icon attribute and position is customized using iconPos attribute. Default\r\n            icon position is left. To display only an icon, leave label as undefined.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;button pButton type=\"button\" icon=\"fa-check\" iconPos=\"left\"&gt;&lt;/button&gt;\r\n&lt;p-button label=\"Click\" icon=\"fa fa-check\" iconPos=\"left\"&gt;&lt;/p-button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Severity</h3>\r\n            <p>Different color options are available to define severity levels.</p>\r\n\r\n            <ul>\r\n                <li>.ui-button-secondary</li>\r\n                <li>.ui-button-success</li>\r\n                <li>.ui-button-info</li>\r\n                <li>.ui-button-warning</li>\r\n                <li>.ui-button-danger</li>\r\n            </ul>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;button pButton type=\"button\" class=\"ui-button-info\"&gt;&lt;/button&gt;\r\n&lt;p-button label=\"Click\" styleClass=\"ui-button-info\"&gt;&lt;/p-button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties of pButton</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>label</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Text of the button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>iconPos</td>\r\n                            <td>string</td>\r\n                            <td>left</td>\r\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>cornerStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>ui-corner-all</td>\r\n                            <td>Defines the cornering of the button, valid replacements are top, left, right and button such as ui-corner-top.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Properties of p-button</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>type</td>\r\n                            <td>string</td>\r\n                            <td>button</td>\r\n                            <td>Type of the button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>label</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Text of the button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>iconPos</td>\r\n                            <td>string</td>\r\n                            <td>left</td>\r\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the component should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onClick</td>\r\n                            <td>event</td>\r\n                            <td>null</td>\r\n                            <td>Callback to execute when button is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onFocus</td>\r\n                            <td>event</td>\r\n                            <td>null</td>\r\n                            <td>Callback to execute when button is focused.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onBlur</td>\r\n                            <td>event</td>\r\n                            <td>null</td>\r\n                            <td>Callback to execute when button loses focus.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-button</td>\r\n                            <td>Button element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-button-icon</td>\r\n                            <td>Icon element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-button-text</td>\r\n                            <td>Label element of the button</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/button\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3&gt;Button Component&lt;/h3&gt;\r\n&lt;p-button (onClick)=\"count()\" label=\"Click\"&gt;&lt;/p-button&gt;\r\n\r\n&lt;p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" label=\"Click\"&gt;&lt;/p-button&gt;\r\n\r\n&lt;p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" iconPos=\"right\" label=\"Click\"&gt;&lt;/p-button&gt;\r\n\r\n&lt;p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-close\"&gt;&lt;/p-button&gt;\r\n\r\n&lt;p-button (onClick)=\"count()\" icon=\"fa fa-fw fa-check\" [disabled]=\"true\" label=\"Disabled\"&gt;&lt;/p-button&gt;\r\n\r\n&lt;h3&gt;Button Directive&lt;/h3&gt;\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Click\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" label=\"Click\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" iconPos=\"right\" label=\"Click\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-close\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" icon=\"fa-check\" [disabled]=\"true\" label=\"Disabled\"&gt;&lt;/button&gt;\r\n\r\n&lt;h3&gt;Severity Buttons&lt;/h3&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Primary\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Secondary\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Success\" class=\"ui-button-success\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Info\"  class=\"ui-button-info\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Warning\"  class=\"ui-button-warning\"&gt;&lt;/button&gt;\r\n\r\n&lt;button pButton type=\"button\" (click)=\"count()\" label=\"Danger\"  class=\"ui-button-danger\"&gt;&lt;/button&gt;\r\n\r\nNumber of clicks: {{clicks}}\r\n</code>\r\n</pre>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ButtonDemo &#123;\r\n\r\n    clicks: number = 0;\r\n\r\n    count() &#123;\r\n        this.clicks++;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </ p-tabPanel>\r\n     </p-tabView >\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/button/buttondemo.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/showcase/components/button/buttondemo.module.ts ***!
  \*****************************************************************/
/*! exports provided: ButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemoModule", function() { return ButtonDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buttondemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttondemo */ "./src/app/showcase/components/button/buttondemo.ts");
/* harmony import */ var _buttondemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttondemo-routing.module */ "./src/app/showcase/components/button/buttondemo-routing.module.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ButtonDemoModule = /** @class */ (function () {
    function ButtonDemoModule() {
    }
    ButtonDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _buttondemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["ButtonDemoRoutingModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"]
            ],
            declarations: [
                _buttondemo__WEBPACK_IMPORTED_MODULE_2__["ButtonDemo"]
            ]
        })
    ], ButtonDemoModule);
    return ButtonDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/button/buttondemo.ts":
/*!**********************************************************!*\
  !*** ./src/app/showcase/components/button/buttondemo.ts ***!
  \**********************************************************/
/*! exports provided: ButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemo", function() { return ButtonDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonDemo = /** @class */ (function () {
    function ButtonDemo() {
        this.clicks = 0;
    }
    ButtonDemo.prototype.count = function () {
        this.clicks++;
    };
    ButtonDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./buttondemo.html */ "./src/app/showcase/components/button/buttondemo.html"),
            styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n        }\n    "]
        })
    ], ButtonDemo);
    return ButtonDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-button-buttondemo-module.js.map