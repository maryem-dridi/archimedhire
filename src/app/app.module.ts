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
import { FormPostulationComponent } from './components/postulation/form-postulation/form-postulation.component';

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
    FormPostulationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
