(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_passwordrecovery_passwordrecovery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/passwordrecovery/passwordrecovery.component */ "./src/app/components/passwordrecovery/passwordrecovery.component.ts");
/* harmony import */ var _components_user_workorder_workorder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/workorder/workorder.component */ "./src/app/components/user/workorder/workorder.component.ts");
/* harmony import */ var _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/dashboard/dashboard.component */ "./src/app/components/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/components/location/location.component.ts");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/room/room.component */ "./src/app/components/room/room.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/inventory-item/inventory-item.component */ "./src/app/components/inventory-item/inventory-item.component.ts");
/* harmony import */ var _components_inventory_type_inventory_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/inventory-type/inventory-type.component */ "./src/app/components/inventory-type/inventory-type.component.ts");
/* harmony import */ var _components_maintenance_issue_status_maintenance_issue_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/maintenance-issue-status/maintenance-issue-status.component */ "./src/app/components/maintenance-issue-status/maintenance-issue-status.component.ts");
/* harmony import */ var _components_maintenance_priority_maintenance_priority_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/maintenance-priority/maintenance-priority.component */ "./src/app/components/maintenance-priority/maintenance-priority.component.ts");
/* harmony import */ var _components_maintenance_service_images_maintenance_service_images_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/maintenance-service-images/maintenance-service-images.component */ "./src/app/components/maintenance-service-images/maintenance-service-images.component.ts");
/* harmony import */ var _components_maintenance_service_status_maintenance_service_status_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/maintenance-service-status/maintenance-service-status.component */ "./src/app/components/maintenance-service-status/maintenance-service-status.component.ts");
/* harmony import */ var _components_menu_options_menu_options_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/menu-options/menu-options.component */ "./src/app/components/menu-options/menu-options.component.ts");
/* harmony import */ var _components_purchase_order_status_purchase_order_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/purchase-order-status/purchase-order-status.component */ "./src/app/components/purchase-order-status/purchase-order-status.component.ts");
/* harmony import */ var _components_user_roles_user_roles_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user-roles/user-roles.component */ "./src/app/components/user-roles/user-roles.component.ts");
/* harmony import */ var _components_user_roles_menu_options_mapping_user_roles_menu_options_mapping_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component */ "./src/app/components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component.ts");
/* harmony import */ var _components_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/vendor/vendor.component */ "./src/app/components/vendor/vendor.component.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");
/* harmony import */ var src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/auth.guard */ "./src/app/auth.guard.ts");


























var routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'signin', component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'Home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: 'passwordrecovery', component: _components_passwordrecovery_passwordrecovery_component__WEBPACK_IMPORTED_MODULE_6__["PasswordrecoveryComponent"] },
    { path: 'Dashboard', component: _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'Employee', component: _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'Location', component: _components_location_location_component__WEBPACK_IMPORTED_MODULE_10__["LocationComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'Room', component: _components_room_room_component__WEBPACK_IMPORTED_MODULE_11__["RoomComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'MaintenanceService', component: _components_user_workorder_workorder_component__WEBPACK_IMPORTED_MODULE_7__["WorkorderComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'User', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'InventoryItem', component: _components_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_13__["InventoryItemComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'InventoryType', component: _components_inventory_type_inventory_type_component__WEBPACK_IMPORTED_MODULE_14__["InventoryTypeComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'MaintenanceIssueStatus', component: _components_maintenance_issue_status_maintenance_issue_status_component__WEBPACK_IMPORTED_MODULE_15__["MaintenanceIssueStatusComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'MaintenancePriority', component: _components_maintenance_priority_maintenance_priority_component__WEBPACK_IMPORTED_MODULE_16__["MaintenancePriorityComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'MaintenanceServiceImages', component: _components_maintenance_service_images_maintenance_service_images_component__WEBPACK_IMPORTED_MODULE_17__["MaintenanceServiceImagesComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'MaintenanceServiceStatus', component: _components_maintenance_service_status_maintenance_service_status_component__WEBPACK_IMPORTED_MODULE_18__["MaintenanceServiceStatusComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'MenuOptions', component: _components_menu_options_menu_options_component__WEBPACK_IMPORTED_MODULE_19__["MenuOptionsComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'PurchaseOrderStatus', component: _components_purchase_order_status_purchase_order_status_component__WEBPACK_IMPORTED_MODULE_20__["PurchaseOrderStatusComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'UserRoles', component: _components_user_roles_user_roles_component__WEBPACK_IMPORTED_MODULE_21__["UserRolesComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'UserRolesMenuOptionsMapping', component: _components_user_roles_menu_options_mapping_user_roles_menu_options_mapping_component__WEBPACK_IMPORTED_MODULE_22__["UserRolesMenuOptionsMappingComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'Vendor', component: _components_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_23__["VendorComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'Schedule', component: _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_24__["ScheduleComponent"], canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*hello*/\r\nmat-sidenav-container {\r\n    position: inherit;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztDQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qaGVsbG8qL1xyXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loggedIn == false\" class=\"d-flex justify-content-center\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-3\" style=\"padding-top: 50px;\">\r\n        <div id=\"sigin\" class=\"container-fluid border\">\r\n            <form [formGroup]=\"signinForm\">\r\n                <div class=\"form-group text-center\">\r\n                    <h3 class=\"text-warning\">Handymanworkapp</h3>\r\n                </div>\r\n                <div class=\"form-group text-center\">\r\n                    <label>Sign in to your Account</label>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group mb-2\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\"><i class=\"fas fa-user\"></i></div>\r\n                        </div>\r\n                        <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\r\n                    </div>\r\n                    <div *ngIf=\"signinForm.controls.email.invalid && (signinForm.controls.email.dirty || signinForm.controls.email.touched)\">\r\n                        <small class=\"text-danger\" *ngIf=\"signinForm.controls.email.errors.required\">\r\n                            Email is required.\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group mb-2\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\"><i class=\"fas fa-lock\"></i></div>\r\n                        </div>\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\r\n                    </div>\r\n                    <div *ngIf=\"signinForm.controls.password.invalid && (signinForm.controls.password.dirty || signinForm.controls.password.touched)\">\r\n                        <small class=\"text-danger\" *ngIf=\"signinForm.controls.password.errors.required\">\r\n                            Password is required.\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <a class=\"pointer\" routerLink=\"/passwordrecovery\">Forget password?</a>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-warning btn-block\" (click)=\"signin()\">Sign In</button>\r\n                    <small class=\"text-danger\" *ngIf=\"error != ''\">\r\n                        {{error}}\r\n                    </small>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <a class=\"pointer\" routerLink=\"/signup\">Create account</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<mat-sidenav-container style=\"position: absolute; top: 0;bottom: 0;left: 0;right: 0;margin-top: 47px; padding-right: 5px\" *ngIf=\"loggedIn == true\">\r\n    <mat-sidenav #sidenav mode=\"side\" class=\"bg-dark text-light\">\r\n        <ul class=\"list-group list-group-flush\" style=\"cursor: pointer;\">\r\n            <li class=\"list-group-item border-0 bg-dark text-light\" *ngFor=\"let item of menu\" (click)=\"navigateToPath(item.MenuOptionName)\">{{item.MenuOptionName}}</li>\r\n            <li class=\"list-group-item border-0 bg-dark text-light\" (click)=\"logout()\">Logout</li>\r\n        </ul>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <nav *ngIf=\"loggedIn == true\" class=\"navbar bg-warning fixed-top p-1\">\r\n            <span class=\"btn\" mat-button (click)=\"sidenav.toggle()\"><i class=\"fas fa-bars\"></i></span>\r\n        </nav>\r\n        <div class=\"ml-1 mt-1\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_menuoptions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/menuoptions.service */ "./src/app/services/menuoptions.service.ts");
/* harmony import */ var _services_userrolesmenuoptionsmapping_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/userrolesmenuoptionsmapping.service */ "./src/app/services/userrolesmenuoptionsmapping.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AppComponent = /** @class */ (function () {
    function AppComponent(employeeService, userrolesmenuoptionsmappingService, authService, router, menuoptionsService) {
        this.employeeService = employeeService;
        this.userrolesmenuoptionsmappingService = userrolesmenuoptionsmappingService;
        this.authService = authService;
        this.router = router;
        this.menuoptionsService = menuoptionsService;
        this.title = 'Handymanworkapp';
        this.menu = [];
        this.loggedIn = false;
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
        });
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("userToken") == null) {
        }
        else {
            if (localStorage.getItem("UserId") == null) {
            }
            else {
                var u = localStorage.getItem("UserId");
                this.employeeService.get(u)
                    .subscribe(function (result) {
                    var emp = result;
                    var empId = emp.Id;
                    localStorage.setItem("UserId", empId);
                    _this.loggedIn = true;
                    _this.getMenuItems(emp);
                });
            }
        }
    };
    AppComponent.prototype.navigateToPath = function (url) {
        if (window.innerWidth <= 575) {
            this.sidenav.toggle();
        }
        this.router.navigateByUrl("/" + url);
    };
    AppComponent.prototype.logout = function () {
        this.loggedIn = false;
        this.menu = [];
        this.sidenav.close();
        this.authService.logout();
    };
    AppComponent.prototype.signin = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.signinForm.invalid) {
            return;
        }
        this.loading = true;
        if (this.signinForm.valid) {
            this.authService.login(this.signinForm.controls.email.value, this.signinForm.controls.password.value)
                .subscribe(function (result) {
                _this.loading = false;
                _this.error = "";
                _this.getUser();
                _this.loggedIn = true;
            }, function (err) {
                _this.loading = false;
                _this.error = "Invalid User";
            });
        }
        else {
            this.signinForm.controls["email"].markAsDirty();
            this.signinForm.controls["password"].markAsDirty();
        }
    };
    AppComponent.prototype.getUser = function () {
        var _this = this;
        this.employeeService.listFiltered("Email='" + this.signinForm.controls.email.value + "'")
            .subscribe(function (result) {
            var emp = result[0];
            var empId = emp.Id;
            localStorage.setItem("UserId", empId);
            _this.loggedIn = true;
            var u = localStorage.getItem("UserId");
            _this.getMenuItems(u);
        });
    };
    AppComponent.prototype.getMenuItems = function (emp) {
        var _this = this;
        var menus = [];
        var activemenuIds = "";
        this.menuoptionsService.listFiltered("IsActive=1")
            .subscribe(function (activemenuitems) {
            activemenuitems.forEach(function (activeitem, index) {
                activemenuIds = activemenuIds + "," + activeitem.Id;
            });
            activemenuIds = activemenuIds.substring(1);
            _this.userrolesmenuoptionsmappingService.listFiltered("UserRoleId=" + emp.RoleId + " AND MenuOptionId IN (" + activemenuIds + ")")
                .subscribe(function (menus) {
                _this.menu = menus;
                if (emp.DefaultMenuId != 0) {
                    _this.router.navigateByUrl("/" + emp.DefaultMenuName);
                }
                else {
                    if (window.innerWidth <= 575) {
                        _this.sidenav.toggle();
                    }
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"])
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"], _services_userrolesmenuoptionsmapping_service__WEBPACK_IMPORTED_MODULE_6__["UserrolesmenuoptionsmappingService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_menuoptions_service__WEBPACK_IMPORTED_MODULE_5__["MenuoptionsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-components/shared.module */ "./src/app/shared-components/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_passwordrecovery_passwordrecovery_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/passwordrecovery/passwordrecovery.component */ "./src/app/components/passwordrecovery/passwordrecovery.component.ts");
/* harmony import */ var _components_user_workorder_workorder_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user/workorder/workorder.component */ "./src/app/components/user/workorder/workorder.component.ts");
/* harmony import */ var _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/dashboard/dashboard.component */ "./src/app/components/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_inventoryitem_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/inventoryitem.service */ "./src/app/services/inventoryitem.service.ts");
/* harmony import */ var _services_inventorytype_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/inventorytype.service */ "./src/app/services/inventorytype.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_maintenanceissuestatus_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/maintenanceissuestatus.service */ "./src/app/services/maintenanceissuestatus.service.ts");
/* harmony import */ var _services_maintenancepriority_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/maintenancepriority.service */ "./src/app/services/maintenancepriority.service.ts");
/* harmony import */ var _services_maintenanceservice_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/maintenanceservice.service */ "./src/app/services/maintenanceservice.service.ts");
/* harmony import */ var _services_maintenanceserviceimages_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/maintenanceserviceimages.service */ "./src/app/services/maintenanceserviceimages.service.ts");
/* harmony import */ var _services_menuoptions_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/menuoptions.service */ "./src/app/services/menuoptions.service.ts");
/* harmony import */ var _services_purchaseorder_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/purchaseorder.service */ "./src/app/services/purchaseorder.service.ts");
/* harmony import */ var _services_purchaseorderstatus_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/purchaseorderstatus.service */ "./src/app/services/purchaseorderstatus.service.ts");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _services_userroles_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/userroles.service */ "./src/app/services/userroles.service.ts");
/* harmony import */ var _services_userrolesmenuoptionsmapping_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/userrolesmenuoptionsmapping.service */ "./src/app/services/userrolesmenuoptionsmapping.service.ts");
/* harmony import */ var _services_vendor_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/vendor.service */ "./src/app/services/vendor.service.ts");
/* harmony import */ var _services_maintenanceservicestatus_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/maintenanceservicestatus.service */ "./src/app/services/maintenanceservicestatus.service.ts");
/* harmony import */ var _services_employees_schedule_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/employees-schedule.service */ "./src/app/services/employees-schedule.service.ts");
/* harmony import */ var _services_employees_schedule_week_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/employees-schedule-week.service */ "./src/app/services/employees-schedule-week.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_auth_guard__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! src/app/auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var src_app_auth_interceptor__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! src/app/auth.interceptor */ "./src/app/auth.interceptor.ts");
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/employee/employee.component */ "./src/app/components/employee/employee.component.ts");
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/components/location/location.component.ts");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/room/room.component */ "./src/app/components/room/room.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/inventory-item/inventory-item.component */ "./src/app/components/inventory-item/inventory-item.component.ts");
/* harmony import */ var _components_inventory_type_inventory_type_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/inventory-type/inventory-type.component */ "./src/app/components/inventory-type/inventory-type.component.ts");
/* harmony import */ var _components_maintenance_issue_status_maintenance_issue_status_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/maintenance-issue-status/maintenance-issue-status.component */ "./src/app/components/maintenance-issue-status/maintenance-issue-status.component.ts");
/* harmony import */ var _components_maintenance_priority_maintenance_priority_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/maintenance-priority/maintenance-priority.component */ "./src/app/components/maintenance-priority/maintenance-priority.component.ts");
/* harmony import */ var _components_maintenance_service_images_maintenance_service_images_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/maintenance-service-images/maintenance-service-images.component */ "./src/app/components/maintenance-service-images/maintenance-service-images.component.ts");
/* harmony import */ var _components_maintenance_service_status_maintenance_service_status_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/maintenance-service-status/maintenance-service-status.component */ "./src/app/components/maintenance-service-status/maintenance-service-status.component.ts");
/* harmony import */ var _components_menu_options_menu_options_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/menu-options/menu-options.component */ "./src/app/components/menu-options/menu-options.component.ts");
/* harmony import */ var _components_purchase_order_status_purchase_order_status_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/purchase-order-status/purchase-order-status.component */ "./src/app/components/purchase-order-status/purchase-order-status.component.ts");
/* harmony import */ var _components_user_roles_user_roles_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/user-roles/user-roles.component */ "./src/app/components/user-roles/user-roles.component.ts");
/* harmony import */ var _components_user_roles_menu_options_mapping_user_roles_menu_options_mapping_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component */ "./src/app/components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component.ts");
/* harmony import */ var _components_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/vendor/vendor.component */ "./src/app/components/vendor/vendor.component.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");










 // for FullCalendar!















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
                _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_15__["SigninComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
                _components_passwordrecovery_passwordrecovery_component__WEBPACK_IMPORTED_MODULE_17__["PasswordrecoveryComponent"],
                _components_user_workorder_workorder_component__WEBPACK_IMPORTED_MODULE_18__["WorkorderComponent"],
                _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_42__["EmployeeComponent"],
                _components_location_location_component__WEBPACK_IMPORTED_MODULE_43__["LocationComponent"],
                _components_room_room_component__WEBPACK_IMPORTED_MODULE_44__["RoomComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_45__["HomeComponent"],
                _components_inventory_item_inventory_item_component__WEBPACK_IMPORTED_MODULE_46__["InventoryItemComponent"],
                _components_inventory_type_inventory_type_component__WEBPACK_IMPORTED_MODULE_47__["InventoryTypeComponent"],
                _components_maintenance_issue_status_maintenance_issue_status_component__WEBPACK_IMPORTED_MODULE_48__["MaintenanceIssueStatusComponent"],
                _components_maintenance_priority_maintenance_priority_component__WEBPACK_IMPORTED_MODULE_49__["MaintenancePriorityComponent"],
                _components_maintenance_service_images_maintenance_service_images_component__WEBPACK_IMPORTED_MODULE_50__["MaintenanceServiceImagesComponent"],
                _components_maintenance_service_status_maintenance_service_status_component__WEBPACK_IMPORTED_MODULE_51__["MaintenanceServiceStatusComponent"],
                _components_menu_options_menu_options_component__WEBPACK_IMPORTED_MODULE_52__["MenuOptionsComponent"],
                _components_purchase_order_status_purchase_order_status_component__WEBPACK_IMPORTED_MODULE_53__["PurchaseOrderStatusComponent"],
                _components_user_roles_user_roles_component__WEBPACK_IMPORTED_MODULE_54__["UserRolesComponent"],
                _components_user_roles_menu_options_mapping_user_roles_menu_options_mapping_component__WEBPACK_IMPORTED_MODULE_55__["UserRolesMenuOptionsMappingComponent"],
                _components_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_56__["VendorComponent"],
                _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_57__["ScheduleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["DemoMaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__["FullCalendarModule"]
            ],
            providers: [
                _http_error_handler_service__WEBPACK_IMPORTED_MODULE_20__["HttpErrorHandlerService"],
                _services_employee_service__WEBPACK_IMPORTED_MODULE_21__["EmployeeService"],
                _services_inventoryitem_service__WEBPACK_IMPORTED_MODULE_22__["InventoryitemService"],
                _services_inventorytype_service__WEBPACK_IMPORTED_MODULE_23__["InventorytypeService"],
                _services_location_service__WEBPACK_IMPORTED_MODULE_24__["LocationService"],
                _services_maintenanceissuestatus_service__WEBPACK_IMPORTED_MODULE_25__["MaintenanceissuestatusService"],
                _services_maintenancepriority_service__WEBPACK_IMPORTED_MODULE_26__["MaintenancepriorityService"],
                _services_maintenanceservice_service__WEBPACK_IMPORTED_MODULE_27__["MaintenanceserviceService"],
                _services_maintenanceserviceimages_service__WEBPACK_IMPORTED_MODULE_28__["MaintenanceserviceimagesService"],
                _services_menuoptions_service__WEBPACK_IMPORTED_MODULE_29__["MenuoptionsService"],
                _services_purchaseorder_service__WEBPACK_IMPORTED_MODULE_30__["PurchaseorderService"],
                _services_purchaseorderstatus_service__WEBPACK_IMPORTED_MODULE_31__["PurchaseorderstatusService"],
                _services_room_service__WEBPACK_IMPORTED_MODULE_32__["RoomService"],
                _services_userroles_service__WEBPACK_IMPORTED_MODULE_33__["UserrolesService"],
                _services_userrolesmenuoptionsmapping_service__WEBPACK_IMPORTED_MODULE_34__["UserrolesmenuoptionsmappingService"],
                _services_vendor_service__WEBPACK_IMPORTED_MODULE_35__["VendorService"],
                _services_maintenanceservicestatus_service__WEBPACK_IMPORTED_MODULE_36__["MaintenanceservicestatusService"],
                _auth_service__WEBPACK_IMPORTED_MODULE_39__["AuthService"],
                src_app_auth_guard__WEBPACK_IMPORTED_MODULE_40__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: src_app_auth_interceptor__WEBPACK_IMPORTED_MODULE_41__["AuthInterceptor"],
                    multi: true
                },
                _services_employees_schedule_service__WEBPACK_IMPORTED_MODULE_37__["EmployeeScheduleService"],
                _services_employees_schedule_week_service__WEBPACK_IMPORTED_MODULE_38__["EmployeeScheduleWeekService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("userToken") != null) {
            return true;
        }
        else {
            this.router.navigate(["/Home"]);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/auth.interceptor.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__);





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('No-Auth') == "True") {
            return next.handle(req.clone());
        }
        else {
            if (localStorage.getItem("userToken") != null) {
                var clonereq = req.clone({
                    headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem("userToken"))
                });
                return next.handle(clonereq)
                    .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
                    return result;
                }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                    _this.router.navigateByUrl("/Home");
                    return err;
                }));
            }
            else {
                this.router.navigateByUrl("/Home");
            }
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, router, HttpErrorHandlerService) {
        this.http = http;
        this.router = router;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].token;
        this.handleError = HttpErrorHandlerService.createHandleError('AuthService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('AuthService');
    }
    AuthService.prototype.login = function (email, password) {
        var item = "username=" + email + "&password=" + password + "&grant_type=password";
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded', "No-Auth": 'True' });
        return this.http.post(this.apiUrl, item, { headers: reqHeader })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            localStorage.setItem("userToken", result.access_token);
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('validateFile')));
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('userToken');
        localStorage.removeItem('UserId');
        this.router.navigateByUrl("/Home");
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandlerService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*hello*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmhlbGxvKi8iXX0= */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/admin/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*hello*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypoZWxsbyovIl19 */"

