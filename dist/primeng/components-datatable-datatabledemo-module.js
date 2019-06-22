(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-datatable-datatabledemo-module"],{

/***/ "./src/app/showcase/components/datatable/datatablecmdemo.html":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecmdemo.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">ContextMenu</span></span>\r\n        <span>DataTable has exclusive integration with ContextMenu.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n\r\n    <p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" [contextMenu]=\"cm\">\r\n        <p-header>Right Click on Rows for ContextMenu</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n    \r\n    <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablecmdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecmdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableCMDemo implements OnInit &#123;\r\n\r\n    msgs: Message[];\r\n\r\n    cars: Car[];\r\n\r\n    selectedCar: Car;\r\n    \r\n    items: MenuItem[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n        \r\n        this.items = [\r\n            &#123;label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.selectedCar)&#125;,\r\n            &#123;label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.selectedCar)&#125;\r\n        ];\r\n    &#125;\r\n\r\n    viewCar(car: Car) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand&#125;);\r\n    &#125;\r\n\r\n    deleteCar(car: Car) &#123;\r\n        let index = -1;\r\n        for(let i = 0; i < this.cars.length; i++) &#123;\r\n            if(this.cars[i].vin == car.vin) &#123;\r\n                index = i;\r\n                break;\r\n            &#125;\r\n        &#125;\r\n        this.cars.splice(index, 1);\r\n        \r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablecmdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecmdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" [contextMenu]=\"cm\"&gt;\r\n    &lt;p-header&gt;Right Click on Rows for ContextMenu&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablecmdemo.ts":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecmdemo.ts ***!
  \******************************************************************/
/*! exports provided: DataTableCMDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableCMDemo", function() { return DataTableCMDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableCMDemo = /** @class */ (function () {
    function DataTableCMDemo(carService) {
        this.carService = carService;
    }
    DataTableCMDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewCar(_this.selectedCar); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.deleteCar(_this.selectedCar); } }
        ];
    };
    DataTableCMDemo.prototype.viewCar = function (car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand });
    };
    DataTableCMDemo.prototype.deleteCar = function (car) {
        var index = -1;
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].vin == car.vin) {
                index = i;
                break;
            }
        }
        this.cars.splice(index, 1);
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand });
    };
    DataTableCMDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablecmdemo.html */ "./src/app/showcase/components/datatable/datatablecmdemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableCMDemo);
    return DataTableCMDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablecolgroupdemo.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecolgroupdemo.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - Column Grouping</span>\r\n        <span>Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components that both define an array\r\n            of columns each having colspan and rowspan.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataTable [value]=\"sales\">\r\n        <p-headerColumnGroup>\r\n            <p-row>\r\n                <p-column header=\"Brand\" rowspan=\"3\"></p-column>\r\n                <p-column header=\"Sale Rate\" colspan=\"4\"></p-column>\r\n            </p-row>\r\n            <p-row>\r\n                <p-column header=\"Sales\" colspan=\"2\"></p-column>\r\n                <p-column header=\"Profits\" colspan=\"2\"></p-column>\r\n            </p-row>\r\n            <p-row>\r\n                <p-column header=\"Last Year\"></p-column>\r\n                <p-column header=\"This Year\"></p-column>\r\n                <p-column header=\"Last Year\"></p-column>\r\n                <p-column header=\"This Year\"></p-column>\r\n            </p-row>\r\n        </p-headerColumnGroup>\r\n        \r\n        <p-column field=\"brand\"></p-column>\r\n        <p-column field=\"lastYearSale\"></p-column>\r\n        <p-column field=\"thisYearSale\"></p-column>\r\n        <p-column field=\"lastYearProfit\"></p-column>\r\n        <p-column field=\"thisYearProfit\"></p-column>\r\n        \r\n        <p-footerColumnGroup>\r\n            <p-row>\r\n                <p-column footer=\"Totals:\" colspan=\"3\"></p-column>\r\n                <p-column footer=\"$506,202\"></p-column>\r\n                <p-column footer=\"$531,020\"></p-column>\r\n            </p-row>\r\n        </p-footerColumnGroup>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablecolgroupdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolgroupdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableGroupDemo implements OnInit &#123;\r\n\r\n    sales: any[];\r\n\r\n    ngOnInit() &#123;\r\n        this.sales = [\r\n            &#123;brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'&#125;,\r\n            &#123;brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'&#125;,\r\n            &#123;brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'&#125;,\r\n            &#123;brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'&#125;,\r\n            &#123;brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'&#125;,\r\n            &#123;brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'&#125;,\r\n            &#123;brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'&#125;,\r\n            &#123;brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'&#125;,\r\n            &#123;brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'&#125;,\r\n            &#123;brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablecolgroupdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolgroupdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"sales\"&gt;\r\n    &lt;p-headerColumnGroup&gt;\r\n        &lt;p-row&gt;\r\n            &lt;p-column header=\"Brand\" rowspan=\"3\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"Sale Rate\" colspan=\"4\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-row&gt;\r\n        &lt;p-row&gt;\r\n            &lt;p-column header=\"Sales\" colspan=\"2\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"Profits\" colspan=\"2\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-row&gt;\r\n        &lt;p-row&gt;\r\n            &lt;p-column header=\"Last Year\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"This Year\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"Last Year\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"This Year\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-row&gt;\r\n    &lt;/p-headerColumnGroup&gt;\r\n    \r\n    &lt;p-column field=\"brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"lastYearSale\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"thisYearSale\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"lastYearProfit\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"thisYearProfit\"&gt;&lt;/p-column&gt;\r\n    \r\n    &lt;p-footerColumnGroup&gt;\r\n        &lt;p-row&gt;\r\n            &lt;p-column footer=\"Totals:\" colspan=\"3\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column footer=\"$506,202\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column footer=\"$531,020\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-row&gt;\r\n    &lt;/p-footerColumnGroup&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablecolgroupdemo.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecolgroupdemo.ts ***!
  \************************************************************************/
/*! exports provided: DataTableColGroupDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColGroupDemo", function() { return DataTableColGroupDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataTableColGroupDemo = /** @class */ (function () {
    function DataTableColGroupDemo() {
    }
    DataTableColGroupDemo.prototype.ngOnInit = function () {
        this.sales = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
    };
    DataTableColGroupDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablecolgroupdemo.html */ "./src/app/showcase/components/datatable/datatablecolgroupdemo.html")
        })
    ], DataTableColGroupDemo);
    return DataTableColGroupDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablecolreorderdemo.html":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecolreorderdemo.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable</span>\r\n        <span>Columns can be reordered using drag drop by setting the reorderableColumns to true. onColReorder is a callback that is invoked when a column is reordered.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataTable [value]=\"cars\" reorderableColumns=\"true\">\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablecolreorderdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolreorderdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableColReorderDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablecolreorderdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolreorderdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" reorderableColumns=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablecolreorderdemo.ts":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecolreorderdemo.ts ***!
  \**************************************************************************/
/*! exports provided: DataTableColReorderDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColReorderDemo", function() { return DataTableColReorderDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableColReorderDemo = /** @class */ (function () {
    function DataTableColReorderDemo(carService) {
        this.carService = carService;
    }
    DataTableColReorderDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DataTableColReorderDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablecolreorderdemo.html */ "./src/app/showcase/components/datatable/datatablecolreorderdemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableColReorderDemo);
    return DataTableColReorderDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablecolresizedemo.html":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecolresizedemo.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable</span>\r\n        <span>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and \r\n        the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width. onColumnResize\r\n        is a callback that passes the resized column header as a parameter.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Fit Mode</h3>\r\n    <p-dataTable [value]=\"cars\" resizableColumns=\"true\">\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n\r\n    <h3>Expand Mode</h3>\r\n    <p-dataTable [value]=\"cars\" resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablecolresizedemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolresizedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableColResizeDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablecolresizedemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecolresizedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Fit Mode&lt;/h3&gt;\r\n&lt;p-dataTable [value]=\"cars\" resizableColumns=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;h3&gt;Expand Mode&lt;/h3&gt;\r\n&lt;p-dataTable [value]=\"cars\" resizableColumns=\"true\" columnResizeMode=\"expand\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablecolresizedemo.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecolresizedemo.ts ***!
  \*************************************************************************/
/*! exports provided: DataTableColResizeDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColResizeDemo", function() { return DataTableColResizeDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableColResizeDemo = /** @class */ (function () {
    function DataTableColResizeDemo(carService) {
        this.carService = carService;
    }
    DataTableColResizeDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DataTableColResizeDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablecolresizedemo.html */ "./src/app/showcase/components/datatable/datatablecolresizedemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableColResizeDemo);
    return DataTableColResizeDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablecoltogglerdemo.html":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecoltogglerdemo.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Column Toggler</span></span>\r\n        <span>This demo uses a multiselect component to implement toggleable columns.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataTable [value]=\"cars\">\r\n        <p-header>\r\n            <div style=\"text-align:left\">\r\n                <p-multiSelect [options]=\"columnOptions\" [(ngModel)]=\"cols\"></p-multiSelect>\r\n            </div>\r\n        </p-header>\r\n        <p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablecoltogglerdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecoltogglerdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableColTogglerDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n    \r\n    cols: any[];\r\n    \r\n    columnOptions: SelectItem[];\r\n        \r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n        \r\n        this.cols = [\r\n            &#123;field: 'vin', header: 'Vin'&#125;,\r\n            &#123;field: 'year', header: 'Year'&#125;,\r\n            &#123;field: 'brand', header: 'Brand'&#125;,\r\n            &#123;field: 'color', header: 'Color'&#125;\r\n        ];\r\n        \r\n        this.columnOptions = [];\r\n        for(let i = 0; i < this.cols.length; i++) &#123;\r\n            this.columnOptions.push(&#123;label: this.cols[i].header, value: this.cols[i]&#125;);\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablecoltogglerdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecoltogglerdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\"&gt;\r\n    &lt;p-header&gt;\r\n        &lt;div style=\"text-align:left\"&gt;\r\n            &lt;p-multiSelect [options]=\"columnOptions\" [(ngModel)]=\"cols\"&gt;&lt;/p-multiSelect&gt;\r\n        &lt;/div&gt;\r\n    &lt;/p-header&gt;\r\n    &lt;p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablecoltogglerdemo.ts":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecoltogglerdemo.ts ***!
  \**************************************************************************/
/*! exports provided: DataTableColTogglerDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColTogglerDemo", function() { return DataTableColTogglerDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableColTogglerDemo = /** @class */ (function () {
    function DataTableColTogglerDemo(carService) {
        this.carService = carService;
    }
    DataTableColTogglerDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.columnOptions = [];
        for (var i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
    };
    DataTableColTogglerDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablecoltogglerdemo.html */ "./src/app/showcase/components/datatable/datatablecoltogglerdemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableColTogglerDemo);
    return DataTableColTogglerDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablecruddemo.html":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecruddemo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable</span>\r\n        <span>This samples demonstrates a CRUD implementation using various PrimeNG components.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" [rows]=\"15\" [responsive]=\"true\">\r\n        <p-header>CRUD for Cars</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\r\n        <p-footer><div class=\"ui-helper-clearfix\" style=\"width:100%\"><button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\" label=\"Add\"></button></div></p-footer>\r\n    </p-dataTable>\r\n\r\n    <p-dialog header=\"Car Details\" [minY]=\"70\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\">\r\n        <div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"car\">\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\"><label for=\"vin\">Vin</label></div>\r\n                <div class=\"ui-grid-col-8\"><input pInputText id=\"vin\" [(ngModel)]=\"car.vin\" /></div>\r\n            </div>\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\"><label for=\"year\">Year</label></div>\r\n                <div class=\"ui-grid-col-8\"><input pInputText id=\"year\" [(ngModel)]=\"car.year\" /></div>\r\n            </div>\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\"><label for=\"brand\">Brand</label></div>\r\n                <div class=\"ui-grid-col-8\"><input pInputText id=\"brand\" [(ngModel)]=\"car.brand\" /></div>\r\n            </div>\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\"><label for=\"color\">Color</label></div>\r\n                <div class=\"ui-grid-col-8\"><input pInputText id=\"color\" [(ngModel)]=\"car.color\" /></div>\r\n            </div>\r\n        </div>\r\n        <p-footer>\r\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"></button>\r\n                <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\r\n            </div>\r\n        </p-footer>\r\n    </p-dialog>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablecruddemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecruddemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableCrudDemo implements OnInit &#123;\r\n\r\n    displayDialog: boolean;\r\n\r\n    car: Car = new PrimeCar();\r\n\r\n    selectedCar: Car;\r\n\r\n    newCar: boolean;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n\r\n    showDialogToAdd() &#123;\r\n        this.newCar = true;\r\n        this.car = new PrimeCar();\r\n        this.displayDialog = true;\r\n    &#125;\r\n\r\n    save() &#123;\r\n        let cars = [...this.cars];\r\n        if(this.newCar)\r\n            cars.push(this.car);\r\n        else\r\n            cars[this.findSelectedCarIndex()] = this.car;\r\n\r\n        this.cars = cars;\r\n        this.car = null;\r\n        this.displayDialog = false;\r\n    &#125;\r\n\r\n    delete() &#123;\r\n        let index = this.findSelectedCarIndex();\r\n        this.cars = this.cars.filter((val,i) => i!=index);\r\n        this.car = null;\r\n        this.displayDialog = false;\r\n    &#125;\r\n\r\n    onRowSelect(event) &#123;\r\n        this.newCar = false;\r\n        this.car = this.cloneCar(event.data);\r\n        this.displayDialog = true;\r\n    &#125;\r\n\r\n    cloneCar(c: Car): Car &#123;\r\n        let car = new PrimeCar();\r\n        for(let prop in c) &#123;\r\n            car[prop] = c[prop];\r\n        &#125;\r\n        return car;\r\n    &#125;\r\n\r\n    findSelectedCarIndex(): number &#123;\r\n        return this.cars.indexOf(this.selectedCar);\r\n    &#125;\r\n&#125;\r\n\r\nclass PrimeCar implements Car &#123;\r\n\r\n    constructor(public vin?, public year?, public brand?, public color?) &#123;&#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablecruddemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablecruddemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" [rows]=\"15\" [responsive]=\"true\"&gt;\r\n    &lt;p-header&gt;CRUD for Cars&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-footer&gt;&lt;div class=\"ui-helper-clearfix\" style=\"width:100%\"&gt;&lt;button type=\"button\" pButton icon=\"fa-plus\" style=\"float:left\" (click)=\"showDialogToAdd()\" label=\"Add\"&gt;&lt;/button&gt;&lt;/div&gt;&lt;/p-footer&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"&gt;\r\n    &lt;div class=\"ui-grid ui-grid-responsive ui-fluid\" *ngIf=\"car\"&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"vin\"&gt;Vin&lt;/label&gt;&lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;input pInputText id=\"vin\" [(ngModel)]=\"car.vin\" /&gt;&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"year\"&gt;Year&lt;/label&gt;&lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;input pInputText id=\"year\" [(ngModel)]=\"car.year\" /&gt;&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"brand\"&gt;Brand&lt;/label&gt;&lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;input pInputText id=\"brand\" [(ngModel)]=\"car.brand\" /&gt;&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"color\"&gt;Color&lt;/label&gt;&lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;&lt;input pInputText id=\"color\" [(ngModel)]=\"car.color\" /&gt;&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;p-footer&gt;\r\n        &lt;div class=\"ui-dialog-buttonpane ui-helper-clearfix\"&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"&gt;&lt;/button&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"&gt;&lt;/button&gt;\r\n        &lt;/div&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-dialog&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablecruddemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablecruddemo.ts ***!
  \********************************************************************/
/*! exports provided: DataTableCrudDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableCrudDemo", function() { return DataTableCrudDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableCrudDemo = /** @class */ (function () {
    function DataTableCrudDemo(carService) {
        this.carService = carService;
        this.car = new PrimeCar();
    }
    DataTableCrudDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DataTableCrudDemo.prototype.showDialogToAdd = function () {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    };
    DataTableCrudDemo.prototype.save = function () {
        var cars = this.cars.slice();
        if (this.newCar)
            cars.push(this.car);
        else
            cars[this.findSelectedCarIndex()] = this.car;
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    };
    DataTableCrudDemo.prototype.delete = function () {
        var index = this.findSelectedCarIndex();
        this.cars = this.cars.filter(function (val, i) { return i != index; });
        this.car = null;
        this.displayDialog = false;
    };
    DataTableCrudDemo.prototype.onRowSelect = function (event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    };
    DataTableCrudDemo.prototype.cloneCar = function (c) {
        var car = new PrimeCar();
        for (var prop in c) {
            car[prop] = c[prop];
        }
        return car;
    };
    DataTableCrudDemo.prototype.findSelectedCarIndex = function () {
        return this.cars.indexOf(this.selectedCar);
    };
    DataTableCrudDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablecruddemo.html */ "./src/app/showcase/components/datatable/datatablecruddemo.html"),
            styles: ["\n        .ui-grid-row div {\n          padding: 4px 10px\n        }\n        \n        .ui-grid-row div label {\n          font-weight: bold;\n        }\n  "]
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableCrudDemo);
    return DataTableCrudDemo;
}());

var PrimeCar = /** @class */ (function () {
    function PrimeCar(vin, year, brand, color) {
        this.vin = vin;
        this.year = year;
        this.brand = brand;
        this.color = color;
    }
    return PrimeCar;
}());


/***/ }),

/***/ "./src/app/showcase/components/datatable/datatabledemo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatabledemo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DatatableDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableDemoRoutingModule", function() { return DatatableDemoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datatabledemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatabledemo */ "./src/app/showcase/components/datatable/datatabledemo.ts");
/* harmony import */ var _datatablecmdemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datatablecmdemo */ "./src/app/showcase/components/datatable/datatablecmdemo.ts");
/* harmony import */ var _datatablecolreorderdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datatablecolreorderdemo */ "./src/app/showcase/components/datatable/datatablecolreorderdemo.ts");
/* harmony import */ var _datatablecolresizedemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datatablecolresizedemo */ "./src/app/showcase/components/datatable/datatablecolresizedemo.ts");
/* harmony import */ var _datatablecoltogglerdemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datatablecoltogglerdemo */ "./src/app/showcase/components/datatable/datatablecoltogglerdemo.ts");
/* harmony import */ var _datatablecruddemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datatablecruddemo */ "./src/app/showcase/components/datatable/datatablecruddemo.ts");
/* harmony import */ var _datatableeditabledemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datatableeditabledemo */ "./src/app/showcase/components/datatable/datatableeditabledemo.ts");
/* harmony import */ var _datatableexportdemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datatableexportdemo */ "./src/app/showcase/components/datatable/datatableexportdemo.ts");
/* harmony import */ var _datatablefacetsdemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datatablefacetsdemo */ "./src/app/showcase/components/datatable/datatablefacetsdemo.ts");
/* harmony import */ var _datatablefilterdemo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datatablefilterdemo */ "./src/app/showcase/components/datatable/datatablefilterdemo.ts");
/* harmony import */ var _datatablecolgroupdemo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datatablecolgroupdemo */ "./src/app/showcase/components/datatable/datatablecolgroupdemo.ts");
/* harmony import */ var _datatablerowgroupdemo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./datatablerowgroupdemo */ "./src/app/showcase/components/datatable/datatablerowgroupdemo.ts");
/* harmony import */ var _datatablelazydemo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./datatablelazydemo */ "./src/app/showcase/components/datatable/datatablelazydemo.ts");
/* harmony import */ var _datatablepaginatordemo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./datatablepaginatordemo */ "./src/app/showcase/components/datatable/datatablepaginatordemo.ts");
/* harmony import */ var _datatableresponsivedemo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./datatableresponsivedemo */ "./src/app/showcase/components/datatable/datatableresponsivedemo.ts");
/* harmony import */ var _datatablerowexpansiondemo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./datatablerowexpansiondemo */ "./src/app/showcase/components/datatable/datatablerowexpansiondemo.ts");
/* harmony import */ var _datatablescrolldemo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./datatablescrolldemo */ "./src/app/showcase/components/datatable/datatablescrolldemo.ts");
/* harmony import */ var _datatableselectiondemo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./datatableselectiondemo */ "./src/app/showcase/components/datatable/datatableselectiondemo.ts");
/* harmony import */ var _datatablesortdemo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./datatablesortdemo */ "./src/app/showcase/components/datatable/datatablesortdemo.ts");
/* harmony import */ var _datatabletemplatingdemo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./datatabletemplatingdemo */ "./src/app/showcase/components/datatable/datatabletemplatingdemo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var DatatableDemoRoutingModule = /** @class */ (function () {
    function DatatableDemoRoutingModule() {
    }
    DatatableDemoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _datatabledemo__WEBPACK_IMPORTED_MODULE_2__["DataTableDemo"] },
                    { path: 'facets', component: _datatablefacetsdemo__WEBPACK_IMPORTED_MODULE_10__["DataTableFacetsDemo"] },
                    { path: 'paginator', component: _datatablepaginatordemo__WEBPACK_IMPORTED_MODULE_15__["DataTablePaginatorDemo"] },
                    { path: 'sort', component: _datatablesortdemo__WEBPACK_IMPORTED_MODULE_20__["DataTableSortDemo"] },
                    { path: 'responsive', component: _datatableresponsivedemo__WEBPACK_IMPORTED_MODULE_16__["DataTableResponsiveDemo"] },
                    { path: 'selection', component: _datatableselectiondemo__WEBPACK_IMPORTED_MODULE_19__["DataTableSelectionDemo"] },
                    { path: 'filter', component: _datatablefilterdemo__WEBPACK_IMPORTED_MODULE_11__["DataTableFilterDemo"] },
                    { path: 'editable', component: _datatableeditabledemo__WEBPACK_IMPORTED_MODULE_8__["DataTableEditableDemo"] },
                    { path: 'colresize', component: _datatablecolresizedemo__WEBPACK_IMPORTED_MODULE_5__["DataTableColResizeDemo"] },
                    { path: 'colreorder', component: _datatablecolreorderdemo__WEBPACK_IMPORTED_MODULE_4__["DataTableColReorderDemo"] },
                    { path: 'scroll', component: _datatablescrolldemo__WEBPACK_IMPORTED_MODULE_18__["DataTableScrollDemo"] },
                    { path: 'colgroup', component: _datatablecolgroupdemo__WEBPACK_IMPORTED_MODULE_12__["DataTableColGroupDemo"] },
                    { path: 'rowgroup', component: _datatablerowgroupdemo__WEBPACK_IMPORTED_MODULE_13__["DataTableRowGroupDemo"] },
                    { path: 'lazy', component: _datatablelazydemo__WEBPACK_IMPORTED_MODULE_14__["DataTableLazyDemo"] },
                    { path: 'crud', component: _datatablecruddemo__WEBPACK_IMPORTED_MODULE_7__["DataTableCrudDemo"] },
                    { path: 'templating', component: _datatabletemplatingdemo__WEBPACK_IMPORTED_MODULE_21__["DataTableTemplatingDemo"] },
                    { path: 'contextmenu', component: _datatablecmdemo__WEBPACK_IMPORTED_MODULE_3__["DataTableCMDemo"] },
                    { path: 'coltoggler', component: _datatablecoltogglerdemo__WEBPACK_IMPORTED_MODULE_6__["DataTableColTogglerDemo"] },
                    { path: 'rowexpansion', component: _datatablerowexpansiondemo__WEBPACK_IMPORTED_MODULE_17__["DataTableRowExpansionDemo"] },
                    { path: 'export', component: _datatableexportdemo__WEBPACK_IMPORTED_MODULE_9__["DataTableExportDemo"] }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DatatableDemoRoutingModule);
    return DatatableDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatabledemo.html":
