(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-autocomplete-autocompletedemo-module"],{

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

/***/ "./src/app/components/utils/objectutils.ts":
/*!*************************************************!*\
  !*** ./src/app/components/utils/objectutils.ts ***!
  \*************************************************/
/*! exports provided: ObjectUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUtils", function() { return ObjectUtils; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ObjectUtils = /** @class */ (function () {
    function ObjectUtils() {
    }
    ObjectUtils.prototype.equals = function (obj1, obj2, field) {
        if (field)
            return (this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field));
        else
            return this.equalsByValue(obj1, obj2);
    };
    ObjectUtils.prototype.equalsByValue = function (obj1, obj2, visited) {
        if (obj1 == null && obj2 == null) {
            return true;
        }
        if (obj1 == null || obj2 == null) {
            return false;
        }
        if (obj1 == obj2) {
            return true;
        }
        if (typeof obj1 == 'object' && typeof obj2 == 'object') {
            if (visited) {
                if (visited.indexOf(obj1) !== -1)
                    return false;
            }
            else {
                visited = [];
            }
            visited.push(obj1);
            for (var p in obj1) {
                if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
                    return false;
                }
                switch (typeof (obj1[p])) {
                    case 'object':
                        if (!this.equalsByValue(obj1[p], obj2[p], visited))
                            return false;
                        break;
                    case 'function':
                        if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString()))
                            return false;
                        break;
                    default:
                        if (obj1[p] != obj2[p])
                            return false;
                        break;
                }
            }
            for (var p in obj2) {
                if (typeof (obj1[p]) == 'undefined')
                    return false;
            }
            delete obj1._$visited;
            return true;
        }
        return false;
    };
    ObjectUtils.prototype.resolveFieldData = function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    ObjectUtils.prototype.filter = function (value, fields, filterValue) {
        var filteredItems = [];
        if (value) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var item = value_1[_i];
                for (var _a = 0, fields_1 = fields; _a < fields_1.length; _a++) {
                    var field = fields_1[_a];
                    if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }
        return filteredItems;
    };
    ObjectUtils.prototype.reorderArray = function (value, from, to) {
        var target;
        if (value && (from !== to)) {
            if (to >= value.length) {
                target = to - value.length;
                while ((target--) + 1) {
                    value.push(undefined);
                }
            }
            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    };
    ObjectUtils.prototype.generateSelectItems = function (val, field) {
        var selectItems;
        if (val && val.length) {
            selectItems = [];
            for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                var item = val_1[_i];
                selectItems.push({ label: this.resolveFieldData(item, field), value: item });
            }
        }
        return selectItems;
    };
    ObjectUtils.prototype.insertIntoOrderedArray = function (item, index, arr, sourceArr) {
        if (arr.length > 0) {
            var injected = false;
            for (var i = 0; i < arr.length; i++) {
                var currentItemIndex = this.findIndexInList(arr[i], sourceArr);
                if (currentItemIndex > index) {
                    arr.splice(i, 0, item);
                    injected = true;
                    break;
                }
            }
            if (!injected) {
                arr.push(item);
            }
        }
        else {
            arr.push(item);
        }
    };
    ObjectUtils.prototype.findIndexInList = function (item, list) {
        var index = -1;
        if (list) {
            for (var i = 0; i < list.length; i++) {
                if (list[i] == item) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    ObjectUtils = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ObjectUtils);
    return ObjectUtils;
}());



/***/ }),