/***/ }),

/***/ "./src/app/components/admin/dashboard/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/dashboard/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/admin/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/admin/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/employee.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/employee/employee.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-cust {\r\n    background: rgb(248, 248, 248);\r\n}\r\n\r\n.container-fluid-top {\r\n    padding: 12px;\r\n    color: rgb(83,85,87);\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1.3em;\r\n    font-weight: 700;\r\n    background: #ffffff;\r\n    border-bottom: 1px solid rgb(230, 230, 230);\r\n}\r\n\r\n.container-content-start {\r\n    margin-bottom: 15px;\r\n    padding: 15px;\r\n    border-top: 1px solid rgb(230, 230, 230);\r\n    border-left: 1px solid rgb(230, 230, 230);\r\n    border-right: 1px solid rgb(230, 230, 230);\r\n    border-bottom: 1px solid rgb(230, 230, 230);\r\n    background: #ffffff;\r\n    border-radius: 5px 5px 0px 0px;\r\n}\r\n\r\n.container-content-mid {\r\n    padding: 15px;\r\n    border: 1px solid rgb(230, 230, 230);\r\n    background: #ffffff;\r\n    border-radius: 0px\r\n}\r\n\r\n.container-content-end {\r\n    margin-bottom: 15px;\r\n    padding: 15px;\r\n    border-bottom: 1px solid rgb(230, 230, 230);\r\n    border-left: 1px solid rgb(230, 230, 230);\r\n    border-right: 1px solid rgb(230, 230, 230);\r\n    background: #ffffff;\r\n    border-radius: 0px 0px 5px 5px;\r\n}\r\n\r\n.btn-remove {\r\n    float: right;\r\n    color: rgb(83,85,87);\r\n}\r\n\r\n.btn-edit {\r\n    float: right;\r\n    padding-right: 20px;\r\n    color: rgb(83,85,87);\r\n}\r\n\r\n#add label {\r\n    font-size: 12px !important;\r\n    margin-bottom: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0NBQ2xDOztBQUVEO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsNENBQTRDO0NBQy9DOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx5Q0FBeUM7SUFDekMsMENBQTBDO0lBQzFDLDJDQUEyQztJQUMzQyw0Q0FBNEM7SUFDNUMsb0JBQW9CO0lBQ3BCLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxxQ0FBcUM7SUFDckMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsNENBQTRDO0lBQzVDLDBDQUEwQztJQUMxQywyQ0FBMkM7SUFDM0Msb0JBQW9CO0lBQ3BCLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLGFBQWE7SUFDYixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUN4Qjs7QUFDRDtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWN1c3Qge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkLXRvcCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYig4Myw4NSw4Nyk7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWNvbnRlbnQtc3RhcnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jb250ZW50LW1pZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweFxyXG59XHJcblxyXG4uY29udGFpbmVyLWNvbnRlbnQtZW5kIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxufVxyXG5cclxuLmJ0bi1yZW1vdmUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJnYig4Myw4NSw4Nyk7XHJcbn1cclxuXHJcbi5idG4tZWRpdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYig4Myw4NSw4Nyk7XHJcbn1cclxuI2FkZCBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/employee/employee.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/employee/employee.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-top pt-2 pr-2\" style=\"margin-left: 35px;\">\r\n    <span class=\"btn btn-sm\">Employee</span>\r\n</div>\r\n<div id=\"employee\" class=\"panel-body parent-tab\">\r\n    <div id=\"list\" class=\"list-pane\">\r\n        <div class=\"card mb-1\" *ngFor=\"let item of employees\">\r\n            <div class=\"card-body p-2\">\r\n                <div ngbDropdown placement=\"bottom-right\" class=\"d-inline-block d-flex float-right\">\r\n                    <button class=\"btn-sm btn btn-outline-secondary\" id=\"dropdownBasic2\" ngbDropdownToggle></button>\r\n                    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\r\n                        <button ngbDropdownItem (click)=\"onedit(item)\">Edit</button>\r\n                        <button ngbDropdownItem (click)=\"ondelete(item)\">Delete</button>\r\n                    </div>\r\n                </div>\r\n                <h6 class=\"workorder-title card-title\">{{item.FirstName}}</h6>\r\n                <p class=\"card-text mb-0\"><span>User:&nbsp; {{item.Email}}</span> ,Password: {{item.Password}}</p>\r\n                <p class=\"card-text mb-0\"><i class=\"fas fa-map-marker-alt\"></i>&nbsp; {{item.LocationName}}&nbsp; <i class=\"fas fa-user\"></i>&nbsp; {{item.RoleName}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"fixed-bottom mb-2 mr-2\">\r\n            <button class=\"btn btn-info float-right\" (click)=\"onadd()\">Add Employee <span class=\"fas fa-plus\"></span></button>\r\n        </div>\r\n    </div>\r\n    <div id=\"add\" class=\"content add-pane pl-1 pr-1\" style=\"display: none;\">\r\n        <form novalidate [formGroup]=\"employeeForm\">\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label col-xs-4\">First Name <small class=\"text-danger\">*</small></label>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group col-xs-12\">\r\n                        <input class=\"form-control\" formControlName=\"FirstName\" />\r\n                    </div>\r\n                    <div *ngIf=\"employeeForm.controls.FirstName.invalid && (employeeForm.controls.FirstName.dirty || employeeForm.controls.FirstName.touched)\">\r\n                        <small class=\"text-danger\" *ngIf=\"employeeForm.controls.FirstName.errors.required\">\r\n                            FirstName is required.\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label col-xs-4\">Last Name </label>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group col-xs-12\">\r\n                        <input class=\"form-control\" formControlName=\"LastName\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label col-xs-4\">Nick Name </label>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group col-xs-12\">\r\n                        <input class=\"form-control\" formControlName=\"NickName\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label col-xs-4\">Mobile </label>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group col-xs-12\">\r\n                        <input class=\"form-control\" formControlName=\"Mobile\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label col-xs-4\">User Name <small class=\"text-danger\">*</small></label>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group col-xs-12\">\r\n                        <input class=\"form-control\" formControlName=\"Email\" />\r\n                    </div>\r\n                    <div *ngIf=\"employeeForm.controls.Email.invalid && (employeeForm.controls.Email.dirty || employeeForm.controls.Email.touched)\">\r\n                        <small class=\"text-danger\" *ngIf=\"employeeForm.controls.Email.errors.required\">\r\n                            Email is required.\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label col-xs-4\">Password <small class=\"text-danger\">*</small></label>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group col-xs-12\">\r\n                        <input class=\"form-control\" formControlName=\"Password\" />\r\n                    </div>\r\n                    <div *ngIf=\"employeeForm.controls.Password.invalid && (employeeForm.controls.Password.dirty || employeeForm.controls.Password.touched)\">\r\n                        <small class=\"text-danger\" *ngIf=\"employeeForm.controls.Password.errors.required\">\r\n                            Password is required.\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label col-xs-4\">Role <small class=\"text-danger\">*</small></label>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group col-xs-12\">\r\n                        <select class=\"form-control\" formControlName=\"RoleId\" (ngModelChange)=\"updateSelectBoxOnList(roles, employeeForm.controls.RoleId.value, employeeForm.controls.RoleName)\">\r\n                            <option *ngFor=\"let item of roles\" value=\"{{item.Id}}\">{{item.Name}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div *ngIf=\"employeeForm.controls.RoleId.invalid && (employeeForm.controls.RoleId.dirty || employeeForm.controls.RoleId.touched)\">\r\n                        <small class=\"text-danger\" *ngIf=\"employeeForm.controls.RoleId.errors.required\">\r\n                            Location is required.\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label col-xs-4\">Location <small class=\"text-danger\">*</small></label>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group col-xs-12\">\r\n                        <select class=\"form-control\" formControlName=\"LocationId\" (ngModelChange)=\"updateSelectBoxOnList(locations, employeeForm.controls.LocationId.value, employeeForm.controls.LocationName)\">\r\n                            <option *ngFor=\"let item of locations\" value=\"{{item.Id}}\">{{item.Name}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div *ngIf=\"employeeForm.controls.LocationId.invalid && (employeeForm.controls.LocationId.dirty || employeeForm.controls.LocationId.touched)\">\r\n                        <small class=\"text-danger\" *ngIf=\"employeeForm.controls.LocationId.errors.required\">\r\n                            Location is required.\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group mb-3\">\r\n                <label class=\"control-label col-xs-4\">Favourite Menu <small class=\"text-danger\">*</small></label>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"input-group col-xs-12\">\r\n                        <select class=\"form-control\" formControlName=\"DefaultMenuId\" (ngModelChange)=\"updateSelectBoxOnList(menus, employeeForm.controls.DefaultMenuId.value, employeeForm.controls.DefaultMenuName)\">\r\n                            <option *ngFor=\"let item of menus\" value=\"{{item.Id}}\">{{item.Name}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div *ngIf=\"employeeForm.controls.DefaultMenuId.invalid && (employeeForm.controls.DefaultMenuId.dirty || employeeForm.controls.DefaultMenuId.touched)\">\r\n                        <small class=\"text-danger\" *ngIf=\"employeeForm.controls.DefaultMenuId.errors.required\">\r\n                            Favourite Menu is required.\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"fixed-top pt-2 pr-2\" style=\"margin-left: 35px;\">\r\n                <button class=\"btn btn-sm btn-info float-right\" (click)=\"add()\" *ngIf=\"action == 'add'\">Save</button>\r\n                <button class=\"btn btn-sm btn-info float-right\" (click)=\"edit()\" *ngIf=\"action == 'edit'\">Save</button>\r\n                <button class=\"btn btn-sm float-right mr-2\" (click)=\"onlist()\">Cancel</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"EmployeeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"EmployeeModalTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"EmployeeModalTitle\">Delete Employee</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p><strong>Are you sure you want to delete <span class=\"text-primary\">{{this.employeeForm.controls.FirstName.value}}</span> profile?</strong></p>\r\n                <p>\r\n                    All information associated to this user profile will be permanently deleted.\r\n                    <span class=\"text-danger\">This operation can not be undone.</span>\r\n                </p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Delete changes</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_menuoptions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/menuoptions.service */ "./src/app/services/menuoptions.service.ts");
/* harmony import */ var _services_userroles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/userroles.service */ "./src/app/services/userroles.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, menuoptionsService, userrolesService, locationService) {
        this.employeeService = employeeService;
        this.menuoptionsService = menuoptionsService;
        this.userrolesService = userrolesService;
        this.locationService = locationService;
        this.employees = [];
        this.roles = [];
        this.locations = [];
        this.menus = [];
        this.action = "";
        this.employeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0),
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            NickName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            Mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            Active: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](true),
            CreatedOnUtc: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            UpdatedOnUtc: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            RoleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            RoleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            LocationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            LocationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            DefaultMenuId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            DefaultMenuName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            DefaultMenuComponent: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            errorMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            errorStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](false),
        });
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.listAll()
            .subscribe(function (r) {
            _this.employees = r;
        });
        this.userrolesService.listAll()
            .subscribe(function (r) {
            _this.roles = r;
        });
        this.locationService.listAll()
            .subscribe(function (r) {
            _this.locations = r;
        });
        this.menuoptionsService.listAll()
            .subscribe(function (r) {
            _this.menus = r;
        });
    };
    EmployeeComponent.prototype.onlist = function () {
        $("#list").show(500);
        $("#add").hide(500);
        this.action = "";
    };
    EmployeeComponent.prototype.onadd = function () {
        this.employeeForm.reset();
        $("#add").show(500);
        $("#list").hide(500);
        this.action = "add";
    };
    EmployeeComponent.prototype.add = function () {
        var _this = this;
        if (this.employeeForm.valid) {
            var item = {
                Id: this.employeeForm.controls["Id"].value,
                FirstName: this.employeeForm.controls["FirstName"].value,
                LastName: this.employeeForm.controls["LastName"].value,
                NickName: this.employeeForm.controls["NickName"].value,
                Mobile: this.employeeForm.controls["Mobile"].value,
                Email: this.employeeForm.controls["Email"].value,
                Password: this.employeeForm.controls["Password"].value,
                Active: this.employeeForm.controls["Active"].value,
                CreatedOnUtc: this.employeeForm.controls["CreatedOnUtc"].value,
                UpdatedOnUtc: this.employeeForm.controls["UpdatedOnUtc"].value,
                RoleId: this.employeeForm.controls["RoleId"].value,
                RoleName: this.employeeForm.controls["RoleName"].value,
                LocationId: this.employeeForm.controls["LocationId"].value,
                LocationName: this.employeeForm.controls["LocationName"].value,
                DefaultMenuId: this.employeeForm.controls["DefaultMenuId"].value,
                DefaultMenuName: this.employeeForm.controls["DefaultMenuName"].value,
                DefaultMenuComponent: this.employeeForm.controls["DefaultMenuComponent"].value,
                errorMessage: this.employeeForm.controls["errorMessage"].value,
                errorStatus: this.employeeForm.controls["errorStatus"].value,
            };
            this.employeeService.create(item)
                .subscribe(function (r) {
                _this.refreshList(r);
            });
        }
        else {
            this.employeeForm.controls["FirstName"].markAsDirty();
            this.employeeForm.controls["Email"].markAsDirty();
            this.employeeForm.controls["Password"].markAsDirty();
            this.employeeForm.controls["RoleId"].markAsDirty();
            this.employeeForm.controls["LocationId"].markAsDirty();
            this.employeeForm.controls["DefaultMenuId"].markAsDirty();
        }
    };
    EmployeeComponent.prototype.onedit = function (emp) {
        this.employeeForm.reset();
        this.action = "edit";
        this.employeeForm.controls["Id"].setValue(emp.Id);
        this.employeeForm.controls["FirstName"].setValue(emp.FirstName);
        this.employeeForm.controls["LastName"].setValue(emp.LastName);
        this.employeeForm.controls["NickName"].setValue(emp.NickName);
        this.employeeForm.controls["Mobile"].setValue(emp.Mobile);
        this.employeeForm.controls["Email"].setValue(emp.Email);
        this.employeeForm.controls["Password"].setValue(emp.Password);
        this.employeeForm.controls["Active"].setValue(emp.Active);
        this.employeeForm.controls["CreatedOnUtc"].setValue(emp.CreatedOnUtc);
        this.employeeForm.controls["UpdatedOnUtc"].setValue(emp.UpdatedOnUtc);
        this.employeeForm.controls["RoleId"].setValue(emp.RoleId);
        this.employeeForm.controls["RoleName"].setValue(emp.RoleName);
        this.employeeForm.controls["LocationId"].setValue(emp.LocationId);
        this.employeeForm.controls["LocationName"].setValue(emp.LocationName);
        this.employeeForm.controls["DefaultMenuId"].setValue(emp.DefaultMenuId);
        this.employeeForm.controls["DefaultMenuName"].setValue(emp.DefaultMenuName);
        this.employeeForm.controls["DefaultMenuComponent"].setValue(emp.DefaultMenuComponent);
        this.employeeForm.controls["errorMessage"].setValue(emp.errorMessage);
        this.employeeForm.controls["errorStatus"].setValue(emp.errorStatus);
        $("#add").show(500);
        $("#list").hide(500);
    };
    EmployeeComponent.prototype.edit = function () {
        var _this = this;
        if (this.employeeForm.valid) {
            var item_1 = {
                Id: this.employeeForm.controls["Id"].value,
                FirstName: this.employeeForm.controls["FirstName"].value,
                LastName: this.employeeForm.controls["LastName"].value,
                NickName: this.employeeForm.controls["NickName"].value,
                Mobile: this.employeeForm.controls["Mobile"].value,
                Email: this.employeeForm.controls["Email"].value,
                Password: this.employeeForm.controls["Password"].value,
                Active: this.employeeForm.controls["Active"].value,
                CreatedOnUtc: this.employeeForm.controls["CreatedOnUtc"].value,
                UpdatedOnUtc: this.employeeForm.controls["UpdatedOnUtc"].value,
                RoleId: this.employeeForm.controls["RoleId"].value,
                RoleName: this.employeeForm.controls["RoleName"].value,
                LocationId: this.employeeForm.controls["LocationId"].value,
                LocationName: this.employeeForm.controls["LocationName"].value,
                DefaultMenuId: this.employeeForm.controls["DefaultMenuId"].value,
                DefaultMenuName: this.employeeForm.controls["DefaultMenuName"].value,
                DefaultMenuComponent: this.employeeForm.controls["DefaultMenuComponent"].value,
                errorMessage: this.employeeForm.controls["errorMessage"].value,
                errorStatus: this.employeeForm.controls["errorStatus"].value,
            };
            this.employeeService.update(item_1)
                .subscribe(function (r) {
                _this.refreshList(item_1);
            });
        }
        else {
            this.employeeForm.controls["FirstName"].markAsDirty();
            this.employeeForm.controls["Email"].markAsDirty();
            this.employeeForm.controls["Password"].markAsDirty();
            this.employeeForm.controls["RoleId"].markAsDirty();
            this.employeeForm.controls["LocationId"].markAsDirty();
            this.employeeForm.controls["DefaultMenuId"].markAsDirty();
        }
    };
    EmployeeComponent.prototype.ondelete = function (emp) {
        this.action = "delete";
        this.employeeForm.controls["Id"].setValue(emp.Id);
        this.employeeForm.controls["FirstName"].setValue(emp.FirstName);
        $("#EmployeeModal").modal("show");
    };
    EmployeeComponent.prototype.delete = function () {
        var _this = this;
        $("#EmployeeModal").modal("hide");
        if (this.employeeForm.controls["Id"].value != null && this.employeeForm.controls["Id"].value != 0 && this.employeeForm.controls["Id"].value != undefined) {
            this.employeeService.delete(this.employeeForm.controls["Id"].value)
                .subscribe(function (r) {
                _this.refreshList(null);
            });
        }
        else {
            alert("hi");
        }
    };
    EmployeeComponent.prototype.refreshList = function (r) {
        var _this = this;
        if (this.action == "add") {
            this.employees.splice(0, 0, r);
            $("#list").show(500);
            $("#add").hide(500);
        }
        if (this.action == "edit") {
            this.employees.forEach(function (item, index) {
                if (item.Id == r.Id) {
                    _this.employees.splice(index, 1, r);
                }
            });
            $("#list").show(500);
            $("#add").hide(500);
        }
        if (this.action == "delete") {
            this.employees.forEach(function (item, index) {
                if (item.Id == _this.employeeForm.controls["Id"].value) {
                    _this.employees.splice(index, 1);
                }
            });
        }
    };
    EmployeeComponent.prototype.updateSelectBoxOnList = function (array, Id, control) {
        var item = array.filter(function (h) { return h.Id == Id; })[0];
        if (item != undefined) {
            control.setValue(item["Name"]);
        }
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/components/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/components/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _services_menuoptions_service__WEBPACK_IMPORTED_MODULE_3__["MenuoptionsService"], _services_userroles_service__WEBPACK_IMPORTED_MODULE_4__["UserrolesService"], _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/inventory-item/inventory-item.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/inventory-item/inventory-item.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LWl0ZW0vaW52ZW50b3J5LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/inventory-item/inventory-item.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/inventory-item/inventory-item.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  inventory-item works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/inventory-item/inventory-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/inventory-item/inventory-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: InventoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryItemComponent", function() { return InventoryItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InventoryItemComponent = /** @class */ (function () {
    function InventoryItemComponent() {
    }
    InventoryItemComponent.prototype.ngOnInit = function () {
    };
    InventoryItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-item',
            template: __webpack_require__(/*! ./inventory-item.component.html */ "./src/app/components/inventory-item/inventory-item.component.html"),
            styles: [__webpack_require__(/*! ./inventory-item.component.css */ "./src/app/components/inventory-item/inventory-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InventoryItemComponent);
    return InventoryItemComponent;
}());



/***/ }),

