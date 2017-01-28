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
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var resume_component_1 = require('./resume.component');
var summary_component_1 = require('./summary.component');
var Education_component_1 = require('./Education.component');
var Skills_component_1 = require('./Skills.component');
var Projects_component_1 = require('./Projects.component');
var Achievements_component_1 = require('./Achievements.component');
var Hobbies_component_1 = require('./Hobbies.component');
var Details_component_1 = require('./Details.component');
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: login_component_1.loginComponent },
    { path: 'resume', component: resume_component_1.resumeComponent,
        children: [
            { path: '', redirectTo: 'Summary', pathMatch: 'full' },
            { path: 'Summary', component: summary_component_1.SummaryComponent },
            { path: 'Education', component: Education_component_1.EducationComponent },
            { path: 'Skills', component: Skills_component_1.SkillsComponent },
            { path: 'Projects', component: Projects_component_1.ProjectsComponent },
            { path: 'Achievements', component: Achievements_component_1.AchievementsComponent },
            { path: 'Hobbies', component: Hobbies_component_1.HobbiesComponent },
            { path: 'Details', component: Details_component_1.DetailsComponent }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map