(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-splitbutton-splitbuttondemo-module"],{

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

/***/ "./src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SplitButtonDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonDemoRoutingModule", function() { return SplitButtonDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _splitbuttondemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splitbuttondemo */ "./src/app/showcase/components/splitbutton/splitbuttondemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplitButtonDemoRoutingModule = /** @class */ (function () {
    function SplitButtonDemoRoutingModule() {
    }
    SplitButtonDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _splitbuttondemo__WEBPACK_IMPORTED_MODULE_2__["SplitButtonDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SplitButtonDemoRoutingModule);
    return SplitButtonDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/splitbutton/splitbuttondemo.html":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/splitbutton/splitbuttondemo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">SplitButton</span>\r\n        <span>SplitButton groups a set of commands in an overlay with a default command.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n    \r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"></p-splitButton>\r\n    \r\n    <h3>Severities</h3>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-secondary\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-success\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-info\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-warning\"></p-splitButton>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-danger\"></p-splitButton>\r\n    \r\n    <h3>RTL</h3>\r\n    <p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" dir=\"rtl\"></p-splitButton>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n                    <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SplitButtonModule&#125; from 'primeng/splitbutton';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>SplitButton has a default command button and a collection of menuitems to be displayed in an overlay.</p>\r\n            \r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>MenuModel API</h3>\r\n            <p>SplitButton uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\r\n    \r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>label</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Text of the button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>icon</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the icon.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>iconPos</td>\r\n                            <td>string</td>\r\n                            <td>left</td>\r\n                            <td>Position of the icon, valid values are \"left\" and \"right\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>menuStyle</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the overlay menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>menuStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the overlay menu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the component should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dir</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Indicates the direction of the element.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            \r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onClick</td>\r\n                            <td>event: browser event<br></td>\r\n                            <td>Callback to invoke when default command button is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onDropdownClick</td>\r\n                            <td>event: browser event<br></td>\r\n                            <td>Callback to invoke when dropdown button is clicked.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          <h3>Severity</h3>\r\n          <p>Different color options are available to define severity levels.</p>\r\n\r\n          <ul>\r\n            <li>.ui-button-secondary</li>\r\n            <li>.ui-button-success</li>\r\n            <li>.ui-button-info</li>\r\n            <li>.ui-button-warning</li>\r\n            <li>.ui-button-danger</li>\r\n          </ul>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\r\n</code>\r\n</pre>\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>. SplitButton uses\r\n            button and menu components internally, refer to their documentation for the detailed style list.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-splitbutton</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-splitbutton-button</td>\r\n                            <td>Dropdown button.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-menu</td>\r\n                            <td>Overlay menu.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/splitbutton\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\"&gt;&lt;/p-splitButton&gt;\r\n\r\n&lt;h3&gt;Severities&lt;/h3&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-secondary\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-success\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-info\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-warning\"&gt;&lt;/p-splitButton&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-danger\"&gt;&lt;/p-splitButton&gt;\r\n\r\n&lt;h3&gt;RTL&lt;/h3&gt;\r\n&lt;p-splitButton label=\"Save\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" dir=\"rtl\"&gt;&lt;/p-splitButton&gt;\r\n</code>\r\n</pre>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class SplitButtonDemo implements OnInit &#123;\r\n\r\n    msgs: Message[] = [];\r\n    \r\n    items: MenuItem[];\r\n    \r\n    ngOnInit() &#123;\r\n        this.items = [\r\n            &#123;label: 'Update', icon: 'fa-refresh', command: () => &#123;\r\n                this.update();\r\n            &#125;&#125;,\r\n            &#123;label: 'Delete', icon: 'fa-close', command: () => &#123;\r\n                this.delete();\r\n            &#125;&#125;,\r\n            &#123;label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'&#125;,\r\n            &#123;label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']&#125;\r\n        ];\r\n    &#125;\r\n\r\n    save() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Success', detail:'Data Saved'&#125;);\r\n    &#125;\r\n    \r\n    update() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Success', detail:'Data Updated'&#125;);\r\n    &#125;\r\n    \r\n    delete() &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Success', detail:'Data Deleted'&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </ p-tabPanel>\r\n     </p-tabView >\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/splitbutton/splitbuttondemo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/splitbutton/splitbuttondemo.module.ts ***!
  \***************************************************************************/
/*! exports provided: SplitButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonDemoModule", function() { return SplitButtonDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _splitbuttondemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splitbuttondemo */ "./src/app/showcase/components/splitbutton/splitbuttondemo.ts");
/* harmony import */ var _splitbuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splitbuttondemo-routing.module */ "./src/app/showcase/components/splitbutton/splitbuttondemo-routing.module.ts");
/* harmony import */ var _components_splitbutton_splitbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/splitbutton/splitbutton */ "./src/app/components/splitbutton/splitbutton.ts");
/* harmony import */ var _components_growl_growl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/growl/growl */ "./src/app/components/growl/growl.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SplitButtonDemoModule = /** @class */ (function () {
    function SplitButtonDemoModule() {
    }
    SplitButtonDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _splitbuttondemo_routing_module__WEBPACK_IMPORTED_MODULE_3__["SplitButtonDemoRoutingModule"],
                _components_splitbutton_splitbutton__WEBPACK_IMPORTED_MODULE_4__["SplitButtonModule"],
                _components_growl_growl__WEBPACK_IMPORTED_MODULE_5__["GrowlModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _splitbuttondemo__WEBPACK_IMPORTED_MODULE_2__["SplitButtonDemo"]
            ]
        })
    ], SplitButtonDemoModule);
    return SplitButtonDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/splitbutton/splitbuttondemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/splitbutton/splitbuttondemo.ts ***!
  \********************************************************************/
/*! exports provided: SplitButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonDemo", function() { return SplitButtonDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplitButtonDemo = /** @class */ (function () {
    function SplitButtonDemo() {
        this.msgs = [];
    }
    SplitButtonDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Update', icon: 'fa-refresh', command: function () {
                    _this.update();
                } },
            { label: 'Delete', icon: 'fa-close', command: function () {
                    _this.delete();
                } },
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
        ];
    };
    SplitButtonDemo.prototype.save = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
    };
    SplitButtonDemo.prototype.update = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
    };
    SplitButtonDemo.prototype.delete = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
    };
    SplitButtonDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./splitbuttondemo.html */ "./src/app/showcase/components/splitbutton/splitbuttondemo.html"),
            styles: ["\n        :host ::ng-deep .ui-splitbutton {\n            margin-right: .25em;\n        }\n    "]
        })
    ], SplitButtonDemo);
    return SplitButtonDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-splitbutton-splitbuttondemo-module.js.map