/***/ "./src/app/components/inventory-type/inventory-type.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/inventory-type/inventory-type.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LXR5cGUvaW52ZW50b3J5LXR5cGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/inventory-type/inventory-type.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/inventory-type/inventory-type.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  inventory-type works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/inventory-type/inventory-type.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/inventory-type/inventory-type.component.ts ***!
  \***********************************************************************/
/*! exports provided: InventoryTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryTypeComponent", function() { return InventoryTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InventoryTypeComponent = /** @class */ (function () {
    function InventoryTypeComponent() {
    }
    InventoryTypeComponent.prototype.ngOnInit = function () {
    };
    InventoryTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-type',
            template: __webpack_require__(/*! ./inventory-type.component.html */ "./src/app/components/inventory-type/inventory-type.component.html"),
            styles: [__webpack_require__(/*! ./inventory-type.component.css */ "./src/app/components/inventory-type/inventory-type.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InventoryTypeComponent);
    return InventoryTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/location/location.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/location/location.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/location/location.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/location/location.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  location works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/location/location.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/location/location.component.ts ***!
  \***********************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/components/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/components/location/location.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/components/maintenance-issue-status/maintenance-issue-status.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/maintenance-issue-status/maintenance-issue-status.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnRlbmFuY2UtaXNzdWUtc3RhdHVzL21haW50ZW5hbmNlLWlzc3VlLXN0YXR1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/maintenance-issue-status/maintenance-issue-status.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/maintenance-issue-status/maintenance-issue-status.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  maintenance-issue-status works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/maintenance-issue-status/maintenance-issue-status.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/maintenance-issue-status/maintenance-issue-status.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MaintenanceIssueStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceIssueStatusComponent", function() { return MaintenanceIssueStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaintenanceIssueStatusComponent = /** @class */ (function () {
    function MaintenanceIssueStatusComponent() {
    }
    MaintenanceIssueStatusComponent.prototype.ngOnInit = function () {
    };
    MaintenanceIssueStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintenance-issue-status',
            template: __webpack_require__(/*! ./maintenance-issue-status.component.html */ "./src/app/components/maintenance-issue-status/maintenance-issue-status.component.html"),
            styles: [__webpack_require__(/*! ./maintenance-issue-status.component.css */ "./src/app/components/maintenance-issue-status/maintenance-issue-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MaintenanceIssueStatusComponent);
    return MaintenanceIssueStatusComponent;
}());



/***/ }),

/***/ "./src/app/components/maintenance-priority/maintenance-priority.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/maintenance-priority/maintenance-priority.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnRlbmFuY2UtcHJpb3JpdHkvbWFpbnRlbmFuY2UtcHJpb3JpdHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/maintenance-priority/maintenance-priority.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/maintenance-priority/maintenance-priority.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  maintenance-priority works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/maintenance-priority/maintenance-priority.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/maintenance-priority/maintenance-priority.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MaintenancePriorityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancePriorityComponent", function() { return MaintenancePriorityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaintenancePriorityComponent = /** @class */ (function () {
    function MaintenancePriorityComponent() {
    }
    MaintenancePriorityComponent.prototype.ngOnInit = function () {
    };
    MaintenancePriorityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintenance-priority',
            template: __webpack_require__(/*! ./maintenance-priority.component.html */ "./src/app/components/maintenance-priority/maintenance-priority.component.html"),
            styles: [__webpack_require__(/*! ./maintenance-priority.component.css */ "./src/app/components/maintenance-priority/maintenance-priority.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MaintenancePriorityComponent);
    return MaintenancePriorityComponent;
}());



/***/ }),

/***/ "./src/app/components/maintenance-service-images/maintenance-service-images.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/maintenance-service-images/maintenance-service-images.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnRlbmFuY2Utc2VydmljZS1pbWFnZXMvbWFpbnRlbmFuY2Utc2VydmljZS1pbWFnZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/maintenance-service-images/maintenance-service-images.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/maintenance-service-images/maintenance-service-images.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  maintenance-service-images works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/maintenance-service-images/maintenance-service-images.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/maintenance-service-images/maintenance-service-images.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MaintenanceServiceImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceServiceImagesComponent", function() { return MaintenanceServiceImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaintenanceServiceImagesComponent = /** @class */ (function () {
    function MaintenanceServiceImagesComponent() {
    }
    MaintenanceServiceImagesComponent.prototype.ngOnInit = function () {
    };
    MaintenanceServiceImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintenance-service-images',
            template: __webpack_require__(/*! ./maintenance-service-images.component.html */ "./src/app/components/maintenance-service-images/maintenance-service-images.component.html"),
            styles: [__webpack_require__(/*! ./maintenance-service-images.component.css */ "./src/app/components/maintenance-service-images/maintenance-service-images.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MaintenanceServiceImagesComponent);
    return MaintenanceServiceImagesComponent;
}());



/***/ }),

/***/ "./src/app/components/maintenance-service-status/maintenance-service-status.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/maintenance-service-status/maintenance-service-status.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnRlbmFuY2Utc2VydmljZS1zdGF0dXMvbWFpbnRlbmFuY2Utc2VydmljZS1zdGF0dXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/maintenance-service-status/maintenance-service-status.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/maintenance-service-status/maintenance-service-status.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  maintenance-service-status works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/maintenance-service-status/maintenance-service-status.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/maintenance-service-status/maintenance-service-status.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MaintenanceServiceStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceServiceStatusComponent", function() { return MaintenanceServiceStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaintenanceServiceStatusComponent = /** @class */ (function () {
    function MaintenanceServiceStatusComponent() {
    }
    MaintenanceServiceStatusComponent.prototype.ngOnInit = function () {
    };
    MaintenanceServiceStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintenance-service-status',
            template: __webpack_require__(/*! ./maintenance-service-status.component.html */ "./src/app/components/maintenance-service-status/maintenance-service-status.component.html"),
            styles: [__webpack_require__(/*! ./maintenance-service-status.component.css */ "./src/app/components/maintenance-service-status/maintenance-service-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MaintenanceServiceStatusComponent);
    return MaintenanceServiceStatusComponent;
}());



/***/ }),

/***/ "./src/app/components/menu-options/menu-options.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/menu-options/menu-options.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1vcHRpb25zL21lbnUtb3B0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/menu-options/menu-options.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/menu-options/menu-options.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  menu-options works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/menu-options/menu-options.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/menu-options/menu-options.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenuOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOptionsComponent", function() { return MenuOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuOptionsComponent = /** @class */ (function () {
    function MenuOptionsComponent() {
    }
    MenuOptionsComponent.prototype.ngOnInit = function () {
    };
    MenuOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-options',
            template: __webpack_require__(/*! ./menu-options.component.html */ "./src/app/components/menu-options/menu-options.component.html"),
            styles: [__webpack_require__(/*! ./menu-options.component.css */ "./src/app/components/menu-options/menu-options.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuOptionsComponent);
    return MenuOptionsComponent;
}());



/***/ }),

/***/ "./src/app/components/passwordrecovery/passwordrecovery.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/passwordrecovery/passwordrecovery.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*hello*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZHJlY292ZXJ5L3Bhc3N3b3JkcmVjb3ZlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZHJlY292ZXJ5L3Bhc3N3b3JkcmVjb3ZlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaGVsbG8qLyJdfQ== */"

/***/ }),

/***/ "./src/app/components/passwordrecovery/passwordrecovery.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/passwordrecovery/passwordrecovery.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\r\n  <div class=\"col-sm-4 col-md-6 col-lg-3\">\r\n    <div id=\"sigin\" class=\"container-fluid border\">\r\n      <form [formGroup]=\"passwordRecoveryForm\">\r\n        <div class=\"form-group text-center\">\r\n          <img style=\"background-color: #555;\" src=\"../../assets/img/logo.jpg\" />\r\n        </div>\r\n        <div class=\"form-group text-center\">\r\n          <label style=\"font-size: x-large; color: orange; font-weight: bold;\">Enter your Email Address</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\"><i class=\"fas fa-user\"></i></div>\r\n            </div>\r\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\r\n          </div>\r\n          <div *ngIf=\"passwordRecoveryForm.controls.email.invalid && (passwordRecoveryForm.controls.email.dirty || passwordRecoveryForm.controls.email.touched)\">\r\n            <small class=\"text-danger\" *ngIf=\"passwordRecoveryForm.controls.email.errors.required\">\r\n              Email is required.\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-warning btn-block\" (click)=\"passwordreset()\">Reset Password</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/passwordrecovery/passwordrecovery.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/passwordrecovery/passwordrecovery.component.ts ***!
  \***************************************************************************/
/*! exports provided: PasswordrecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordrecoveryComponent", function() { return PasswordrecoveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var PasswordrecoveryComponent = /** @class */ (function () {
    function PasswordrecoveryComponent(router) {
        this.router = router;
        this.passwordRecoveryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    PasswordrecoveryComponent.prototype.ngOnInit = function () {
    };
    PasswordrecoveryComponent.prototype.passwordreset = function () {
        this.router.navigate(['/signin']);
    };
    PasswordrecoveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-passwordrecovery',
            template: __webpack_require__(/*! ./passwordrecovery.component.html */ "./src/app/components/passwordrecovery/passwordrecovery.component.html"),
            styles: [__webpack_require__(/*! ./passwordrecovery.component.css */ "./src/app/components/passwordrecovery/passwordrecovery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PasswordrecoveryComponent);
    return PasswordrecoveryComponent;
}());



/***/ }),

/***/ "./src/app/components/purchase-order-status/purchase-order-status.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/purchase-order-status/purchase-order-status.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVyY2hhc2Utb3JkZXItc3RhdHVzL3B1cmNoYXNlLW9yZGVyLXN0YXR1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/purchase-order-status/purchase-order-status.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/purchase-order-status/purchase-order-status.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  purchase-order-status works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/purchase-order-status/purchase-order-status.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/purchase-order-status/purchase-order-status.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PurchaseOrderStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderStatusComponent", function() { return PurchaseOrderStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PurchaseOrderStatusComponent = /** @class */ (function () {
    function PurchaseOrderStatusComponent() {
    }
    PurchaseOrderStatusComponent.prototype.ngOnInit = function () {
    };
    PurchaseOrderStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-order-status',
            template: __webpack_require__(/*! ./purchase-order-status.component.html */ "./src/app/components/purchase-order-status/purchase-order-status.component.html"),
            styles: [__webpack_require__(/*! ./purchase-order-status.component.css */ "./src/app/components/purchase-order-status/purchase-order-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PurchaseOrderStatusComponent);
    return PurchaseOrderStatusComponent;
}());



/***/ }),

/***/ "./src/app/components/room/room.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/room/room.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9vbS9yb29tLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/room/room.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/room/room.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  room works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/room/room.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/room/room.component.ts ***!
  \***************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoomComponent = /** @class */ (function () {
    function RoomComponent() {
    }
    RoomComponent.prototype.ngOnInit = function () {
    };
    RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/components/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.css */ "./src/app/components/room/room.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/components/schedule/schedule.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-day {\r\n    text-align: center;\r\n    padding: 0.185rem 0.25rem;\r\n    display: inline-block;\r\n    height: 2rem;\r\n    width: 2rem;\r\n}\r\n\r\n    .custom-day.focused {\r\n        background-color: #e6e6e6;\r\n    }\r\n\r\n    .custom-day.range, .custom-day:hover {\r\n        background-color: rgb(2, 117, 216);\r\n        color: white;\r\n    }\r\n\r\n    .custom-day.faded {\r\n        background-color: rgba(2, 117, 216, 0.5);\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7Q0FDZjs7SUFFRztRQUNJLDBCQUEwQjtLQUM3Qjs7SUFFRDtRQUNJLG1DQUFtQztRQUNuQyxhQUFhO0tBQ2hCOztJQUVEO1FBQ0kseUNBQXlDO0tBQzVDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1kYXkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG4gICAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIH1cclxuXHJcbiAgICAuY3VzdG9tLWRheS5yYW5nZSwgLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b20tZGF5LmZhZGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xyXG4gICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/schedule/schedule.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"fixed-top pt-2 pr-2\" style=\"margin-left: 35px;\">\r\n    <span class=\"btn btn-sm\">Schedule</span>\r\n    <span class=\"text-success\">{{sucessMessage}}</span>\r\n</div>\r\n<div class=\"fixed-top pt-2 pr-2\" style=\"margin-left: 35px;\">\r\n    <button class=\"btn btn-sm btn-info float-right\" (click)=\"save()\">Save</button>\r\n    <button class=\"btn btn-sm float-right mr-2\" (click)=\"reset()\">Cancel</button>\r\n</div>\r\n<div class=\"pl-3 pr-3\">\r\n    <div class=\"row\">\r\n        <form class=\"form-inline\" novalidate [formGroup]=\"scheduleForm\">\r\n            <div class=\"input-group mb-2\">\r\n                <div class=\"input-group-prepend\">\r\n                    <label class=\"input-group-text\">Employees</label>\r\n                </div>\r\n                <select class=\"custom-select\" formControlName=\"EmployeeId\" (ngModelChange)=\"getEmployeeSchedule()\">\r\n                    <option value=\"0\" selected>Choose...</option>\r\n                    <option value=\"{{item.Id}}\" *ngFor=\"let item of employees\">{{item.FirstName}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"input-group mb-2 ml-1\">\r\n                <div class=\"input-group-prepend\">\r\n                    <label class=\"input-group-text\">Work Period</label>\r\n                </div>\r\n                <input type=\"date\" class=\"form-control\" formControlName=\"StartDate\">\r\n            </div>\r\n            <div class=\"input-group mb-2\">\r\n                <div class=\"input-group-prepend\">\r\n                    <label class=\"input-group-text\">To</label>\r\n                </div>\r\n                <input type=\"date\" class=\"form-control\" formControlName=\"EndDate\">\r\n            </div>\r\n            <div class=\"input-group mb-2 ml-1\" *ngIf=\"!isScheduleAvailable\">\r\n                <button class=\"btn btn-info\" (click)=\"addSchedule()\">Add Schedule</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <div class=\"alert alert-light\" role=\"alert\">\r\n                <label *ngIf=\"scheduleForm.controls.EmployeeId.value == 0\">Please Select Employee</label>\r\n                <label *ngIf=\"scheduleForm.errors\">{{ scheduleForm.errors?.dates | json }}</label>\r\n                <label *ngIf=\"scheduleForm.controls.StartDate.value == '' || scheduleForm.controls.EndDate.value == ''\"> Schedule is not available. Please select Employee and Work Period to add schedule.</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"isScheduleAvailable\">\r\n        <div class=\"row\">\r\n            <div class=\"col table-responsive\">\r\n                <table class=\"table table-sm table-hover\" style=\"min-width: 800px\">\r\n                    <thead>\r\n                        <tr class=\"row\">\r\n                            <th class=\"col-2\">Week</th>\r\n                            <th class=\"col-2\">In</th>\r\n                            <th class=\"col-2\">Out</th>\r\n                            <th class=\"col-2\">In</th>\r\n                            <th class=\"col-2\">Out</th>\r\n                            <th class=\"col-2\">Total Hours</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr class=\"row\">\r\n                            <td class=\"col-2\">Monday</td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.MondayIn1.hour\" (ngModelChange)=\"calDayHours('Monday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.MondayIn1.minute\" (ngModelChange)=\"calDayHours('Monday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.MondayOut1.hour\" (ngModelChange)=\"calDayHours('Monday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.MondayOut1.minute\" (ngModelChange)=\"calDayHours('Monday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.MondayIn2.hour\" (ngModelChange)=\"calDayHours('Monday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.MondayIn2.minute\" (ngModelChange)=\"calDayHours('Monday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.MondayOut2.hour\" (ngModelChange)=\"calDayHours('Monday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.MondayOut2.minute\" (ngModelChange)=\"calDayHours('Monday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">{{eswl.MondayHours | number:'1.1-2' }}</td>\r\n                        </tr>\r\n                        <tr class=\"row\">\r\n                            <td class=\"col-2\">Tuesday</td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.TuesdayIn1.hour\" (ngModelChange)=\"calDayHours('Tuesday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.TuesdayIn1.minute\" (ngModelChange)=\"calDayHours('Tuesday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.TuesdayOut1.hour\" (ngModelChange)=\"calDayHours('Tuesday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.TuesdayOut1.minute\" (ngModelChange)=\"calDayHours('Tuesday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.TuesdayIn2.hour\" (ngModelChange)=\"calDayHours('Tuesday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.TuesdayIn2.minute\" (ngModelChange)=\"calDayHours('Tuesday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.TuesdayOut2.hour\" (ngModelChange)=\"calDayHours('Tuesday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.TuesdayOut2.minute\" (ngModelChange)=\"calDayHours('Tuesday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">{{eswl.TuesdayHours | number:'1.1-2' }}</td>\r\n                        </tr>\r\n                        <tr class=\"row\">\r\n                            <td class=\"col-2\">Wednesday</td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.WednesdayIn1.hour\" (ngModelChange)=\"calDayHours('Wednesday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.WednesdayIn1.minute\" (ngModelChange)=\"calDayHours('Wednesday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.WednesdayOut1.hour\" (ngModelChange)=\"calDayHours('Wednesday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.WednesdayOut1.minute\" (ngModelChange)=\"calDayHours('Wednesday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.WednesdayIn2.hour\" (ngModelChange)=\"calDayHours('Wednesday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.WednesdayIn2.minute\" (ngModelChange)=\"calDayHours('Wednesday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.WednesdayOut2.hour\" (ngModelChange)=\"calDayHours('Wednesday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.WednesdayOut2.minute\" (ngModelChange)=\"calDayHours('Wednesday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">{{eswl.WednesdayHours | number:'1.1-2' }}</td>\r\n                        </tr>\r\n                        <tr class=\"row\">\r\n                            <td class=\"col-2\">Thursday</td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.ThursdayIn1.hour\" (ngModelChange)=\"calDayHours('Thursday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.ThursdayIn1.minute\" (ngModelChange)=\"calDayHours('Thursday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.ThursdayOut1.hour\" (ngModelChange)=\"calDayHours('Thursday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.ThursdayOut1.minute\" (ngModelChange)=\"calDayHours('Thursday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.ThursdayIn2.hour\" (ngModelChange)=\"calDayHours('Thursday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.ThursdayIn2.minute\" (ngModelChange)=\"calDayHours('Thursday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.ThursdayOut2.hour\" (ngModelChange)=\"calDayHours('Thursday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.ThursdayOut2.minute\" (ngModelChange)=\"calDayHours('Thursday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">{{eswl.ThursdayHours | number:'1.1-2' }}</td>\r\n                        </tr>\r\n                        <tr class=\"row\">\r\n                            <td class=\"col-2\">Friday</td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.FridayIn1.hour\" (ngModelChange)=\"calDayHours('Friday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.FridayIn1.minute\" (ngModelChange)=\"calDayHours('Friday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.FridayOut1.hour\" (ngModelChange)=\"calDayHours('Friday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.FridayOut1.minute\" (ngModelChange)=\"calDayHours('Friday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.FridayIn2.hour\" (ngModelChange)=\"calDayHours('Friday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.FridayIn2.minute\" (ngModelChange)=\"calDayHours('Friday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.FridayOut2.hour\" (ngModelChange)=\"calDayHours('Friday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.FridayOut2.minute\" (ngModelChange)=\"calDayHours('Friday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">{{eswl.FridayHours | number:'1.1-2' }}</td>\r\n                        </tr>\r\n                        <tr class=\"row\">\r\n                            <td class=\"col-2\">Saturday</td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.SaturdayIn1.hour\" (ngModelChange)=\"calDayHours('Saturday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.SaturdayIn1.minute\" (ngModelChange)=\"calDayHours('Saturday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.SaturdayOut1.hour\" (ngModelChange)=\"calDayHours('Saturday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.SaturdayOut1.minute\" (ngModelChange)=\"calDayHours('Saturday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.SaturdayIn2.hour\" (ngModelChange)=\"calDayHours('Saturday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.SaturdayIn2.minute\" (ngModelChange)=\"calDayHours('Saturday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.SaturdayOut2.hour\" (ngModelChange)=\"calDayHours('Saturday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.SaturdayOut2.minute\" (ngModelChange)=\"calDayHours('Saturday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">{{eswl.SaturdayHours | number:'1.1-2' }}</td>\r\n                        </tr>\r\n                        <tr class=\"row\">\r\n                            <td class=\"col-2\">Sunday</td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.SundayIn1.hour\" (ngModelChange)=\"calDayHours('Sunday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.SundayIn1.minute\" (ngModelChange)=\"calDayHours('Sunday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.SundayOut1.hour\" (ngModelChange)=\"calDayHours('Sunday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.SundayOut1.minute\" (ngModelChange)=\"calDayHours('Sunday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.SundayIn2.hour\" (ngModelChange)=\"calDayHours('Sunday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.SundayIn2.minute\" (ngModelChange)=\"calDayHours('Sunday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6 pr-0\"><input type=\"number\" min=\"0\" max=\"23\" class=\"form-control\" [(ngModel)]=\"eswl.SundayOut2.hour\" (ngModelChange)=\"calDayHours('Sunday')\" /></div>\r\n                                    <div class=\"col-6 pl-0\"><input type=\"number\" min=\"1\" max=\"59\" class=\"form-control\" [(ngModel)]=\"eswl.SundayOut2.minute\" (ngModelChange)=\"calDayHours('Sunday')\" /></div>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-2\">{{eswl.SundayHours | number:'1.1-2' }}</td>\r\n                        </tr>\r\n                        <tr class=\"row\">\r\n                            <td class=\"col-10\"><div class=\"d-flex float-right\">Total Hours</div></td>\r\n                            <td class=\"col-2\"><span>{{eswl.TotalHours | number:'1.1-2' }}</span></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <!--<div class=\"row\" style=\"height: 650px; width: 650px;\">\r\n            <full-calendar #calendar\r\n                           defaultView=\"timeGridWeek\"\r\n                           [header]=\"{\r\n        left: 'prev,next today',\r\n        center: 'title',\r\n        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'\r\n      }\"\r\n                           [plugins]=\"calendarPlugins\"\r\n                           [weekends]=\"calendarWeekends\"\r\n                           [events]=\"calendarEvents\"\r\n                           (dateClick)=\"handleDateClick($event)\"></full-calendar>\r\n        </div>-->\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/schedule/schedule.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.ts ***!
  \***********************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_employees_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/employees-schedule.service */ "./src/app/services/employees-schedule.service.ts");
/* harmony import */ var _services_employees_schedule_week_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/employees-schedule-week.service */ "./src/app/services/employees-schedule-week.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_8__);









var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(employeeService, employeeScheduleService, employeeScheduleWeekService) {
        this.employeeService = employeeService;
        this.employeeScheduleService = employeeScheduleService;
        this.employeeScheduleWeekService = employeeScheduleWeekService;
        this.employeeId = 0;
        this.startDate = "";
        this.endDate = "";
        this.eswl = {
            Id: 0,
            EmployeeScheduleId: 0,
            MondayIn1: { hour: 0, minute: 0, second: 0 },
            MondayOut1: { hour: 0, minute: 0, second: 0 },
            MondayIn2: { hour: 0, minute: 0, second: 0 },
            MondayOut2: { hour: 0, minute: 0, second: 0 },
            MondayHours: 0,
            TuesdayIn1: { hour: 0, minute: 0, second: 0 },
            TuesdayOut1: { hour: 0, minute: 0, second: 0 },
            TuesdayIn2: { hour: 0, minute: 0, second: 0 },
            TuesdayOut2: { hour: 0, minute: 0, second: 0 },
            TuesdayHours: 0,
            WednesdayIn1: { hour: 0, minute: 0, second: 0 },
            WednesdayOut1: { hour: 0, minute: 0, second: 0 },
            WednesdayIn2: { hour: 0, minute: 0, second: 0 },
            WednesdayOut2: { hour: 0, minute: 0, second: 0 },
            WednesdayHours: 0,
            ThursdayIn1: { hour: 0, minute: 0, second: 0 },
            ThursdayOut1: { hour: 0, minute: 0, second: 0 },
            ThursdayIn2: { hour: 0, minute: 0, second: 0 },
            ThursdayOut2: { hour: 0, minute: 0, second: 0 },
            ThursdayHours: 0,
            FridayIn1: { hour: 0, minute: 0, second: 0 },
            FridayOut1: { hour: 0, minute: 0, second: 0 },
            FridayIn2: { hour: 0, minute: 0, second: 0 },
            FridayOut2: { hour: 0, minute: 0, second: 0 },
            FridayHours: 0,
            SaturdayIn1: { hour: 0, minute: 0, second: 0 },
            SaturdayOut1: { hour: 0, minute: 0, second: 0 },
            SaturdayIn2: { hour: 0, minute: 0, second: 0 },
            SaturdayOut2: { hour: 0, minute: 0, second: 0 },
            SaturdayHours: 0,
            SundayIn1: { hour: 0, minute: 0, second: 0 },
            SundayOut1: { hour: 0, minute: 0, second: 0 },
            SundayIn2: { hour: 0, minute: 0, second: 0 },
            SundayOut2: { hour: 0, minute: 0, second: 0 },
            SundayHours: 0,
            TotalHours: 0
        };
        this.isScheduleAvailable = false;
        this.isScheduleWeekAvailable = false;
        this.dateError = "";
        this.visibleRange = {
            start: '',
            end: ''
        };
        this.scheduleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0),
            EmployeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            StartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            EndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        }, { validators: this.dateLessThan('StartDate', 'EndDate') });
        this.calendarVisible = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_7___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_8___default.a];
        this.calendarWeekends = true;
        this.calendarEvents = [
            { title: 'Event Now', start: "2019-04-29T02:15:00", end: "2019-04-29T03:15:00" }
        ];
        this.sucessMessage = "";
    }
    ScheduleComponent.prototype.dateLessThan = function (from, to) {
        return function (group) {
            var f = group.controls[from];
            var t = group.controls[to];
            if (f.value > t.value) {
                t.setValue(f.value);
                return {
                    dates: "StartDate should be less than EndDate"
                };
            }
            return {};
        };
    };
    ScheduleComponent.prototype.toggleVisible = function () {
        this.calendarVisible = !this.calendarVisible;
    };
    ScheduleComponent.prototype.toggleWeekends = function () {
        this.calendarWeekends = !this.calendarWeekends;
    };
    ScheduleComponent.prototype.gotoPast = function () {
        var calendarApi = this.calendarComponent.getApi();
        calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
    };
    ScheduleComponent.prototype.handleDateClick = function (arg) {
        if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            this.calendarEvents = this.calendarEvents.concat({
                title: 'New Event',
                start: arg.date,
                allDay: arg.allDay
            });
        }
    };
    ScheduleComponent.prototype.calDayHours = function (day) {
        var M1h = 0, M2h = 0;
        var dayIn1 = day + "In1", dayOut1 = day + "Out1", dayIn2 = day + "In2", dayOut2 = day + "Out2", dayHours = day + "Hours";
        M1h = (((this.eswl[dayOut1].hour * 60) + this.eswl[dayOut1].minute) - ((this.eswl[dayIn1].hour * 60) + this.eswl[dayIn1].minute)) / 60;
        if (M2h == 0) {
            this.eswl[dayHours] = M1h;
        }
        M2h = (((this.eswl[dayOut2].hour * 60) + this.eswl[dayOut2].minute) - ((this.eswl[dayIn2].hour * 60) + this.eswl[dayIn2].minute)) / 60;
        if (M1h == 0) {
            this.eswl[dayHours] = M2h;
        }
        var hours = M1h + M2h;
        this.eswl[dayHours] = hours;
        //var in1h = "", in1m = "", out1h = "", out1m = "";
        //if (this.eswl[dayIn1].hour <= 9) {
        //    in1h = "0" + this.eswl[dayIn1].hour;
        //}
        //else {
        //    in1h = this.eswl[dayIn1].hour;
        //}
        //if (this.eswl[dayIn1].minute <= 9) {
        //    in1m = "0" + this.eswl[dayIn1].minute;
        //}
        //else {
        //    in1m = this.eswl[dayIn1].minute;
        //}
        //if (this.eswl[dayOut1].hour <= 9) {
        //    out1h = "0" + this.eswl[dayIn1].hour;
        //}
        //else {
        //    out1h = this.eswl[dayIn1].hour;
        //}
        //if (this.eswl[dayOut1].minute <= 9) {
        //    out1m = "0" + this.eswl[dayIn1].minute;
        //}
        //else {
        //    out1m = this.eswl[dayIn1].minute;
        //}
        //this.calendarEvents.push({
        //    title: this.scheduleForm.controls.EmployeeScheduleId,
        //    start: this.scheduleForm.controls.StartDate.value + "T" + in1h + ":" + in1m + ":00",
        //    end: this.scheduleForm.controls.StartDate.value + "T" + out1h + ":" + out1m + ":00"
        //});
        //console.log(this.scheduleForm.controls.StartDate.value + "T" + in1h + ":" + in1m + ":00", this.scheduleForm.controls.StartDate.value + "T" + out1h + ":" + out1m + ":00");
        this.calTotalHours();
    };
    ScheduleComponent.prototype.calTotalHours = function () {
        var totalhours = this.eswl.MondayHours + this.eswl.TuesdayHours + this.eswl.WednesdayHours + this.eswl.ThursdayHours + this.eswl.FridayHours +
            this.eswl.SaturdayHours + this.eswl.SundayHours;
        this.eswl.TotalHours = totalhours;
    };
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.listFiltered("Active=1")
            .subscribe(function (r) {
            _this.employees = r;
        });
    };
    ScheduleComponent.prototype.save = function () {
        var _this = this;
        var itemj = {
            Id: this.eswl.Id,
            EmployeeScheduleId: this.eswl.EmployeeScheduleId,
            MondayIn1: this.eswl.MondayIn1.hour + ":" + this.eswl.MondayIn1.minute,
            MondayOut1: this.eswl.MondayOut1.hour + ":" + this.eswl.MondayOut1.minute,
            MondayIn2: this.eswl.MondayIn2.hour + ":" + this.eswl.MondayIn2.minute,
            MondayOut2: this.eswl.MondayOut2.hour + ":" + this.eswl.MondayOut2.minute,
            TuesdayIn1: this.eswl.TuesdayIn1.hour + ":" + this.eswl.TuesdayIn1.minute,
            TuesdayOut1: this.eswl.TuesdayOut1.hour + ":" + this.eswl.TuesdayOut1.minute,
            TuesdayIn2: this.eswl.TuesdayIn2.hour + ":" + this.eswl.TuesdayIn2.minute,
            TuesdayOut2: this.eswl.TuesdayOut2.hour + ":" + this.eswl.TuesdayOut2.minute,
            WednesdayIn1: this.eswl.WednesdayIn1.hour + ":" + this.eswl.WednesdayIn1.minute,
            WednesdayOut1: this.eswl.WednesdayOut1.hour + ":" + this.eswl.WednesdayOut1.minute,
            WednesdayIn2: this.eswl.WednesdayIn2.hour + ":" + this.eswl.WednesdayIn2.minute,
            WednesdayOut2: this.eswl.WednesdayOut2.hour + ":" + this.eswl.WednesdayOut2.minute,
            ThursdayIn1: this.eswl.ThursdayIn1.hour + ":" + this.eswl.ThursdayIn1.minute,
            ThursdayOut1: this.eswl.ThursdayOut1.hour + ":" + this.eswl.ThursdayOut1.minute,
            ThursdayIn2: this.eswl.ThursdayIn2.hour + ":" + this.eswl.ThursdayIn2.minute,
            ThursdayOut2: this.eswl.ThursdayOut2.hour + ":" + this.eswl.ThursdayOut2.minute,
            FridayIn1: this.eswl.FridayIn1.hour + ":" + this.eswl.FridayIn1.minute,
            FridayOut1: this.eswl.FridayOut1.hour + ":" + this.eswl.FridayOut1.minute,
            FridayIn2: this.eswl.FridayIn2.hour + ":" + this.eswl.FridayIn2.minute,
            FridayOut2: this.eswl.FridayOut2.hour + ":" + this.eswl.FridayOut2.minute,
            SaturdayIn1: this.eswl.SaturdayIn1.hour + ":" + this.eswl.SaturdayIn1.minute,
            SaturdayOut1: this.eswl.SaturdayOut1.hour + ":" + this.eswl.SaturdayOut1.minute,
            SaturdayIn2: this.eswl.SaturdayIn2.hour + ":" + this.eswl.SaturdayIn2.minute,
            SaturdayOut2: this.eswl.SaturdayOut2.hour + ":" + this.eswl.SaturdayOut2.minute,
            SundayIn1: this.eswl.SundayIn1.hour + ":" + this.eswl.SundayIn1.minute,
            SundayOut1: this.eswl.SundayOut1.hour + ":" + this.eswl.SundayOut1.minute,
            SundayIn2: this.eswl.SundayIn2.hour + ":" + this.eswl.SundayIn2.minute,
            SundayOut2: this.eswl.SundayOut2.hour + ":" + this.eswl.SundayOut2.minute,
        };
        this.employeeScheduleWeekService.update(itemj)
            .subscribe(function (t) {
            if (t) {
                _this.sucessMessage = "Saved Successfully...";
                setTimeout(function (r) {
                    _this.sucessMessage = "";
                }, 5000);
            }
        });
        this.scheduleForm.controls["StartDate"].valueChanges.subscribe(function (r) {
            console.log(r);
        });
    };
    ScheduleComponent.prototype.reset = function () {
        this.scheduleForm.reset();
    };
    ScheduleComponent.prototype.getEmployeeSchedule = function () {
        var _this = this;
        if (this.scheduleForm.controls.EmployeeId.value != 0) {
            this.employeeScheduleService.listFiltered("EmployeeId=" + this.scheduleForm.controls.EmployeeId.value)
                .subscribe(function (r) {
                _this.employeeScheduleList = r[0];
                if (_this.employeeScheduleList) {
                    _this.isScheduleAvailable = true;
                    _this.scheduleForm.controls.Id.setValue(_this.employeeScheduleList.Id);
                    _this.scheduleForm.controls.StartDate.setValue(_this.employeeScheduleList.StartDate.split('T')[0]);
                    _this.scheduleForm.controls.EndDate.setValue(_this.employeeScheduleList.EndDate.split('T')[0]);
                    var employeeScheduleId = _this.employeeScheduleList.Id;
                    _this.getEmployeeScheduleWeek(employeeScheduleId);
                    _this.visibleRange.start = _this.employeeScheduleList.StartDate.split('T')[0];
                    _this.visibleRange.end = _this.employeeScheduleList.EndDate.split('T')[0];
                }
                else {
                    _this.isScheduleAvailable = false;
                    _this.scheduleForm.controls.Id.setValue(0);
                    _this.scheduleForm.controls.StartDate.setValue("");
                    _this.scheduleForm.controls.EndDate.setValue("");
                    var employeeScheduleId = 0;
                    _this.visibleRange.start = "";
                    _this.visibleRange.end = "";
                }
            });
        }
        else {
            this.isScheduleAvailable = false;
        }
    };
    ScheduleComponent.prototype.addSchedule = function () {
        var _this = this;
        if (this.scheduleForm.valid) {
            var item = {
                Id: 0,
                EmployeeId: this.scheduleForm.controls.EmployeeId.value,
                StartDate: this.scheduleForm.controls.StartDate.value,
                EndDate: this.scheduleForm.controls.EndDate.value
            };
            this.employeeScheduleService.create(item)
                .subscribe(function (r) {
                _this.isScheduleAvailable = true;
                var employeeScheduleId = r.Id;
                _this.getEmployeeScheduleWeek(employeeScheduleId);
            });
        }
    };
    ScheduleComponent.prototype.getEmployeeScheduleWeek = function (employeeScheduleId) {
        var _this = this;
        this.employeeScheduleWeekService.listFiltered("EmployeeScheduleId=" + employeeScheduleId)
            .subscribe(function (s) {
            if (s[0]) {
                _this.isScheduleWeekAvailable = true;
                var weekSchedule = s[0];
                _this.eswl.Id = weekSchedule.Id;
                _this.eswl.EmployeeScheduleId = weekSchedule.EmployeeScheduleId;
                _this.eswl.MondayIn1.hour = +weekSchedule.MondayIn1.split(":")[0];
                _this.eswl.MondayIn1.minute = +weekSchedule.MondayIn1.split(":")[1];
                _this.eswl.MondayOut1.hour = +weekSchedule.MondayOut1.split(":")[0];
                _this.eswl.MondayOut1.minute = +weekSchedule.MondayOut1.split(":")[1];
                _this.eswl.MondayIn2.hour = +weekSchedule.MondayIn2.split(":")[0];
                _this.eswl.MondayIn2.minute = +weekSchedule.MondayIn2.split(":")[1];
                _this.eswl.MondayOut2.hour = +weekSchedule.MondayOut2.split(":")[0];
                _this.eswl.MondayOut2.minute = +weekSchedule.MondayOut2.split(":")[1];
                _this.calDayHours('Monday');
                _this.eswl.TuesdayIn1.hour = +weekSchedule.TuesdayIn1.split(":")[0];
                _this.eswl.TuesdayIn1.minute = +weekSchedule.TuesdayIn1.split(":")[1];
                _this.eswl.TuesdayOut1.hour = +weekSchedule.TuesdayOut1.split(":")[0];
                _this.eswl.TuesdayOut1.minute = +weekSchedule.TuesdayOut1.split(":")[1];
                _this.eswl.TuesdayIn2.hour = +weekSchedule.TuesdayIn2.split(":")[0];
                _this.eswl.TuesdayIn2.minute = +weekSchedule.TuesdayIn2.split(":")[1];
                _this.eswl.TuesdayOut2.hour = +weekSchedule.TuesdayOut2.split(":")[0];
                _this.eswl.TuesdayOut2.minute = +weekSchedule.TuesdayOut2.split(":")[1];
                _this.calDayHours('Tuesday');
                _this.eswl.WednesdayIn1.hour = +weekSchedule.WednesdayIn1.split(":")[0];
                _this.eswl.WednesdayIn1.minute = +weekSchedule.WednesdayIn1.split(":")[1];
                _this.eswl.WednesdayOut1.hour = +weekSchedule.WednesdayOut1.split(":")[0];
                _this.eswl.WednesdayOut1.minute = +weekSchedule.WednesdayOut1.split(":")[1];
                _this.eswl.WednesdayIn2.hour = +weekSchedule.WednesdayIn2.split(":")[0];
                _this.eswl.WednesdayIn2.minute = +weekSchedule.WednesdayIn2.split(":")[1];
                _this.eswl.WednesdayOut2.hour = +weekSchedule.WednesdayOut2.split(":")[0];
                _this.eswl.WednesdayOut2.minute = +weekSchedule.WednesdayOut2.split(":")[1];
                _this.calDayHours('Wednesday');
                _this.eswl.ThursdayIn1.hour = +weekSchedule.ThursdayIn1.split(":")[0];
                _this.eswl.ThursdayIn1.minute = +weekSchedule.ThursdayIn1.split(":")[1];
                _this.eswl.ThursdayOut1.hour = +weekSchedule.ThursdayOut1.split(":")[0];
                _this.eswl.ThursdayOut1.minute = +weekSchedule.ThursdayOut1.split(":")[1];
                _this.eswl.ThursdayIn2.hour = +weekSchedule.ThursdayIn2.split(":")[0];
                _this.eswl.ThursdayIn2.minute = +weekSchedule.ThursdayIn2.split(":")[1];
                _this.eswl.ThursdayOut2.hour = +weekSchedule.ThursdayOut2.split(":")[0];
                _this.eswl.ThursdayOut2.minute = +weekSchedule.ThursdayOut2.split(":")[1];
                _this.calDayHours('Thursday');
                _this.eswl.FridayIn1.hour = +weekSchedule.FridayIn1.split(":")[0];
                _this.eswl.FridayIn1.minute = +weekSchedule.FridayIn1.split(":")[1];
                _this.eswl.FridayOut1.hour = +weekSchedule.FridayOut1.split(":")[0];
                _this.eswl.FridayOut1.minute = +weekSchedule.FridayOut1.split(":")[1];
                _this.eswl.FridayIn2.hour = +weekSchedule.FridayIn2.split(":")[0];
                _this.eswl.FridayIn2.minute = +weekSchedule.FridayIn2.split(":")[1];
                _this.eswl.FridayOut2.hour = +weekSchedule.FridayOut2.split(":")[0];
                _this.eswl.FridayOut2.minute = +weekSchedule.FridayOut2.split(":")[1];
                _this.calDayHours('Friday');
                _this.eswl.SaturdayIn1.hour = +weekSchedule.SaturdayIn1.split(":")[0];
                _this.eswl.SaturdayIn1.minute = +weekSchedule.SaturdayIn1.split(":")[1];
                _this.eswl.SaturdayOut1.hour = +weekSchedule.SaturdayOut1.split(":")[0];
                _this.eswl.SaturdayOut1.minute = +weekSchedule.SaturdayOut1.split(":")[1];
                _this.eswl.SaturdayIn2.hour = +weekSchedule.SaturdayIn2.split(":")[0];
                _this.eswl.SaturdayIn2.minute = +weekSchedule.SaturdayIn2.split(":")[1];
                _this.eswl.SaturdayOut2.hour = +weekSchedule.SaturdayOut2.split(":")[0];
                _this.eswl.SaturdayOut2.minute = +weekSchedule.SaturdayOut2.split(":")[1];
                _this.calDayHours('Saturday');
                _this.eswl.SundayIn1.hour = +weekSchedule.SundayIn1.split(":")[0];
                _this.eswl.SundayIn1.minute = +weekSchedule.SundayIn1.split(":")[1];
                _this.eswl.SundayOut1.hour = +weekSchedule.SundayOut1.split(":")[0];
                _this.eswl.SundayOut1.minute = +weekSchedule.SundayOut1.split(":")[1];
                _this.eswl.SundayIn2.hour = +weekSchedule.SundayIn2.split(":")[0];
                _this.eswl.SundayIn2.minute = +weekSchedule.SundayIn2.split(":")[1];
                _this.eswl.SundayOut2.hour = +weekSchedule.SundayOut2.split(":")[0];
                _this.eswl.SundayOut2.minute = +weekSchedule.SundayOut2.split(":")[1];
                _this.calDayHours('Sunday');
                _this.calTotalHours();
            }
            else {
                var itemj = {
                    Id: 0,
                    EmployeeScheduleId: employeeScheduleId,
                    MondayIn1: "",
                    MondayOut1: "",
                    MondayIn2: "",
                    MondayOut2: "",
                    TuesdayIn1: "",
                    TuesdayOut1: "",
                    TuesdayIn2: "",
                    TuesdayOut2: "",
                    WednesdayIn1: "",
                    WednesdayOut1: "",
                    WednesdayIn2: "",
                    WednesdayOut2: "",
                    ThursdayIn1: "",
                    ThursdayOut1: "",
                    ThursdayIn2: "",
                    ThursdayOut2: "",
                    FridayIn1: "",
                    FridayOut1: "",
                    FridayIn2: "",
                    FridayOut2: "",
                    SaturdayIn1: "",
                    SaturdayOut1: "",
                    SaturdayIn2: "",
                    SaturdayOut2: "",
                    SundayIn1: "",
                    SundayOut1: "",
                    SundayIn2: "",
                    SundayOut2: ""
                };
                _this.employeeScheduleWeekService.create(itemj)
                    .subscribe(function (t) {
                    _this.isScheduleWeekAvailable = true;
                    var weekSchedule = t;
                    _this.eswl.Id = weekSchedule.Id;
                    _this.eswl.EmployeeScheduleId = weekSchedule.EmployeeScheduleId;
                    _this.eswl.MondayIn1.hour = +weekSchedule.MondayIn1.split(":")[0];
                    _this.eswl.MondayIn1.minute = +weekSchedule.MondayIn1.split(":")[1];
                    _this.eswl.MondayOut1.hour = +weekSchedule.MondayOut1.split(":")[0];
                    _this.eswl.MondayOut1.minute = +weekSchedule.MondayOut1.split(":")[1];
                    _this.eswl.MondayIn2.hour = +weekSchedule.MondayIn2.split(":")[0];
                    _this.eswl.MondayIn2.minute = +weekSchedule.MondayIn2.split(":")[1];
                    _this.eswl.MondayOut2.hour = +weekSchedule.MondayOut2.split(":")[0];
                    _this.eswl.MondayOut2.minute = +weekSchedule.MondayOut2.split(":")[1];
                    _this.calDayHours('Monday');
                    _this.eswl.TuesdayIn1.hour = +weekSchedule.TuesdayIn1.split(":")[0];
                    _this.eswl.TuesdayIn1.minute = +weekSchedule.TuesdayIn1.split(":")[1];
                    _this.eswl.TuesdayOut1.hour = +weekSchedule.TuesdayOut1.split(":")[0];
                    _this.eswl.TuesdayOut1.minute = +weekSchedule.TuesdayOut1.split(":")[1];
                    _this.eswl.TuesdayIn2.hour = +weekSchedule.TuesdayIn2.split(":")[0];
                    _this.eswl.TuesdayIn2.minute = +weekSchedule.TuesdayIn2.split(":")[1];
                    _this.eswl.TuesdayOut2.hour = +weekSchedule.TuesdayOut2.split(":")[0];
                    _this.eswl.TuesdayOut2.minute = +weekSchedule.TuesdayOut2.split(":")[1];
                    _this.calDayHours('Tuesday');
                    _this.eswl.WednesdayIn1.hour = +weekSchedule.WednesdayIn1.split(":")[0];
                    _this.eswl.WednesdayIn1.minute = +weekSchedule.WednesdayIn1.split(":")[1];
                    _this.eswl.WednesdayOut1.hour = +weekSchedule.WednesdayOut1.split(":")[0];
                    _this.eswl.WednesdayOut1.minute = +weekSchedule.WednesdayOut1.split(":")[1];
                    _this.eswl.WednesdayIn2.hour = +weekSchedule.WednesdayIn2.split(":")[0];
                    _this.eswl.WednesdayIn2.minute = +weekSchedule.WednesdayIn2.split(":")[1];
                    _this.eswl.WednesdayOut2.hour = +weekSchedule.WednesdayOut2.split(":")[0];
                    _this.eswl.WednesdayOut2.minute = +weekSchedule.WednesdayOut2.split(":")[1];
                    _this.calDayHours('Wednesday');
                    _this.eswl.ThursdayIn1.hour = +weekSchedule.ThursdayIn1.split(":")[0];
                    _this.eswl.ThursdayIn1.minute = +weekSchedule.ThursdayIn1.split(":")[1];
                    _this.eswl.ThursdayOut1.hour = +weekSchedule.ThursdayOut1.split(":")[0];
                    _this.eswl.ThursdayOut1.minute = +weekSchedule.ThursdayOut1.split(":")[1];
                    _this.eswl.ThursdayIn2.hour = +weekSchedule.ThursdayIn2.split(":")[0];
                    _this.eswl.ThursdayIn2.minute = +weekSchedule.ThursdayIn2.split(":")[1];
                    _this.eswl.ThursdayOut2.hour = +weekSchedule.ThursdayOut2.split(":")[0];
                    _this.eswl.ThursdayOut2.minute = +weekSchedule.ThursdayOut2.split(":")[1];
                    _this.calDayHours('Thursday');
                    _this.eswl.FridayIn1.hour = +weekSchedule.FridayIn1.split(":")[0];
                    _this.eswl.FridayIn1.minute = +weekSchedule.FridayIn1.split(":")[1];
                    _this.eswl.FridayOut1.hour = +weekSchedule.FridayOut1.split(":")[0];
                    _this.eswl.FridayOut1.minute = +weekSchedule.FridayOut1.split(":")[1];
                    _this.eswl.FridayIn2.hour = +weekSchedule.FridayIn2.split(":")[0];
                    _this.eswl.FridayIn2.minute = +weekSchedule.FridayIn2.split(":")[1];
                    _this.eswl.FridayOut2.hour = +weekSchedule.FridayOut2.split(":")[0];
                    _this.eswl.FridayOut2.minute = +weekSchedule.FridayOut2.split(":")[1];
                    _this.calDayHours('Friday');
                    _this.eswl.SaturdayIn1.hour = +weekSchedule.SaturdayIn1.split(":")[0];
                    _this.eswl.SaturdayIn1.minute = +weekSchedule.SaturdayIn1.split(":")[1];
                    _this.eswl.SaturdayOut1.hour = +weekSchedule.SaturdayOut1.split(":")[0];
                    _this.eswl.SaturdayOut1.minute = +weekSchedule.SaturdayOut1.split(":")[1];
                    _this.eswl.SaturdayIn2.hour = +weekSchedule.SaturdayIn2.split(":")[0];
                    _this.eswl.SaturdayIn2.minute = +weekSchedule.SaturdayIn2.split(":")[1];
                    _this.eswl.SaturdayOut2.hour = +weekSchedule.SaturdayOut2.split(":")[0];
                    _this.eswl.SaturdayOut2.minute = +weekSchedule.SaturdayOut2.split(":")[1];
                    _this.calDayHours('Saturday');
                    _this.eswl.SundayIn1.hour = +weekSchedule.SundayIn1.split(":")[0];
                    _this.eswl.SundayIn1.minute = +weekSchedule.SundayIn1.split(":")[1];
                    _this.eswl.SundayOut1.hour = +weekSchedule.SundayOut1.split(":")[0];
                    _this.eswl.SundayOut1.minute = +weekSchedule.SundayOut1.split(":")[1];
                    _this.eswl.SundayIn2.hour = +weekSchedule.SundayIn2.split(":")[0];
                    _this.eswl.SundayIn2.minute = +weekSchedule.SundayIn2.split(":")[1];
                    _this.eswl.SundayOut2.hour = +weekSchedule.SundayOut2.split(":")[0];
                    _this.eswl.SundayOut2.minute = +weekSchedule.SundayOut2.split(":")[1];
                    _this.calDayHours('Sunday');
                    _this.calTotalHours();
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('calendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__["FullCalendarComponent"])
    ], ScheduleComponent.prototype, "calendarComponent", void 0);
    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/components/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/components/schedule/schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _services_employees_schedule_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeScheduleService"], _services_employees_schedule_week_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeScheduleWeekService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signin/signin.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sigin {\r\n  box-shadow: 5px 5px 5px 2px rgba(0,0,0,0.3);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSw0Q0FBNEM7Q0FDN0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWdpbiB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDVweCAycHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAycHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/signin/signin.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signin/signin.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/components/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*hello*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypoZWxsbyovIl19 */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  signup works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yb2xlcy1tZW51LW9wdGlvbnMtbWFwcGluZy91c2VyLXJvbGVzLW1lbnUtb3B0aW9ucy1tYXBwaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-roles-menu-options-mapping works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: UserRolesMenuOptionsMappingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesMenuOptionsMappingComponent", function() { return UserRolesMenuOptionsMappingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserRolesMenuOptionsMappingComponent = /** @class */ (function () {
    function UserRolesMenuOptionsMappingComponent() {
    }
    UserRolesMenuOptionsMappingComponent.prototype.ngOnInit = function () {
    };
    UserRolesMenuOptionsMappingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-roles-menu-options-mapping',
            template: __webpack_require__(/*! ./user-roles-menu-options-mapping.component.html */ "./src/app/components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component.html"),
            styles: [__webpack_require__(/*! ./user-roles-menu-options-mapping.component.css */ "./src/app/components/user-roles-menu-options-mapping/user-roles-menu-options-mapping.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserRolesMenuOptionsMappingComponent);
    return UserRolesMenuOptionsMappingComponent;
}());



/***/ }),

/***/ "./src/app/components/user-roles/user-roles.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/user-roles/user-roles.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yb2xlcy91c2VyLXJvbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user-roles/user-roles.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-roles/user-roles.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-roles works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user-roles/user-roles.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-roles/user-roles.component.ts ***!
  \***************************************************************/
/*! exports provided: UserRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesComponent", function() { return UserRolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserRolesComponent = /** @class */ (function () {
    function UserRolesComponent() {
    }
    UserRolesComponent.prototype.ngOnInit = function () {
    };
    UserRolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-roles',
            template: __webpack_require__(/*! ./user-roles.component.html */ "./src/app/components/user-roles/user-roles.component.html"),
            styles: [__webpack_require__(/*! ./user-roles.component.css */ "./src/app/components/user-roles/user-roles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserRolesComponent);
    return UserRolesComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*hello*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaGVsbG8qL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/workorder/workorder.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user/workorder/workorder.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status {\r\n    padding: 2px 5px 3px 5px;\r\n    border-radius: 5px;\r\n    font-weight: bold;\r\n    font-size: 0.7em;\r\n}\r\n\r\n.pending {\r\n    background: rgb(220,53,69);\r\n    color: #ffffff;\r\n}\r\n\r\n.onhold {\r\n    background: rgb(255,193,7);\r\n    color: #000000;\r\n}\r\n\r\n.completed {\r\n    background: rgb(40,167,69);\r\n    color: #ffffff;\r\n}\r\n\r\n.card-data {\r\n    color: rgb(153, 153, 153);\r\n    font-size: 0.8em;\r\n    margin-top: 10px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.status-btn {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    background: rgb(213,213,213);\r\n    color: rgb(144,144,144);\r\n    padding: 4px 12px 4px 12px;\r\n    font-size: 0.8em;\r\n    border-radius: 50px;\r\n    margin-bottom: 5px;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-btn {\r\n    cursor: pointer;\r\n    border: 1px solid gray;\r\n    background: transparent;\r\n    color: black;\r\n    padding: 4px 12px 4px 12px;\r\n    font-size: 0.8em;\r\n    border-radius: 50px;\r\n    margin-bottom: 5px;\r\n    outline: none;\r\n}\r\n\r\n.status-active {\r\n    background: rgb(29,137,228);\r\n    color: #ffffff;\r\n}\r\n\r\n#filtermodal .nav-link {\r\n    border-radius: 3px;\r\n    margin: 1px;\r\n}\r\n\r\n.prioritylow {\r\n    border-left: 5px solid green;\r\n}\r\n\r\n.prioritymedium {\r\n    border-left: 5px solid orange;\r\n}\r\n\r\n.priorityhigh {\r\n    border-left: 5px solid red;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    #col-content {\r\n        overflow: auto;\r\n        white-space: nowrap;\r\n    }\r\n}\r\n\r\n/*Small devices (landscape phones, 576px and up)*/\r\n\r\n@media (min-width: 576px) {\r\n   \r\n}\r\n\r\n/*Medium devices (tablets, 768px and up)*/\r\n\r\n@media (min-width: 768px) {\r\n}\r\n\r\n/*Large devices (desktops, 992px and up)*/\r\n\r\n@media (min-width: 992px) {\r\n}\r\n\r\n/*Extra large devices (large desktops, 1200px and up)*/\r\n\r\n@media (min-width: 1200px) {\r\n}\r\n\r\n.AddReq-form label {\r\n    font-size: 12px !important;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.AddReq-form small {\r\n    font-size: 20px !important;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.workorder-title {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.rotate90 {\r\n    -webkit-transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.rotate180 {\r\n    -webkit-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.rotate270 {\r\n    -webkit-transform: rotate(270deg);\r\n    transform: rotate(270deg);\r\n}\r\n\r\n.rotate360 {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3dvcmtvcmRlci93b3Jrb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFHRDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0ksMkJBQTJCO0NBQzlCOztBQUVEO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysb0JBQW9CO0tBQ3ZCO0NBQ0o7O0FBQ0Qsa0RBQWtEOztBQUNsRDs7Q0FFQzs7QUFDRCwwQ0FBMEM7O0FBQzFDO0NBQ0M7O0FBQ0QsMENBQTBDOztBQUMxQztDQUNDOztBQUNELHVEQUF1RDs7QUFDdkQ7Q0FDQzs7QUFFRDtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxpQ0FBaUM7SUFJakMseUJBQXlCO0NBQzVCOztBQUNEO0lBQ0ksa0NBQWtDO0lBSWxDLDBCQUEwQjtDQUM3Qjs7QUFDRDtJQUNJLGtDQUFrQztJQUlsQywwQkFBMEI7Q0FDN0I7O0FBQ0Q7SUFDSSxrQ0FBa0M7SUFJbEMsMEJBQTBCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3dvcmtvcmRlci93b3Jrb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMge1xyXG4gICAgcGFkZGluZzogMnB4IDVweCAzcHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG59XHJcblxyXG4ucGVuZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIwLDUzLDY5KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ub25ob2xkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMTkzLDcpO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDQwLDE2Nyw2OSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNhcmQtZGF0YSB7XHJcbiAgICBjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uc3RhdHVzLWJ0biB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMTMsMjEzLDIxMyk7XHJcbiAgICBjb2xvcjogcmdiKDE0NCwxNDQsMTQ0KTtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4IDRweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmlsdGVyLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA0cHggMTJweCA0cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnN0YXR1cy1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI5LDEzNywyMjgpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbiNmaWx0ZXJtb2RhbCAubmF2LWxpbmsge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbn1cclxuXHJcbi5wcmlvcml0eWxvdyB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG4ucHJpb3JpdHltZWRpdW0ge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBvcmFuZ2U7XHJcbn1cclxuXHJcbi5wcmlvcml0eWhpZ2gge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgI2NvbC1jb250ZW50IHtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG59XHJcbi8qU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICBcclxufVxyXG4vKk1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbn1cclxuLypMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG59XHJcbi8qRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG59XHJcblxyXG4uQWRkUmVxLWZvcm0gbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5BZGRSZXEtZm9ybSBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi53b3Jrb3JkZXItdGl0bGUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnJvdGF0ZTkwIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcbi5yb3RhdGUxODAge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4ucm90YXRlMjcwIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbn1cclxuLnJvdGF0ZTM2MCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user/workorder/workorder.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/workorder/workorder.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"fixed-top pt-2 pr-2\" style=\"margin-left: 35px;\">\r\n    <span class=\"btn btn-sm\">Work Order</span>\r\n    <button *ngIf=\"action != 'Add' && action != 'Edit'\" class=\"btn btn-sm btn-info ml-2\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n        Filter\r\n    </button>\r\n</div>\r\n\r\n\r\n<div id=\"list\">\r\n    <div class=\"container-content-start p-0 collapse\" id=\"collapseExample\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div id=\"col-content\" class=\"btn-cont\">\r\n                    <button class=\"status-btn text-dark\">Filter By</button>\r\n                    <button class=\"filter-btn\" (click)=\"filter('Location')\">Location</button>\r\n                    <button class=\"filter-btn\" (click)=\"filter('AssignedEmployee')\">AssignedEmployee</button>\r\n                    <button class=\"filter-btn\" (click)=\"filter('MaintenanceIssueStatus')\">Status</button>\r\n                    <button class=\"filter-btn\" (click)=\"filter('MaintenancePriority')\">Priority</button>\r\n                    <button class=\"filter-btn\" (click)=\"filter('Room')\">Room</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn-cont pt-0\">\r\n            <button class=\"status-btn text-dark\" (click)=\"sort()\">Sort By: </button><span> {{sortProperty}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" [ngClass]=\"{ 'd-none' : filterString == '' }\">\r\n        <div class=\"col mb-1\">\r\n            <span>Filtered By: {{filterString}} </span><button class=\"btn btn-sm btn-outline-dark\" (click)=\"doFilter('',null)\">Remove filter </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"card mb-2\" *ngFor=\"let item of maintenanceRequestList\" [ngClass]=\"{ 'prioritylow' : item.MaintenancePriorityId == 3,'prioritymedium' : item.MaintenancePriorityId == 2,'priorityhigh' : item.MaintenancePriorityId == 1 }\">\r\n        <div class=\"card-body p-2\">\r\n            <div ngbDropdown placement=\"bottom-right\" class=\"d-inline-block d-flex float-right\">\r\n                <button class=\"btn-sm btn btn-outline-secondary\" id=\"dropdownBasic2\" ngbDropdownToggle></button>\r\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\r\n                    <button ngbDropdownItem (click)=\"onupdate(item)\">Edit</button>\r\n                    <button ngbDropdownItem (click)=\"ondelete(item)\">Delete</button>\r\n                </div>\r\n            </div>\r\n            <h6 class=\"workorder-title card-title\">{{item.Description}}</h6>\r\n            <div class=\"card-text mb-0\"><span class=\"status\" [ngClass]=\"{ 'pending' : item.MaintenanceIssueStatusId == 1,'completed' : item.MaintenanceIssueStatusId == 2, 'onhold' : item.MaintenanceIssueStatusId == 3 }\">{{item.MaintenanceIssueStatusName}}</span>&nbsp;{{item.RoomName}}&nbsp;&nbsp;<i class=\"fas fa-user\"></i>&nbsp;&nbsp;{{item.AssignedEmployeeName}}</div>\r\n            <div class=\"card-text mb-0\"><i class=\"fas fa-map-marker-alt\"></i>&nbsp;{{item.LocationName}}&nbsp;<i class=\"fas fa-calendar-alt\"></i>&nbsp;{{item.CreatedOnUtc | date: 'dd/MM/yyyy hh:mm'}}</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"fixed-bottom mb-2 mr-2\">\r\n        <button class=\"btn btn-info float-right\" (click)=\"oncreate()\">Create Request <span class=\"fas fa-plus\"></span></button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div id=\"add\" class=\"AddReq-form-style pl-2 pr-2\" style=\"display:none;\">\r\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" id=\"detail-tab\" data-toggle=\"tab\" href=\"#detail\" role=\"tab\" aria-controls=\"detail\" aria-selected=\"true\">Details</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" id=\"update-tab\" data-toggle=\"tab\" href=\"#update\" role=\"tab\" aria-controls=\"update\" aria-selected=\"false\">Updates</a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"tab-content\" id=\"myTabContent\">\r\n        <div class=\"tab-pane fade show active\" id=\"detail\" role=\"tabpanel\" aria-labelledby=\"detail-tab\">\r\n            <div class=\"AddReq-form\">\r\n                <form class=\"pt-2\" novalidate [formGroup]=\"maintenanceRequestForm\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Property\">Property<small class=\"text-danger\">*</small></label>\r\n                        <div class=\"btn-cont\">\r\n                            <button class=\"status-btn\" [ngClass]=\"{ 'status-active' : maintenanceRequestForm.controls.LocationId.value == item.Id  }\" *ngFor=\"let item of locationList\" (click)=\"locationChange(item)\">{{item.Name}}</button>\r\n                        </div>\r\n                        <div *ngIf=\"maintenanceRequestForm.controls.LocationId.invalid && (maintenanceRequestForm.controls.LocationId.dirty || maintenanceRequestForm.controls.LocationId.touched)\">\r\n                            <small class=\"text-danger\" *ngIf=\"maintenanceRequestForm.controls.LocationId.errors.required\">\r\n                                Location is required.\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Room\">Room<small class=\"text-danger\">*</small></label>\r\n                        <select class=\"form-control\" formControlName=\"RoomId\" (ngModelChange)=\"updateRoomSelect(roomList, maintenanceRequestForm.controls.RoomId.value, maintenanceRequestForm.controls.RoomName)\">\r\n                            <option value=\"0\">Select Room...</option>\r\n                            <option *ngFor=\"let item of roomList\" [value]=\"item.Id\">{{item.Name}}</option>\r\n                        </select>\r\n                        <div *ngIf=\"maintenanceRequestForm.controls.RoomId.invalid && (maintenanceRequestForm.controls.RoomId.dirty || maintenanceRequestForm.controls.RoomId.touched)\">\r\n                            <small class=\"text-danger\" *ngIf=\"maintenanceRequestForm.controls.RoomId.errors.required\">\r\n                                Room is required.\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Priority\">Priority<small class=\"text-danger\">*</small></label>\r\n                        <div class=\"btn-cont\">\r\n                            <button class=\"status-btn\" [ngClass]=\"{ 'status-active' : maintenanceRequestForm.controls.MaintenancePriorityId.value == item.Id  }\" *ngFor=\"let item of maintenancePriorityList\" (click)=\"priorityChange(item)\">{{item.Name}}</button>\r\n                        </div>\r\n                        <div *ngIf=\"maintenanceRequestForm.controls.MaintenancePriorityId.invalid && (maintenanceRequestForm.controls.MaintenancePriorityId.dirty || maintenanceRequestForm.controls.MaintenancePriorityId.touched)\">\r\n                            <small class=\"text-danger\" *ngIf=\"maintenanceRequestForm.controls.MaintenancePriorityId.errors.required\">\r\n                                Priority is required.\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Description\">Issue To Fix<small class=\"text-danger\">*</small></label>\r\n                        <textarea class=\"form-control\" formControlName=\"Description\"></textarea>\r\n                        <div *ngIf=\"maintenanceRequestForm.controls.Description.invalid && (maintenanceRequestForm.controls.Description.dirty || maintenanceRequestForm.controls.Description.touched)\">\r\n                            <small class=\"text-danger\" *ngIf=\"maintenanceRequestForm.controls.Description.errors.required\">\r\n                                Description is required.\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Description\">Attach Photo</label>\r\n                        <div class=\"custom-file\">\r\n                            <input type=\"file\" accept='image/*' class=\"custom-file-input\" id=\"AddPhotos\" (change)=\"handleFileInput($event.target.files)\">\r\n                            <label class=\"custom-file-label\" for=\"AddPhotos\">Choose file...</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <img [src]=\"serviceImage.Image\" height=\"200\" class=\"img-fluid img-thumbnail\" *ngIf=\"serviceImage.Image\" style=\"height: 200px; width:200px;\" (click)=\"showImage()\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Status\">Status<small class=\"text-danger\">*</small></label>\r\n                        <div class=\"btn-cont\">\r\n                            <button class=\"status-btn\" [ngClass]=\"{ 'status-active' : maintenanceRequestForm.controls.MaintenanceIssueStatusId.value == item.Id  }\" *ngFor=\"let item of maintenanceIssueStatusList\" (click)=\"statusChange(item)\">{{item.Name}}</button>\r\n                        </div>\r\n                        <div *ngIf=\"maintenanceRequestForm.controls.MaintenanceIssueStatusId.invalid && (maintenanceRequestForm.controls.MaintenanceIssueStatusId.dirty || maintenanceRequestForm.controls.MaintenanceIssueStatusId.touched)\">\r\n                            <small class=\"text-danger\" *ngIf=\"maintenanceRequestForm.controls.MaintenanceIssueStatusId.errors.required\">\r\n                                Status is required.\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"AssignTo\">Assign To<small class=\"text-danger\">*</small></label>\r\n                        <select class=\"form-control\" formControlName=\"AssignedEmployeeId\" (ngModelChange)=\"updateEmployeeSelect(employeeList, maintenanceRequestForm.controls.AssignedEmployeeId.value, maintenanceRequestForm.controls.AssignedEmployeeName)\">\r\n                            <option value=\"0\">Assign To...</option>\r\n                            <option *ngFor=\"let item of employeeList\" [value]=\"item.Id\">{{item.FirstName}}</option>\r\n                        </select>\r\n                        <div *ngIf=\"maintenanceRequestForm.controls.AssignedEmployeeId.invalid && (maintenanceRequestForm.controls.AssignedEmployeeId.dirty || maintenanceRequestForm.controls.AssignedEmployeeId.touched)\">\r\n                            <small class=\"text-danger\" *ngIf=\"maintenanceRequestForm.controls.AssignedEmployeeId.errors.required\">\r\n                                Assigned Employee is required.\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div class=\"tab-pane fade\" id=\"update\" role=\"tabpanel\" aria-labelledby=\"update-tab\">\r\n            <div class=\"form-group\" style=\"padding-bottom: 200px;\">\r\n                <div class=\"card mb-3\" *ngFor=\"let item of updateList\">\r\n                    <div class=\"card-header p-1\">\r\n                        <div>\r\n                            {{item.Comment}}\r\n                        </div>\r\n                        <small class=\"float-right\">\r\n                            Created By: {{item.CreatedByName}} at {{item.CreatedOnUtc | date: 'dd/MM/yyyy hh:mm' }}\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <form class=\"pt-2\" novalidate [formGroup]=\"maintenanceCommentForm\">\r\n                <div class=\"form-group mb-0 fixed-bottom\">\r\n                    <div class=\"pl-2 pr-2\">\r\n                        <div class=\"input-group mb-2\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"Comment\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-primary\" (click)=\"createComment()\">Send</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"fixed-top pt-2 pr-2\" style=\"margin-left: 35px;\">\r\n            <button class=\"btn btn-sm btn-info float-right\" (click)=\"create()\" *ngIf=\"action == 'Add'\">Save</button>\r\n            <button class=\"btn btn-sm btn-info float-right\" (click)=\"update()\" *ngIf=\"action == 'Edit'\">Save</button>\r\n            <button class=\"btn btn-sm float-right mr-2\" (click)=\"onlist()\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"workOrderModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"workOrderModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"workOrderModalLabel\">{{modalTitle}}</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div id=\"filtermodal\">\r\n                    <div id=\"filterByLocation\" [ngClass]=\"{ 'd-none' : filterProperty != 'filterByLocation' }\">\r\n                        <ul class=\"nav flex-column\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link bg-light\" (click)=\"doFilter('',null)\">None...</a>\r\n                            </li>\r\n                            <li class=\"nav-item\" *ngFor=\"let item of locationList\">\r\n                                <a class=\"nav-link bg-light\" (click)=\"doFilter('LocationId',item)\">{{item.Name}}</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div id=\"filterByAssignedEmployee\" [ngClass]=\"{ 'd-none' : filterProperty != 'filterByAssignedEmployee' }\">\r\n                        <ul class=\"nav flex-column\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link bg-light\" (click)=\"doFilter('',null)\">None...</a>\r\n                            </li>\r\n                            <li class=\"nav-item\" *ngFor=\"let item of employeeList\">\r\n                                <a class=\"nav-link bg-light\" (click)=\"doFilter('AssignedEmployeeId',item)\">{{item.NickName}}</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div id=\"filterByMaintenanceIssueStatus\" [ngClass]=\"{ 'd-none' : filterProperty != 'filterByMaintenanceIssueStatus' }\">\r\n                        <ul class=\"nav flex-column\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link bg-light\" (click)=\"doFilter('',null)\">None...</a>\r\n                            </li>\r\n                            <li class=\"nav-item\" *ngFor=\"let item of maintenanceIssueStatusList\">\r\n                                <a class=\"nav-link bg-light\" (click)=\"doFilter('MaintenanceIssueStatusId',item)\">{{item.Name}}</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div id=\"filterByMaintenancePriority\" [ngClass]=\"{ 'd-none' : filterProperty != 'filterByMaintenancePriority' }\">\r\n                        <ul class=\"nav flex-column\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link bg-light\" (click)=\"doFilter('',null)\">None...</a>\r\n                            </li>\r\n                            <li class=\"nav-item\" *ngFor=\"let item of maintenancePriorityList\">\r\n                                <a class=\"nav-link bg-light\" (click)=\"doFilter('MaintenancePriorityId',item)\">{{item.Name}}</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div id=\"filterByRoom\" [ngClass]=\"{ 'd-none' : filterProperty != 'filterByRoom' }\">\r\n                        <ul class=\"nav flex-column\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link bg-light\" (click)=\"doFilter('',null)\">None...</a>\r\n                            </li>\r\n                            <li class=\"nav-item\" *ngFor=\"let item of roomList\">\r\n                                <a class=\"nav-link bg-light\" (click)=\"doFilter('RoomId',item)\">{{item.Name}}</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div id=\"sortmodal\">\r\n                    <ul class=\"nav flex-column\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link bg-light\" (click)=\"doSort('LocationId')\">Location</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link bg-light\" (click)=\"doSort('AssignedEmployeeId')\">AssignedEmployee</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link bg-light\" (click)=\"doSort('LocationId')\">Location</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link bg-light\" (click)=\"doSort('MaintenanceIssueStatusId')\">MaintenanceIssueStatus</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link bg-light\" (click)=\"doSort('MaintenancePriorityId')\">MaintenancePriority</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link bg-light\" (click)=\"doSort('RoomId')\">Room</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"deleteRequestModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteRequestModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"deleteRequestModalCenterTitle\">Delete Request</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Are you sure you want to delete Request?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"imageModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"imageModalModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"imageModalModalCenterTitle\">Image Attached</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div><img [src]=\"serviceImage.Image\" height=\"400\" width=\"400\" class=\"img-fluid img-thumbnail {{rotate}}\" *ngIf=\"serviceImage.Image\"></div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"rotateImage('left')\"><i class=\"fas fa-undo\"></i></button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"rotateImage('right')\"><i class=\"fas fa-redo-alt\"></i></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user/workorder/workorder.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/workorder/workorder.component.ts ***!
  \******************************************************************/
/*! exports provided: WorkorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkorderComponent", function() { return WorkorderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_maintenanceservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/maintenanceservice.service */ "./src/app/services/maintenanceservice.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_maintenanceissuestatus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/maintenanceissuestatus.service */ "./src/app/services/maintenanceissuestatus.service.ts");
/* harmony import */ var _services_maintenancepriority_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/maintenancepriority.service */ "./src/app/services/maintenancepriority.service.ts");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _services_maintenanceserviceimages_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/maintenanceserviceimages.service */ "./src/app/services/maintenanceserviceimages.service.ts");
/* harmony import */ var _services_maintenanceservicestatus_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/maintenanceservicestatus.service */ "./src/app/services/maintenanceservicestatus.service.ts");











var WorkorderComponent = /** @class */ (function () {
    function WorkorderComponent(maintenanceserviceService, locationService, employeeService, maintenanceissuestatusService, maintenancepriorityService, roomService, maintenanceserviceimagesService, maintenanceservicestatusService) {
        this.maintenanceserviceService = maintenanceserviceService;
        this.locationService = locationService;
        this.employeeService = employeeService;
        this.maintenanceissuestatusService = maintenanceissuestatusService;
        this.maintenancepriorityService = maintenancepriorityService;
        this.roomService = roomService;
        this.maintenanceserviceimagesService = maintenanceserviceimagesService;
        this.maintenanceservicestatusService = maintenanceservicestatusService;
        this.modalTitle = "";
        this.filterProperty = "";
        this.filterString = "";
        this.action = "List";
        this.serviceImage = {
            errorMessage: "",
            errorStatus: false,
            Id: 0,
            Image: "",
            MaintenanceServiceId: 0
        };
        this.maintenanceCommentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            MaintenanceServiceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.maintenanceRequestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            LocationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            LocationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            AssignedEmployeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            AssignedEmployeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Deleted: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            MaintenanceIssueStatusId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            MaintenanceIssueStatusName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            MaintenancePriorityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            MaintenancePriorityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            DaysToFinish: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            RoomId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            RoomName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.sortorder = false;
        this.rotate = "";
        this.angle = 0;
    }
    WorkorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maintenanceserviceService.listFiltered("Deleted=0 AND MaintenanceIssueStatusId IN (1,3) ORDER BY MaintenanceIssueStatusId,CreatedOnUtc DESC")
            .subscribe(function (r) {
            _this.maintenanceRequestList = r;
        });
        this.locationService.listAll()
            .subscribe(function (r) {
            _this.locationList = r;
        });
        this.employeeService.listAll()
            .subscribe(function (r) {
            _this.employeeList = r;
        });
        this.maintenanceissuestatusService.listAll()
            .subscribe(function (r) {
            _this.maintenanceIssueStatusList = r;
        });
        this.maintenancepriorityService.listAll()
            .subscribe(function (r) {
            _this.maintenancePriorityList = r;
        });
        this.roomService.listAll()
            .subscribe(function (r) {
            _this.roomList = r;
        });
    };
    WorkorderComponent.prototype.oncreate = function () {
        this.action = "Add";
        this.maintenanceRequestForm.reset();
        this.maintenanceRequestForm.controls["RoomId"].setValue(0);
        this.maintenanceRequestForm.controls["RoomName"].setValue("");
        this.maintenanceRequestForm.controls["AssignedEmployeeId"].setValue(3);
        this.maintenanceRequestForm.controls["AssignedEmployeeName"].setValue("Luke");
        this.maintenanceRequestForm.controls["MaintenanceIssueStatusId"].setValue(1);
        this.maintenanceRequestForm.controls["MaintenanceIssueStatusName"].setValue("Pending");
        this.maintenanceRequestForm.controls["MaintenancePriorityId"].setValue(2);
        this.maintenanceRequestForm.controls["MaintenancePriorityName"].setValue("Medium");
        this.serviceImage = {
            errorMessage: "",
            errorStatus: false,
            Id: 0,
            Image: "",
            MaintenanceServiceId: 0
        };
        $("#add").show(500);
        $("#list").hide(500);
    };
    WorkorderComponent.prototype.onupdate = function (item) {
        var _this = this;
        this.action = "Edit";
        this.maintenanceRequestForm.reset();
        $("#add").show(500);
        $("#list").hide(500);
        this.maintenanceRequestForm.controls["Id"].setValue(item.Id);
        this.maintenanceRequestForm.controls["LocationId"].setValue(item.LocationId);
        this.maintenanceRequestForm.controls["LocationName"].setValue(item.LocationName);
        this.maintenanceRequestForm.controls["AssignedEmployeeId"].setValue(item.AssignedEmployeeId);
        this.maintenanceRequestForm.controls["AssignedEmployeeName"].setValue(item.AssignedEmployeeName);
        this.maintenanceRequestForm.controls["Deleted"].setValue(item.Deleted);
        this.maintenanceRequestForm.controls["MaintenanceIssueStatusId"].setValue(item.MaintenanceIssueStatusId);
        this.maintenanceRequestForm.controls["MaintenanceIssueStatusName"].setValue(item.MaintenanceIssueStatusName);
        this.maintenanceRequestForm.controls["MaintenancePriorityId"].setValue(item.MaintenancePriorityId);
        this.maintenanceRequestForm.controls["MaintenancePriorityName"].setValue(item.MaintenancePriorityName);
        this.maintenanceRequestForm.controls["DaysToFinish"].setValue(item.DaysToFinish);
        this.maintenanceRequestForm.controls["RoomId"].setValue(item.RoomId);
        this.maintenanceRequestForm.controls["RoomName"].setValue(item.RoomName);
        this.maintenanceRequestForm.controls["Comment"].setValue(item.Comment);
        this.maintenanceRequestForm.controls["Description"].setValue(item.Description);
        this.maintenanceCommentForm.controls["MaintenanceServiceId"].setValue(item.Id);
        this.maintenanceserviceimagesService.listFiltered("MaintenanceServiceId=" + item.Id)
            .subscribe(function (r) {
            if (r[0]) {
                _this.serviceImage = r[0];
            }
        });
        this.maintenanceservicestatusService.listFiltered("MaintenanceServiceId=" + item.Id)
            .subscribe(function (r) {
            _this.updateList = r;
        });
    };
    WorkorderComponent.prototype.oncompleted = function () {
        var _this = this;
        var item = {
            Id: this.maintenanceRequestForm.controls["Id"].value,
            LocationId: this.maintenanceRequestForm.controls["LocationId"].value,
            LocationName: this.maintenanceRequestForm.controls["LocationName"].value,
            AssignedEmployeeId: this.maintenanceRequestForm.controls["AssignedEmployeeId"].value,
            AssignedEmployeeName: this.maintenanceRequestForm.controls["AssignedEmployeeName"].value,
            Deleted: false,
            MaintenanceIssueStatusId: 2,
            MaintenanceIssueStatusName: "Completed",
            MaintenancePriorityId: this.maintenanceRequestForm.controls["MaintenancePriorityId"].value,
            MaintenancePriorityName: this.maintenanceRequestForm.controls["MaintenancePriorityName"].value,
            DaysToFinish: 5,
            RoomId: this.maintenanceRequestForm.controls["RoomId"].value,
            RoomName: this.maintenanceRequestForm.controls["RoomName"].value,
            Comment: this.maintenanceRequestForm.controls["Comment"].value,
            Description: this.maintenanceRequestForm.controls["Description"].value,
            CreatedOnUtc: "",
            UpdatedOnUtc: "",
            errorMessage: "",
            errorStatus: false,
        };
        this.maintenanceserviceService.update(item)
            .subscribe(function (r) {
            _this.maintenanceRequestList.forEach(function (i, index) {
                if (i.Id == item.Id) {
                    _this.maintenanceRequestList.splice(index, 1);
                }
            });
        });
    };
    WorkorderComponent.prototype.ondelete = function (item) {
        this.maintenanceRequestForm.controls["Id"].setValue(item.Id);
        $("#deleteRequestModal").modal("show");
    };
    WorkorderComponent.prototype.onlist = function () {
        this.action = "List";
        $("#add").hide(500);
        $("#list").show(500);
    };
    WorkorderComponent.prototype.statusChange = function (status) {
        this.maintenanceRequestForm.controls["MaintenanceIssueStatusId"].setValue(status.Id);
        this.maintenanceRequestForm.controls["MaintenanceIssueStatusName"].setValue(status.Name);
    };
    WorkorderComponent.prototype.locationChange = function (location) {
        this.maintenanceRequestForm.controls["LocationId"].setValue(location.Id);
        this.maintenanceRequestForm.controls["LocationName"].setValue(location.Name);
    };
    WorkorderComponent.prototype.priorityChange = function (priority) {
        this.maintenanceRequestForm.controls["MaintenancePriorityId"].setValue(priority.Id);
        this.maintenanceRequestForm.controls["MaintenancePriorityName"].setValue(priority.Name);
    };
    WorkorderComponent.prototype.updateRoomSelect = function (array, Id, control) {
        var item = array.filter(function (h) { return h.Id == Id; })[0];
        if (item != undefined) {
            control.setValue(item["Name"]);
        }
    };
    WorkorderComponent.prototype.updateEmployeeSelect = function (array, Id, control) {
        var item = array.filter(function (h) { return h.Id == Id; })[0];
        if (item != undefined) {
            control.setValue(item["FirstName"]);
        }
    };
    WorkorderComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.serviceImage.Image = reader.result;
        };
    };
    WorkorderComponent.prototype.showImage = function () {
        $("#imageModal").modal("show");
    };
    WorkorderComponent.prototype.create = function () {
        var _this = this;
        if (this.maintenanceRequestForm.valid) {
            var item = {
                Id: 1,
                LocationId: this.maintenanceRequestForm.controls["LocationId"].value,
                LocationName: this.maintenanceRequestForm.controls["LocationName"].value,
                AssignedEmployeeId: this.maintenanceRequestForm.controls["AssignedEmployeeId"].value,
                AssignedEmployeeName: this.maintenanceRequestForm.controls["AssignedEmployeeName"].value,
                Deleted: false,
                MaintenanceIssueStatusId: this.maintenanceRequestForm.controls["MaintenanceIssueStatusId"].value,
                MaintenanceIssueStatusName: this.maintenanceRequestForm.controls["MaintenanceIssueStatusName"].value,
                MaintenancePriorityId: this.maintenanceRequestForm.controls["MaintenancePriorityId"].value,
                MaintenancePriorityName: this.maintenanceRequestForm.controls["MaintenancePriorityName"].value,
                DaysToFinish: 5,
                RoomId: this.maintenanceRequestForm.controls["RoomId"].value,
                RoomName: this.maintenanceRequestForm.controls["RoomName"].value,
                Comment: this.maintenanceRequestForm.controls["Comment"].value,
                Description: this.maintenanceRequestForm.controls["Description"].value,
                CreatedOnUtc: "",
                UpdatedOnUtc: "",
                errorMessage: "",
                errorStatus: false,
            };
            this.maintenanceserviceService.create(item)
                .subscribe(function (r) {
                if (_this.serviceImage.Image) {
                    var imgitem = {
                        Id: 0,
                        MaintenanceServiceId: r.Id,
                        Image: _this.serviceImage.Image,
                        errorMessage: "",
                        errorStatus: false
                    };
                    _this.maintenanceserviceimagesService.create(imgitem)
                        .subscribe(function (ir) {
                    });
                }
                _this.maintenanceRequestList.splice(0, 0, r);
                _this.onlist();
            });
        }
        else {
            this.maintenanceRequestForm.controls["LocationId"].markAsDirty();
            this.maintenanceRequestForm.controls["AssignedEmployeeId"].markAsDirty();
            this.maintenanceRequestForm.controls["MaintenanceIssueStatusId"].markAsDirty();
            this.maintenanceRequestForm.controls["MaintenancePriorityId"].markAsDirty();
            this.maintenanceRequestForm.controls["RoomId"].markAsDirty();
            this.maintenanceRequestForm.controls["Description"].markAsDirty();
        }
    };
    WorkorderComponent.prototype.update = function () {
        var _this = this;
        if (this.maintenanceRequestForm.valid) {
            var item_1 = {
                Id: this.maintenanceRequestForm.controls["Id"].value,
                LocationId: this.maintenanceRequestForm.controls["LocationId"].value,
                LocationName: this.maintenanceRequestForm.controls["LocationName"].value,
                AssignedEmployeeId: this.maintenanceRequestForm.controls["AssignedEmployeeId"].value,
                AssignedEmployeeName: this.maintenanceRequestForm.controls["AssignedEmployeeName"].value,
                Deleted: false,
                MaintenanceIssueStatusId: this.maintenanceRequestForm.controls["MaintenanceIssueStatusId"].value,
                MaintenanceIssueStatusName: this.maintenanceRequestForm.controls["MaintenanceIssueStatusName"].value,
                MaintenancePriorityId: this.maintenanceRequestForm.controls["MaintenancePriorityId"].value,
                MaintenancePriorityName: this.maintenanceRequestForm.controls["MaintenancePriorityName"].value,
                DaysToFinish: 5,
                RoomId: this.maintenanceRequestForm.controls["RoomId"].value,
                RoomName: this.maintenanceRequestForm.controls["RoomName"].value,
                Comment: this.maintenanceRequestForm.controls["Comment"].value,
                Description: this.maintenanceRequestForm.controls["Description"].value,
                CreatedOnUtc: "",
                UpdatedOnUtc: "",
                errorMessage: "",
                errorStatus: false,
            };
            this.maintenanceserviceService.update(item_1)
                .subscribe(function (r) {
                if (_this.serviceImage.Id == 0) {
                    _this.serviceImage.MaintenanceServiceId = item_1.Id;
                    _this.maintenanceserviceimagesService.create(_this.serviceImage)
                        .subscribe(function (ir) {
                    });
                }
                else {
                    if (_this.serviceImage.Image) {
                        _this.maintenanceserviceimagesService.update(_this.serviceImage)
                            .subscribe(function (ir) {
                        });
                    }
                }
                _this.maintenanceRequestList.forEach(function (i, index) {
                    if (i.Id == item_1.Id) {
                        _this.maintenanceRequestList.splice(index, 1, item_1);
                    }
                });
                _this.onlist();
            });
        }
        else {
            this.maintenanceRequestForm.controls["LocationId"].markAsDirty();
            this.maintenanceRequestForm.controls["AssignedEmployeeId"].markAsDirty();
            this.maintenanceRequestForm.controls["MaintenanceIssueStatusId"].markAsDirty();
            this.maintenanceRequestForm.controls["MaintenancePriorityId"].markAsDirty();
            this.maintenanceRequestForm.controls["RoomId"].markAsDirty();
            this.maintenanceRequestForm.controls["Description"].markAsDirty();
        }
    };
    WorkorderComponent.prototype.delete = function () {
        var _this = this;
        var item = {
            Id: this.maintenanceRequestForm.controls["Id"].value,
            LocationId: this.maintenanceRequestForm.controls["LocationId"].value,
            LocationName: this.maintenanceRequestForm.controls["LocationName"].value,
            AssignedEmployeeId: this.maintenanceRequestForm.controls["AssignedEmployeeId"].value,
            AssignedEmployeeName: this.maintenanceRequestForm.controls["AssignedEmployeeName"].value,
            Deleted: true,
            MaintenanceIssueStatusId: this.maintenanceRequestForm.controls["MaintenanceIssueStatusId"].value,
            MaintenanceIssueStatusName: this.maintenanceRequestForm.controls["MaintenanceIssueStatusName"].value,
            MaintenancePriorityId: this.maintenanceRequestForm.controls["MaintenancePriorityId"].value,
            MaintenancePriorityName: this.maintenanceRequestForm.controls["MaintenancePriorityName"].value,
            DaysToFinish: 5,
            RoomId: this.maintenanceRequestForm.controls["RoomId"].value,
            RoomName: this.maintenanceRequestForm.controls["RoomName"].value,
            Comment: this.maintenanceRequestForm.controls["Comment"].value,
            Description: this.maintenanceRequestForm.controls["Description"].value,
            CreatedOnUtc: "",
            UpdatedOnUtc: "",
            errorMessage: "",
            errorStatus: false,
        };
        this.maintenanceserviceService.update(item)
            .subscribe(function (r) {
            _this.maintenanceRequestList.forEach(function (i, index) {
                if (i.Id == item.Id) {
                    _this.maintenanceRequestList.splice(index, 1);
                }
            });
        });
        $("#deleteRequestModal").modal("hide");
    };
    WorkorderComponent.prototype.createComment = function () {
        var _this = this;
        debugger;
        if (this.maintenanceCommentForm.valid) {
            var userId = localStorage.getItem("UserId");
            var item = {
                Id: 0,
                MaintenanceServiceId: this.maintenanceCommentForm.controls["MaintenanceServiceId"].value,
                Comment: this.maintenanceCommentForm.controls["Comment"].value,
                errorMessage: "",
                errorStatus: false,
                CreatedById: userId,
                CreatedByName: "",
                CreatedOnUtc: "",
                UpdatedOnUtc: ""
            };
            this.maintenanceservicestatusService.create(item)
                .subscribe(function (r) {
                _this.updateList.splice(_this.updateList.length, 0, r);
                _this.maintenanceCommentForm.controls["Comment"].setValue("");
            });
        }
        else {
            this.maintenanceCommentForm.controls["Comment"].markAsDirty();
        }
    };
    WorkorderComponent.prototype.filter = function (property) {
        this.filterProperty = "filterBy" + property;
        $("#workOrderModal").modal("show");
        $("#sortmodal").hide();
        $("#filtermodal").show();
    };
    WorkorderComponent.prototype.doFilter = function (filterName, item) {
        var _this = this;
        if (filterName == "" && item == null) {
            this.filterString = "";
            this.maintenanceserviceService.listFiltered("Deleted=0 AND MaintenanceIssueStatusId IN (1,3) ORDER BY MaintenanceIssueStatusId,CreatedOnUtc DESC")
                .subscribe(function (r) {
                _this.maintenanceRequestList = r;
            });
        }
        else {
            if (filterName == "AssignedEmployeeId") {
                this.filterString = filterName.slice(0, -2) + "=" + item.NickName;
            }
            else {
                this.filterString = filterName.slice(0, -2) + "=" + item.Name;
            }
            this.maintenanceserviceService.listFiltered("Deleted=0 AND " + filterName + " = " + item.Id)
                .subscribe(function (r) {
                _this.maintenanceRequestList = r;
            });
        }
        $("#workOrderModal").modal("hide");
    };
    WorkorderComponent.prototype.sort = function () {
        $("#workOrderModal").modal("show");
        $("#sortmodal").show();
        $("#filtermodal").hide();
    };
    WorkorderComponent.prototype.doSort = function (property) {
        this.sortProperty = property.slice(0, -2);
        this.sortorder == true ? this.sortorder = false : this.sortorder = true;
        if (this.sortorder) {
            this.maintenanceRequestList.sort(function (a, b) { return a[property] !== b[property] ? a[property] < b[property] ? -1 : 1 : 0; });
        }
        else {
            this.maintenanceRequestList.sort(function (a, b) { return b[property] !== a[property] ? b[property] < a[property] ? -1 : 1 : 0; });
        }
        $("#workOrderModal").modal("hide");
    };
    WorkorderComponent.prototype.rotateImage = function (direction) {
        if (direction == "left") {
            if (this.angle >= 90) {
                this.angle = this.angle - 90;
            }
        }
        if (direction == "right") {
            if (this.angle <= 270) {
                this.angle = this.angle + 90;
            }
        }
        this.rotate = "rotate" + this.angle;
    };
    WorkorderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workorder',
            template: __webpack_require__(/*! ./workorder.component.html */ "./src/app/components/user/workorder/workorder.component.html"),
            styles: [__webpack_require__(/*! ./workorder.component.css */ "./src/app/components/user/workorder/workorder.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_maintenanceservice_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceserviceService"], _services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"], _services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"],
            _services_maintenanceissuestatus_service__WEBPACK_IMPORTED_MODULE_6__["MaintenanceissuestatusService"], _services_maintenancepriority_service__WEBPACK_IMPORTED_MODULE_7__["MaintenancepriorityService"], _services_room_service__WEBPACK_IMPORTED_MODULE_8__["RoomService"],
            _services_maintenanceserviceimages_service__WEBPACK_IMPORTED_MODULE_9__["MaintenanceserviceimagesService"], _services_maintenanceservicestatus_service__WEBPACK_IMPORTED_MODULE_10__["MaintenanceservicestatusService"]])
    ], WorkorderComponent);
    return WorkorderComponent;
}());



/***/ }),

