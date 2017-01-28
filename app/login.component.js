"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var model_1 = require('./model');
var service_1 = require('./service');
var router_1 = require('@angular/router');
var loginComponent = (function () {
    function loginComponent(jsonService, router) {
        this.jsonService = jsonService;
        this.router = router;
        this.model = new model_1.Model('', '');
    }
    loginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonService.getjso()
            .subscribe(function (jsontest) {
            _this.jsontest = jsontest;
            console.log(jsontest);
        });
    };
    loginComponent.prototype.loginsuccess = function () {
        if (this.jsontest.name === this.model.uname && this.jsontest.pwd === this.model.pwd) {
            console.log("success logged in");
            this.router.navigate(['/resume']);
        }
        else {
            alert('incorrect username or password');
        }
    };
    loginComponent.prototype.eventHandler = function (event) {
        if (event.key === "Enter") {
            this.loginsuccess();
        }
    };
    loginComponent.prototype.signin = function () {
        this.loginsuccess();
    };
    loginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: "partials/login.html",
            styleUrls: ['partials/login.css']
        }), 
        __metadata('design:paramtypes', [service_1.MyService, router_1.Router])
    ], loginComponent);
    return loginComponent;
}());
exports.loginComponent = loginComponent;
//# sourceMappingURL=login.component.js.map