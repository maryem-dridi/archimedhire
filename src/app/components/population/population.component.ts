import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PopulationService} from "../../services/population.service";
import {PostulationService} from "../../services/postulation.service";
import {NgToastService} from "ng-angular-popup";
import {Population} from "../../models/population";
import {PostulationPieceJointe} from "../../models/postulation-piece-jointe";
import {PopulationType} from "../../models/population-type";

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {

  constructor(protected populationService:PopulationService, private  postulationService:PostulationService, private toast:NgToastService) { }
  //populations:Population[] | undefined;
  postulation = new PostulationPieceJointe("",new Date(),null,0,0);
  ngOnInit(): void {
    //if(this.populations==null)
    this.populationService.getAll().subscribe(
      data => this.populationService.populations=data
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
    /*return this.http.post(this.uploadUrl, formData);*/

    console.log(this.postulation)
  }

  onFileSelected($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (input.files) {
      this.postulation.pieceJointe = input.files[0];
    }
  }

  onPopulationSelect(Id: number | undefined) {
    this.postulation.populationFk=Id

  }

  protected readonly PopulationType = PopulationType;
}