/***/ "./src/app/components/vendor/vendor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/vendor/vendor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVuZG9yL3ZlbmRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/vendor/vendor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/vendor/vendor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  vendor works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/vendor/vendor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/vendor/vendor.component.ts ***!
  \*******************************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VendorComponent = /** @class */ (function () {
    function VendorComponent() {
    }
    VendorComponent.prototype.ngOnInit = function () {
    };
    VendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor',
            template: __webpack_require__(/*! ./vendor.component.html */ "./src/app/components/vendor/vendor.component.html"),
            styles: [__webpack_require__(/*! ./vendor.component.css */ "./src/app/components/vendor/vendor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VendorComponent);
    return VendorComponent;
}());



/***/ }),

/***/ "./src/app/http-error-handler.service.ts":
/*!***********************************************!*\
  !*** ./src/app/http-error-handler.service.ts ***!
  \***********************************************/
/*! exports provided: HttpErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandlerService", function() { return HttpErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_components_alertnotification_alertnotification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-components/alertnotification/alertnotification.component */ "./src/app/shared-components/alertnotification/alertnotification.component.ts");




/** Handles HttpClient errors */
var HttpErrorHandlerService = /** @class */ (function () {
    function HttpErrorHandlerService(alertnotificationComponent) {
        var _this = this;
        this.alertnotificationComponent = alertnotificationComponent;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
        this.createHandleSuccess = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, response) {
                if (operation === void 0) { operation = 'operation'; }
                return _this.handleSuccess(serviceName, operation, response);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandlerService.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            //this.addErrorMessage(`${serviceName}: ${operation} failed: ${message}`);
            _this.alertnotificationComponent.setErrorMessage("serviceName: " + serviceName + ", operation: " + operation + ", failed with message: " + message);
            // Let the app keep running by returning a safe result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    HttpErrorHandlerService.prototype.handleSuccess = function (serviceName, operation, response) {
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (!response.errorStatus) {
            return response.data;
        }
        else {
            var message = "server returned code with error \"" + response.errorMessage + "\"";
            //this.addErrorMessage(`${serviceName}: ${operation} failed: ${message}`);
            this.alertnotificationComponent.setSuccessMessage("serviceName: " + serviceName + ", operation: " + operation + ", success with message: " + message);
        }
    };
    HttpErrorHandlerService.prototype.addErrorMessage = function (error) {
    };
    HttpErrorHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_components_alertnotification_alertnotification_component__WEBPACK_IMPORTED_MODULE_3__["AlertnotificationComponent"]])
    ], HttpErrorHandlerService);
    return HttpErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: Employee, Email, EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());

