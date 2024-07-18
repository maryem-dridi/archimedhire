import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PopulationService} from "../../services/population.service";

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {

  id:number = 0;

  constructor(private route: ActivatedRoute, private populationService: PopulationService) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id)
    this.populationService.getData(this.id).subscribe(
      data=> console.log(data),
    )
  }
}
