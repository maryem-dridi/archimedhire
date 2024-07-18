import { Component, OnInit } from '@angular/core';
import {PopulationService} from "../../../services/population.service";
import {Population} from "../../../models/population";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-population-detail',
  templateUrl: './population-detail.component.html',
  styleUrls: ['./population-detail.component.scss']
})
export class PopulationDetailComponent  implements OnInit {

  id:number = 0;
  population:Population = new Population();

  constructor(private route: ActivatedRoute, private populationService: PopulationService) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id)
    this.populationService.getData(this.id).subscribe(
      data=> {
        this.population=data
        console.log(data)
      },
    )
  }

}