var Email = /** @class */ (function () {
    function Email() {
    }
    return Email;
}());

var EmployeeService = /** @class */ (function () {
    function EmployeeService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/employee";
        this.handleError = HttpErrorHandlerService.createHandleError('EmployeeService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('EmployeeService');
    }
    EmployeeService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered wherestring=" + whereString)));
    };
    EmployeeService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    EmployeeService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    EmployeeService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    EmployeeService.prototype.sendEmail = function () {
        var _this = this;
        var data = { Name: "Sejal", EmailAddress: "sejaldhaval@gmail.com", Phone: "8325617759", Message: "Message" };
        var httpOptions1 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/sendemail/send", data, httpOptions1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    EmployeeService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    EmployeeService.prototype.delete = function (Id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/delete/" + Id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/employees-schedule-week.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/employees-schedule-week.service.ts ***!
  \*************************************************************/
/*! exports provided: EmployeeScheduleWeek, EmployeeScheduleWeekService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeScheduleWeek", function() { return EmployeeScheduleWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeScheduleWeekService", function() { return EmployeeScheduleWeekService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var EmployeeScheduleWeek = /** @class */ (function () {
    function EmployeeScheduleWeek() {
    }
    return EmployeeScheduleWeek;
}());

var EmployeeScheduleWeekService = /** @class */ (function () {
    function EmployeeScheduleWeekService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/employeescheduleweek";
        this.handleError = HttpErrorHandlerService.createHandleError('EmployeeScheduleWeekService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('EmployeeScheduleWeekService');
    }
    EmployeeScheduleWeekService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered wherestring=" + whereString)));
    };
    EmployeeScheduleWeekService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    EmployeeScheduleWeekService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    EmployeeScheduleWeekService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    EmployeeScheduleWeekService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    EmployeeScheduleWeekService.prototype.delete = function (Id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/delete/" + Id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    EmployeeScheduleWeekService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], EmployeeScheduleWeekService);
    return EmployeeScheduleWeekService;
}());



/***/ }),

