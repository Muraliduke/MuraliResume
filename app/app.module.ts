import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, JsonpModule } from '@angular/http';

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

import {NgbdTabsetBasic} from '../bootstrap components/ngtab.js';

import { AppRoutingModule }     from './app-routing.module';
import {MyService} from './service';

@NgModule({
  imports:      [ BrowserModule,NgbModule.forRoot(),AppRoutingModule,FormsModule,HttpModule, JsonpModule ],
  declarations: [ AppComponent,loginComponent,resumeComponent,SummaryComponent,
EducationComponent,
SkillsComponent,
ProjectsComponent,
AchievementsComponent,
HobbiesComponent,
DetailsComponent,NgbdTabsetBasic],
  providers: [MyService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