/*!******************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatabledemo.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Deprecated</span></span>\r\n        <span>DataTable is deprecated, use <a [routerLink]=\"['/table']\">TurboTable</a> instead.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Basic</h3>\r\n    <p-dataTable [value]=\"cars\" [loading]=\"loading\">\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"Documentation\">\r\n            <h3>Import</h3>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;DataTableModule&#125; from 'primeng/datatable';\r\n</code>\r\n</pre>\r\n\r\n            <h3>Getting Started</h3>\r\n            <p>DataTable requires a value as an array of objects and columns defined with p-column component. Throughout the samples, a car interface having\r\n            vin, brand, year and color properties is used to define an object to be displayed by the datatable. Cars are loaded by a CarService that\r\n            connects to a server to fetch the cars with a Promise.\r\n            </p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport interface Car &#123;\r\n    vin;\r\n    year;\r\n    brand;\r\n    color;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nimport &#123;Injectable&#125; from 'angular2/core';\r\nimport &#123;Http, Response&#125; from 'angular2/http';\r\nimport &#123;Car&#125; from '../domain/car';\r\n\r\n@Injectable()\r\nexport class CarService &#123;\r\n\r\n    constructor(private http: Http) &#123;&#125;\r\n\r\n    getCarsSmall() &#123;\r\n        return this.http.get('/showcase/resources/data/cars-small.json')\r\n                    .toPromise()\r\n                    .then(res => &lt;Car[]&gt; res.json().data)\r\n                    .then(data => &#123; return data; &#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n            <p>Following sample datatable has 4 columns and retrieves the data from a service on init.</p>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n        <p>List of cars are bound to the value property and columns are defined using p-column component.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Column Component</h3>\r\n            <p>Column component defines various options to specify corresponding features.</p>\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>field</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Property of a row data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortField</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Property of a row data used for sorting, defaults to field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterField</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Property of a row data used for filtering, defaults to field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>header</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Header text of a column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>footer</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Footer text of a column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortable</td>\r\n                            <td>any</td>\r\n                            <td>false</td>\r\n                            <td>Defines if a column is sortable.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortFunction</td>\r\n                            <td>function</td>\r\n                            <td>null</td>\r\n                            <td>Sort function for custom sorting.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>editable</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if a column is editable.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filter</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if a column can be filtered.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterMatchMode</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Defines filterMatchMode; \"startsWith\", \"contains\", \"endsWith\", \"equals\", \"notEquals\" and \"in\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterType</td>\r\n                            <td>string</td>\r\n                            <td>text</td>\r\n                            <td>Type of the filter input field.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterPlaceholder</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Defines placeholder of the input fields.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterMaxlength</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Specifies the maximum number of characters allowed in the filter element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>excludeGlobalFilter</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether to exclude from global filtering or not.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowspan</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Number of rows to span for grouping.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>colspan</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Number of columns to span for grouping.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>object</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the column, can be override with headerStyle, bodyStyle and footerStyle.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the column, can be override with headerStyleClass, bodyStyleClass and footerStyleClass.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>exportable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether the column is included during data export.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>headerStyle</td>\r\n                            <td>object</td>\r\n                            <td>null</td>\r\n                            <td>Inline header style of the column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>headerStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Header style class of the column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>bodyStyle</td>\r\n                            <td>object</td>\r\n                            <td>null</td>\r\n                            <td>Inline body style of the column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>bodyStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Body style class of the column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>footerStyle</td>\r\n                            <td>object</td>\r\n                            <td>null</td>\r\n                            <td>Inline footer style of the column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>footerStyleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Footer style class of the column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>hidden</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Controls visiblity of the column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expander</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Displays an icon to toggle row expansion.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selectionMode</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Defines column based selection mode, options are \"single\" and \"multiple\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozen</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether the column is fixed in horizontal scrolling or not.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scope</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Scope property for screen readers, valid values are \"col\", \"row\", \"colgroup\" and \"rowgroup\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>resizable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether the column is resizable when resizableColumns is enabled at DataTable.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Dynamic Colums</h3>\r\n            <p>Columns can be instantiated using an array as well by iterating with ngFor.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123;field: 'vin', header: 'Vin'&#125;,\r\n            &#123;field: 'year', header: 'Year'&#125;,\r\n            &#123;field: 'brand', header: 'Brand'&#125;,\r\n            &#123;field: 'color', header: 'Color'&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\"&gt;\r\n    &lt;p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Change Detection</h3>\r\n            <p>DataTable either uses setter based checking or ngDoCheck to realize if the underlying data has changed to update the UI. This is configured using the immutable\r\n                property, when enabled (default) setter based detection is utilized so your data changes such as adding or removing a record\r\n                should always create a new array reference instead of manipulating an existing array as Angular does not trigger setters if the reference does not change.\r\n                For example, use slice instead of splice when removing an item or use spread operator instead of push method when adding an item. On the other hand, setting immutable property to false removes\r\n                this restriction by using ngDoCheck with IterableDiffers to listen changes without the need to create a new reference of data. Setter based method is faster however\r\n                both methods can be used depending on your preference. Note that immutable property also defines how DataTable treats the data, for example\r\n                when immutable is enabled sorting does not mutate the original data but creates a new array of sorted data.\r\n            </p>\r\n\r\n            <h3>Templates</h3>\r\n            <p>Field data of a corresponding row is displayed as the cell content by default, this can be customized using templating where the implicit variable passed to the ng-template\r\n                is the column definition and data of current row is the rowData property. In addition index of the current can be accessed using the optional rowIndex variable.\r\n                Similarly, custom content can be placed at the header and footer of a column with templating.</p>\r\n\r\n            <p>A ng-template inside a column must be decorated with pTemplate directive along with the type to indicate where the ng-template belongs to. Possible values\r\n            are \"header\", \"body\" and \"footer\".</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-column field=\"color\" header=\"Color\"&gt;\r\n    &lt;ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\"&gt;\r\n        &lt;span&gt;{{car[col.field]}}&lt;/span&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-column&gt;\r\n&lt;p-column&gt;\r\n    &lt;ng-template pTemplate=\"header\"&gt;\r\n        &lt;button type=\"button\" pButton (click)=\"selectAllCars()\" icon=\"fa-check\"&gt;&lt;/button&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template let-car=\"rowData\" pTemplate=\"body\"&gt;\r\n        &lt;button type=\"button\" pButton (click)=\"selectCar(car)\" icon=\"fa-search\"&gt;&lt;/button&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-column&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Index of the row is available at the ng-template.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n    &lt;p-column&gt;\r\n        &lt;ng-template let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\"&gt;\r\n            &lt;button type=\"button\" pButton (click)=\"selectCar(i)\" icon=\"fa-search\"&gt;&lt;/button&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/datatable/templating']\">live example.</a></p>\r\n\r\n            <h3>Facets</h3>\r\n            <p>Header and Footer are the two sections aka facets that are capable of displaying custom content.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\"&gt;\r\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\r\n    &lt;p-footer&gt;Choose from the list.&lt;/p-footer&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/datatable/facets']\">live example.</a></p>\r\n\r\n            <h3>Column Grouping</h3>\r\n            <p>Columns can be grouped at header and footer using headerColumnGroup and footerColumnGroup components containing rows with\r\n                columns. Templating is also supported inside grouped columns.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"sales\"&gt;\r\n    &lt;p-headerColumnGroup&gt;\r\n        &lt;p-row&gt;\r\n            &lt;p-column header=\"Brand\" rowspan=\"3\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"Sale Rate\" colspan=\"4\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-row&gt;\r\n        &lt;p-row&gt;\r\n            &lt;p-column header=\"Sales\" colspan=\"2\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"Profits\" colspan=\"2\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-row&gt;\r\n        &lt;p-row&gt;\r\n            &lt;p-column header=\"Last Year\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"This Year\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"Last Year\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"This Year\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-row&gt;\r\n    &lt;/p-headerColumnGroup&gt;\r\n\r\n    &lt;p-column field=\"brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"lastYearSale\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"thisYearSale\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"lastYearProfit\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"thisYearProfit\"&gt;&lt;/p-column&gt;\r\n\r\n    &lt;p-footerColumnGroup&gt;\r\n        &lt;p-row&gt;\r\n            &lt;p-column footer=\"Totals:\" colspan=\"3\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column footer=\"$506,202\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column footer=\"$531,020\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-row&gt;\r\n    &lt;/p-footerColumnGroup&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/datatable/colgroup']\">live example.</a></p>\r\n\r\n            <h3>Row Grouping</h3>\r\n            <p>Rows can either be grouped by a separate grouping row or using rowspan. In both cases, data has to be sorted by the grouping field initially.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars1\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\"&gt;\r\n    &lt;p-header&gt;Subheader&lt;/p-header&gt;\r\n    &lt;ng-template pTemplate=\"rowgroupheader\" let-rowData&gt;&#123;&#123;rowData['brand']&#125;&#125;&lt;/ng-template&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dataTable [value]=\"cars2\" sortField=\"brand\" rowGroupMode=\"rowspan\"&gt;\r\n    &lt;p-header&gt;RowSpan&lt;/p-header&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Visibility of a group can be toggled using an icon placed next to the group name using expandableRowGroups property.\r\n            By default all groups are collapsed and expandadRowGroups property needs to be populated with the group field values\r\n            to show particular groups as expanded by default.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" expandableRowGroups=\"true\"&gt;\r\n    &lt;p-header&gt;Subheader&lt;/p-header&gt;\r\n    &lt;ng-template pTemplate=\"rowgroup\" let-rowData&gt;&#123;&#123;rowData['brand']&#125;&#125;&lt;/ng-template&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>A footer for a row can be defined using the rowgroupfooter ng-template.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" expandableRowGroups=\"true\"\r\n        [sortableRowGroup]=\"false\"&gt;\r\n    &lt;p-header&gt;Toggleable Row Groups with Footers&lt;/p-header&gt;\r\n    &lt;ng-template pTemplate=\"rowgroupheader\" let-rowData&gt;&#123;&#123;rowData['brand']&#125;&#125;&lt;/ng-template&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"price\" header=\"Price\"&gt;\r\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;span&gt;&#123;&#123;car[col.field] | currency:'USD':'symbol':'.0-0'&#125;&#125;&lt;/span&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;ng-template pTemplate=\"rowgroupfooter\" let-car&gt;\r\n        &lt;td colspan=\"3\" style=\"text-align:right\"&gt;Total Price&lt;/td&gt;\r\n        &lt;td&gt;&#123;&#123;calculateGroupTotal(car['brand']) | currency:'USD':'symbol':'.0-0' &#125;&#125;&lt;/td&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Clicking a row group sorts the data according to the group field, you can control this behavior using sortableRowGroup property.</p>\r\n\r\n            <p>See the <a [routerLink]=\"['/datatable/rowgroup']\">live example.</a></p>\r\n\r\n            <h3>Paginator</h3>\r\n            <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number\r\n                of page links to display. See <a [routerLink]=\"['/paginator']\">paginator</a> component for more information.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Paginator can also be controlled via model using a binding to the first property where changes trigger a pagination. Optionaly this property supports\r\n            two-way binding so that model value can be updated on pagination as well. Here is an example to reset the paginator externally.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [(first)]=\"first\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;button type=\"button\" (click)=\"reset()\" label=\"Reset\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    first: number = 0;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n\r\n    reset() &#123;\r\n        this.first = 0;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Paginator accepts custom content for the left and the right side via named templates.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\"&gt;\r\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;ng-template pTemplate=\"paginatorLeft\" let-state&gt;\r\n        {{state.first}}\r\n        &lt;button type=\"button\" pButton icon=\"fa-refresh\"&gt;&lt;/button&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"paginatorRight\"&gt;\r\n        &lt;button type=\"button\" pButton icon=\"fa-cloud-upload\"&gt;&lt;/button&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Paginator templates get the paginator state as an implicit variable that provides the following properties</p>\r\n            <ul>\r\n                <li>first</li>\r\n                <li>rows</li>\r\n                <li>page</li>\r\n                <li>totalRecords</li>\r\n            </ul>\r\n\r\n            <p>See the <a [routerLink]=\"['/datatable/paginator']\">live example.</a></p>\r\n\r\n            <h3>Sorting</h3>\r\n            <p>Simply enabling sortable property at column object is enough to make a column sortable. The property to use when\r\n            sorting is field by default and this can be customized using sortField.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n</code>\r\n</pre>\r\n            <p>By default sorting is executed on the clicked column. To do multiple field sorting, set sortMode property to \"multiple\" and use metakey\r\n            when clicking on another column.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [sortMode]=\"multiple\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In case you'd like to display the table as sorted by default initially on load, use the sortField-sortOrder properties in single mode.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" sortField=\"year\" [sortOrder]=\"1\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n            <p>In multiple mode, use the multiSortMeta property and bind an array of SortMeta objects.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [multiSortMeta]=\"multiSortMeta\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nthis.multiSortMeta = [];\r\nthis.multiSortMeta.push(&#123;field: 'year', order: 1&#125;);\r\nthis.multiSortMeta.push(&#123;field: 'brand', order: -1&#125;);\r\n</code>\r\n</pre>\r\n\r\n            <p>To customize sorting, set sortable option to <i>custom</i> and define a sortFunction that sorts the list.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [multiSortMeta]=\"multiSortMeta\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" sortable=\"custom\" (sortFunction)=\"mysort($event)\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nmysort(event) &#123;\r\n    //event.field = Field to sort\r\n    //event.order = Sort order\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/datatable/sort']\">live example.</a></p>\r\n\r\n            <h3>Filtering</h3>\r\n            <p>Filtering is enabled by setting the filter property as true on a column. Default match mode is \"startsWith\" and this can be configured\r\n            using filterMatchMode property that also accepts \"contains\", \"endsWith\", \"equals\" and \"in\".</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-column field=\"vin\" header=\"Vin (startsWith)\" [filter]=\"true\" filterPlaceholder=\"Search\"&gt;&lt;/p-column&gt;\r\n&lt;p-column field=\"year\" header=\"Year (contains)\" [filter]=\"true\" filterMatchMode=\"contains\"&gt;&lt;/p-column&gt;\r\n&lt;p-column field=\"brand\" header=\"Brand (startsWith)\" [filter]=\"true\"&gt;&lt;/p-column&gt;\r\n&lt;p-column field=\"color\" header=\"Color (endsWith)\" [filter]=\"true\" filterMatchMode=\"endsWith\"&gt;&lt;/p-column&gt;\r\n</code>\r\n</pre>\r\n            <p>An optional global filter feature is available to search all fields with the same keyword, to enable this place an input component whose keyup event would be\r\n            listened for filtering and bind the local ng-template variable name of it to the global filter property.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;input #gb type=\"text\" placeholder=\"Global search\"&gt;\r\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [globalFilter]=\"gb\"&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>By default, input fields are used as filter elements and this can be customized using templating. It is important to use the on change callback\r\n                of the filter component to call the filter method of datatable by passing the value, field and matchmode properties.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-column field=\"brand\" header=\"Brand (Custom)\" [filter]=\"true\" [style]=\"&#123;'overflow':'visible'&#125;\" filterMatchMode=\"equals\"&gt;\r\n    &lt;ng-template pTemplate=\"filter\" let-col&gt;\r\n        &lt;p-dropdown [options]=\"brands\" [style]=\"&#123;'width':'100%'&#125;\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"&gt;&lt;/p-dropdown&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-column&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/datatable/filter']\">live example.</a></p>\r\n\r\n            <h3>Selection</h3>\r\n            <p>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the selection property and onRowSelect-onRowUnselect events\r\n            are provided as optional callbacks. Alternatively column based selection can be done using radio buttons or checkboxes using selectionMode of a particular column.</p>\r\n\r\n            <p>In single mode, selection binding is an object reference.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    selectedCar: Car;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" dataKey=\"vin\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n        <p>In multiple mode, selection binding should be an array and multiple items can either be selected\r\n        using metaKey or toggled individually depending on the value of metaKeySelection property value which is true by default. On touch enabled\r\n        devices metaKeySelection is turned off automatically. Additionally ShiftKey is supported for range selection.</p>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    selectedCars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\" dataKey=\"vin\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>If you prefer a radioButton or a checkbox instead of a row click, use the selectionMode of a column instead. Following datatable\r\n            displays a checkbox at the first column of each row and automatically adds a header checkbox to toggle selection of all rows.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [(selection)]=\"selectedCars\" dataKey=\"vin\"&gt;\r\n    &lt;p-column selectionMode=\"multiple\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>When resolving if a row is selected, by default DataTable compares selection array with the datasource which may cause a performance issue with huge datasets that do not use pagination.\r\n                If available the fastest way is to use dataKey property that identifies a unique row so that DataTable can avoid comparing arrays as internally a map instance is used instead of looping arrays, on the other hand\r\n                if dataKey cannot be provided consider using compareSelectionBy property as \"equals\" which uses reference comparison instead of the default \"deepEquals\" comparison. Latter is slower since it checks all properties.\r\n                </p>\r\n\r\n            <p>See the <a [routerLink]=\"['/datatable/selection']\">live example.</a></p>\r\n\r\n            <h3>ContextMenu</h3>\r\n            <p>DataTable has exclusive integration with contextmenu component. In order to attach a menu to a datatable, define a local template\r\n            variable for the menu and bind it to the contextMenu property of the datatable. This enables showing the menu whenever a row is right clicked.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" [contextMenu]=\"cm\"&gt;\r\n    &lt;p-header&gt;Right Click on Rows for ContextMenu&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/datatable/contextmenu']\">live example.</a></p>\r\n\r\n            <h3>Editing</h3>\r\n            <p>Incell editing is enabled by setting editable property true both on datatable and columns. Clicking a cell switches to edit mode\r\n            and hitting enter key or clicking another cell switches it back to view mode.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [editable]=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" [editable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [editable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [editable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [editable]=\"true\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Simple input fields are used as the editor elements by default and this can be customized by adding a pTemplate named editor.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [editable]=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" [editable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [editable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [editable]=\"true\" [style]=\"&#123;'overflow':'visible'&#125;\"&gt;\r\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"editor\"&gt;\r\n            &lt;p-dropdown [(ngModel)]=\"car[col.field]\" [options]=\"brands\" [autoWidth]=\"false\" [style]=\"&#123;'width':'100%'&#125;\" required=\"true\"&gt;&lt;/p-dropdown&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [editable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"saleDate\" header=\"Sale Date\" [editable]=\"true\" [style]=\" &#123;'overflow':'visible' &#125;\"&gt;\r\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"body\"&gt;\r\n             &#123;&#123;car[col.field]|date &#125;&#125;\r\n        &lt;/ng-template&gt;\r\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"editor\"&gt;\r\n            &lt;p-calendar [(ngModel)]=\"car[col.field]\"&gt;&lt;/p-calendar&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/datatable/editable']\">live example.</a></p>\r\n\r\n            <h3>Expandable Rows</h3>\r\n            <p>Row expansion allows displaying detailed content for a particular row. To use this feature, enable expandableRows property, add an expander column and\r\n            to declare the expanded content provide a pTemplate with \"rowexpansion\" as the value.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" expandableRows=\"true\"&gt;\r\n    &lt;p-column expander=\"true\" [style]=\"&#123;'width':'22px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;ng-template let-car pTemplate=\"rowexpansion\"&gt;\r\n        &lt;div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px\"&gt;\r\n            &lt;div class=\"ui-grid-row\"&gt;\r\n                &lt;div class=\"ui-grid-col-3\" style=\"text-align:center\"&gt;\r\n                    &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\"&gt;\r\n                &lt;/div&gt;\r\n                &lt;div class=\"ui-grid-col-9\"&gt;\r\n                    &lt;div class=\"ui-grid ui-grid-responsive ui-grid-pad\"&gt;\r\n                        &lt;div class=\"ui-grid-row\"&gt;\r\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Vin: &lt;/div&gt;\r\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.vin}}&lt;/div&gt;\r\n                        &lt;/div&gt;\r\n                        &lt;div class=\"ui-grid-row\"&gt;\r\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Year: &lt;/div&gt;\r\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.year}}&lt;/div&gt;\r\n                        &lt;/div&gt;\r\n                        &lt;div class=\"ui-grid-row\"&gt;\r\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Brand: &lt;/div&gt;\r\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.brand}}&lt;/div&gt;\r\n                        &lt;/div&gt;\r\n                        &lt;div class=\"ui-grid-row\"&gt;\r\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Color: &lt;/div&gt;\r\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.color}}&lt;/div&gt;\r\n                        &lt;/div&gt;\r\n                    &lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n            <p>By default all rows are collapsed and expandedRows property needs to be populated\r\n                with the row data instances to show particular rows as expanded by default.</p>\r\n            <p>See the <a [routerLink]=\"['/datatable/rowexpansion']\">live example.</a></p>\r\n\r\n            <h3>Column Resize</h3>\r\n            <p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and\r\n            the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width. onColumnResize\r\n            is a callback that passes the resized column header as a parameter.</p>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [resizableColumns]=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [resizableColumns]=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" [style]=\"&#123;'width':'20%'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'30%'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'15%'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'35%'&#125;\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>See the <a [routerLink]=\"['/datatable/colresize']\">live example.</a></p>\r\n\r\n            <h3>Column Reordering</h3>\r\n            <p>Columns can be reordered using drag drop by setting the reorderableColumns to true. onColReorder is a callback that is invoked when a column is reordered.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [reorderableColumns]=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/datatable/colreorder']\">live example.</a></p>\r\n\r\n            <h3>Data Export</h3>\r\n            <p>DataTable can export its data in CSV format using exportCSV() method.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable #dt [value]=\"cars\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dt.exportCSV()\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>By default whole data is exported, if you'd like to export only the selection then pass a config object with selectionOnly property as true.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"CSV\" (click)=\"dt.exportCSV(&#123;selectionOnly:true&#125;)\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n            <p>In order to exclude a column from the csv, use [exportable]=\"false\" on p-column.</p>\r\n\r\n            <p>See the <a [routerLink]=\"['/datatable/export']\">live example.</a></p>\r\n\r\n            <h3>Scrolling</h3>\r\n            <p>DataTable supports both horizontal and vertical scrolling by defining scrollWidth and scrollHeight options respectively. The properties can take\r\n            fixed pixels values or percentages to calculate scroll viewport relative to the parent of the datatable. Sample below uses vertical scrolling where\r\n            headers are fixed and data is scrollable. In horizontal scrolling, it is important to give fixed widths to columns.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n            <p>In horizontal scrolling, certain columns can be fixed as well by enabling the frozen property at column level .</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"100px\" scrollWidth=\"600px\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" frozen=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>In this case, if frozen and scrollable cells have content with varying height, misalignment might occur. To avoid a performance hit, DataTable avoid expensive calculations\r\n                to align the row heights as it can be easily done with CSS manually.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n.ui-datatable .ui-datatable-frozen-view .ui-datatable-data > tr > td,\r\n.ui-datatable .ui-datatable-unfrozen-view .ui-datatable-data > tr > td &#123;\r\n    height: 24px;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <p>Certain rows can be fixed at the top so that they get frozen and not included in the scrollable data. In order\r\n            to implement this functionality, define these rows using frozenValue property.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [frozenValue]=\"frozenCars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <p>Additionally, virtualScroll mode enables dealing with large datasets by loading data on demand during scrolling.</p>\r\n\r\n            <p>See the <a [routerLink]=\"['/datatable/scroll']\">live example.</a></p>\r\n\r\n            <h3>Lazy Loading</h3>\r\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\r\n             onLazyLoad callback everytime paging, sorting and filtering happens. To implement lazy loading,\r\n            enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource. onLazyLoad gets an event object\r\n            that contains information about what to load. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator\r\n            displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [scrollable]=\"true\" [lazy]=\"true\" (onLazyLoad)=\"loadData($event)\" [totalRecords]=\"totalRecords\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nloadData(event: LazyLoadEvent) &#123;\r\n    //event.first = First row offset\r\n    //event.rows = Number of rows per page\r\n    //event.sortField = Field name to sort in single sort mode\r\n    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec in single sort mode\r\n    //multiSortMeta: An array of SortMeta objects used in multiple columns sorting. Each SortMeta has field and order properties.\r\n    //filters: Filters object having field as key and filter value, filter matchMode as value\r\n    //globalFilter: Value of the global filter if available\r\n    this.cars = //do a request to a remote datasource using a service and return the cars that match the lazy load criteria\r\n&#125;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/datatable/lazy']\">live example.</a></p>\r\n\r\n            <h3>Responsive</h3>\r\n            <p>DataTable columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value. This feature is enabled\r\n            by setting responsive to true.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [responsive]=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n            <p>See the <a [routerLink]=\"['/datatable/responsive']\">live example.</a></p>\r\n\r\n            <h3>EmptyMessage</h3>\r\n            <p>When there is no data, DataTable displays a message text defined using the emptyMessage property where as custom content can be provided using\r\n                emptymessage template.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [responsive]=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;ng-template pTemplate=\"emptymessage\"&gt;\r\n        Custom content goes here\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Overlays in Cells</h3>\r\n            <p>Cells of datatable hides the overflow by default, this prevents overlay of a component like dropdown to be displayed properly. In cases like these,\r\n            set the style of the column to allow overflow.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-column field=\"color\" [style]=\"&#123;'overflow':'visible'&#125;\"&gt;\r\n    &lt;ng-template let-col let-car=\"rowData\"&gt;\r\n        &lt;p-dropdown&gt;&lt;/p-dropdown&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-column&gt;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Loading Status</h3>\r\n            <p>DataTable has a loading property, when enabled a spinner icon is displayed to indicate data load.\r\n                An optional loadingIcon property can be passed in case you'd like a different loading icon.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [loading]=\"loading\" loadingIcon=\"fa-spinner\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    loading: boolean;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.loading = true;\r\n        setTimeout(() => &#123;\r\n            this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n            this.loading = false;\r\n        &#125;, 1000);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Custom Style Class per Row </h3>\r\n            <p>A custom style class to a particular can be applied using the rowStyleMap property which should refer to an object\r\n                whose keys match the dataKey value of a row and values are the class name.</p>\r\n\r\n            <p>In example below, the row whose vin property is '123' will get the 'success' style class.</p>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [rowStyleMap]=\"styleMap\" dataKey=\"vin\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    styleMap: &#123;[key: string]: string&#125;;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n         this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n         this.styleMap['123'] = 'success';\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Performance Tips Status</h3>\r\n            <ul>\r\n                <li>When selection is enabled use dataKey to avoid deep checking when comparing objects.</li>\r\n                <li>Use rowTrackBy that internally uses ngForTrackBy to avoid unnecessary dom operations.</li>\r\n                <li>Prefer lazy loading for large datasets.</li>\r\n            </ul>\r\n\r\n            <h3>Properties</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Type</th>\r\n                            <th>Default</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>value</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of objects to display.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>headerRows</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of column definitions for column grouping at header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>footerRows</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of column definitions for column grouping at footer.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rows</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of rows to display per page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginator</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When specified as true, enables the pagination.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>totalRecords</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of total records, defaults to length of value when not defined.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>pageLinks</td>\r\n                            <td>number</td>\r\n                            <td>null</td>\r\n                            <td>Number of page links to display in paginator.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowsPerPageOptions</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>Array of integer values to display inside rows per page dropdown of paginator</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>alwaysShowPaginator</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show it even there is only one page.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortMode</td>\r\n                            <td>string</td>\r\n                            <td>single</td>\r\n                            <td>Defines whether sorting works on single column or on multiple columns.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortField</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the field to sort data by default.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortOrder</td>\r\n                            <td>number</td>\r\n                            <td>1</td>\r\n                            <td>Order to sort when default sorting is enabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>defaultSortOrder</td>\r\n                            <td>number</td>\r\n                            <td>1</td>\r\n                            <td>Sort order to use when an unsorted column gets sorted by user interaction.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>multiSortMeta</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowGroupMode</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Type of the row grouping, valid values are \"subheader\" and \"rowspan\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>groupField</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Name of the field to group by in subheader row grouping mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>sortableRowGroup</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to sort the data if the row group subheader is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandableRowGroups</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, adds a clickable icon at group header to expand or collapse the group.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandedRowsGroups</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>Collection of group field values to show a group as expanded by default.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>responsive</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if the columns should be stacked in smaller screens.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selectionMode</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Specifies the selection mode, valid values are \"single\" and \"multiple\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>headerCheckboxToggleAllPages</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>\r\n                                When set to true, the header checkbox on paged DataTables with checkbox multiple\r\n                                selection enabled will toggle the selection of items across all pages. See the\r\n                                <a [routerLink]=\"['/datatable/selection']\">live example.</a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>selection</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Selected row in single mode or an array of values in multiple mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>editable</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Activates incell editing when enabled.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandableRows</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Activates expandable rows feature when true.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandedRows</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>Collection of rows to display as expanded.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowExpandMode</td>\r\n                            <td>string</td>\r\n                            <td>multiple</td>\r\n                            <td>Whether multiple rows can be expanded at any time. Valid values are \"multiple\" and \"single\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>rowGroupExpandMode</td>\r\n                          <td>string</td>\r\n                          <td>multiple</td>\r\n                          <td>Whether multiple row groups can be expanded at any time. Valid values are \"multiple\" and \"single\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>expandedIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa-chevron-circle-down</td>\r\n                            <td>Row toggler icon of an expanded row toggler.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>collapsedIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa-chevron-circle-right</td>\r\n                            <td>Row toggler icon of a collapsed row toggler.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>globalFilter</td>\r\n                            <td>any</td>\r\n                            <td>null</td>\r\n                            <td>Reference of an input field to use as a global filter.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filterDelay</td>\r\n                            <td>number</td>\r\n                            <td>300</td>\r\n                            <td>Delay in milliseconds before filtering the data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>lazy</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>resizableColumns</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, columns can be resized using drag and drop.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>columnResizeMode</td>\r\n                            <td>string</td>\r\n                            <td>fit</td>\r\n                            <td>Defines whether the overall table width should change on column resize, valid values are \"fit\" and \"expand\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>reorderableColumns</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When enabled, columns can be reordered using drag and drop.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollable</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>When specifies, enables horizontal and/or vertical scrolling.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollHeight</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Height of the scroll viewport.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>scrollWidth</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Width of the scroll viewport.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>virtualScroll</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Whether the data should be loaded on demand during scroll.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>virtualScrollDelay</td>\r\n                            <td>number</td>\r\n                            <td>500</td>\r\n                            <td>Delay in virtual scroll before doing a call to lazy load.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>frozenValue</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>A collection to display as frozen in a scrollable table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>style</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Inline style of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>styleClass</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>Style class of the component.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>contextMenu</td>\r\n                            <td>ContextMenu</td>\r\n                            <td>null</td>\r\n                            <td>Local ng-template varilable of a ContextMenu.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>csvSeparator</td>\r\n                            <td>string</td>\r\n                            <td>,</td>\r\n                            <td>Character to use as the csv separator.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>exportFilename</td>\r\n                            <td>string</td>\r\n                            <td>download</td>\r\n                            <td>Name of the exported file.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>emptyMessage</td>\r\n                            <td>string</td>\r\n                            <td>No records found.</td>\r\n                            <td>Text to display when there is no data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>paginatorPosition</td>\r\n                            <td>string</td>\r\n                            <td>bottom</td>\r\n                            <td>Position of the paginator, options are \"top\",\"bottom\" or \"both\".</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowStyleClass</td>\r\n                            <td>function</td>\r\n                            <td>null</td>\r\n                            <td>Function that gets the row data and row index as parameters and returns a style class for the row. This is an alternative to the rowStyleMap approach.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowStyleMap</td>\r\n                            <td>object</td>\r\n                            <td>null</td>\r\n                            <td>An object whose keys are dataKeys of rows and values are the corresponding style class of that row. This is an alternative to the rowStyleClass approach.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowHover</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Adds hover effect to rows without the need for selectionMode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>filters</td>\r\n                            <td>array</td>\r\n                            <td>null</td>\r\n                            <td>An array of FilterMetadata objects to provide external filters.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>metaKeySelection</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item\r\n                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>dataKey</td>\r\n                            <td>string</td>\r\n                            <td>null</td>\r\n                            <td>A property to uniquely identify a record in data.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loading</td>\r\n                            <td>boolean</td>\r\n                            <td>false</td>\r\n                            <td>Displays a loader to indicate data load is in progress.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>loadingIcon</td>\r\n                            <td>string</td>\r\n                            <td>fa-circle-o-notch</td>\r\n                            <td>The icon to show while indicating data load is in progress.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>rowTrackBy</td>\r\n                            <td>Function</td>\r\n                            <td>null</td>\r\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>compareSelectionBy</td>\r\n                            <td>string</td>\r\n                            <td>deepEquals</td>\r\n                            <td>Algorithm to define if a row is selected, valid values are \"equals\" that compares by reference and \"deepEquals\" that compares all fields.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>first</td>\r\n                            <td>number</td>\r\n                            <td>0</td>\r\n                            <td>Index of the first row to be displayed. It supports two-way binding so that model value can be updated on pagination as well.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>immutable</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Defines how the data should be manipulated.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>showHeaderCheckbox</td>\r\n                            <td>boolean</td>\r\n                            <td>true</td>\r\n                            <td>Whether to show the header checkbox in checkbox based selection mode.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Events</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Parameters</th>\r\n                        <th>Description</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>onRowClick</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.data: Selected data </td>\r\n                            <td>Callback to invoke when a row is clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowSelect</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.data: Selected data <br >\r\n                                event.type: Type of selection, valid values are \"row\", \"radiobutton\" and \"checkbox\"\r\n                            </td>\r\n                            <td>Callback to invoke when a row is selected.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowUnselect</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.data: Unselected data <br >\r\n                                event.type: Type of unselection, valid values are \"row\" and \"checkbox\"</td>\r\n                            <td>Callback to invoke when a row is unselected with metakey.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowDblclick</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.data: Selected data </td>\r\n                            <td>Callback to invoke when a row is selected with double clicked.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onHeaderCheckboxToggle</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.checked: State of the header checkbox</td>\r\n                            <td>Callback to invoke when state of header checkbox changes.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onContextMenuSelect</td>\r\n                            <td>event.originalEvent: Browser event <br>\r\n                                event.data: Selected data</td>\r\n                            <td>Callback to invoke when a row is selected with right click.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onColResize</td>\r\n                            <td>event.element: Resized column header <br>\r\n                                event.delta: Change of width in number of pixels</td>\r\n                            <td>Callback to invoke when a column is resized.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onColReorder</td>\r\n                            <td>event.dragIndex: Index of the dragged column <br>\r\n                                event.dropIndex: Index of the dropped column <br>\r\n                                event.columns: Columns array after reorder. <br></td>\r\n                            <td>Callback to invoke when a column is reordered.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onLazyLoad</td>\r\n                            <td>event.first = First row offset <br>\r\n                                event.rows = Number of rows per page <br>\r\n                                event.sortField = Field name to sort with <br>\r\n                                event.sortOrder = Sort order as number, 1 for asc and -1 for dec <br>\r\n                                filters: FilterMetadata object having field as key and filter value, filter matchMode as value</td>\r\n                            <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEditInit</td>\r\n                            <td>event.column: Column object of the cell<br>\r\n                                event.data: Row data</td>\r\n                            <td>Callback to invoke when a cell switches to edit mode.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEdit</td>\r\n                            <td>event.originalEvent: Browser event\r\n                                event.column: Column object of the cell<br>\r\n                                event.data: Row data <br />\r\n                                event.index: Row index</td>\r\n                            <td>Callback to invoke when cell data is being edited.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEditComplete</td>\r\n                            <td>event.column: Column object of the cell<br>\r\n                                event.data: Row data <br />\r\n                                event.index: Row index</td>\r\n                            <td>Callback to invoke when cell edit is completed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onEditCancel</td>\r\n                            <td>event.column: Column object of the cell<br>\r\n                                event.data: Row data <br />\r\n                                event.index: Row index</td>\r\n                            <td>Callback to invoke when cell edit is cancelled with escape key.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onPage</td>\r\n                            <td>event.first: Index of first record in page<br>\r\n                                event.rows: Number of rows on the page</td>\r\n                            <td>Callback to invoke when pagination occurs.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onSort</td>\r\n                            <td>event.field: Field name of the sorted column<br>\r\n                                event.order: Sort order as 1 or -1<br>\r\n                                event.multisortmeta: Sort metadata in multi sort mode. See multiple sorting section for the structure of this object.</td>\r\n                            <td>Callback to invoke when a column gets sorted.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onFilter</td>\r\n                            <td>event.filters: Filters object having a field as the property key and an object with value, matchMode as the property value.<br>\r\n                                event.filteredValue: Filtered data after running the filtering.</td>\r\n                            <td>Callback to invoke when data is filtered.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowExpand</td>\r\n                            <td>event.originalEvent: Browser event<br>\r\n                                data: Row data to expand.</td>\r\n                            <td>Callback to invoke when a row is expanded.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowCollapse</td>\r\n                            <td>event.originalEvent: Browser event<br>\r\n                                data: Row data to collapse.</td>\r\n                            <td>Callback to invoke when a row is collapsed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowGroupExpand</td>\r\n                            <td>event.originalEvent: Browser event<br>\r\n                                group: Value of the group.</td>\r\n                            <td>Callback to invoke when a row group is expanded.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onRowGroupCollapse</td>\r\n                            <td>event.originalEvent: Browser event<br>\r\n                                group: Value of the group.</td>\r\n                            <td>Callback to invoke when a row group is collapsed.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>onValueChange</td>\r\n                            <td>value: New value.</td>\r\n                            <td>Callback to invoke when value of table is updated.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"handleRowSelect($event)\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nhandleRowSelect(event) &#123;\r\n    //event.data = Selected row data\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Methods</h3>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Parameters</th>\r\n                            <th>Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>reset</td>\r\n                            <td>-</td>\r\n                            <td>Resets sort, filter and paginator state.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>exportCSV</td>\r\n                            <td>config?.selectionOnly: Exports only the selection.</td>\r\n                            <td>Exports the data in csv format.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>toggleRow</td>\r\n                            <td>data</td>\r\n                            <td>Toggles row expansion for given row data.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n<pre>\r\n<code #dt class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable #dt [value]=\"cars\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;button type=\"button\" pButton (click)=\"update(dt)\" label=\"Reset\"&gt;&lt;/button&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nupdate(dt: DataTable) &#123;\r\n    dt.reset();\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n            <h3>Styling</h3>\r\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\r\n            <div class=\"doc-tablewrapper\">\r\n                <table class=\"doc-table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                        <th>Element</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>ui-datatable</td>\r\n                            <td>Container element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datatable-header</td>\r\n                            <td>Header section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datatable-footer</td>\r\n                            <td>Footer section.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-column-title</td>\r\n                            <td>Title of a column.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-sortable-column</td>\r\n                            <td>Sortable column header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-column-filter</td>\r\n                            <td>Filter element in header.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-cell-data</td>\r\n                            <td>Data cell in body.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-cell-editor</td>\r\n                            <td>Input element for incell editing.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datatable-scrollable-header</td>\r\n                            <td>Container of header in a scrollable table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datatable-scrollable-body</td>\r\n                            <td>Container of body in a scrollable table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datatable-scrollable-footer</td>\r\n                            <td>Container of footer in a scrollable table.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datatable-responsive</td>\r\n                            <td>Container element of a responsive datatable.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-datatable-emptymessage</td>\r\n                            <td>Cell containing the empty message.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-expanded-row</td>\r\n                            <td>Expanded tr element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-expanded-row-content</td>\r\n                            <td>Next tr sibling of the expanded tr element.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-rowgroup-header</td>\r\n                            <td>Header of a rowgroup.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>ui-rowgroup-footer</td>\r\n                            <td>Footer of a rowgroup.</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <h3>Dependencies</h3>\r\n            <p>None.</p>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"Source\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\r\n&lt;p-dataTable [value]=\"cars\" [loading]=\"loading\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;h3&gt;Dynamic Columns&lt;/h3&gt;\r\n&lt;p-dataTable [value]=\"cars\"&gt;\r\n    &lt;p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableDemo implements OnInit &#123;\r\n\r\n    loading: boolean;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.loading = true;\r\n        setTimeout(() => &#123;\r\n            this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n            this.loading = false;\r\n        }, 1000);\r\n\r\n        this.cols = [\r\n            &#123;field: 'vin', header: 'Vin'&#125;,\r\n            &#123;field: 'year', header: 'Year'&#125;,\r\n            &#123;field: 'brand', header: 'Brand'&#125;,\r\n            &#123;field: 'color', header: 'Color'&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatabledemo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatabledemo.module.ts ***!
  \***********************************************************************/
