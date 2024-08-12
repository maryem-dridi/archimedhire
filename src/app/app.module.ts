import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { PostulationComponent } from './components/postulation/postulation.component';
import { AboutComponent } from './components/about/about.component';
import { ResetComponent } from './components/reset/reset.component';
import { PopulationComponent } from './components/population/population.component';
import { PopulationDetailComponent } from './components/population/population-detail/population-detail.component';
import { PopulationAddComponent } from './components/population/population-add/population-add.component';
import { ProjetComponent } from './components/projet/projet.component';
import { GroupeComponent } from './components/groupe/groupe.component';
import { SalarieComponent } from './components/salarie/salarie.component';
import { FormPostulationComponent } from './components/postulation/form-postulation/form-postulation.component';
import {EnumKeyValue} from "./pipes/Enum-key-value";
import {CommonModule} from "@angular/common";
import {FormattedDate} from "./pipes/formatted-date";
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    PostulationComponent,
    AboutComponent,
    ResetComponent,
    PopulationComponent,
    PopulationDetailComponent,
    ProjetComponent,
    GroupeComponent,
    SalarieComponent,
    FormPostulationComponent,
    PopulationAddComponent,
    EnumKeyValue,
    FormattedDate,
    SearchbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule,
    CommonModule
  ],
  exports: [
    EnumKeyValue,
    FormattedDate
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