/***/ "./src/app/services/employees-schedule.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/employees-schedule.service.ts ***!
  \********************************************************/
/*! exports provided: EmployeeSchedule, EmployeeScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSchedule", function() { return EmployeeSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeScheduleService", function() { return EmployeeScheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var EmployeeSchedule = /** @class */ (function () {
    function EmployeeSchedule() {
    }
    return EmployeeSchedule;
}());

var EmployeeScheduleService = /** @class */ (function () {
    function EmployeeScheduleService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/employeeschedule";
        this.handleError = HttpErrorHandlerService.createHandleError('EmployeeScheduleService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('EmployeeScheduleService');
    }
    EmployeeScheduleService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    EmployeeScheduleService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    EmployeeScheduleService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    EmployeeScheduleService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    EmployeeScheduleService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    EmployeeScheduleService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    EmployeeScheduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], EmployeeScheduleService);
    return EmployeeScheduleService;
}());



/***/ }),

/***/ "./src/app/services/inventoryitem.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/inventoryitem.service.ts ***!
  \***************************************************/
/*! exports provided: InventoryItem, InventoryitemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryItem", function() { return InventoryItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryitemService", function() { return InventoryitemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var InventoryItem = /** @class */ (function () {
    function InventoryItem() {
    }
    return InventoryItem;
}());