/*! exports provided: DataTableDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDemoModule", function() { return DataTableDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _datatabledemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datatabledemo */ "./src/app/showcase/components/datatable/datatabledemo.ts");
/* harmony import */ var _datatablecmdemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datatablecmdemo */ "./src/app/showcase/components/datatable/datatablecmdemo.ts");
/* harmony import */ var _datatablecolreorderdemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datatablecolreorderdemo */ "./src/app/showcase/components/datatable/datatablecolreorderdemo.ts");
/* harmony import */ var _datatablecolresizedemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datatablecolresizedemo */ "./src/app/showcase/components/datatable/datatablecolresizedemo.ts");
/* harmony import */ var _datatablecoltogglerdemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datatablecoltogglerdemo */ "./src/app/showcase/components/datatable/datatablecoltogglerdemo.ts");
/* harmony import */ var _datatablecruddemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datatablecruddemo */ "./src/app/showcase/components/datatable/datatablecruddemo.ts");
/* harmony import */ var _datatableeditabledemo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datatableeditabledemo */ "./src/app/showcase/components/datatable/datatableeditabledemo.ts");
/* harmony import */ var _datatableexportdemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datatableexportdemo */ "./src/app/showcase/components/datatable/datatableexportdemo.ts");
/* harmony import */ var _datatablefacetsdemo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datatablefacetsdemo */ "./src/app/showcase/components/datatable/datatablefacetsdemo.ts");
/* harmony import */ var _datatablefilterdemo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datatablefilterdemo */ "./src/app/showcase/components/datatable/datatablefilterdemo.ts");
/* harmony import */ var _datatablecolgroupdemo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./datatablecolgroupdemo */ "./src/app/showcase/components/datatable/datatablecolgroupdemo.ts");
/* harmony import */ var _datatablerowgroupdemo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./datatablerowgroupdemo */ "./src/app/showcase/components/datatable/datatablerowgroupdemo.ts");
/* harmony import */ var _datatablelazydemo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./datatablelazydemo */ "./src/app/showcase/components/datatable/datatablelazydemo.ts");
/* harmony import */ var _datatablepaginatordemo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./datatablepaginatordemo */ "./src/app/showcase/components/datatable/datatablepaginatordemo.ts");
/* harmony import */ var _datatableresponsivedemo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./datatableresponsivedemo */ "./src/app/showcase/components/datatable/datatableresponsivedemo.ts");
/* harmony import */ var _datatablerowexpansiondemo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./datatablerowexpansiondemo */ "./src/app/showcase/components/datatable/datatablerowexpansiondemo.ts");
/* harmony import */ var _datatablescrolldemo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./datatablescrolldemo */ "./src/app/showcase/components/datatable/datatablescrolldemo.ts");
/* harmony import */ var _datatableselectiondemo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./datatableselectiondemo */ "./src/app/showcase/components/datatable/datatableselectiondemo.ts");
/* harmony import */ var _datatablesortdemo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./datatablesortdemo */ "./src/app/showcase/components/datatable/datatablesortdemo.ts");
/* harmony import */ var _datatabletemplatingdemo__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./datatabletemplatingdemo */ "./src/app/showcase/components/datatable/datatabletemplatingdemo.ts");
/* harmony import */ var _datatablesubmenu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./datatablesubmenu */ "./src/app/showcase/components/datatable/datatablesubmenu.ts");
/* harmony import */ var _datatabledemo_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./datatabledemo-routing.module */ "./src/app/showcase/components/datatable/datatabledemo-routing.module.ts");
/* harmony import */ var _components_datatable_datatable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../components/datatable/datatable */ "./src/app/components/datatable/datatable.ts");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../components/button/button */ "./src/app/components/button/button.ts");
/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../components/dropdown/dropdown */ "./src/app/components/dropdown/dropdown.ts");
/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../components/calendar/calendar */ "./src/app/components/calendar/calendar.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../components/contextmenu/contextmenu */ "./src/app/components/contextmenu/contextmenu.ts");
/* harmony import */ var _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../components/dialog/dialog */ "./src/app/components/dialog/dialog.ts");
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../components/slider/slider */ "./src/app/components/slider/slider.ts");
/* harmony import */ var _components_multiselect_multiselect__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../components/multiselect/multiselect */ "./src/app/components/multiselect/multiselect.ts");
/* harmony import */ var _components_growl_growl__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../components/growl/growl */ "./src/app/components/growl/growl.ts");
/* harmony import */ var _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../components/tabview/tabview */ "./src/app/components/tabview/tabview.ts");
/* harmony import */ var _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../components/codehighlighter/codehighlighter */ "./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var DataTableDemoModule = /** @class */ (function () {
    function DataTableDemoModule() {
    }
    DataTableDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _datatabledemo_routing_module__WEBPACK_IMPORTED_MODULE_24__["DatatableDemoRoutingModule"],
                _components_datatable_datatable__WEBPACK_IMPORTED_MODULE_25__["DataTableModule"],
                _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_28__["CalendarModule"],
                _components_button_button__WEBPACK_IMPORTED_MODULE_26__["ButtonModule"],
                _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_29__["InputTextModule"],
                _components_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_30__["ContextMenuModule"],
                _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_27__["DropdownModule"],
                _components_dialog_dialog__WEBPACK_IMPORTED_MODULE_31__["DialogModule"],
                _components_multiselect_multiselect__WEBPACK_IMPORTED_MODULE_33__["MultiSelectModule"],
                _components_slider_slider__WEBPACK_IMPORTED_MODULE_32__["SliderModule"],
                _components_growl_growl__WEBPACK_IMPORTED_MODULE_34__["GrowlModule"],
                _components_tabview_tabview__WEBPACK_IMPORTED_MODULE_35__["TabViewModule"],
                _components_codehighlighter_codehighlighter__WEBPACK_IMPORTED_MODULE_36__["CodeHighlighterModule"]
            ],
            declarations: [
                _datatabledemo__WEBPACK_IMPORTED_MODULE_3__["DataTableDemo"],
                _datatablecmdemo__WEBPACK_IMPORTED_MODULE_4__["DataTableCMDemo"],
                _datatablecolreorderdemo__WEBPACK_IMPORTED_MODULE_5__["DataTableColReorderDemo"],
                _datatablecolresizedemo__WEBPACK_IMPORTED_MODULE_6__["DataTableColResizeDemo"],
                _datatablecoltogglerdemo__WEBPACK_IMPORTED_MODULE_7__["DataTableColTogglerDemo"],
                _datatablecruddemo__WEBPACK_IMPORTED_MODULE_8__["DataTableCrudDemo"],
                _datatableeditabledemo__WEBPACK_IMPORTED_MODULE_9__["DataTableEditableDemo"],
                _datatableexportdemo__WEBPACK_IMPORTED_MODULE_10__["DataTableExportDemo"],
                _datatablefacetsdemo__WEBPACK_IMPORTED_MODULE_11__["DataTableFacetsDemo"],
                _datatablefilterdemo__WEBPACK_IMPORTED_MODULE_12__["DataTableFilterDemo"],
                _datatablecolgroupdemo__WEBPACK_IMPORTED_MODULE_13__["DataTableColGroupDemo"],
                _datatablerowgroupdemo__WEBPACK_IMPORTED_MODULE_14__["DataTableRowGroupDemo"],
                _datatablelazydemo__WEBPACK_IMPORTED_MODULE_15__["DataTableLazyDemo"],
                _datatablepaginatordemo__WEBPACK_IMPORTED_MODULE_16__["DataTablePaginatorDemo"],
                _datatableresponsivedemo__WEBPACK_IMPORTED_MODULE_17__["DataTableResponsiveDemo"],
                _datatablerowexpansiondemo__WEBPACK_IMPORTED_MODULE_18__["DataTableRowExpansionDemo"],
                _datatablescrolldemo__WEBPACK_IMPORTED_MODULE_19__["DataTableScrollDemo"],
                _datatableselectiondemo__WEBPACK_IMPORTED_MODULE_20__["DataTableSelectionDemo"],
                _datatablesortdemo__WEBPACK_IMPORTED_MODULE_21__["DataTableSortDemo"],
                _datatabletemplatingdemo__WEBPACK_IMPORTED_MODULE_22__["DataTableTemplatingDemo"],
                _datatablesubmenu__WEBPACK_IMPORTED_MODULE_23__["DataTableSubmenu"]
            ]
        })
    ], DataTableDemoModule);
    return DataTableDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatabledemo.ts":
