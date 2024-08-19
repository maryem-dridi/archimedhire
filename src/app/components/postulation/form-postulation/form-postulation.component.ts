import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PopulationService} from "../../../services/population.service";
import {PostulationService} from "../../../services/postulation.service";
import {NgToastService} from "ng-angular-popup";
import {Postulation} from "../../../models/postulation";
import {User} from "../../../models/user";
import {Langue} from "../../../models/langue";
import {Langage} from "../../../models/langage";
import {Niveau} from "../../../models/niveau";
import {Certificat} from "../../../models/certificat";
import {Experience} from "../../../models/Experience";
import {LangueObtention} from "../../../models/langue-obtention";
import {SalarieService} from "../../../services/salarie.service";
import {UserStoreService} from "../../../services/user-store.service";

@Component({
  selector: 'app-form-postulation',
  templateUrl: './form-postulation.component.html',
  styleUrls: ['./form-postulation.component.scss']
})
export class FormPostulationComponent implements OnInit {
  constructor(private us:UserStoreService,private router:Router,private route: ActivatedRoute,private populationService:PopulationService,private  postulationService:PostulationService,private toast:NgToastService) { }

  id:number = 0;
  postulation = new Postulation("",new Date(),0,0,new User(0, "","","",Experience.Entry_Level, [],[],"","","","",null,null,0,0,"","",""),null);
  indice: number=1;


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.postulation.populationFk=this.id
    this.us.getFullNameFromStore()
    this.populationService.getData(this.id).subscribe(
      data=> {
        this.postulation.population = data;
      });
    this.us.getEmailFromStore().subscribe(value => this.postulation.user.email = value)
  }

  langues:Langue[]=[new Langue(Langage.Français,Niveau.B2)];
  certificats:Certificat[]=[new Certificat(1,"aws","amazon",new Date())]

  //a chaque fois il clique sur l'ajoute de langue on ajoute la valeur par défaut pour étre affiché sur l'ui
  public addLanguage(){
    this.postulation.user.langueObtentions?.push(new LangueObtention(new Date(),0,new Langue(Langage.Français,Niveau.B2)))
  }
  //a chaque fois il clique sur l'ajoute de certificat on ajoute la valeur par défaut pour étre affiché sur l'ui afin d'étre modifié
  public addCertificat() {
    this.postulation.user.certificats?.push(new Certificat(0,"","",new Date()))
  }

  public postuler_avec_image() {
    if (this.postulation.user.imageFile) {
      const formData = new FormData();
      formData.append('image', this.postulation.user.imageFile);
      formData.append('postulationObj', JSON.stringify(this.postulation));
      this.postulationService.postulerParImage(formData)
        .subscribe(response => {
          this.toast.success({detail: "Success", summary: 'Postulation Success', duration: 5000});
          this.router.navigate(['/populations',this.id])
        }, error => {
          this.toast.error({detail: "Error", summary: error.error.message, duration: 5000});
          console.log(error)
        });
    } else {
      this.toast.error({detail: "ERROR", summary: 'File is missing!', duration: 5000});
    }
  }

  public postuler(){

    this.postulationService.postuler(this.postulation).subscribe({
      next: (res) => {

        this.toast.success({detail:"SUCCESS", summary:res.toString(), duration: 5000});
        this.router.navigate(['/populations',this.id]);
      },
      error: (err) => {
        console.log(err)
        this.toast.error({detail:err.statusText, summary:err.error.title, duration: 5000});
      },
    });

  }

  public next(){
    this.indice+=1
  }

  public prev(){
    if(this.indice==1)
      this.router.navigate(['/populations',this.id]);
    this.indice-=1
  }

  onFileSelected($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (input.files) {
      this.postulation.user.imageFile = input.files[0];
    }
  }

  protected readonly Langage = Langage;
  protected readonly Niveau = Niveau;


  protected readonly Experience = Experience;
}