var InventoryitemService = /** @class */ (function () {
    function InventoryitemService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/inventoryitem";
        this.handleError = HttpErrorHandlerService.createHandleError('InventoryItemService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('InventoryItemService');
    }
    InventoryitemService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    InventoryitemService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    InventoryitemService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    InventoryitemService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    InventoryitemService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    InventoryitemService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    InventoryitemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], InventoryitemService);
    return InventoryitemService;
}());



/***/ }),

/***/ "./src/app/services/inventorytype.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/inventorytype.service.ts ***!
  \***************************************************/
/*! exports provided: InventoryType, InventorytypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryType", function() { return InventoryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorytypeService", function() { return InventorytypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var InventoryType = /** @class */ (function () {
    function InventoryType() {
    }
    return InventoryType;
}());

var InventorytypeService = /** @class */ (function () {
    function InventorytypeService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/inventorytype";
        this.handleError = HttpErrorHandlerService.createHandleError('InventoryTypeService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('InventoryTypeService');
    }
    InventorytypeService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    InventorytypeService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    InventorytypeService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    InventorytypeService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    InventorytypeService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    InventorytypeService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    InventorytypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], InventorytypeService);
    return InventorytypeService;
}());



/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: Location, LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());

var LocationService = /** @class */ (function () {
    function LocationService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/location";
        this.handleError = HttpErrorHandlerService.createHandleError('LocationService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('LocationService');
    }
    LocationService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    LocationService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    LocationService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    LocationService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    LocationService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    LocationService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/services/maintenanceissuestatus.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/maintenanceissuestatus.service.ts ***!
  \************************************************************/
/*! exports provided: MaintenanceIssueStatus, MaintenanceissuestatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceIssueStatus", function() { return MaintenanceIssueStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceissuestatusService", function() { return MaintenanceissuestatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MaintenanceIssueStatus = /** @class */ (function () {
    function MaintenanceIssueStatus() {
    }
    return MaintenanceIssueStatus;
}());

var MaintenanceissuestatusService = /** @class */ (function () {
    function MaintenanceissuestatusService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/maintenanceissuestatus";
        this.handleError = HttpErrorHandlerService.createHandleError('MaintenanceIssueStatusService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('MaintenanceIssueStatusService');
    }
    MaintenanceissuestatusService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    MaintenanceissuestatusService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    MaintenanceissuestatusService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    MaintenanceissuestatusService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    MaintenanceissuestatusService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    MaintenanceissuestatusService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    MaintenanceissuestatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], MaintenanceissuestatusService);
    return MaintenanceissuestatusService;
}());