/*!****************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatabledemo.ts ***!
  \****************************************************************/
/*! exports provided: DataTableDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDemo", function() { return DataTableDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableDemo = /** @class */ (function () {
    function DataTableDemo(carService) {
        this.carService = carService;
    }
    DataTableDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
            _this.loading = false;
        }, 1000);
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    DataTableDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatabledemo.html */ "./src/app/showcase/components/datatable/datatabledemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableDemo);
    return DataTableDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatableeditabledemo.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatableeditabledemo.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable</span>\r\n        <span>Incell editing is enabled by setting editable property true both on datatable and columns, when a cell is clicked edit mode is activated, clicking outside of cell or hitting the enter key \r\n        switches back to view mode after updating the value.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation ui-fluid\">\r\n    <p-dataTable [value]=\"cars\" [editable]=\"true\">\r\n        <p-column field=\"vin\" header=\"Vin\" [editable]=\"true\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\" [editable]=\"true\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\" [editable]=\"true\">\r\n            <ng-template let-col let-car=\"rowData\" pTemplate=\"editor\">\r\n                <p-dropdown [(ngModel)]=\"car[col.field]\" [options]=\"brands\" [autoWidth]=\"false\" [style]=\"{'width':'100%'}\" required=\"true\" appendTo=\"body\"></p-dropdown>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"color\" header=\"Color\" [editable]=\"true\"></p-column>\r\n        <p-column field=\"saleDate\" header=\"Sale Date\" [editable]=\"true\" [style]=\"{'overflow':'visible'}\">\r\n            <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                {{car[col.field]|date}}\r\n            </ng-template>\r\n            <ng-template let-col let-car=\"rowData\" pTemplate=\"editor\">\r\n                <p-calendar [(ngModel)]=\"car[col.field]\" appendTo=\"body\"></p-calendar>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatableeditabledemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableeditabledemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableEditableDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatableeditabledemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableeditabledemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [editable]=\"true\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" [editable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [editable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [editable]=\"true\"&gt;\r\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"editor\"&gt;\r\n            &lt;p-dropdown [(ngModel)]=\"car[col.field]\" [options]=\"brands\" [autoWidth]=\"false\" [style]=\"&#123;'width':'100%'&#125;\" required=\"true\"  appendTo=\"body\"&gt;&lt;/p-dropdown&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [editable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"saleDate\" header=\"Sale Date\" [editable]=\"true\" [style]=\" &#123;'overflow':'visible' &#125;\"&gt;\r\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"body\"&gt;\r\n             &#123;&#123;car[col.field]|date &#125;&#125;\r\n        &lt;/ng-template&gt;\r\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"editor\"&gt;\r\n            &lt;p-calendar [(ngModel)]=\"car[col.field]\" appendTo=\"body\"&gt;&lt;/p-calendar&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatableeditabledemo.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatableeditabledemo.ts ***!
  \************************************************************************/
/*! exports provided: DataTableEditableDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableEditableDemo", function() { return DataTableEditableDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableEditableDemo = /** @class */ (function () {
    function DataTableEditableDemo(carService) {
        this.carService = carService;
    }
    DataTableEditableDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.brands = [
            { label: 'Choose', value: null },
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
    };
    DataTableEditableDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatableeditabledemo.html */ "./src/app/showcase/components/datatable/datatableeditabledemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableEditableDemo);
    return DataTableEditableDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatableexportdemo.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatableexportdemo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - Export</span>\r\n        <span>DataTable can export its data to CSV format.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    \r\n    <p-dataTable #dt [value]=\"cars\" exportFilename=\"cars\" [(selection)]=\"selectedCars\" selectionMode=\"multiple\" [metaKeySelection]=\"false\">\r\n        <p-header>\r\n            <div class=\"ui-helper-clearfix\">\r\n                <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button>\r\n                <button type=\"button\" pButton icon=\"fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button>\r\n            </div>\r\n        </p-header>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>    \r\n    \r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatableexportdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableexportdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableExportDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n    \r\n    selectedCars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatableexportdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableexportdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable #dt [value]=\"cars\" exportFilename=\"cars\" [(selection)]=\"selectedCars\" selectionMode=\"multiple\" [metaKeySelection]=\"false\"&gt;\r\n    &lt;p-header&gt;\r\n        &lt;div class=\"ui-helper-clearfix\"&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"&gt;&lt;/button&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV(&#123;selectionOnly:true&#125;)\" style=\"float:right\"&gt;&lt;/button&gt;\r\n        &lt;/div&gt;\r\n    &lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;   \r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatableexportdemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatableexportdemo.ts ***!
  \**********************************************************************/
/*! exports provided: DataTableExportDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableExportDemo", function() { return DataTableExportDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableExportDemo = /** @class */ (function () {
    function DataTableExportDemo(carService) {
        this.carService = carService;
    }
    DataTableExportDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DataTableExportDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatableexportdemo.html */ "./src/app/showcase/components/datatable/datatableexportdemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableExportDemo);
    return DataTableExportDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablefacetsdemo.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablefacetsdemo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Facets</span></span>\r\n        <span>DataTable provides header and footer sections.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataTable [value]=\"cars\">\r\n        <p-header>List of Cars</p-header>\r\n        <p-footer>There are 10 cars</p-footer>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablefacetsdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablefacetsdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableFacetsDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService:CarService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablefacetsdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablefacetsdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\"&gt;\r\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\r\n    &lt;p-footer&gt;There are 10 cars&lt;/p-footer&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablefacetsdemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablefacetsdemo.ts ***!
  \**********************************************************************/
/*! exports provided: DataTableFacetsDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFacetsDemo", function() { return DataTableFacetsDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableFacetsDemo = /** @class */ (function () {
    function DataTableFacetsDemo(carService) {
        this.carService = carService;
    }
    DataTableFacetsDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DataTableFacetsDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablefacetsdemo.html */ "./src/app/showcase/components/datatable/datatablefacetsdemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableFacetsDemo);
    return DataTableFacetsDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablefilterdemo.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablefilterdemo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - Filter</span>\r\n        <span>Filtering is enabled by setting the filter property as true in column object. Default match mode is \"startsWith\" and this can be configured\r\n        using filterMatchMode property of column object that also accepts \"contains\", \"endsWith\", \"equals\" and \"in\". An optional global filter feature is available to search all fields with a keyword.\r\n        By default input fields are generated as filter elements and using templating any component can be used as a filter.\r\n    </span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [globalFilter]=\"gb\" #dt>\r\n        <p-header>List of Cars</p-header>\r\n        <p-column field=\"vin\" header=\"Vin (startsWith)\" [filter]=\"true\" filterPlaceholder=\"Search\"></p-column>\r\n        <p-column field=\"year\" header=\"Year ({{yearFilter||'No Filter'}})\" [filter]=\"true\" filterMatchMode=\"equals\">\r\n            <ng-template pTemplate=\"filter\" let-col>\r\n                <i class=\"fa fa-close\" (click)=\"yearFilter=null;dt.filter(null,col.field,col.filterMatchMode)\"></i>\r\n                <p-slider [style]=\"{'width':'100%','margin-top':'8px'}\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt, col)\"></p-slider>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"brand\" header=\"Brand (Custom)\" [filter]=\"true\" filterMatchMode=\"equals\">\r\n            <ng-template pTemplate=\"filter\" let-col>\r\n                <p-dropdown [options]=\"brands\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"></p-dropdown>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"color\" header=\"Color (Custom)\" [filter]=\"true\" filterMatchMode=\"in\">\r\n            <ng-template pTemplate=\"filter\" let-col>\r\n                <p-multiSelect [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"></p-multiSelect>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablefilterdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablefilterdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableFilterDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n    \r\n    brands: SelectItem[];\r\n    \r\n    colors: SelectItem[];\r\n    \r\n    yearFilter: number;\r\n    \r\n    yearTimeout: any;\r\n    \r\n    constructor(private carService: CarService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\r\n        \r\n        this.brands = [];\r\n        this.brands.push(&#123;label: 'All Brands', value: null&#125;);\r\n        this.brands.push(&#123;label: 'Audi', value: 'Audi'&#125;);\r\n        this.brands.push(&#123;label: 'BMW', value: 'BMW'&#125;);\r\n        this.brands.push(&#123;label: 'Fiat', value: 'Fiat'&#125;);\r\n        this.brands.push(&#123;label: 'Honda', value: 'Honda'&#125;);\r\n        this.brands.push(&#123;label: 'Jaguar', value: 'Jaguar'&#125;);\r\n        this.brands.push(&#123;label: 'Mercedes', value: 'Mercedes'&#125;);\r\n        this.brands.push(&#123;label: 'Renault', value: 'Renault'&#125;);\r\n        this.brands.push(&#123;label: 'VW', value: 'VW'&#125;);\r\n        this.brands.push(&#123;label: 'Volvo', value: 'Volvo'&#125;);\r\n        \r\n        this.colors = [];\r\n        this.colors.push(&#123;label: 'White', value: 'White'&#125;);\r\n        this.colors.push(&#123;label: 'Green', value: 'Green'&#125;);\r\n        this.colors.push(&#123;label: 'Silver', value: 'Silver'&#125;);\r\n        this.colors.push(&#123;label: 'Black', value: 'Black'&#125;);\r\n        this.colors.push(&#123;label: 'Red', value: 'Red'&#125;);\r\n        this.colors.push(&#123;label: 'Maroon', value: 'Maroon'&#125;);\r\n        this.colors.push(&#123;label: 'Brown', value: 'Brown'&#125;);\r\n        this.colors.push(&#123;label: 'Orange', value: 'Orange'&#125;);\r\n        this.colors.push(&#123;label: 'Blue', value: 'Blue'&#125;);\r\n    &#125;\r\n    \r\n    onYearChange(event, dt, col) &#123;\r\n        if(this.yearTimeout) &#123;\r\n            clearTimeout(this.yearTimeout);\r\n        &#125;\r\n        \r\n        this.yearTimeout = setTimeout(() => &#123;\r\n            dt.filter(event.value, col.field, col.filterMatchMode);\r\n        &#125;, 250);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablefilterdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablefilterdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\"&gt;\r\n    &lt;i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"&gt;&lt;/i&gt;\r\n    &lt;input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"&gt;\r\n&lt;/div&gt;\r\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [globalFilter]=\"gb\" #dt&gt;\r\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin (startsWith)\" [filter]=\"true\" filterPlaceholder=\"Search\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year (&#123;&#123;yearFilter||'No Filter'&#125;&#125;)\" [filter]=\"true\" filterMatchMode=\"equals\"&gt;\r\n        &lt;ng-template pTemplate=\"filter\" let-col&gt;\r\n            &lt;i class=\"fa fa-close\" (click)=\"yearFilter=null;dt.filter(null,col.field,col.filterMatchMode)\"&gt;&lt;/i&gt;\r\n            &lt;p-slider [style]=\"&#123;'width':'100%','margin-top':'8px'&#125;\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt, col)\"&gt;&lt;/p-slider&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand (Custom)\" [filter]=\"true\" filterMatchMode=\"equals\"&gt;\r\n        &lt;ng-template pTemplate=\"filter\" let-col&gt;\r\n            &lt;p-dropdown [options]=\"brands\" [style]=\"&#123;'width':'100%'&#125;\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"&gt;&lt;/p-dropdown&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color (Custom)\" [filter]=\"true\" filterMatchMode=\"in\"&gt;\r\n        &lt;ng-template pTemplate=\"filter\" let-col&gt;\r\n            &lt;p-multiSelect [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"&gt;&lt;/p-multiSelect&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablefilterdemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablefilterdemo.ts ***!
  \**********************************************************************/
/*! exports provided: DataTableFilterDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFilterDemo", function() { return DataTableFilterDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableFilterDemo = /** @class */ (function () {
    function DataTableFilterDemo(carService) {
        this.carService = carService;
    }
    DataTableFilterDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.brands = [];
        this.brands.push({ label: 'All Brands', value: null });
        this.brands.push({ label: 'Audi', value: 'Audi' });
        this.brands.push({ label: 'BMW', value: 'BMW' });
        this.brands.push({ label: 'Fiat', value: 'Fiat' });
        this.brands.push({ label: 'Honda', value: 'Honda' });
        this.brands.push({ label: 'Jaguar', value: 'Jaguar' });
        this.brands.push({ label: 'Mercedes', value: 'Mercedes' });
        this.brands.push({ label: 'Renault', value: 'Renault' });
        this.brands.push({ label: 'VW', value: 'VW' });
        this.brands.push({ label: 'Volvo', value: 'Volvo' });
        this.colors = [];
        this.colors.push({ label: 'White', value: 'White' });
        this.colors.push({ label: 'Green', value: 'Green' });
        this.colors.push({ label: 'Silver', value: 'Silver' });
        this.colors.push({ label: 'Black', value: 'Black' });
        this.colors.push({ label: 'Red', value: 'Red' });
        this.colors.push({ label: 'Maroon', value: 'Maroon' });
        this.colors.push({ label: 'Brown', value: 'Brown' });
        this.colors.push({ label: 'Orange', value: 'Orange' });
        this.colors.push({ label: 'Blue', value: 'Blue' });
    };
    DataTableFilterDemo.prototype.onYearChange = function (event, dt, col) {
        if (this.yearTimeout) {
            clearTimeout(this.yearTimeout);
        }
        this.yearTimeout = setTimeout(function () {
            dt.filter(event.value, col.field, col.filterMatchMode);
        }, 250);
    };
    DataTableFilterDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablefilterdemo.html */ "./src/app/showcase/components/datatable/datatablefilterdemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableFilterDemo);
    return DataTableFilterDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablelazydemo.html":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablelazydemo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Lazy</span></span>\r\n        <span>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\r\n             onLazyLoad callback everytime paging, sorting and filtering happens. Sample belows imitates lazy paging by using an in memory list. \r\n             It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator \r\n             displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataTable [value]=\"cars\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20]\"\r\n                [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\r\n        <p-header>List of Cars</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablelazydemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablelazydemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableLazyDemo implements OnInit &#123;\r\n\r\n    datasource: Car[];\r\n    \r\n    cars: Car[];\r\n    \r\n    totalRecords: number;\r\n    \r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        //datasource imitation\r\n        this.carService.getCarsLarge().then(cars => &#123;\r\n            this.datasource = cars; \r\n            this.totalRecords = this.datasource.length;\r\n            this.cars = this.datasource.slice(0, 10);\r\n        &#125;);\r\n    &#125;\r\n    \r\n    loadCarsLazy(event: LazyLoadEvent) &#123;\r\n        //in a real application, make a remote request to load data using state metadata from event\r\n        //event.first = First row offset\r\n        //event.rows = Number of rows per page\r\n        //event.sortField = Field name to sort with\r\n        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec\r\n        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value\r\n        \r\n        //imitate db connection over a network\r\n        setTimeout(() => &#123;\r\n            if(this.datasource) &#123;\r\n                this.cars = this.datasource.slice(event.first, (event.first + event.rows));\r\n            &#125;\r\n        &#125;, 250);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablelazydemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablelazydemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20]\"\r\n            [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\"&gt;\r\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablelazydemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablelazydemo.ts ***!
  \********************************************************************/
/*! exports provided: DataTableLazyDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableLazyDemo", function() { return DataTableLazyDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableLazyDemo = /** @class */ (function () {
    function DataTableLazyDemo(carService) {
        this.carService = carService;
    }
    DataTableLazyDemo.prototype.ngOnInit = function () {
        var _this = this;
        //datasource imitation
        this.carService.getCarsLarge().then(function (cars) {
            _this.datasource = cars;
            _this.totalRecords = _this.datasource.length;
            _this.cars = _this.datasource.slice(0, 10);
        });
    };
    DataTableLazyDemo.prototype.loadCarsLazy = function (event) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        var _this = this;
        //imitate db connection over a network
        setTimeout(function () {
            if (_this.datasource) {
                _this.cars = _this.datasource.slice(event.first, (event.first + event.rows));
            }
        }, 250);
    };
    DataTableLazyDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablelazydemo.html */ "./src/app/showcase/components/datatable/datatablelazydemo.html"),
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableLazyDemo);
    return DataTableLazyDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablepaginatordemo.html":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablepaginatordemo.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - Paginator</span>\r\n        <span>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number\r\n            of page links to display.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\r\n        <p-header>List of Cars</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n        <ng-template pTemplate=\"paginatorLeft\">\r\n            <button type=\"button\" pButton icon=\"fa-refresh\"></button>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"paginatorRight\">\r\n            <button type=\"button\" pButton icon=\"fa-cloud-upload\"></button>\r\n        </ng-template>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablepaginatordemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablepaginatordemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTablePaginatorDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablepaginatordemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablepaginatordemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\"&gt;\r\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;ng-template pTemplate=\"paginatorLeft\"&gt;\r\n        &lt;button type=\"button\" pButton icon=\"fa-refresh\"&gt;&lt;/button&gt;\r\n    &lt;/ng-template&gt;\r\n    &lt;ng-template pTemplate=\"paginatorRight\"&gt;\r\n        &lt;button type=\"button\" pButton icon=\"fa-cloud-upload\"&gt;&lt;/button&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablepaginatordemo.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablepaginatordemo.ts ***!
  \*************************************************************************/
/*! exports provided: DataTablePaginatorDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablePaginatorDemo", function() { return DataTablePaginatorDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTablePaginatorDemo = /** @class */ (function () {
    function DataTablePaginatorDemo(carService) {
        this.carService = carService;
    }
    DataTablePaginatorDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    DataTablePaginatorDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablepaginatordemo.html */ "./src/app/showcase/components/datatable/datatablepaginatordemo.html"),
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTablePaginatorDemo);
    return DataTablePaginatorDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatableresponsivedemo.html":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatableresponsivedemo.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Responsive</span></span>\r\n        <span>DataTable columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value. \r\n            This feature is enabled by setting responsive to true. In case you'd like to control the stacked mode manually regardless of screen size,\r\n            use the stacked property.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <button pButton type=\"button\" (click)=\"toggle()\" style=\"margin-bottom:10px\" label=\"Toggle\" icon=\"fa-list\"></button>\r\n    \r\n    <p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [responsive]=\"true\" [stacked]=\"stacked\">\r\n        <p-header>Responsive</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatableresponsivedemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableresponsivedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableResponsiveDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n    \r\n    stacked: boolean;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\r\n    &#125;\r\n    \r\n    toggle() &#123;\r\n        this.stacked = !this.stacked;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatableresponsivedemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableresponsivedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;button pButton type=\"button\" (click)=\"toggle()\" style=\"margin-bottom:10px\" label=\"Toggle\" icon=\"fa-list\"&gt;&lt;/button&gt;\r\n\r\n&lt;p-dataTable [value]=\"cars\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [responsive]=\"true\" [stacked]=\"stacked\"&gt;\r\n    &lt;p-header&gt;Responsive&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatableresponsivedemo.ts":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatableresponsivedemo.ts ***!
  \**************************************************************************/
/*! exports provided: DataTableResponsiveDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableResponsiveDemo", function() { return DataTableResponsiveDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableResponsiveDemo = /** @class */ (function () {
    function DataTableResponsiveDemo(carService) {
        this.carService = carService;
    }
    DataTableResponsiveDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    DataTableResponsiveDemo.prototype.toggle = function () {
        this.stacked = !this.stacked;
    };
    DataTableResponsiveDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatableresponsivedemo.html */ "./src/app/showcase/components/datatable/datatableresponsivedemo.html"),
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableResponsiveDemo);
    return DataTableResponsiveDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablerowexpansiondemo.html":
/*!******************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablerowexpansiondemo.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - Row Expansion</span>\r\n        <span>A row can be expanded to display extra content by enabling expandableRows property and providing a row ng-template.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataTable [value]=\"cars\" expandableRows=\"true\">\r\n        <p-column expander=\"true\" styleClass=\"col-icon\"></p-column>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n        <ng-template let-car pTemplate=\"rowexpansion\">\r\n            <div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px\">\r\n                <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-3\" style=\"text-align:center\">\r\n                        <i class=\"fa fa-search\" (click)=\"showCar(car)\" style=\"cursor:pointer;float:left;margin-top:40px\"></i>\r\n                        <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\r\n                    </div>\r\n                    <div class=\"ui-grid-col-9\">\r\n                        <div class=\"ui-grid ui-grid-responsive ui-grid-pad\">\r\n                            <div class=\"ui-grid-row\">\r\n                                <div class=\"ui-grid-col-2 label\">Vin: </div>\r\n                                <div class=\"ui-grid-col-10\">{{car.vin}}</div>\r\n                            </div>\r\n                            <div class=\"ui-grid-row\">\r\n                                <div class=\"ui-grid-col-2 label\">Year: </div>\r\n                                <div class=\"ui-grid-col-10\">{{car.year}}</div>\r\n                            </div>\r\n                            <div class=\"ui-grid-row\">\r\n                                <div class=\"ui-grid-col-2 label\">Brand: </div>\r\n                                <div class=\"ui-grid-col-10\">{{car.brand}}</div>\r\n                            </div>\r\n                            <div class=\"ui-grid-row\">\r\n                                <div class=\"ui-grid-col-2 label\">Color: </div>\r\n                                <div class=\"ui-grid-col-10\">{{car.color}}</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-dataTable>\r\n\r\n    <p-dialog header=\"Car Details\" [(visible)]=\"dialogVisible\" [minY]=\"70\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"250\">\r\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad\" *ngIf=\"selectedCar\">\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\"><label for=\"vin\" class=\"label\">Vin</label></div>\r\n                <div class=\"ui-grid-col-8\">{{selectedCar.vin}}</div>\r\n            </div>\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\"><label for=\"brand\" class=\"label\">Year</label></div>\r\n                <div class=\"ui-grid-col-8\">{{selectedCar.year}}</div>\r\n            </div>\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\"><label for=\"brand\" class=\"label\">Brand</label></div>\r\n                <div class=\"ui-grid-col-8\">{{selectedCar.brand}}</div>\r\n            </div>\r\n            <div class=\"ui-grid-row\">\r\n                <div class=\"ui-grid-col-4\"><label for=\"color\" class=\"label\">Color</label></div>\r\n                <div class=\"ui-grid-col-8\">{{selectedCar.color}}</div>\r\n            </div>\r\n        </div>\r\n    </p-dialog>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablerowexpansiondemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablerowexpansiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableRowExpansionDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n\r\n    cols: any[];\r\n\r\n    selectedCar: Car;\r\n\r\n    dialogVisible: boolean;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n\r\n        this.cols = [\r\n            &#123;field: 'vin', header: 'Vin'&#125;,\r\n            &#123;field: 'year', header: 'Year'&#125;,\r\n            &#123;field: 'brand', header: 'Brand'&#125;,\r\n            &#123;field: 'color', header: 'Color'&#125;\r\n        ];\r\n    &#125;\r\n\r\n    showCar(car: Car) &#123;\r\n        this.selectedCar = car;\r\n        this.dialogVisible = true;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablerowexpansiondemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablerowexpansiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" expandableRows=\"true\"&gt;\r\n    &lt;p-column expander=\"true\" styleClass=\"col-icon\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;ng-template let-car pTemplate=\"rowexpansion\"&gt;\r\n        &lt;div class=\"ui-grid ui-grid-responsive ui-fluid\" style=\"font-size:16px;padding:20px\"&gt;\r\n            &lt;div class=\"ui-grid-row\"&gt;\r\n                &lt;div class=\"ui-grid-col-3\" style=\"text-align:center\"&gt;\r\n                    &lt;i class=\"fa fa-search\" (click)=\"showCar(car)\" style=\"cursor:pointer;float:left;margin-top:40px\"&gt;&lt;/i&gt;\r\n                    &lt;img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\"&gt;\r\n                &lt;/div&gt;\r\n                &lt;div class=\"ui-grid-col-9\"&gt;\r\n                    &lt;div class=\"ui-grid ui-grid-responsive ui-grid-pad\"&gt;\r\n                        &lt;div class=\"ui-grid-row\"&gt;\r\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Vin: &lt;/div&gt;\r\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.vin}}&lt;/div&gt;\r\n                        &lt;/div&gt;\r\n                        &lt;div class=\"ui-grid-row\"&gt;\r\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Year: &lt;/div&gt;\r\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.year}}&lt;/div&gt;\r\n                        &lt;/div&gt;\r\n                        &lt;div class=\"ui-grid-row\"&gt;\r\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Brand: &lt;/div&gt;\r\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.brand}}&lt;/div&gt;\r\n                        &lt;/div&gt;\r\n                        &lt;div class=\"ui-grid-row\"&gt;\r\n                            &lt;div class=\"ui-grid-col-2 label\"&gt;Color: &lt;/div&gt;\r\n                            &lt;div class=\"ui-grid-col-10\"&gt;{{car.color}}&lt;/div&gt;\r\n                        &lt;/div&gt;\r\n                    &lt;/div&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dialog header=\"Car Details\" [(visible)]=\"dialogVisible\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"250\"&gt;\r\n    &lt;div class=\"ui-grid ui-grid-responsive ui-grid-pad\" *ngIf=\"selectedCar\"&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"vin\" class=\"label\"&gt;Vin&lt;/label&gt;&lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.vin}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"brand\" class=\"label\"&gt;Year&lt;/label&gt;&lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.year}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"brand\" class=\"label\"&gt;Brand&lt;/label&gt;&lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.brand}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n        &lt;div class=\"ui-grid-row\"&gt;\r\n            &lt;div class=\"ui-grid-col-4\"&gt;&lt;label for=\"color\" class=\"label\"&gt;Color&lt;/label&gt;&lt;/div&gt;\r\n            &lt;div class=\"ui-grid-col-8\"&gt;{{selectedCar.color}}&lt;/div&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/p-dialog&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablerowexpansiondemo.ts":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablerowexpansiondemo.ts ***!
  \****************************************************************************/
/*! exports provided: DataTableRowExpansionDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRowExpansionDemo", function() { return DataTableRowExpansionDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableRowExpansionDemo = /** @class */ (function () {
    function DataTableRowExpansionDemo(carService) {
        this.carService = carService;
    }
    DataTableRowExpansionDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    DataTableRowExpansionDemo.prototype.showCar = function (car) {
        this.selectedCar = car;
        this.dialogVisible = true;
    };
    DataTableRowExpansionDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablerowexpansiondemo.html */ "./src/app/showcase/components/datatable/datatablerowexpansiondemo.html"),
            styles: ["\n        .label {\n            font-weight: bold\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableRowExpansionDemo);
    return DataTableRowExpansionDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablerowgroupdemo.html":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablerowgroupdemo.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Row Grouping</span></span>\r\n        <span>Rows can either be grouped by a separate grouping row or using rowspan. Additional optional features\r\n        are toggleable groups and footer rows.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataTable [value]=\"cars1\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" expandableRowGroups=\"true\"\r\n            [sortableRowGroup]=\"false\">\r\n        <p-header>Toggleable Row Groups with Footers</p-header>\r\n        <ng-template pTemplate=\"rowgroupheader\" let-rowData>{{rowData['brand']}}</ng-template>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"price\" header=\"Price\">\r\n            <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                <span>{{car[col.field] | currency:'USD':'symbol':'.0-0'}}</span>\r\n            </ng-template>\r\n        </p-column>\r\n        <ng-template pTemplate=\"rowgroupfooter\" let-car>\r\n            <td colspan=\"3\" style=\"text-align:right\">Total Price</td>\r\n            <td>{{calculateGroupTotal(car['brand']) | currency:'USD':'symbol':'.0-0' }}</td>\r\n        </ng-template>\r\n    </p-dataTable>\r\n\r\n    <p-dataTable [value]=\"cars2\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" [style]=\"{'margin-top':'50px'}\">\r\n        <p-header>Subheader</p-header>\r\n        <ng-template pTemplate=\"rowgroupheader\" let-rowData>{{rowData['brand']}}</ng-template>\r\n        <p-column field=\"color\" header=\"Color\" sortable=\"true\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\" sortable=\"true\"></p-column>\r\n        <p-column field=\"vin\" header=\"Vin\" sortable=\"true\"></p-column>\r\n    </p-dataTable>\r\n\r\n    <p-dataTable [value]=\"cars3\" sortField=\"brand\" rowGroupMode=\"rowspan\" [style]=\"{'margin-top':'50px'}\">\r\n        <p-header>RowSpan</p-header>\r\n        <p-column field=\"brand\" header=\"Brand\" sortable=\"true\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\" sortable=\"true\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\" sortable=\"true\"></p-column>\r\n        <p-column field=\"vin\" header=\"Vin\" sortable=\"true\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablerowgroupdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablerowgroupdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableRowGroupDemo implements OnInit &#123;\r\n\r\n    cars1: Car[];\r\n\r\n    cars2: Car[];\r\n\r\n    cars3: Car[];\r\n\r\n    constructor(private carService: CarService) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsMedium().then(cars => this.cars1 = cars);\r\n        this.carService.getCarsMedium().then(cars => this.cars2 = cars);\r\n        this.carService.getCarsMedium().then(cars => this.cars3 = cars);\r\n    &#125;\r\n\r\n    calculateGroupTotal(brand: string) &#123;\r\n        let total = 0;\r\n\r\n        if(this.cars1) &#123;\r\n            for(let car of this.cars1) &#123;\r\n                if(car.brand === brand) &#123;\r\n                    total += car.price;\r\n                &#125;\r\n            &#125;\r\n        &#125;\r\n\r\n        return total;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablerowgroupdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablerowgroupdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars1\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" expandableRowGroups=\"true\"\r\n        [sortableRowGroup]=\"false\"&gt;\r\n    &lt;p-header&gt;Toggleable Row Groups with Footers&lt;/p-header&gt;\r\n    &lt;ng-template pTemplate=\"rowgroupheader\" let-rowData&gt;&#123;&#123;rowData['brand']&#125;&#125;&lt;/ng-template&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"price\" header=\"Price\"&gt;\r\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;span&gt;&#123;&#123;car[col.field] | currency:'USD':'symbol':'.0-0'&#125;&#125;&lt;/span&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;ng-template pTemplate=\"rowgroupfooter\" let-car&gt;\r\n        &lt;td colspan=\"3\" style=\"text-align:right\"&gt;Total Price&lt;/td&gt;\r\n        &lt;td&gt;&#123;&#123;calculateGroupTotal(car['brand']) | currency:'USD':'symbol':'.0-0' &#125;&#125;&lt;/td&gt;\r\n    &lt;/ng-template&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dataTable [value]=\"cars2\" sortField=\"brand\" rowGroupMode=\"subheader\" groupField=\"brand\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\r\n    &lt;p-header&gt;Subheader&lt;/p-header&gt;\r\n    &lt;ng-template pTemplate=\"rowgroupheader\" let-rowData&gt;&#123;&#123;rowData['brand']&#125;&#125;&lt;/ng-template&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dataTable [value]=\"cars3\" sortField=\"brand\" rowGroupMode=\"rowspan\" [style]=\"&#123;'margin-top':'50px'&#125;\"&gt;\r\n    &lt;p-header&gt;RowSpan&lt;/p-header&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" sortable=\"true\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablerowgroupdemo.ts":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablerowgroupdemo.ts ***!
  \************************************************************************/
/*! exports provided: DataTableRowGroupDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRowGroupDemo", function() { return DataTableRowGroupDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableRowGroupDemo = /** @class */ (function () {
    function DataTableRowGroupDemo(carService) {
        this.carService = carService;
    }
    DataTableRowGroupDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars3 = cars; });
    };
    DataTableRowGroupDemo.prototype.calculateGroupTotal = function (brand) {
        var total = 0;
        if (this.cars1) {
            for (var _i = 0, _a = this.cars1; _i < _a.length; _i++) {
                var car = _a[_i];
                if (car.brand === brand) {
                    total += car.price;
                }
            }
        }
        return total;
    };
    DataTableRowGroupDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablerowgroupdemo.html */ "./src/app/showcase/components/datatable/datatablerowgroupdemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableRowGroupDemo);
    return DataTableRowGroupDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablescrolldemo.html":
/*!************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablescrolldemo.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - Scroll</span>\r\n        <span>Data scrolling with fixed header is available horizontally, vertically or both. ScrollHeight and ScrollWidth values can either\r\n        be fixed pixels or percentages. Virtual Scrolling mode is available to deal with large datasets by loading data on demand during scrolling. \r\n        In additon certain columns and rows can be fixed as well. </span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-dataTable [value]=\"cars\" scrollable=\"true\" scrollHeight=\"200px\">\r\n        <p-header>Vertical</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n    \r\n    <p-dataTable [value]=\"carsLarge\" scrollable=\"true\" scrollHeight=\"200px\" [rows]=\"20\" virtualScroll=\"virtualScroll\" [style]=\"{'margin-top':'30px'}\" \r\n        [lazy]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\" [loading]=\"loading\">\r\n        <p-header>Virtual Scrolling - 250K Rows</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n\r\n    <p-dataTable [value]=\"cars\" scrollable=\"true\" scrollHeight=\"200px\" scrollWidth=\"600px\" [style]=\"{'margin-top':'30px'}\">\r\n        <p-header>Vertical and Horizontal</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\" [style]=\"{'width':'250px'}\"></p-column>\r\n    </p-dataTable>\r\n    \r\n    <p-dataTable [value]=\"cars\" [frozenValue]=\"frozenCars\" scrollable=\"true\" scrollHeight=\"200px\" [style]=\"{'margin-top':'30px'}\">\r\n        <p-header>Frozen Rows</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n    \r\n    <p-dataTable [value]=\"cars\" scrollable=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\" unfrozenWidth=\"600px\" [style]=\"{'margin-top':'30px'}\">\r\n        <p-header>Frozen Columns</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\" [style]=\"{'width':'200px'}\" frozen=\"true\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\" [style]=\"{'width':'250px'}\"></p-column>\r\n    </p-dataTable>\r\n    \r\n    <p-dataTable [value]=\"cars\" [frozenValue]=\"frozenCars\" scrollable=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\" unfrozenWidth=\"600px\" [style]=\"{'margin-top':'30px'}\">\r\n        <p-header>Frozen Rows and Columns</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\" [style]=\"{'width':'200px'}\" frozen=\"true\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\" [style]=\"{'width':'250px'}\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\" [style]=\"{'width':'250px'}\"></p-column>\r\n    </p-dataTable>\r\n    \r\n    <p-dataTable [value]=\"sales\" scrollable=\"true\" scrollHeight=\"200px\" frozenWidth=\"300px\" unfrozenWidth=\"400px\" [style]=\"{'margin-top':'30px'}\">\r\n        <p-header>Column Group and Frozen Columss</p-header>\r\n        <p-headerColumnGroup frozen=\"true\">\r\n            <p-row>\r\n                <p-column header=\"Brand\" rowspan=\"2\"  [style]=\"{'width':'300px', height:'56px'}\"></p-column>\r\n            </p-row>\r\n        </p-headerColumnGroup>\r\n        \r\n        <p-headerColumnGroup>\r\n            <p-row>\r\n                <p-column header=\"Last Year\" colspan=\"2\" [style]=\"{'width':'250px'}\" ></p-column>\r\n                <p-column header=\"This Year\" colspan=\"2\" [style]=\"{'width':'250px'}\"></p-column>\r\n            </p-row>\r\n            <p-row>\r\n                <p-column header=\"Last Year\" [style]=\"{'width':'125px'}\"></p-column>\r\n                <p-column header=\"This Year\" [style]=\"{'width':'125px'}\"></p-column>\r\n                <p-column header=\"Last Year\" [style]=\"{'width':'125px'}\"></p-column>\r\n                <p-column header=\"This Year\" [style]=\"{'width':'125px'}\"></p-column>\r\n            </p-row>\r\n        </p-headerColumnGroup>\r\n        \r\n        <p-column field=\"brand\" [style]=\"{'width':'200px'}\" frozen=\"true\"></p-column>\r\n        <p-column field=\"lastYearSale\" [style]=\"{'width':'125px'}\"></p-column>\r\n        <p-column field=\"thisYearSale\" [style]=\"{'width':'125px'}\"></p-column>\r\n        <p-column field=\"lastYearProfit\" [style]=\"{'width':'125px'}\"></p-column>\r\n        <p-column field=\"thisYearProfit\" [style]=\"{'width':'125px'}\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablescrolldemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablescrolldemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableScrollDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n    \r\n    frozenCars: Car[];\r\n    \r\n    carsLarge: Car[];\r\n    \r\n    totalRecords: number;\r\n    \r\n    sales: any[];\r\n    \r\n    loading: boolean;\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.loading = true;\r\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\r\n        this.frozenCars = [\r\n            &#123;\"brand\": \"BMW\", \"year\": 2013, \"color\": \"Grey\", \"vin\": \"fh2uf23\"&#125;,\r\n            &#123;\"brand\": \"Chevrolet\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"4525g23\"&#125;\r\n        ];\r\n        \r\n        this.sales = [\r\n            &#123;brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'&#125;,\r\n            &#123;brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'&#125;,\r\n            &#123;brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'&#125;,\r\n            &#123;brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'&#125;,\r\n            &#123;brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'&#125;,\r\n            &#123;brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'&#125;,\r\n            &#123;brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'&#125;,\r\n            &#123;brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'&#125;,\r\n            &#123;brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'&#125;,\r\n            &#123;brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'&#125;\r\n        ];\r\n        \r\n        this.totalRecords = 250000;\r\n    &#125;\r\n    \r\n    loadCarsLazy(event: LazyLoadEvent) &#123;\r\n        this.loading = true;\r\n        \r\n        //for demo purposes keep loading the same dataset \r\n        //in a real production application, this data should come from server by building the query with LazyLoadEvent options \r\n        setTimeout(() => &#123;\r\n            this.loading = false;\r\n            this.carsLarge = [\r\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first&#125;,\r\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 1&#125;,\r\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 2&#125;,\r\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 3&#125;,\r\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 4&#125;,\r\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 5&#125;,\r\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 6&#125;,\r\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 7&#125;,\r\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 8&#125;,\r\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 9&#125;,\r\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first + 10&#125;,\r\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 11&#125;,\r\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 12&#125;,\r\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 13&#125;,\r\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 14&#125;,\r\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 15&#125;,\r\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 16&#125;,\r\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 17&#125;,\r\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 18&#125;,\r\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 19&#125;,\r\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first + 20&#125;,\r\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 21&#125;,\r\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 22&#125;,\r\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 23&#125;,\r\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 24&#125;,\r\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 25&#125;,\r\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 26&#125;,\r\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 27&#125;,\r\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 28&#125;,\r\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 29&#125;,\r\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first + 30&#125;,\r\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 31&#125;,\r\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 32&#125;,\r\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 33&#125;,\r\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 34&#125;,\r\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 35&#125;,\r\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 36&#125;,\r\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 37&#125;,\r\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 38&#125;,\r\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 39&#125;\r\n            ];  \r\n        &#125;, 2000);    \r\n    &#125;\r\n    \r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablescrolldemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablescrolldemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-dataTable [value]=\"cars\" scrollable=\"true\" scrollHeight=\"200px\"&gt;\r\n    &lt;p-header&gt;Vertical&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dataTable [value]=\"carsLarge\" scrollable=\"true\" scrollHeight=\"200px\" [rows]=\"20\" virtualScroll=\"virtualScroll\" [style]=\"&#123;'margin-top':'30px'&#125;\" \r\n    [lazy]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\" [loading]=\"loading\"&gt;\r\n    &lt;p-header&gt;Virtual Scrolling - 250K Rows&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dataTable [value]=\"cars\" scrollable=\"true\"  scrollHeight=\"200px\" scrollWidth=\"600px\" [style]=\"&#123;'margin-top':'30px'&#125;\"&gt;\r\n    &lt;p-header&gt;Vertical and Horizontal&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dataTable [value]=\"cars\" [frozenValue]=\"frozenCars\" scrollable=\"true\" scrollHeight=\"200px\" [style]=\"&#123;'margin-top':'30px'&#125;\"&gt;\r\n    &lt;p-header&gt;Frozen Rows&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dataTable [value]=\"cars\" scrollable=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\" unfrozenWidth=\"600px\" [style]=\"&#123;'margin-top':'30px'&#125;\"&gt;\r\n    &lt;p-header&gt;Frozen Columns&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" [style]=\"&#123;'width':'250px'&#125;\" frozen=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dataTable [value]=\"cars\" [frozenValue]=\"frozenCars\" scrollable=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\" unfrozenWidth=\"600px\" [style]=\"&#123;'margin-top':'30px'&#125;\"&gt;\r\n    &lt;p-header&gt;Frozen Rows and Columns&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" [style]=\"&#123;'width':'250px'&#125;\" frozen=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [style]=\"&#123;'width':'250px'&#125;\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;p-dataTable [value]=\"sales\" scrollable=\"true\" scrollHeight=\"200px\" frozenWidth=\"300px\" unfrozenWidth=\"400px\" [style]=\"&#123;'margin-top':'30px'}\"&gt;\r\n    &lt;p-header&gt;Column Group and Frozen Columss&lt;/p-header&gt;\r\n    &lt;p-headerColumnGroup frozen=\"true\"&gt;\r\n        &lt;p-row&gt;\r\n            &lt;p-column header=\"Brand\" rowspan=\"2\"  [style]=\"&#123;'width':'300px', height:'56px'}\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-row&gt;\r\n    &lt;/p-headerColumnGroup&gt;\r\n    \r\n    &lt;p-headerColumnGroup&gt;\r\n        &lt;p-row&gt;\r\n            &lt;p-column header=\"Last Year\" colspan=\"2\" [style]=\"&#123;'width':'250px'}\" &gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"This Year\" colspan=\"2\" [style]=\"&#123;'width':'250px'}\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-row&gt;\r\n        &lt;p-row&gt;\r\n            &lt;p-column header=\"Last Year\" [style]=\"&#123;'width':'125px'&#125;\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"This Year\" [style]=\"&#123;'width':'125px'&#125;\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"Last Year\" [style]=\"&#123;'width':'125px'&#125;\"&gt;&lt;/p-column&gt;\r\n            &lt;p-column header=\"This Year\" [style]=\"&#123;'width':'125px'&#125;\"&gt;&lt;/p-column&gt;\r\n        &lt;/p-row&gt;\r\n    &lt;/p-headerColumnGroup&gt;\r\n    \r\n    &lt;p-column field=\"brand\" [style]=\"&#123;'width':'200px'&#125;\" frozen=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"lastYearSale\" [style]=\"&#123;'width':'125px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"thisYearSale\" [style]=\"&#123;'width':'125px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"lastYearProfit\" [style]=\"&#123;'width':'125px'&#125;\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"thisYearProfit\" [style]=\"&#123;'width':'125px'}\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablescrolldemo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablescrolldemo.ts ***!
  \**********************************************************************/
/*! exports provided: DataTableScrollDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableScrollDemo", function() { return DataTableScrollDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableScrollDemo = /** @class */ (function () {
    function DataTableScrollDemo(carService) {
        this.carService = carService;
    }
    DataTableScrollDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.frozenCars = [
            { "brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23" },
            { "brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23" }
        ];
        this.sales = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
        this.totalRecords = 250000;
    };
    DataTableScrollDemo.prototype.loadCarsLazy = function (event) {
        var _this = this;
        this.loading = true;
        //for demo purposes keep loading the same dataset 
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options 
        setTimeout(function () {
            _this.loading = false;
            _this.carsLarge = [
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 1 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 2 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 3 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 4 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 5 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 6 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 7 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 8 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 9 },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 10 },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 11 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 12 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 13 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 14 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 15 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 16 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 17 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 18 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 19 },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 20 },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 21 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 22 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 23 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 24 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 25 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 26 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 27 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 28 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 29 },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 30 },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 31 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 32 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 33 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 34 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 35 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 36 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 37 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 38 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 39 }
            ];
        }, 2000);
    };
    DataTableScrollDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablescrolldemo.html */ "./src/app/showcase/components/datatable/datatablescrolldemo.html"),
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableScrollDemo);
    return DataTableScrollDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatableselectiondemo.html":
/*!***************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatableselectiondemo.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - <span class=\"subitem\">Selection</span></span>\r\n        <span>DataTable provides single and multiple selection modes on click of a row. Selected rows are bound to the selection property \r\n            and onRowSelect-onRowUnselect events are provided as optional callbacks. In addition built-in radio button and checkbox based selections \r\n            are available as alternatives.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n\r\n    <h3 class=\"first\">Single</h3>\r\n    <p>In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.</p>\r\n    <p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar1\" dataKey=\"vin\">\r\n        <p-header>Single Selection</p-header>\r\n        <p-footer><div style=\"text-align: left\">Selected Car: {{selectedCar1 ? selectedCar1.vin + ' - ' + selectedCar1.brand + ' - ' + selectedCar1.year + ' - ' + selectedCar1.color: 'none'}}</div></p-footer>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n\r\n    <h3>Multiple</h3>\r\n    <p>In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices\r\n    metakey or shiftkey are required.</p>\r\n    <p-dataTable [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars1\" dataKey=\"vin\">\r\n        <p-header>Multiple Selection</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n        <p-footer>\r\n            <ul>\r\n                <li *ngFor=\"let car of selectedCars1\" style=\"text-align: left\">{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}</li>\r\n            </ul>\r\n        </p-footer>\r\n    </p-dataTable>\r\n\r\n    <h3>Events</h3>\r\n    <p>DataTable provides onRowSelect and onRowUnselect as optional callbacks.</p>\r\n    <p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar2\" (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\" dataKey=\"vin\">\r\n        <p-header>Selection with Events</p-header>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n    \r\n    <h3>RadioButton</h3>\r\n    <p>Single selection can also be handled using radio buttons by enabling the selectionMode property of column as \"single\".</p>\r\n    <p-dataTable [value]=\"cars\" [(selection)]=\"selectedCar3\" dataKey=\"vin\">\r\n        <p-header>Single Selection</p-header>\r\n        <p-footer><div style=\"text-align: left\">Selected Car: {{selectedCar3 ? selectedCar3.vin + ' - ' + selectedCar3.brand + ' - ' + selectedCar3.year + ' - ' + selectedCar3.color: 'none'}}</div></p-footer>\r\n        <p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"single\"></p-column>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n    </p-dataTable>\r\n    \r\n    <h3>Checkbox</h3>\r\n    <p>Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as \"multiple\".</p>\r\n    <p-dataTable [value]=\"cars\" [(selection)]=\"selectedCars2\" dataKey=\"vin\">\r\n        <p-header>Checkbox Selection</p-header>\r\n        <p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"multiple\"></p-column>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n        <p-footer>\r\n            <ul>\r\n                <li *ngFor=\"let car of selectedCars2\" style=\"text-align: left\">{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}</li>\r\n            </ul>\r\n        </p-footer>\r\n    </p-dataTable>\r\n\r\n    <h3>Checkbox with Paging</h3>\r\n    <p>\r\n        When using checkboxes for multiple selection with paging and clicking the header checkbox, by default, items on \r\n        all other pages will be deselected and only the current page's items will be toggled. Often, the more desired \r\n        approach is to toggle all items across all pages. This can be accomplished by setting the \r\n        \"headerCheckboxToggleAllPages\" property to \"true\" on your paged DataTable. Notice how the header checkbox only \r\n        stays checked when all items across all pages are selected. \r\n    </p>\r\n    <p-dataTable [value]=\"cars\" [(selection)]=\"selectedCars3\" dataKey=\"vin\" [paginator]=\"true\" [rows]=\"5\" [headerCheckboxToggleAllPages]=\"true\">\r\n        <p-header>Checkbox Multiple Selection with Paging</p-header>\r\n        <p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"multiple\"></p-column>\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\"></p-column>\r\n        <p-footer>\r\n            <ul>\r\n                <li *ngFor=\"let car of selectedCars3\" style=\"text-align: left\">{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}</li>\r\n            </ul>\r\n        </p-footer>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatableselectiondemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableselectiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableSelectionDemo implements OnInit &#123;\r\n\r\n    msgs: Message[];\r\n\r\n    cars: Car[];\r\n\r\n    selectedCar1: Car;\r\n\r\n    selectedCar2: Car;\r\n    \r\n    selectedCar3: Car;\r\n\r\n    selectedCars1: Car[];\r\n    \r\n    selectedCars2: Car[];\r\n    \r\n    selectedCars3: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n\r\n    onRowSelect(event) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand&#125;);\r\n    &#125;\r\n\r\n    onRowUnselect(event) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>            \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatableselectiondemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatableselectiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;h3 class=\"first\"&gt;Single&lt;/h3&gt;\r\n&lt;p&gt;In single mode, a row is selected on click event of a row. If the row is already selected then the row gets unselected.&lt;/p&gt;\r\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar1\" dataKey=\"vin\"&gt;\r\n    &lt;p-header&gt;Single Selection&lt;/p-header&gt;\r\n    &lt;p-footer&gt;&lt;div style=\"text-align: left\"&gt;Selected Car: {{selectedCar1 ? selectedCar1.vin + ' - ' + selectedCar1.brand + ' - ' + selectedCar1.year + ' - ' + selectedCar1.color: 'none'}}&lt;/div&gt;&lt;/p-footer&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;h3&gt;Multiple&lt;/h3&gt;\r\n&lt;p&gt;&lt;/p&gt;\r\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\" dataKey=\"vin\"&gt;\r\n    &lt;p-header&gt;Multiple Selection&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;p-footer&gt;\r\n        &lt;ul&gt;\r\n            &lt;li *ngFor=\"let car of selectedCars\" style=\"text-align: left\"&gt;{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}&lt;/li&gt;\r\n        &lt;/ul&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;h3&gt;Events&lt;/h3&gt;\r\n&lt;p&gt;DataTable provides onRowSelect and onRowUnselect as optional callbacks.&lt;/p&gt;\r\n&lt;p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar2\" (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\" dataKey=\"vin\"&gt;\r\n    &lt;p-header&gt;Selection with Events&lt;/p-header&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;h3&gt;RadioButton&lt;/h3&gt;\r\n&lt;p&gt;Single selection can also be handled using radio buttons by enabling the selectionMode property of column as \"single\".&lt;/p&gt;\r\n&lt;p-dataTable [value]=\"cars\" [(selection)]=\"selectedCar3\" dataKey=\"vin\"&gt;\r\n    &lt;p-header&gt;Single Selection&lt;/p-header&gt;\r\n    &lt;p-footer&gt;&lt;div style=\"text-align: left\"&gt;Selected Car: {{selectedCar3 ? selectedCar3.vin + ' - ' + selectedCar3.brand + ' - ' + selectedCar3.year + ' - ' + selectedCar3.color: 'none'}}&lt;/div&gt;&lt;/p-footer&gt;\r\n    &lt;p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"single\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;h3&gt;Checkbox&lt;/h3&gt;\r\n&lt;p&gt;Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as \"multiple\".&lt;/p&gt;\r\n&lt;p-dataTable [value]=\"cars\" [(selection)]=\"selectedCars2\" dataKey=\"vin\"&gt;\r\n    &lt;p-header&gt;Checkbox Selection&lt;/p-header&gt;\r\n    &lt;p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"multiple\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;p-footer&gt;\r\n        &lt;ul&gt;\r\n            &lt;li *ngFor=\"let car of selectedCars2\" style=\"text-align: left\"&gt;{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}&lt;/li&gt;\r\n        &lt;/ul&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-dataTable&gt;\r\n    \r\n&lt;h3&gt;Checkbox with Paging&lt;/h3&gt;\r\n&lt;p&gt; \r\n    When using checkboxes for multiple selection with paging and clicking the header checkbox, by default, items on all \r\n    other pages will be deselected and only the current page's items will be toggled. Often, the more desired approach\r\n    is to toggle all items across all pages. This can be accomplished by setting the \r\n    \"headerCheckboxToggleAllPages\" property to \"true\" on your paged DataTable. Notice how the header\r\n    checkbox only stays checked when all items across all pages are selected. \r\n&lt;/p&gt;\r\n&lt;p-dataTable [value]=\"cars\" [(selection)]=\"selectedCars3\" dataKey=\"vin\" [paginator]=\"true\" [rows]=\"5\" [headerCheckboxToggleAllPages]=\"true\"&gt;\r\n    &lt;p-header&gt;Checkbox Multiple Selection with Paging&lt;/p-header&gt;\r\n    &lt;p-column [style]=\"&#123;'width':'38px'&#125;\" selectionMode=\"multiple\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;&lt;/p-column&gt;\r\n    &lt;p-footer&gt;\r\n        &lt;ul&gt;\r\n            &lt;li *ngFor=\"let car of selectedCars3\" style=\"text-align: left\"&gt;{{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}&lt;/li&gt;\r\n        &lt;/ul&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatableselectiondemo.ts":
/*!*************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatableselectiondemo.ts ***!
  \*************************************************************************/
/*! exports provided: DataTableSelectionDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSelectionDemo", function() { return DataTableSelectionDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableSelectionDemo = /** @class */ (function () {
    function DataTableSelectionDemo(carService) {
        this.carService = carService;
    }
    DataTableSelectionDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DataTableSelectionDemo.prototype.onRowSelect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand });
    };
    DataTableSelectionDemo.prototype.onRowUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand });
    };
    DataTableSelectionDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatableselectiondemo.html */ "./src/app/showcase/components/datatable/datatableselectiondemo.html"),
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableSelectionDemo);
    return DataTableSelectionDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablesortdemo.html":
