import {Component, OnInit} from '@angular/core';
import {PopulationService} from "../../../services/population.service";
import {Population} from "../../../models/population";
import {ActivatedRoute, Router} from "@angular/router";
import {PostulationService} from "../../../services/postulation.service";
import {NgToastService} from "ng-angular-popup";
import {PopulationType} from "../../../models/population-type";
import {PopulationSelectionPeriority} from "../../../models/population-selection-periority";
import {Experience} from "../../../models/Experience";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-population-detail',
  templateUrl: './population-detail.component.html',
  styleUrls: ['./population-detail.component.scss']
})
export class PopulationDetailComponent  implements OnInit {

  id:number = 0;
  role:string="";
  population:Population = new Population(0,"","","",Experience.Entry_Level, [],[],PopulationType.pse,[],new PopulationSelectionPeriority(0,0,0,0,0,0));

  constructor(private router:Router,private route: ActivatedRoute, private authService:AuthService,private populationService:PopulationService,private  postulationService:PostulationService,private toast:NgToastService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.role = this.authService.getRoleFromToken();

    this.populationService.getData(this.id).subscribe(
      data=> {
        this.population=data
      },
    )
  }

  delete() {
    this.populationService.deleteData(this.id).subscribe({
      next: (res) => {
        console.log(res)
        this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
        this.router.navigate(['/populations']);
      },
      error: (err) => {
        console.log(err)
        this.toast.error({detail:err.statusText, summary:err.error.title, duration: 5000});
      },
    });
  }

    protected readonly PopulationType = PopulationType;
    protected readonly String = String;
}