/***/ }),

/***/ "./src/app/services/maintenancepriority.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/maintenancepriority.service.ts ***!
  \*********************************************************/
/*! exports provided: MaintenancePriority, MaintenancepriorityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancePriority", function() { return MaintenancePriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancepriorityService", function() { return MaintenancepriorityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MaintenancePriority = /** @class */ (function () {
    function MaintenancePriority() {
    }
    return MaintenancePriority;
}());

var MaintenancepriorityService = /** @class */ (function () {
    function MaintenancepriorityService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/maintenancepriority";
        this.handleError = HttpErrorHandlerService.createHandleError('MaintenancePriorityService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('MaintenancePriorityService');
    }
    MaintenancepriorityService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    MaintenancepriorityService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    MaintenancepriorityService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    MaintenancepriorityService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    MaintenancepriorityService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    MaintenancepriorityService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    MaintenancepriorityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], MaintenancepriorityService);
    return MaintenancepriorityService;
}());



/***/ }),

/***/ "./src/app/services/maintenanceservice.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/maintenanceservice.service.ts ***!
  \********************************************************/
/*! exports provided: MaintenanceService, MaintenanceserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceService", function() { return MaintenanceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceserviceService", function() { return MaintenanceserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MaintenanceService = /** @class */ (function () {
    function MaintenanceService() {
    }
    return MaintenanceService;
}());

var MaintenanceserviceService = /** @class */ (function () {
    function MaintenanceserviceService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/maintenanceservice";
        this.handleError = HttpErrorHandlerService.createHandleError('MaintenanceServiceService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('MaintenanceServiceService');
    }
    MaintenanceserviceService.prototype.listFiltered = function (wehereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + wehereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered wehereString=" + wehereString)));
    };
    MaintenanceserviceService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    MaintenanceserviceService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    MaintenanceserviceService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    MaintenanceserviceService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    MaintenanceserviceService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    MaintenanceserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], MaintenanceserviceService);
    return MaintenanceserviceService;
}());



/***/ }),

/***/ "./src/app/services/maintenanceserviceimages.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/maintenanceserviceimages.service.ts ***!
  \**************************************************************/
/*! exports provided: MaintenanceServiceImages, MaintenanceserviceimagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceServiceImages", function() { return MaintenanceServiceImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceserviceimagesService", function() { return MaintenanceserviceimagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MaintenanceServiceImages = /** @class */ (function () {
    function MaintenanceServiceImages() {
    }
    return MaintenanceServiceImages;
}());

var MaintenanceserviceimagesService = /** @class */ (function () {
    function MaintenanceserviceimagesService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/maintenanceserviceimages";
        this.handleError = HttpErrorHandlerService.createHandleError('MaintenanceServiceImagesService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('MaintenanceServiceImagesService');
    }
    MaintenanceserviceimagesService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    MaintenanceserviceimagesService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    MaintenanceserviceimagesService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    MaintenanceserviceimagesService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    MaintenanceserviceimagesService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    MaintenanceserviceimagesService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    MaintenanceserviceimagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], MaintenanceserviceimagesService);
    return MaintenanceserviceimagesService;
}());



/***/ }),

/***/ "./src/app/services/maintenanceservicestatus.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/maintenanceservicestatus.service.ts ***!
  \**************************************************************/
/*! exports provided: MaintenanceServiceStatus, MaintenanceservicestatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceServiceStatus", function() { return MaintenanceServiceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceservicestatusService", function() { return MaintenanceservicestatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MaintenanceServiceStatus = /** @class */ (function () {
    function MaintenanceServiceStatus() {
    }
    return MaintenanceServiceStatus;
}());

var MaintenanceservicestatusService = /** @class */ (function () {
    function MaintenanceservicestatusService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/maintenanceservicestatus";
        this.handleError = HttpErrorHandlerService.createHandleError('MaintenanceServiceStatusService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('MaintenanceServiceStatusService');
    }
    MaintenanceservicestatusService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    MaintenanceservicestatusService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    MaintenanceservicestatusService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    MaintenanceservicestatusService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    MaintenanceservicestatusService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    MaintenanceservicestatusService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    MaintenanceservicestatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], MaintenanceservicestatusService);
    return MaintenanceservicestatusService;
}());



/***/ }),

/***/ "./src/app/services/menuoptions.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/menuoptions.service.ts ***!
  \*************************************************/
/*! exports provided: MenuOptions, MenuoptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOptions", function() { return MenuOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuoptionsService", function() { return MenuoptionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MenuOptions = /** @class */ (function () {
    function MenuOptions() {
    }
    return MenuOptions;
}());

var MenuoptionsService = /** @class */ (function () {
    function MenuoptionsService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/menuoptions";
        this.handleError = HttpErrorHandlerService.createHandleError('MenuOptionsService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('MenuOptionsService');
    }
    MenuoptionsService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    MenuoptionsService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    MenuoptionsService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    MenuoptionsService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    MenuoptionsService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    MenuoptionsService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    MenuoptionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], MenuoptionsService);
    return MenuoptionsService;
}());



/***/ }),

/***/ "./src/app/services/purchaseorder.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/purchaseorder.service.ts ***!
  \***************************************************/
/*! exports provided: PurchaseOrder, PurchaseorderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrder", function() { return PurchaseOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseorderService", function() { return PurchaseorderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PurchaseOrder = /** @class */ (function () {
    function PurchaseOrder() {
    }
    return PurchaseOrder;
}());

var PurchaseorderService = /** @class */ (function () {
    function PurchaseorderService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/purchaseorder";
        this.handleError = HttpErrorHandlerService.createHandleError('PurchaseOrderService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('PurchaseOrderService');
    }
    PurchaseorderService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    PurchaseorderService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    PurchaseorderService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    PurchaseorderService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    PurchaseorderService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    PurchaseorderService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    PurchaseorderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], PurchaseorderService);
    return PurchaseorderService;
}());



/***/ }),

/***/ "./src/app/services/purchaseorderstatus.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/purchaseorderstatus.service.ts ***!
  \*********************************************************/
/*! exports provided: PurchaseOrderStatus, PurchaseorderstatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderStatus", function() { return PurchaseOrderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseorderstatusService", function() { return PurchaseorderstatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PurchaseOrderStatus = /** @class */ (function () {
    function PurchaseOrderStatus() {
    }
    return PurchaseOrderStatus;
}());

var PurchaseorderstatusService = /** @class */ (function () {
    function PurchaseorderstatusService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/purchaseorderstatus";
        this.handleError = HttpErrorHandlerService.createHandleError('PurchaseOrderStatusService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('PurchaseOrderStatusService');
    }
    PurchaseorderstatusService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    PurchaseorderstatusService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    PurchaseorderstatusService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    PurchaseorderstatusService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    PurchaseorderstatusService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    PurchaseorderstatusService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    PurchaseorderstatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], PurchaseorderstatusService);
    return PurchaseorderstatusService;
}());



/***/ }),

/***/ "./src/app/services/room.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/*! exports provided: Room, RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var Room = /** @class */ (function () {
    function Room() {
    }
    return Room;
}());

var RoomService = /** @class */ (function () {
    function RoomService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/room";
        this.handleError = HttpErrorHandlerService.createHandleError('RoomService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('RoomService');
    }
    RoomService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    RoomService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    RoomService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    RoomService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    RoomService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    RoomService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    RoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/services/userroles.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/userroles.service.ts ***!
  \***********************************************/
/*! exports provided: UserRoles, UserrolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoles", function() { return UserRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserrolesService", function() { return UserrolesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserRoles = /** @class */ (function () {
    function UserRoles() {
    }
    return UserRoles;
}());

var UserrolesService = /** @class */ (function () {
    function UserrolesService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/userroles";
        this.handleError = HttpErrorHandlerService.createHandleError('UserRolesService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('UserRolesService');
    }
    UserrolesService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    UserrolesService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    UserrolesService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    UserrolesService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    UserrolesService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    UserrolesService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    UserrolesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], UserrolesService);
    return UserrolesService;
}());



/***/ }),

/***/ "./src/app/services/userrolesmenuoptionsmapping.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/userrolesmenuoptionsmapping.service.ts ***!
  \*****************************************************************/
/*! exports provided: UserRolesMenuOptionsMapping, UserrolesmenuoptionsmappingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesMenuOptionsMapping", function() { return UserRolesMenuOptionsMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserrolesmenuoptionsmappingService", function() { return UserrolesmenuoptionsmappingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserRolesMenuOptionsMapping = /** @class */ (function () {
    function UserRolesMenuOptionsMapping() {
    }
    return UserRolesMenuOptionsMapping;
}());

var UserrolesmenuoptionsmappingService = /** @class */ (function () {
    function UserrolesmenuoptionsmappingService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/userrolesmenuoptionsmapping";
        this.handleError = HttpErrorHandlerService.createHandleError('UserRolesMenuOptionsMappingService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('UserRolesMenuOptionsMappingService');
    }
    UserrolesmenuoptionsmappingService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    UserrolesmenuoptionsmappingService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    UserrolesmenuoptionsmappingService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    UserrolesmenuoptionsmappingService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    UserrolesmenuoptionsmappingService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    UserrolesmenuoptionsmappingService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    UserrolesmenuoptionsmappingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], UserrolesmenuoptionsmappingService);
    return UserrolesmenuoptionsmappingService;
}());



/***/ }),

/***/ "./src/app/services/vendor.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/vendor.service.ts ***!
  \********************************************/
/*! exports provided: Vendor, VendorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vendor", function() { return Vendor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorService", function() { return VendorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var Vendor = /** @class */ (function () {
    function Vendor() {
    }
    return Vendor;
}());

var VendorService = /** @class */ (function () {
    function VendorService(http, HttpErrorHandlerService) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "/vendor";
        this.handleError = HttpErrorHandlerService.createHandleError('VendorService');
        this.handleSuccess = HttpErrorHandlerService.createHandleSuccess('VendorService');
    }
    VendorService.prototype.listFiltered = function (whereString) {
        var _this = this;
        return this.http.get(this.apiUrl + "/listFiltered/" + whereString, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("userToken") }) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listFiltered", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("listFiltered whereString=" + whereString)));
    };
    VendorService.prototype.listAll = function () {
        var _this = this;
        return this.http.get(this.apiUrl + "/listAll", { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("userToken") }) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("listAll", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listAll', [])));
    };
    VendorService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.apiUrl + "/get/" + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem("userToken") }) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("get", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get id=" + id)));
    };
    VendorService.prototype.create = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/create", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("create", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('create')));
    };
    VendorService.prototype.update = function (item) {
        var _this = this;
        return this.http.post(this.apiUrl + "/update", item, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("update", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('update')));
    };
    VendorService.prototype.delete = function (item) {
        var _this = this;
        var id = typeof item === 'number' ? item : item.Id;
        var url = this.apiUrl + "/delete/" + id;
        return this.http.post(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.handleSuccess("delete", result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete')));
    };
    VendorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandlerService"]])
    ], VendorService);
    return VendorService;
}());



/***/ }),

/***/ "./src/app/shared-components/alertnotification/alertnotification.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-components/alertnotification/alertnotification.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notificationalert {\r\n    -webkit-animation-name: notification; /* Safari 4.0 - 8.0 */\r\n    -webkit-animation-duration: 8s; /* Safari 4.0 - 8.0 */\r\n    animation-name: notification;\r\n    animation-duration: 8s;\r\n}\r\n\r\n/* Safari 4.0 - 8.0 */\r\n\r\n@-webkit-keyframes notification {\r\n    0% {\r\n        left: 0px;\r\n        top: 200px;\r\n    }\r\n\r\n    25% {\r\n        left: 0px;\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n/* Standard syntax */\r\n\r\n@keyframes notification {\r\n    0% {\r\n        left: 0px;\r\n        top: 200px;\r\n    }\r\n\r\n    25% {\r\n        left: 0px;\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWxlcnRub3RpZmljYXRpb24vYWxlcnRub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQyxDQUFDLHNCQUFzQjtJQUM1RCwrQkFBK0IsQ0FBQyxzQkFBc0I7SUFDdEQsNkJBQTZCO0lBQzdCLHVCQUF1QjtDQUMxQjs7QUFFRCxzQkFBc0I7O0FBQ3RCO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztLQUNkOztJQUVEO1FBQ0ksVUFBVTtRQUNWLFNBQVM7S0FDWjtDQUNKOztBQUVELHFCQUFxQjs7QUFDckI7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO0tBQ2Q7O0lBRUQ7UUFDSSxVQUFVO1FBQ1YsU0FBUztLQUNaO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9hbGVydG5vdGlmaWNhdGlvbi9hbGVydG5vdGlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGlmaWNhdGlvbmFsZXJ0IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IG5vdGlmaWNhdGlvbjsgLyogU2FmYXJpIDQuMCAtIDguMCAqL1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDhzOyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXHJcbiAgICBhbmltYXRpb24tbmFtZTogbm90aWZpY2F0aW9uO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxufVxyXG5cclxuLyogU2FmYXJpIDQuMCAtIDguMCAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbm90aWZpY2F0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAyNSUge1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLyogU3RhbmRhcmQgc3ludGF4ICovXHJcbkBrZXlmcmFtZXMgbm90aWZpY2F0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAyNSUge1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared-components/alertnotification/alertnotification.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shared-components/alertnotification/alertnotification.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-top\">\r\n    <div class=\"float-right\" style=\"padding-bottom: 25px; padding-right: 15px;\">\r\n        <div id=\"notificationalert\" class=\"alert alert-{{_type}} alert-dismissible fade\" role=\"alert\">\r\n            <h4 class=\"alert-heading\">{{_header}}</h4>\r\n            <p>{{_message}}</p>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared-components/alertnotification/alertnotification.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared-components/alertnotification/alertnotification.component.ts ***!
  \************************************************************************************/
/*! exports provided: AlertnotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertnotificationComponent", function() { return AlertnotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AlertnotificationComponent = /** @class */ (function () {
    function AlertnotificationComponent() {
    }
    Object.defineProperty(AlertnotificationComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertnotificationComponent.prototype, "header", {
        get: function () {
            return this._header;
        },
        set: function (header) {
            this._header = header;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertnotificationComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (message) {
            this._message = message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertnotificationComponent.prototype, "isAllowTimeOut", {
        get: function () {
            return this._isAllowTimeOut;
        },
        set: function (isAllowTimeOut) {
            this._isAllowTimeOut = isAllowTimeOut;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertnotificationComponent.prototype, "timeOut", {
        get: function () {
            return this._timeOut;
        },
        set: function (timeOut) {
            this._timeOut = timeOut;
        },
        enumerable: true,
        configurable: true
    });
    AlertnotificationComponent.prototype.setSuccessMessage = function (message) {
        $("#notificationalert").addClass("show");
        this._message = message;
        console.log("setSuccessMessage", this._message);
    };
    AlertnotificationComponent.prototype.setErrorMessage = function (message) {
        this._type = "danger";
        $("#notificationalert").addClass("show");
        this._message = message;
        console.log("setErrorMessage", this._message);
    };
    AlertnotificationComponent.prototype.show = function () {
        $("#notificationalert").addClass("show");
    };
    AlertnotificationComponent.prototype.ngOnInit = function () {
        this.playAudio();
        if (this._isAllowTimeOut) {
            setTimeout(function () { return $("#notificationalert").alert('close'); }, this._timeOut);
        }
    };
    AlertnotificationComponent.prototype.playAudio = function () {
        //let audio = new Audio();
        //audio.src = "../../../assets/sound/notification.mp3";
        //audio.load();
        //audio.play();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], AlertnotificationComponent.prototype, "type", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], AlertnotificationComponent.prototype, "header", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], AlertnotificationComponent.prototype, "message", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], AlertnotificationComponent.prototype, "isAllowTimeOut", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], AlertnotificationComponent.prototype, "timeOut", null);
    AlertnotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alertnotification',
            template: __webpack_require__(/*! ./alertnotification.component.html */ "./src/app/shared-components/alertnotification/alertnotification.component.html"),
            styles: [__webpack_require__(/*! ./alertnotification.component.css */ "./src/app/shared-components/alertnotification/alertnotification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertnotificationComponent);
    return AlertnotificationComponent;
}());



/***/ }),

/***/ "./src/app/shared-components/grid/grid.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shared-components/grid/grid.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2dyaWQvZ3JpZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared-components/grid/grid.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared-components/grid/grid.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  grid works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared-components/grid/grid.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared-components/grid/grid.component.ts ***!
  \**********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(GridComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (columns) {
            this._columns = columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "toolbarItems", {
        get: function () {
            return this._toolbarItems;
        },
        set: function (toolbarItems) {
            this._toolbarItems = toolbarItems;
        },
        enumerable: true,
        configurable: true
    });
    GridComponent.prototype.add = function (args) {
        this.addEvent.emit(args);
    };
    GridComponent.prototype.edit = function (args) {
        this.editEvent.emit(args);
    };
    GridComponent.prototype.delete = function (args) {
        this.deleteEvent.emit(args);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridComponent.prototype, "addEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridComponent.prototype, "editEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridComponent.prototype, "deleteEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], GridComponent.prototype, "data", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], GridComponent.prototype, "columns", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], GridComponent.prototype, "toolbarItems", null);
    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/shared-components/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.css */ "./src/app/shared-components/grid/grid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/shared-components/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared-components/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _alertnotification_alertnotification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alertnotification/alertnotification.component */ "./src/app/shared-components/alertnotification/alertnotification.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/shared-components/grid/grid.component.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [_alertnotification_alertnotification_component__WEBPACK_IMPORTED_MODULE_5__["AlertnotificationComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"]],
            exports: [
                _alertnotification_alertnotification_component__WEBPACK_IMPORTED_MODULE_5__["AlertnotificationComponent"]
            ],
            providers: [_alertnotification_alertnotification_component__WEBPACK_IMPORTED_MODULE_5__["AlertnotificationComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: 'http://localhost:50638/api',
    token: 'http://localhost:50638/token'
    //api: 'https://handymanworkappapi.azurewebsites.net/api',
    //token: 'https://handymanworkappapi.azurewebsites.net/token',
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GitRepos\handymanworkapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map