/*!**********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablesortdemo.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - <span class=\"orange\">Sort</span></span>\r\n        <span>Simply enabling sortable property at column object is enough to make a column sortable. For multiple sorting\r\n        use metakey.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <h3 class=\"first\">Single Column</h3>\r\n    <p-dataTable [value]=\"cars1\" [sortField]=\"sortF\" [sortOrder]=\"sortO\" (onSort)=\"changeSort($event)\">\r\n        <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\r\n      <p-footer>\r\n        <button type=\"button\" label=\"Sort by Year\" (click)=\"changeSort($event)\" pButton [ngStyle]=\"{'display':'flex'}\"></button>\r\n      </p-footer>\r\n    </p-dataTable>\r\n\r\n    <h3>Multiple Columns</h3>\r\n    <p-dataTable [value]=\"cars2\" sortMode=\"multiple\">\r\n        <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatablesortdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablesortdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableSortDemo implements OnInit &#123;\r\n\r\n    cars1: Car[];\r\n\r\n    cars2: Car[];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\r\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\r\n    &#125;\r\n\r\n    changeSort(event) &#123;\r\n        if (!event.order) &#123;\r\n          this.sortF = 'year';\r\n        &#125; else &#123;\r\n          this.sortF = event.field;\r\n        &#125;\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatablesortdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatablesortdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;h3 class=\"first\"&gt;Single Column&lt;/h3&gt;\r\n&lt;p-dataTable [value]=\"cars1\" [sortField]=\"sortF\" [sortOrder]=\"sortO\" (onSort)=\"changeSort($event)\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-footer&gt;\r\n      &lt;button type=\"button\" label=\"Sort by Year\" (click)=\"changeSort($event)\" pButton&gt;&lt;/button&gt;\r\n    &lt;/p-footer&gt;\r\n&lt;/p-dataTable&gt;\r\n\r\n&lt;h3&gt;Multiple Columns&lt;/h3&gt;\r\n&lt;p-dataTable [value]=\"cars2\" sortMode=\"multiple\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\" [sortable]=\"true\"&gt;&lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablesortdemo.ts":
/*!********************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablesortdemo.ts ***!
  \********************************************************************/