/***/ "./src/app/showcase/components/autocomplete/autocompletedemo-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/showcase/components/autocomplete/autocompletedemo-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AutoCompleteDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteDemoRoutingModule", function() { return AutoCompleteDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autocompletedemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocompletedemo */ "./src/app/showcase/components/autocomplete/autocompletedemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutoCompleteDemoRoutingModule = /** @class */ (function () {
    function AutoCompleteDemoRoutingModule() {
    }
    AutoCompleteDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _autocompletedemo__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AutoCompleteDemoRoutingModule);
    return AutoCompleteDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/autocomplete/autocompletedemo.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/autocomplete/autocompletedemo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">AutoComplete</span>\r\n        <span>AutoComplete is an input component that provides real-time suggestions when being typed.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"filterCountrySingle($event)\" field=\"name\" [size]=\"30\"\r\n        placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\r\n    <span style=\"margin-left:10px\">Country: {{country ? country.name||country : 'none'}}</span>\r\n\r\n    <h3>Advanced</h3>\r\n    <p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\"\r\n        [minLength]=\"1\" placeholder=\"Hint: type 'v' or 'f'\" [dropdown]=\"true\">\r\n        <ng-template let-brand pTemplate=\"item\">\r\n            <div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\">\r\n                <img src=\"assets/showcase/images/demo/car/{{brand}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\r\n                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand}}</div>\r\n            </div>\r\n        </ng-template>\r\n    </p-autoComplete>\r\n    <span style=\"margin-left:50px\">Brand: {{brand||'none'}}</span>\r\n\r\n    <h3>Multiple</h3>\r\n    <span class=\"ui-fluid\">\r\n        <p-autoComplete [(ngModel)]=\"countries\" [suggestions]=\"filteredCountriesMultiple\" (completeMethod)=\"filterCountryMultiple($event)\" styleClass=\"wid100\"\r\n            [minLength]=\"1\" placeholder=\"Countries\" field=\"name\" [multiple]=\"true\">\r\n        </p-autoComplete>\r\n    </span>\r\n    <ul>\r\n        <li *ngFor=\"let c of countries\">{{c.name}}</li>\r\n    </ul>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;AutoCompleteModule&#125; from 'primeng/autocomplete';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>AutoComplete uses ngModel for two-way binding, requires a list of suggestions and a completeMethod to query for the results. The completeMethod\r\n            gets the query text as event.query property and should update the suggestions with the search results.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"text\" [suggestions]=\"results\" (completeMethod)=\"search($event)\"&gt;&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class AutoCompleteDemo &#123;\r\n\r\n    text: string;\r\n\r\n    results: string[];\r\n\r\n    search(event) &#123;\r\n        this.mylookupservice.getResults(event.query).then(data => &#123;\r\n            this.results = data;\r\n        &#125;);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Change Detection</h3>\r\n            <p>AutoComplete either uses setter based checking or ngDoCheck to realize if the suggestions has changed to update the UI. This is configured using the immutable\r\n                property, when enabled (default) setter based detection is utilized so your changes such as adding or removing a record\r\n                should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change.\r\n                For example, use slice instead of splice when removing an item or use spread operator instead of push method when adding an item. On the other hand, setting immutable property to false removes\r\n                this restriction by using ngDoCheck with IterableDiffers to listen changes without the need to create a new reference of data. Setter based method is faster however\r\n                both methods can be used depending on your preference.\r\n            </p>\r\n\r\n            <p>Note that if no suggestions are available after searching, provide an empty array instead of a null value.</p>\r\n\r\n            <h3>Model Driven Forms</h3>\r\n            <p>AutoComplete can be used in a model driven form as well.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete formControlName=\"city\" [suggestions]=\"results\" (completeMethod)=\"search($event)\"&gt;&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Dropdown</h3>\r\n            <p>Enabling dropdown property displays a button next to the input field where click behavior of the button is defined using dropdownMode\r\n                property that takes \"blank\" or \"current\" as possible values. \"blank\" is the default mode to send a query with an empty string\r\n                whereas \"current\" setting sends a query with the current value of the input.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"text\" [suggestions]=\"results\" (completeMethod)=\"search($event)\"\r\n            [dropdown]=\"true\"&gt;&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class AutoCompleteDemo &#123;\r\n\r\n    text: string;\r\n\r\n    results: string[];\r\n\r\n    search(event) &#123;\r\n        this.mylookupservice.getResults(event.query).then(data => &#123;\r\n            this.results = data;\r\n        &#125;);\r\n    &#125;\r\n\r\n    handleDropdown(event) &#123;\r\n        //event.query = current value in input field\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Multiple Selection</h3>\r\n            <p>Multiple mode is used to select more than one value from the autocomplete. In this case, model reference should be an array.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"texts\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" [multiple]=\"true\"&gt;&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class AutoCompleteDemo &#123;\r\n\r\n    texts: string[];\r\n\r\n    results: string[];\r\n\r\n    search(event) &#123;\r\n        this.mylookupservice.getResults(event.query).then(data => &#123;\r\n            this.results = data;\r\n        &#125;);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Objects</h3>\r\n            <p>AutoComplete can also work with objects using the field property that defines the label to display as a suggestion. The value passed to the model would still be the\r\n            object instance of a suggestion. Here is an example with a Country object that has name and code fields such as &#123;name:\"United States\",code:\"USA\"&#125;.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"val\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" field=\"name\"&gt;&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class AutoCompleteDemo &#123;\r\n\r\n    val: country;\r\n\r\n    results: country[];\r\n\r\n    search(event) &#123;\r\n        this.countrylookupservice.getResults(event.query).then(data => &#123;\r\n            this.results = data;\r\n        &#125;);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Force Selection</h3>\r\n            <p>ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared\r\n            to make sure the value passed to the model is always one of the suggestions.</p>\r\n            <pre>\r\n            <code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"val\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" [forceSelection]=\"true\"&gt;&lt;/p-autoComplete&gt;\r\n            </code>\r\n            </pre>\r\n\r\n            <h3>Templating</h3>\r\n            <p>Item ng-template allows displaying custom content inside the suggestions panel. The local ng-template variable passed to the ng-template is an object in the suggestions array.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\"&gt;\r\n    &lt;ng-template let-brand pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\"&gt;\r\n            &lt;img src=\"assets/showcase/images/demo/car/{{brand}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/&gt;\r\n            &lt;div style=\"font-size:18px;float:right;margin:10px 10px 0 0\"&gt;&#123;&#123;brand&#125;&#125;&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In multiple mode, selected item can be customized using selectedItem ng-template. Note that this\r\n                template is not supported in single mode.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-autoComplete [(ngModel)]=\"texts\" [suggestions]=\"results\" (completeMethod)=\"search($event)\" [multiple]=\"true\"&gt;\r\n    &lt;ng-template let-value pTemplate=\"selectedItem\"&gt;\r\n        &lt;span style=\"font-size:18px\"&gt;&gt;&#123;&#123;value&#125;&#125;&lt;&lt;/span&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-autoComplete&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>suggestions</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of suggestions to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>field</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Field of a suggested object to resolve and display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollHeight</td>\r\n                            <td>string</td>\r\n                            <td>200px</td>\r\n                            <td>Maximum height of the suggestions panel.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dropdown</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Displays a button next to the input field when enabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>multiple</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Specifies if multiple values can be selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>minLength</td>\r\n                            <td>number</td>\r\n                            <td>1</td>\r\n                            <td>Minimum number of characters to initiate a search.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>delay</td>\r\n                            <td>number</td>\r\n                            <td>300</td>\r\n                            <td>Delay between keystrokes to wait before sending a query.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputStyle</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>inputId</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>placeholder</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Hint text for the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>readonly</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the input cannot be typed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>disabled</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that the component should be disabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>maxlength</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Maximum number of character allows in the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>size</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Size of the input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>appendTo</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>tabindex</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Index of the element in tabbing order.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dataKey</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>A property to uniquely identify a value in options.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>autoHighlight</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, highlights the first item in the list by default.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>type</td>\r\n                            <td>string</td>\r\n                            <td>text</td>\r\n                            <td>Type of the input, defaults to \"text\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>emptyMessage</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Message to display when there are no results for a query.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>immutable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines how the suggestions should be manipulated. More information is available at \"Change Detection\" section above.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>required</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>forceSelection</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When present, autocomplete clears the manual input if it does not match of the suggestions to force only\r\n                                accepting values from the suggestions.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dropdownMode</td>\r\n                            <td>string</td>\r\n                            <td>blank</td>\r\n                            <td>Specifies the behavior dropdown button. Default \"blank\" mode\r\n                                    sends an empty string and \"current\" mode sends the input value.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>completeMethod</td>\r\n                            <td>\r\n                                event.originalEvent: browser event <br>\r\n                                event.query: Value to search with\r\n                            </td>\r\n                            <td>Callback to invoke to search for suggestions.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onFocus</td>\r\n                            <td>event: Browser event</td>\r\n                            <td>Callback to invoke when autocomplete gets focus.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onBlur</td>\r\n                            <td>event: Browser event</td>\r\n                            <td>Callback to invoke when autocomplete loses focus.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onKeyUp</td>\r\n                            <td>event: Browser event</td>\r\n                            <td>Callback to invoke when a user releases a key.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSelect</td>\r\n                            <td>\r\n                                value: Selected value\r\n                            </td>\r\n                            <td>Callback to invoke when a suggestion is selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onUnselect</td>\r\n                            <td>\r\n                                value: Unselected value in multiple mode\r\n                            </td>\r\n                            <td>Callback to invoke when a selected value is removed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onDropdownClick</td>\r\n                            <td>\r\n                                event.originalEvent: browser event <br>\r\n                                event.query: Current value of the input field\r\n                            </td>\r\n                            <td>Callback to invoke to when dropdown button is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onClear</td>\r\n                            <td>event: browser event</td>\r\n                            <td>Callback to invoke to when inpu field is cleared.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Element</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-autocomplete</td>\r\n                            <td>Container element</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-panel</td>\r\n                            <td>Overlay panel of suggestions.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-items</td>\r\n                            <td>List container of suggestions.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-list-item</td>\r\n                            <td>List item of a suggestion.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-token</td>\r\n                            <td>Element of a selected item in multiple mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-token-icon</td>\r\n                            <td>Close icon element of a selected item in multiple mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-token-label</td>\r\n                            <td>Label of a selected item in multiple mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-autocomplete-loader</td>\r\n                            <td>Loader icon.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/autocomplete\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountriesSingle\" (completeMethod)=\"filterCountrySingle($event)\" field=\"name\" [size]=\"30\"\r\n    placeholder=\"Countries\" [minLength]=\"1\"&gt;&lt;/p-autoComplete&gt;\r\n&lt;span style=\"margin-left:10px\"&gt;Country: {{country ? country.name||country : 'none'}}&lt;/span&gt;\r\n\r\n&lt;h3&gt;Advanced&lt;/h3&gt;\r\n&lt;p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\"\r\n    [minLength]=\"1\" placeholder=\"Hint: type 'v' or 'f'\" [dropdown]=\"true\"&gt;\r\n    &lt;ng-template let-brand pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\"&gt;\r\n            &lt;img src=\"assets/showcase/images/demo/car/{{brand}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/&gt;\r\n            &lt;div style=\"font-size:18px;float:right;margin:10px 10px 0 0\"&gt;{{brand}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-autoComplete&gt;\r\n&lt;span style=\"margin-left:50px\"&gt;Brand: {{brand||'none'}}&lt;/span&gt;\r\n\r\n&lt;h3&gt;Multiple&lt;/h3&gt;\r\n&lt;span class=\"ui-fluid\"&gt;\r\n    &lt;p-autoComplete [(ngModel)]=\"countries\" [suggestions]=\"filteredCountriesMultiple\" (completeMethod)=\"filterCountryMultiple($event)\" styleClass=\"wid100\"\r\n        [minLength]=\"1\" placeholder=\"Countries\" field=\"name\" [multiple]=\"true\"&gt;\r\n    &lt;/p-autoComplete&gt;\r\n&lt;/span&gt;\r\n&lt;ul&gt;\r\n    &lt;li *ngFor=\"let c of countries\"&gt;&#123;&#123;c.name&#125;&#125;&lt;/li&gt;\r\n&lt;/ul&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class AutoCompleteDemo &#123;\r\n\r\n    country: any;\r\n\r\n    countries: any[];\r\n\r\n    filteredCountriesSingle: any[];\r\n\r\n    filteredCountriesMultiple: any[];\r\n\r\n    brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];\r\n\r\n    filteredBrands: any[];\r\n\r\n    brand: string;\r\n\r\n    constructor(private countryService: CountryService) &#123; &#125;\r\n\r\n    filterCountrySingle(event) &#123;\r\n        let query = event.query;\r\n        this.countryService.getCountries().then(countries => &#123;\r\n            this.filteredCountriesSingle = this.filterCountry(query, countries);\r\n        &#125;);\r\n    &#125;\r\n\r\n    filterCountryMultiple(event) &#123;\r\n        let query = event.query;\r\n        this.countryService.getCountries().then(countries => &#123;\r\n            this.filteredCountriesMultiple = this.filterCountry(query, countries);\r\n        &#125;);\r\n    &#125;\r\n\r\n    filterCountry(query, countries: any[]):any[] &#123;\r\n        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side\r\n        let filtered : any[] = [];\r\n        for(let i = 0; i < countries.length; i++) &#123;\r\n            let country = countries[i];\r\n            if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) &#123;\r\n                filtered.push(country);\r\n            &#125;\r\n        &#125;\r\n        return filtered;\r\n    &#125;\r\n\r\n    filterBrands(event) &#123;\r\n        this.filteredBrands = [];\r\n        for(let i = 0; i < this.brands.length; i++) &#123;\r\n            let brand = this.brands[i];\r\n            if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) &#123;\r\n                this.filteredBrands.push(brand);\r\n            &#125;\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\n@Injectable()\r\nexport class CountryService &#123;\r\n\r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getCountries() &#123;\r\n        return this.http.get('showcase/resources/data/countries.json')\r\n                    .toPromise()\r\n                    .then(res => &lt;any[]&gt; res.json().data)\r\n                    .then(data => &#123; return data; &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/autocomplete/autocompletedemo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/showcase/components/autocomplete/autocompletedemo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AutoCompleteDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteDemoModule", function() { return AutoCompleteDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _autocompletedemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocompletedemo */ "./src/app/showcase/components/autocomplete/autocompletedemo.ts");
