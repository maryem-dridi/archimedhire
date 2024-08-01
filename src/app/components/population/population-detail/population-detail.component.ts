import { Component, OnInit } from '@angular/core';
import {PopulationService} from "../../../services/population.service";
import {Population} from "../../../models/population";
import {ActivatedRoute} from "@angular/router";
import {PostulationService} from "../../../services/postulation.service";
import {NgToastService} from "ng-angular-popup";
import {PostulationPieceJointe} from "../../../models/postulation-piece-jointe";
import {Postulation} from "../../../models/postulation";
import {User} from "../../../models/user";

@Component({
  selector: 'app-population-detail',
  templateUrl: './population-detail.component.html',
  styleUrls: ['./population-detail.component.scss']
})
export class PopulationDetailComponent  implements OnInit {

  id:number = 0;
  population:Population = new Population();

  constructor(private route: ActivatedRoute,private populationService:PopulationService,private  postulationService:PostulationService,private toast:NgToastService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.populationService.getData(this.id).subscribe(
      data=> {
        this.population=data
      },
    )
  }
  public postuler(){
    /*if (this.postulation.pieceJointe) {
      const formData = new FormData();
      formData.append('pdfFile', this.postulation.pieceJointe);
      formData.append('postulationObj', JSON.stringify(this.postulation));
      this.postulationService.postulerPieceJointe(formData)
        .subscribe(response => {
          this.toast.success({detail:"Success", summary:'Postulation Success', duration: 5000});
          console.log(response);
        }, error => {
          console.error('Postulation Error', error);
        });
    } else {
      this.toast.error({detail:"ERROR", summary:'File is missing!', duration: 5000});
    }*/
    /*

    return this.http.post(this.uploadUrl, formData);*/
    console.log(this.postule)
  }

  postule = new Postulation("",new Date(),0,0,new User("", "","","","",null,0,0),null);

  delete() {
    this.populationService.deleteData(this.id).subscribe({
      next: (res) => {
        console.log(res)
        this.toast.success({detail:"SUCCESS", summary:res.message, duration: 5000});
      },
      error: (err) => {
        console.log(err)
        this.toast.error({detail:err.statusText, summary:err.error.title, duration: 5000});
        //this.toast.error({detail:err.statusText, summary:err.error.errors.message, duration: 5000});

      },
    });
  }
}