/*! exports provided: DataTableSortDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSortDemo", function() { return DataTableSortDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableSortDemo = /** @class */ (function () {
    function DataTableSortDemo(carService) {
        this.carService = carService;
        this.sortO = 1;
        this.sortF = '';
    }
    DataTableSortDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsSmall().then(function (cars) { return _this.cars2 = cars; });
    };
    DataTableSortDemo.prototype.changeSort = function (event) {
        if (!event.order) {
            this.sortF = 'year';
        }
        else {
            this.sortF = event.field;
        }
    };
    DataTableSortDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatablesortdemo.html */ "./src/app/showcase/components/datatable/datatablesortdemo.html")
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableSortDemo);
    return DataTableSortDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatablesubmenu.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatablesubmenu.ts ***!
  \*******************************************************************/
/*! exports provided: DataTableSubmenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSubmenu", function() { return DataTableSubmenu; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataTableSubmenu = /** @class */ (function () {
    function DataTableSubmenu() {
    }
    DataTableSubmenu = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datatable-demos',
            template: "\n        <div class=\"content-section content-submenu ui-helper-clearfix\">\n            <ul>\n                <li><a [routerLink]=\"['/datatable']\">&#9679; Basic</a></li>\n                <li><a [routerLink]=\"['/datatable/facets']\">&#9679; Facets</a></li>\n                <li><a [routerLink]=\"['/datatable/templating']\">&#9679; Templating</a></li>\n                <li><a [routerLink]=\"['/datatable/colgroup']\">&#9679; ColGroup</a></li>\n                <li><a [routerLink]=\"['/datatable/rowgroup']\">&#9679; RowGroup</a></li>\n                <li><a [routerLink]=\"['/datatable/paginator']\">&#9679; Paginator</a></li>\n                <li><a [routerLink]=\"['/datatable/sort']\">&#9679; Sort</a></li>\n                <li><a [routerLink]=\"['/datatable/filter']\">&#9679; Filter</a></li>\n                <li><a [routerLink]=\"['/datatable/selection']\">&#9679; Selection</a></li>\n                <li><a [routerLink]=\"['/datatable/editable']\">&#9679; Editable</a></li>\n                <li><a [routerLink]=\"['/datatable/rowexpansion']\">&#9679; Expand</a></li>\n                <li><a [routerLink]=\"['/datatable/colresize']\">&#9679; Resize</a></li>\n                <li><a [routerLink]=\"['/datatable/colreorder']\">&#9679; Reorder</a></li>\n                <li><a [routerLink]=\"['/datatable/scroll']\">&#9679; Scroll</a></li>\n                <li><a [routerLink]=\"['/datatable/lazy']\">&#9679; Lazy</a></li>\n                <li><a [routerLink]=\"['/datatable/contextmenu']\">&#9679; ContextMenu</a></li>\n                <li><a [routerLink]=\"['/datatable/coltoggler']\">&#9679; ColToggler</a></li>\n                <li><a [routerLink]=\"['/datatable/responsive']\">&#9679; Responsive</a></li>\n                <li><a [routerLink]=\"['/datatable/crud']\">&#9679; Crud</a></li>\n                <li><a [routerLink]=\"['/datatable/export']\">&#9679; Export</a></li>\n            </ul>\n        </div>\n    "
        })
    ], DataTableSubmenu);
    return DataTableSubmenu;
}());



