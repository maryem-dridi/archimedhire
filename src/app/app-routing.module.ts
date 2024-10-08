import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import {AboutComponent} from "./components/about/about.component";
import {ResetComponent} from "./components/reset/reset.component";
import {PostulationComponent} from "./components/postulation/postulation.component";
import {Population} from "./models/population";
import {PopulationDetailComponent} from "./components/population/population-detail/population-detail.component";
import {FormPostulationComponent} from "./components/postulation/form-postulation/form-postulation.component";
import {PopulationAddComponent} from "./components/population/population-add/population-add.component";
import {ProjetComponent} from "./components/projet/projet.component";
import {GroupeComponent} from "./components/groupe/groupe.component";
import {SalarieComponent} from "./components/salarie/salarie.component";
import {PopulationComponent} from "./components/population/population.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'reset', component:ResetComponent},
  {path:'populations', component:PopulationComponent},
  { path: 'population/add', component: PopulationAddComponent },
  { path: 'populations/:id', component: PopulationDetailComponent },
  { path: 'populations/:popId/postulation/:postId', component: PostulationComponent },
  { path: 'population/modifier/:id', component: PopulationAddComponent },
  { path: 'population/postuler/:id', component: FormPostulationComponent },
  {path:'projet', component:ProjetComponent, canActivate:[AuthGuard]},
  {path:'groupe', component:GroupeComponent, canActivate:[AuthGuard]},
  {path:'postuler', component:PostulationComponent},
  {path:'salarie', component:SalarieComponent, canActivate:[AuthGuard]},
  {path:'about', component:AboutComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'**', component:AboutComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
