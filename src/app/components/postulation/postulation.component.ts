import { Component, OnInit } from '@angular/core';
import {PopulationService} from "../../services/population.service";
import {Population} from "../../models/population";
import {Postulation} from "../../models/postulation";
import {PostulationPieceJointe} from "../../models/postulation-piece-jointe";
import {NgToastService} from "ng-angular-popup";
import {PostulationService} from "../../services/postulation.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/user";
import {Experience} from "../../models/Experience";
import {Niveau} from "../../models/niveau";

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.css']
})
export class PostulationComponent implements OnInit {

  constructor(private populationService:PopulationService,private  postulationService:PostulationService,private toast:NgToastService, private  route:ActivatedRoute) { }
  postulation = new Postulation("",new Date(),0,0,new User(0, "","","",Experience.Entry_Level, [],[],"","","","",null,0,0),null);
  popId:number=0;
  postId:number=0;
  ngOnInit(): void {
    this.popId = Number(this.route.snapshot.paramMap.get('popId'));
    this.postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.postulationService.getData(this.popId,this.postId).subscribe(
      data => this.postulation=data
    )
  }

  getProgressWidth(niveau: number): number {
    const value = this.Niveau[niveau];
    return typeof value === 'number' ? value * 20 : 0;
  }

  protected readonly Niveau = Niveau;
}