/***/ }),

/***/ "./src/app/showcase/components/datatable/datatabletemplatingdemo.html":
/*!****************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatabletemplatingdemo.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<datatable-demos></datatable-demos>\r\n\r\n<div class=\"content-section introduction\">\r\n    <div>\r\n        <span class=\"feature-title\">DataTable - Templating</span>\r\n        <span>Field data of a corresponding row is displayed as the cell content by default, this can be customized using templating. Similarly,\r\n            custom content can be placed at the header and footer of a column with templating.</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-section implementation\">\r\n    <p-growl [value]=\"msgs\"></p-growl>\r\n\r\n    <p-dataTable [value]=\"cars\">\r\n        <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n        <p-column field=\"year\" header=\"Year\"></p-column>\r\n        <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n        <p-column field=\"color\" header=\"Color\">\r\n            <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                <span [style.color]=\"car[col.field]\">{{car[col.field]}}</span>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column styleClass=\"col-button\">\r\n            <ng-template pTemplate=\"header\">\r\n                <button type=\"button\" pButton icon=\"fa-refresh\"></button>\r\n            </ng-template>\r\n            <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n                <button type=\"button\" pButton (click)=\"selectCar(car)\" icon=\"fa-search\"></button>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<div class=\"content-section documentation\">\r\n    <p-tabView effect=\"fade\">\r\n        <p-tabPanel header=\"datatabletemplatingdemo.ts\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatabletemplatingdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-typescript\" pCode ngNonBindable>\r\nexport class DataTableTemplatingDemo implements OnInit &#123;\r\n\r\n    cars: Car[];\r\n    \r\n    msgs: Message[] = [];\r\n\r\n    constructor(private carService: CarService) &#123; &#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\r\n    &#125;\r\n    \r\n    selectCar(car: Car) &#123;\r\n        this.msgs = [];\r\n        this.msgs.push(&#123;severity:'info', summary:'Car Select', detail:'Vin: ' + car.vin&#125;);\r\n    &#125;\r\n&#125;\r\n</code>\r\n</pre>   \r\n        </p-tabPanel>\r\n\r\n        <p-tabPanel header=\"datatabletemplatingdemo.html\">\r\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datatable/datatabletemplatingdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\r\n                <i class=\"fa fa-github\"></i>\r\n                <span>View on GitHub</span>\r\n            </a>\r\n<pre>\r\n<code class=\"language-markup\" pCode ngNonBindable>\r\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\r\n\r\n&lt;p-dataTable [value]=\"cars\"&gt;\r\n    &lt;p-column field=\"vin\" header=\"Vin\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"year\" header=\"Year\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"brand\" header=\"Brand\"&gt;&lt;/p-column&gt;\r\n    &lt;p-column field=\"color\" header=\"Color\"&gt;\r\n        &lt;ng-template let-col let-car=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;span [style.color]=\"car[col.field]\"&gt;&#123;&#123;car[col.field]&#125;&#125;&lt;/span&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n    &lt;p-column styleClass=\"col-button\"&gt;\r\n        &lt;ng-template pTemplate=\"header\"&gt;\r\n            &lt;button type=\"button\" pButton icon=\"fa-refresh\"&gt;&lt;/button&gt;\r\n        &lt;/ng-template&gt;\r\n        &lt;ng-template let-car=\"rowData\" pTemplate=\"body\"&gt;\r\n            &lt;button type=\"button\" pButton (click)=\"selectCar(car)\" icon=\"fa-search\"&gt;&lt;/button&gt;\r\n        &lt;/ng-template&gt;\r\n    &lt;/p-column&gt;\r\n&lt;/p-dataTable&gt;\r\n</code>\r\n</pre>\r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datatable/datatabletemplatingdemo.ts":
/*!**************************************************************************!*\
  !*** ./src/app/showcase/components/datatable/datatabletemplatingdemo.ts ***!
  \**************************************************************************/
/*! exports provided: DataTableTemplatingDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableTemplatingDemo", function() { return DataTableTemplatingDemo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_carservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/carservice */ "./src/app/showcase/service/carservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableTemplatingDemo = /** @class */ (function () {
    function DataTableTemplatingDemo(carService) {
        this.carService = carService;
        this.msgs = [];
    }
    DataTableTemplatingDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DataTableTemplatingDemo.prototype.selectCar = function (car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Select', detail: 'Vin: ' + car.vin });
    };
    DataTableTemplatingDemo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./datatabletemplatingdemo.html */ "./src/app/showcase/components/datatable/datatabletemplatingdemo.html"),
        }),
        __metadata("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_1__["CarService"]])
    ], DataTableTemplatingDemo);
    return DataTableTemplatingDemo;
}());



/***/ })

}]);
//# sourceMappingURL=components-datatable-datatabledemo-module.js.map