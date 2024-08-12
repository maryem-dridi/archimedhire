import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
import {PopulationType} from "./models/population-type";
import {PopulationService} from "./services/population.service";
import {Population} from "./models/population";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Archimed Hire';
  searchText: string ="";

  constructor(public auth:AuthService,public populationService:PopulationService,private router: Router) {
  }
  public signOut(){
    this.auth.signOut();
  }

  page:string="home";
  public changePage(page:string){
    console.log(page)
    this.page=page;
}

  public path: string = "";
  populations:Population[]=[];


  ngOnInit() {
    const fullUrl = window.location.href;
    const url = new URL(fullUrl);
    this.path = url.pathname;
    console.log(this.router.url)

  }

  search(){
    this.populationService.search(this.searchText,PopulationType.pse).subscribe(
      value => this.populationService.populations=value
    )
  }

  protected readonly PopulationType = PopulationType;
}
