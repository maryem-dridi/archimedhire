import { Component, OnInit } from '@angular/core';
import {PopulationService} from "../../services/population.service";
import {Population} from "../../models/population";
import {Postulation} from "../../models/postulation";
import {PostulationPieceJointe} from "../../models/postulation-piece-jointe";
import {NgToastService} from "ng-angular-popup";
import {PostulationService} from "../../services/postulation.service";

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.css']
})
export class PostulationComponent implements OnInit {

  constructor(private populationService:PopulationService,private  postulationService:PostulationService,private toast:NgToastService) { }
  populations:Population[] | undefined;
  postulation = new PostulationPieceJointe("",new Date(),null,0,0);
  ngOnInit(): void {
    this.populationService.getAll().subscribe(
      data => this.populations=data
    )
  }

  public postuler(){
    if (this.postulation.pieceJointe) {
      const formData = new FormData();
      formData.append('pdfFile', this.postulation.pieceJointe);
      formData.append('postulationObj', JSON.stringify(this.postulation));
      this.postulationService.postulerPieceJointe(formData)
        .subscribe(response => {
          this.toast.success({detail:"Success", summary:'Postulation Success', duration: 5000});
        }, error => {
          this.toast.error({detail:"Error", summary:error.error.message, duration: 5000});
        });
    } else {
      this.toast.error({detail:"ERROR", summary:'File is missing!', duration: 5000});
    }
    /*

    return this.http.post(this.uploadUrl, formData);*/
      console.log(this.postulation)
  }

  onFileSelected($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (input.files) {
      this.postulation.pieceJointe = input.files[0];
    }
  }

  onPopulationSelect(Id: number | undefined) {
    console.log(Id)
    this.postulation.populationFk=Id

  }
}
