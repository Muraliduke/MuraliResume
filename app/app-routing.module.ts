import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import {loginComponent} from './login.component';
import {resumeComponent} from './resume.component';

import {SummaryComponent} from'./summary.component';
import {EducationComponent} from'./Education.component';
import {SkillsComponent} from'./Skills.component';
import {ProjectsComponent} from'./Projects.component';
import {AchievementsComponent} from'./Achievements.component';
import {HobbiesComponent} from'./Hobbies.component';
import {DetailsComponent} from'./Details.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: loginComponent },
   { path: 'resume',  component: resumeComponent,
   children: [
      { path: '', redirectTo: 'Summary', pathMatch: 'full' },
      { path: 'Summary', component: SummaryComponent },
      { path: 'Education', component: EducationComponent },
       { path: 'Skills', component: SkillsComponent },
       { path: 'Projects', component: ProjectsComponent },
       { path: 'Achievements', component: AchievementsComponent },
       { path: 'Hobbies', component: HobbiesComponent },
        { path: 'Details', component: DetailsComponent }

    ] }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}