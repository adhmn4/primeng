(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-listbox-listboxdemo-module"],{

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

/***/ "./src/app/showcase/components/listbox/listboxdemo-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/listbox/listboxdemo-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListboxDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListboxDemoRoutingModule", function() { return ListboxDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listboxdemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listboxdemo */ "./src/app/showcase/components/listbox/listboxdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListboxDemoRoutingModule = /** @class */ (function () {
    function ListboxDemoRoutingModule() {
    }
    ListboxDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _listboxdemo__WEBPACK_IMPORTED_MODULE_2__["ListboxDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ListboxDemoRoutingModule);
    return ListboxDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/listbox/listboxdemo.html":
/*!**************************************************************!*\
  !*** ./src/app/showcase/components/listbox/listboxdemo.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\r\n  <div>\r\n    <span class=\"feature-title\">Listbox</span>\r\n    <span>Listbox is used to select one or more values from a list of items.</span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n  <h3 class=\"first\">Basic</h3>\r\n  <p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCity\" [style]=\"{'width':'200px'}\" optionLabel=\"name\"></p-listbox>\r\n\r\n  <p>Selected City: {{selectedCity ? selectedCity.name : 'none'}}</p>\r\n\r\n  <h3>Advanced (Multiple, Checkbox and Filter)</h3>\r\n  <p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCities\" multiple=\"multiple\" checkbox=\"checkbox\" filter=\"filter\" optionLabel=\"name\">\r\n    <p-header>\r\n      <i class=\"fa fa-car\"></i>\r\n      Cars\r\n    </p-header>\r\n  </p-listbox>\r\n  <p>Selected Cities: <span *ngFor=\"let c of selectedCities\" style=\"margin-right: 10px\">{{c.name}}</span></p>\r\n\r\n  <h3>Content</h3>\r\n  <p-listbox [options]=\"cars\" [(ngModel)]=\"selectedCar\" [style]=\"{'width':'190px'}\" [listStyle]=\"{'max-height':'250px'}\">\r\n    <ng-template let-car pTemplate=\"item\">\r\n      <div class=\"ui-helper-clearfix\">\r\n        <img src=\"assets/showcase/images/demo/car/{{car.label}}.png\" style=\"display:inline-block;margin:5px 0 0 5px\" width=\"48\">\r\n        <span style=\"float:right;margin:20px 10px 0 0\">{{car.value}}</span>\r\n      </div>\r\n    </ng-template>\r\n    <p-footer>\r\n      Selected: {{selectedCar||'none'}}\r\n    </p-footer>\r\n  </p-listbox>\r\n\r\n  <br />\r\n\r\n  <button type=\"button\" (click)=\"selectedCar=null\" pButton icon=\"fa-close\" label=\"Clear Selected Car\"></button>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n  <p-tabView effect=\"fade\">\r\n    <p-tabPanel header=\"Documentation\">\r\n      <h3>Import</h3>\r\n      <pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;ListboxModule&#125; from 'primeng/listbox';\r\n</code>\r\n</pre>\r\n\r\n      <h3>Getting Started</h3>\r\n      <p>Listbox requires a value to bind and a collection of options. There are two alternatives of how to define the options property; one way is providing a collection of SelectItem\r\n      instances whereas other way is providing an array of arbitrary objects along with the optionLabel property to specify the field name of the option. SelectItem API is designed to have more control on how\r\n      the options are displayed such as grouping and disabling however in most cases an arbitrary object collection will suffice. Example below demonstrates both cases.</p>\r\n      <pre>\r\n\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-listbox [options]=\"cities1\" [(ngModel)]=\"selectedCity1\"&gt;&lt;/p-listbox&gt;\r\n\r\n&lt;p-listbox [options]=\"cities2\" [(ngModel)]=\"selectedCity2\" optionLabel=\"name\"&gt;&lt;/p-listbox&gt;\r\n</code>\r\n</pre>\r\n\r\n      <pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SelectItem&#125; from 'primeng/api';\r\n\r\nexport class MyModel &#123;\r\n\r\n    cities1: SelectItem[];\r\n\r\n    cities2: City[];\r\n\r\n    selectedCity1: City;\r\n\r\n    selectedCity2: City;\r\n\r\n    constructor() &#123;\r\n        //SelectItem API with label-value pairs\r\n        this.cities1 = [\r\n            &#123;label:'Select City', value:null&#125;,\r\n            &#123;label:'New York', value:&#123;id:1, name: 'New York', code: 'NY'&#125;&#125;,\r\n            &#123;label:'Rome', value:&#123;id:2, name: 'Rome', code: 'RM'&#125;&#125;,\r\n            &#123;label:'London', value:&#123;id:3, name: 'London', code: 'LDN'&#125;&#125;,\r\n            &#123;label:'Istanbul', value:&#123;id:4, name: 'Istanbul', code: 'IST'&#125;&#125;\r\n            &#123;label:'Paris', value:&#123;id:5, name: 'Paris', code: 'PRS'&#125;&#125;\r\n        ];\r\n\r\n        //An array of cities\r\n        this.cities2 = [\r\n            &#123;name: 'New York', code: 'NY'&#125;,\r\n            &#123;name: 'Rome', code: 'RM'&#125;,\r\n            &#123;name: 'London', code: 'LDN'&#125;,\r\n            &#123;name: 'Istanbul', code: 'IST'&#125;,\r\n            &#123;name: 'Paris', code: 'PRS'&#125;\r\n        ];\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n      <h3>Selection</h3>\r\n      <p>Listbox allows selection of either single or multiple items whereas checkbox option displays a checkbox to indicate multiple selection.\r\n        In single case, model should be a single object reference whereas in multiple case should be an array. Multiple items can either be selected\r\n        using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled\r\n        devices metaKeySelection is turned off automatically.</p>\r\n      <pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCities\"&gt;&lt;/p-listbox&gt;\r\n</code>\r\n</pre>\r\n\r\n      <pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SelectItem&#125; from 'primeng/api';\r\n\r\nexport class MyModel &#123;\r\n\r\n    cities: SelectItem[];\r\n\r\n    selectedCities: string[];\r\n\r\n    constructor() &#123;\r\n        this.cities = [\r\n            &#123;label:'Select City', value:null&#125;,\r\n            &#123;label:'New York', value:&#123;id:1, name: 'New York', code: 'NY'&#125;&#125;,\r\n            &#123;label:'Rome', value:&#123;id:2, name: 'Rome', code: 'RM'&#125;&#125;,\r\n            &#123;label:'London', value:&#123;id:3, name: 'London', code: 'LDN'&#125;&#125;,\r\n            &#123;label:'Istanbul', value:&#123;id:4, name: 'Istanbul', code: 'IST'&#125;&#125;\r\n            &#123;label:'Paris', value:&#123;id:5, name: 'Paris', code: 'PRS'&#125;&#125;\r\n        ];\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n        <h3>Updating Options</h3>\r\n        <p>When itemLabel property is used, Listbox does not detect changes in the options so provide a new reference when you need to update the options such as adding a new option.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\naddOption() &#123;\r\n    //fails\r\n    this.options.push(&#123;name:'New York', code: 'NY'&#125;);\r\n\r\n    //correct\r\n    this.options = [...this.cities, &#123;name:'New York', code: 'NY'&#125;];\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n      <h3>Filter</h3>\r\n      <p>Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable filter property. Default filtering\r\n        mode is \"contains\" and alternative is \"startsWith\" configuted by filterMode property.</p>\r\n      <pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCities\" filter=\"filter\"&gt;&lt;/p-listbox&gt;\r\n</code>\r\n</pre>\r\n\r\n      <h3>Model Driven Forms</h3>\r\n      <p>Listbox can be used in a model driven form as well.</p>\r\n      <pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-listbox [options]=\"cities\" formControlName=\"cities\"&gt;&lt;/p-listbox&gt;\r\n</code>\r\n</pre>\r\n\r\n      <h3>Custom Content</h3>\r\n      <p>Label of an option is used as the display text of an item by default, for custom content support define a ng-template where\r\n        the local ng-template variable refers to an option in the options collection. Additionally a custom header and footer can be provided\r\n        using p-header and p-footer element.</p>\r\n      <pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-listbox [options]=\"cars\" [(ngModel)]=\"selectedCar\" [style]=\"&#123;'width':'190px'&#125;\"&gt;\r\n    &lt;p-header&gt;\r\n      &lt;i class=\"fa fa-car\"&gt;&lt;/i&gt;\r\n      List of Car\r\n    &lt;/p-header&gt;\r\n    &lt;ng-template let-car let-i=\"index\" pTemplate=\"item\"&gt;\r\n        &lt;div class=\"ui-helper-clearfix\"&gt;\r\n            &lt;img src=\"assets/showcase/images/demo/car/{{car.label}}.png\" style=\"display:inline-block;margin:5px 0 0 5px\" width=\"48\"&gt;\r\n            &lt;span style=\"float:right;margin:20px 10px 0 0\"&gt;&#123;&#123;i&#125;&#125; - &#123;&#123;car.value&#125;&#125;&lt;/span&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;p-footer&gt;\r\n        Selected: &#123;&#123;selectedCar||'none'&#125;&#125;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-listbox&gt;\r\n</code>\r\n</pre>\r\n\r\n      <pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;SelectItem&#125; from 'primeng/api';\r\n\r\nexport class MyModel &#123;\r\n\r\n    cars: SelectItem[];\r\n\r\n    selectedCar: string;\r\n\r\n    constructor() &#123;\r\n        this.cars = [\r\n            &#123;label: 'Audi', value: 'Audi'&#125;,\r\n            &#123;label: 'BMW', value: 'BMW'&#125;,\r\n            &#123;label: 'Fiat', value: 'Fiat'&#125;,\r\n            &#123;label: 'Ford', value: 'Ford'&#125;,\r\n            &#123;label: 'Honda', value: 'Honda'&#125;,\r\n            &#123;label: 'Jaguar', value: 'Jaguar'&#125;,\r\n            &#123;label: 'Mercedes', value: 'Mercedes'&#125;,\r\n            &#123;label: 'Renault', value: 'Renault'&#125;,\r\n            &#123;label: 'VW', value: 'VW'&#125;,\r\n            &#123;label: 'Volvo', value: 'Volvo'&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n      <h3>Properties</h3>\r\n      <div class=\"doc-tablewrapper\">\r\n        <table class=\"doc-table\">\r\n          <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Type</th>\r\n                <th>Default</th>\r\n                <th>Description</th>\r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n              <tr>\r\n                <td>options</td>\r\n                <td>array</td>\r\n                <td>null</td>\r\n                <td>An array of selectitems to display as the available options.</td>\r\n              </tr>\r\n              <tr>\r\n                  <td>optionLabel</td>\r\n                  <td>string</td>\r\n                  <td>null</td>\r\n                  <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>multiple</td>\r\n                <td>boolean</td>\r\n                <td>false</td>\r\n                <td>When specified, allows selecting multiple values.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>checkbox</td>\r\n                <td>boolean</td>\r\n                <td>false</td>\r\n                <td>When specified, allows selecting items with checkboxes.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>filter</td>\r\n                <td>boolean</td>\r\n                <td>false</td>\r\n                <td>When specified, displays a filter input at header.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>filterMode</td>\r\n                <td>string</td>\r\n                <td>contains</td>\r\n                <td>Defines how the items are filtered, valid values are \"contains\" (default) and \"startsWith\".</td>\r\n              </tr>\r\n              <tr>\r\n                <td>readonly</td>\r\n                <td>boolean</td>\r\n                <td>false</td>\r\n                <td>When present, it specifies that the element value cannot be changed.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>disabled</td>\r\n                <td>boolean</td>\r\n                <td>false</td>\r\n                <td>When present, it specifies that the element should be disabled.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>style</td>\r\n                <td>string</td>\r\n                <td>null</td>\r\n                <td>Inline style of the container.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>styleClass</td>\r\n                <td>string</td>\r\n                <td>null</td>\r\n                <td>Style class of the container.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>listStyle</td>\r\n                <td>string</td>\r\n                <td>null</td>\r\n                <td>Inline style of the list element.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>metaKeySelection</td>\r\n                <td>boolean</td>\r\n                <td>true</td>\r\n                <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item\r\n                  can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>dataKey</td>\r\n                <td>string</td>\r\n                <td>null</td>\r\n                <td>A property to uniquely identify a value in options.</td>\r\n              </tr>\r\n              <tr>\r\n                <td>showToggleAll</td>\r\n                <td>boolean</td>\r\n                <td>true</td>\r\n                <td>Whether header checkbox is shown in multiple mode.</td>\r\n              </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <h3>Events</h3>\r\n      <div class=\"doc-tablewrapper\">\r\n        <table class=\"doc-table\">\r\n          <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Parameters</th>\r\n            <th>Description</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <td>onChange</td>\r\n            <td>event.originalEvent: browser event<br />\r\n              event.value: single value or an array of values that are selected\r\n            </td>\r\n            <td>Callback to invoke when value of listbox changes.</td>\r\n          </tr>\r\n          <tr>\r\n            <td>onDblClick</td>\r\n            <td>event.originalEvent: browser event<br />\r\n              event.value: Clicked selecte item\r\n            </td>\r\n            <td>Callback to invoke when an item is double clicked.</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <h3>Styling</h3>\r\n      <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n      <div class=\"doc-tablewrapper\">\r\n        <table class=\"doc-table\">\r\n          <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Element</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <td>ui-listbox</td>\r\n            <td>Container element.</td>\r\n          </tr>\r\n          <tr>\r\n            <td>ui-listbox-list</td>\r\n            <td>List container.</td>\r\n          </tr>\r\n          <tr>\r\n            <td>ui-listbox-item</td>\r\n            <td>An item in the list.</td>\r\n          </tr>\r\n          <tr>\r\n            <td>ui-listbox-header</td>\r\n            <td>Header element.</td>\r\n          </tr>\r\n          <tr>\r\n            <td>ui-listbox-filter-container</td>\r\n            <td>Container of filter input in header.</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <h3>Dependencies</h3>\r\n      <p>None.</p>\r\n    </p-tabPanel>\r\n\r\n    <p-tabPanel header=\"Source\">\r\n      <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/listbox\" class=\"btn-viewsource\" target=\"_blank\">\r\n        <i class=\"fa fa-github\"></i>\r\n        <span>View on GitHub</span>\r\n      </a>\r\n      <pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCity\" [style]=\"&#123;'width':'200px'&#125;\" optionLabel=\"name\"&gt;&lt;/p-listbox&gt;\r\n\r\n&lt;p&gt;Selected City: &#123;&#123;selectedCity ? selectedCity.name : 'none'&#125;&#125;&lt;/p&gt;\r\n\r\n&lt;h3&gt;Advanced (Multiple, Checkbox and Filter)&lt;/h3&gt;\r\n&lt;p-listbox [options]=\"cities\" [(ngModel)]=\"selectedCities\" multiple=\"multiple\" checkbox=\"checkbox\" filter=\"filter\" optionLabel=\"name\"&gt;\r\n  &lt;p-header&gt;\r\n    &lt;i class=\"fa fa-car\"&gt;&lt;/i&gt;\r\n    Cars\r\n  &lt;/p-header&gt;\r\n&lt;/p-listbox&gt;\r\n&lt;p&gt;Selected Cities: &lt;span *ngFor=\"let c of selectedCities\" style=\"margin-right: 10px\"&gt;&#123;&#123;c.name&#125;&#125;&lt;/span&gt;&lt;/p&gt;\r\n\r\n&lt;h3&gt;Content&lt;/h3&gt;\r\n&lt;p-listbox [options]=\"cars\" [(ngModel)]=\"selectedCar\" [style]=\"&#123;'width':'190px'&#125;\" [listStyle]=\"&#123;'max-height':'250px'&#125;\"&gt;\r\n  &lt;ng-template let-car pTemplate=\"item\"&gt;\r\n    &lt;div class=\"ui-helper-clearfix\"&gt;\r\n      &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.label&#125;&#125;.png\" style=\"display:inline-block;margin:5px 0 0 5px\" width=\"48\"&gt;\r\n      &lt;span style=\"float:right;margin:20px 10px 0 0\"&gt;&#123;&#123;car.value&#125;&#125;&lt;/span&gt;\r\n    &lt;/div&gt;\r\n  &lt;/ng-template&gt;\r\n  &lt;p-footer&gt;\r\n    Selected: &#123;&#123;selectedCar||'none'&#125;&#125;\r\n  &lt;/p-footer&gt;\r\n&lt;/p-listbox&gt;\r\n\r\n&lt;button type=\"button\" (click)=\"selectedCar=null\" pButton icon=\"fa-close\" label=\"Clear Selected Car\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n      <pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class ListboxDemo &#123;\r\n\r\n    cities: City[];\r\n\r\n    selectedCity: City;\r\n\r\n    selectedCities: City[];\r\n\r\n    cars: SelectItem[];\r\n\r\n    selectedCar: string = 'BMW';\r\n\r\n    constructor() &#123;\r\n        this.cities = [\r\n            &#123;name: 'New York', code: 'NY'&#125;,\r\n            &#123;name: 'Rome', code: 'RM'&#125;,\r\n            &#123;name: 'London', code: 'LDN'&#125;,\r\n            &#123;name: 'Istanbul', code: 'IST'&#125;,\r\n            &#123;name: 'Paris', code: 'PRS'&#125;\r\n        ];\r\n\r\n        this.cars = [\r\n            &#123;label: 'Audi', value: 'Audi'&#125;,\r\n            &#123;label: 'BMW', value: 'BMW'&#125;,\r\n            &#123;label: 'Fiat', value: 'Fiat'&#125;,\r\n            &#123;label: 'Ford', value: 'Ford'&#125;,\r\n            &#123;label: 'Honda', value: 'Honda'&#125;,\r\n            &#123;label: 'Jaguar', value: 'Jaguar'&#125;,\r\n            &#123;label: 'Mercedes', value: 'Mercedes'&#125;,\r\n            &#123;label: 'Renault', value: 'Renault'&#125;,\r\n            &#123;label: 'VW', value: 'VW'&#125;,\r\n            &#123;label: 'Volvo', value: 'Volvo'&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n    </p-tabPanel>\r\n  </p-tabView>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/showcase/components/listbox/listboxdemo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/listbox/listboxdemo.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListboxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListboxDemoModule", function() { return ListboxDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _listboxdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listboxdemo */ "./src/app/showcase/components/listbox/listboxdemo.ts");
/* harmony import */ var _listboxdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listboxdemo-routing.module */ "./src/app/showcase/components/listbox/listboxdemo-routing.module.ts");
/* harmony import */ var _components_listbox_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/listbox/listbox */ "./src/app/components/listbox/listbox.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ListboxDemoModule = /** @class */ (function () {
    function ListboxDemoModule() {
    }
    ListboxDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _listboxdemo_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListboxDemoRoutingModule"],
                _components_listbox_listbox__WEBPACK_IMPORTED_MODULE_5__["ListboxModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_8__["CodeHighlighterModule"]
            ],
            declarations: [
                _listboxdemo__WEBPACK_IMPORTED_MODULE_3__["ListboxDemo"]
            ]
        })
    ], ListboxDemoModule);
    return ListboxDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/listbox/listboxdemo.ts":
/*!************************************************************!*\
  !*** ./src/app/showcase/components/listbox/listboxdemo.ts ***!
  \************************************************************/
/*! exports provided: ListboxDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListboxDemo", function() { return ListboxDemo; });
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

var ListboxDemo = /** @class */ (function () {
    function ListboxDemo() {
        this.selectedCar = 'BMW';
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
        this.cars = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
    }
    ListboxDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./listboxdemo.html */ "./src/app/showcase/components/listbox/listboxdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], ListboxDemo);
    return ListboxDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-listbox-listboxdemo-module.js.map