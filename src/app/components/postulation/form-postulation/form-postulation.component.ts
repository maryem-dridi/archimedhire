import {Component, OnInit} from '@angular/core';
import {Population} from "../../../models/population";
import {ActivatedRoute} from "@angular/router";
import {PopulationService} from "../../../services/population.service";
import {PostulationService} from "../../../services/postulation.service";
import {NgToastService} from "ng-angular-popup";
import {Postulation} from "../../../models/postulation";
import {User} from "../../../models/user";
import {Langue} from "../../../models/langue";
import {Langage} from "../../../models/langage";
import {Niveau} from "../../../models/niveau";
import {Certificat} from "../../../models/certificat";

@Component({
  selector: 'app-form-postulation',
  templateUrl: './form-postulation.component.html',
  styleUrls: ['./form-postulation.component.scss']
})
export class FormPostulationComponent implements OnInit {
  constructor(private route: ActivatedRoute,private populationService:PopulationService,private  postulationService:PostulationService,private toast:NgToastService) { }

  id:number = 0;
  population:Population = new Population();

  postulation = new Postulation("",new Date(),0,0,new User("", "","","","",null,0,0),new Population());
  indice: number=1;


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.postulation.populationFk=this.id
    this.populationService.getData(this.id).subscribe(
      data=> {
        this.postulation.population = data;
      });
  }

  langues:Langue[]=[new Langue(1,Langage.Français,Niveau.B2)];
  certificats:Certificat[]=[new Certificat(1,"aws","amazon",new Date())]

  //a chaque fois il clique sur l'ajoute de langue on ajoute la valeur par défaut pour étre affiché sur l'ui
  public addLanguage(){
      this.langues.push(new Langue(1,Langage.Français,Niveau.B2))
  }
  //a chaque fois il clique sur l'ajoute de certificat on ajoute la valeur par défaut pour étre affiché sur l'ui afin d'étre modifié
  public addCertificat() {
      this.certificats.push(new Certificat(1,"aws","amazon",new Date()))
  }

  public postuler(){
    console.log(this.langues)

    this.postulationService.postuler(this.postulation).subscribe({
      next: (res) => {
        console.log(res)
        this.toast.success({detail:"SUCCESS", summary:res.toString(), duration: 5000});
      },
      error: (err) => {
        console.log(err)
        this.toast.error({detail:err.statusText, summary:err.error.title, duration: 5000});
        //this.toast.error({detail:err.statusText, summary:err.error.errors.message, duration: 5000});

      },
    });

  }

  public next(){
    this.indice+=1
  }

  public prev(){
    this.indice-=1
  }

  protected readonly Langage = Langage;
  protected readonly Niveau = Niveau;


}
