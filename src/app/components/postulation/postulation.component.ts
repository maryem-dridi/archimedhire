import { Component, OnInit } from '@angular/core';
import {PopulationService} from "../../services/population.service";
import {Population} from "../../models/population";
import {Postulation} from "../../models/postulation";
import {PostulationPieceJointe} from "../../models/postulation-piece-jointe";
import {NgToastService} from "ng-angular-popup";
import {PostulationService} from "../../services/postulation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user";
import {Experience} from "../../models/Experience";
import {Niveau} from "../../models/niveau";
import {SalarieService} from "../../services/salarie.service";
import {PopulationType} from "../../models/population-type";
import {GroupeService} from "../../services/groupe.service";
import {Groupe} from "../../models/groupe";

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.css']
})
export class PostulationComponent implements OnInit {

  constructor(private router:Router,private groupeService:GroupeService,private salarieService:SalarieService,private populationService:PopulationService,private  postulationService:PostulationService,private toast:NgToastService, private  route:ActivatedRoute) {
  }
  postulation = new Postulation("",new Date(),0,0,new User(0, "","","",Experience.Entry_Level, [],[],"","","","",null, null,0,0,""),null);
  popId:number=0;
  userId:number=0;
  salaire=0;
  groupeFk=0;
  groupes: Groupe[] = [];

  ngOnInit(): void {
    this.loadGroupes();
    this.loadPostulation()
  }

  loadPostulation(): void {
    this.popId = Number(this.route.snapshot.paramMap.get('popId'));
    this.userId = Number(this.route.snapshot.paramMap.get('postId'));
    this.postulationService.getData(this.popId,this.userId).subscribe(
      data => this.postulation=data
    )
  }

  loadGroupes(): void {
    this.groupeService.getAllGroupes().subscribe(
      (data: Groupe[]) => {
        this.groupes = data;
      },
      (error) => {
        console.error('Error loading groups:', error);
      }
    );
  }
  recruter(){
    this.submit=true;
    this.salarieService.recruitSalarie(this.userId,this.salaire,this.groupeFk).subscribe({next: (res) => {

      this.toast.success({detail:"SUCCESS", summary:res.toString(), duration: 5000});

      this.router.navigate(['/populations']);
    },
      error: (err) => {
      this.toast.error({detail:err.statusText, summary:err.error.title, duration: 5000});
      //this.toast.error({detail:err.statusText, summary:err.error.errors.message, duration: 5000});

    },
  });

  }

  getProgressWidth(niveau: number): number {
    const value = this.Niveau[niveau];
    return typeof value === 'number' ? value * 20 : 0;
  }

  protected readonly Niveau = Niveau;
  protected readonly PopulationType = PopulationType;
  protected readonly Experience = Experience;
  protected readonly onsubmit = onsubmit;
  submit: boolean=false;
}
