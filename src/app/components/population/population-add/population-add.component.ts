import {Component, NgIterable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PopulationService} from "../../../services/population.service";
import {NgToastService} from "ng-angular-popup";
import {Population} from "../../../models/population";
import {Langue} from "../../../models/langue";
import {Certificat} from "../../../models/certificat";
import {Langage} from "../../../models/langage";
import {Niveau} from "../../../models/niveau";
import {Experience} from "../../../models/Experience";
import {PopulationType} from "../../../models/population-type";
import {LangueObtention} from "../../../models/langue-obtention";
import {PopulationSelectionPeriority} from "../../../models/population-selection-periority";
import {PopulationComponent} from "../population.component";

@Component({
  selector: 'app-population-add',
  templateUrl: './population-add.component.html',
  styleUrls: ['./population-add.component.scss']
})
export class PopulationAddComponent implements OnInit {
  constructor(private route: ActivatedRoute,private populationService:PopulationService,private router: Router,private toast:NgToastService) { }

  id:number = 0;
  population:Population = new Population(0,"","","",Experience.Entry_Level,[],[],PopulationType.sse, [],new PopulationSelectionPeriority(0,0,0,0,0,0));

  indice: number=1;


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id!=0)
      this.populationService.getData(this.id).subscribe(
        data=> {
          this.population = data;
        });

    if (this.id!=0){
      const l: LangueObtention[]=[]
      this.population.langueObtentions.forEach(value => {
        value.dateObtention=new Date()
        value.langue.langage=value.langue.langage.valueOf()
        l.push(value)
      });
      this.population.langueObtentions=l;
         }
    else {
      this.population.langueObtentions=[new LangueObtention(new Date(),0,new Langue(Langage.Français,Niveau.B2))];
      this.population.certificats=[new Certificat(0,"","",new Date())]


    }

  }

  //a chaque fois il clique sur l'ajoute de langue on ajoute la valeur par défaut pour étre affiché sur l'ui
  public addLanguage(){
    this.population.langueObtentions?.push(new LangueObtention(new Date(),0,new Langue(Langage.Français,Niveau.B2)))
  }
  //a chaque fois il clique sur l'ajoute de certificat on ajoute la valeur par défaut pour étre affiché sur l'ui afin d'étre modifié
  public addCertificat() {
    this.population.certificats = this.population.certificats.filter(value =>
      value.nom!=""
    )
    this.population.certificats?.push(new Certificat(0,"","",new Date()))
  }


  public next(){
    this.indice+=1
  }

  public prev(){
    if(this.indice==1)
      if(this.id==0)
        this.router.navigate(['/populations']);
      else
        this.router.navigate(['/populations',this.id]);
    this.indice-=1
  }

  protected readonly Langage = Langage;
  protected readonly Niveau = Niveau;
  ajouter() {
    this.filtrage()

    console.log(this.population)
    this.populationService.createData(this.population).subscribe( {next: (res) => {
      console.log(res)
      this.toast.success({detail:"SUCCESS", summary:res.toString(), duration: 5000});
        this.router.navigate(['/populations']);

      },
      error: (err) => {
      console.log(err)
      this.toast.error({detail:err.statusText, summary:err.error.title, duration: 5000});
      //this.toast.error({detail:err.statusText, summary:err.error.errors.message, duration: 5000});

    }}
    )
  }

  modifier() {
    this.filtrage()
    this.population.langueObtentions=[];
    console.log(this.population)
    this.populationService.updateData(this.id,this.population).subscribe( {next: (res) => {
        this.toast.success({detail:"SUCCESS", summary:res.toString(), duration: 5000});
        this.router.navigate(['/populations']);
      },
      error: (err) => {
        console.log(err)
        this.toast.error({detail:err.headers, summary:err.error.title, duration: 5000});
        //this.toast.error({detail:err.statusText, summary:err.error.errors.message, duration: 5000});

      }}
    )
  }

  filtrage() {
    this.population.certificats = this.population.certificats.filter(value =>
      value.nom!=""
    )
  }
  protected readonly PopulationType = PopulationType;
  protected readonly Experience = Experience;
}