/* harmony import */ var _autocompletedemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autocompletedemo-routing.module */ "./src/app/showcase/components/autocomplete/autocompletedemo-routing.module.ts");
/* harmony import */ var _components_autocomplete_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/autocomplete/autocomplete */ "./src/app/components/autocomplete/autocomplete.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AutoCompleteDemoModule = /** @class */ (function () {
    function AutoCompleteDemoModule() {
    }
    AutoCompleteDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _autocompletedemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteDemoRoutingModule"],
                _components_autocomplete_autocomplete__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"]
            ],
            declarations: [
                _autocompletedemo__WEBPACK_IMPORTED_MODULE_3__["AutoCompleteDemo"]
            ]
        })
    ], AutoCompleteDemoModule);
    return AutoCompleteDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/autocomplete/autocompletedemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/autocomplete/autocompletedemo.ts ***!
  \**********************************************************************/
/*! exports provided: AutoCompleteDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteDemo", function() { return AutoCompleteDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_countryservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/countryservice */ "./src/app/showcase/service/countryservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutoCompleteDemo = /** @class */ (function () {
    function AutoCompleteDemo(countryService) {
        this.countryService = countryService;
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
    }
    AutoCompleteDemo.prototype.filterCountrySingle = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountriesSingle = _this.filterCountry(query, countries);
        });
    };
    AutoCompleteDemo.prototype.filterCountryMultiple = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountriesMultiple = _this.filterCountry(query, countries);
        });
    };
    AutoCompleteDemo.prototype.filterCountry = function (query, countries) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    AutoCompleteDemo.prototype.filterBrands = function (event) {
        this.filteredBrands = [];
        for (var i = 0; i < this.brands.length; i++) {
            var brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    };
    AutoCompleteDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./autocompletedemo.html */ "./src/app/showcase/components/autocomplete/autocompletedemo.html")
        }),
        __metadata("design:paramtypes", [_service_countryservice__WEBPACK_IMPORTED_MODULE_1__["CountryService"]])
    ], AutoCompleteDemo);
    return AutoCompleteDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-autocomplete-autocompletedemo-module.js.map