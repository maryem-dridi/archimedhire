import { Component, OnInit } from '@angular/core';
import {GroupeService} from "../../services/groupe.service";
import {PopulationService} from "../../services/population.service";
import {SalarieService} from "../../services/salarie.service";
import {ProjetService} from "../../services/projet.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private groupeService:GroupeService,private populationService:PopulationService,private salarieService:SalarieService,private projetService:ProjetService) { }

  nbProjets:number=0;
  nbSalariee:number=0;
  nbPopulations:number=0;
  nbGroupes:number=0;
  ngOnInit(): void {
    this.groupeService.getAllGroupes().subscribe(v=>this.nbGroupes=v.length)
    this.populationService.getAll().subscribe(v=>this.nbPopulations=v.length)
    this.salarieService.getAllSalaries().subscribe(v=>this.nbSalariee=v.length)
    this.projetService.getAllProjets().subscribe(v=>this.nbProjets=v.length)
  }

}
