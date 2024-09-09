import { Component, OnInit } from '@angular/core';
import {Salarie} from "../../models/salarie";
import {SalarieService} from "../../services/salarie.service";
import {Groupe} from "../../models/groupe";
import {GroupeService} from "../../services/groupe.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.scss']
})
export class SalarieComponent implements OnInit {

  groupes: Groupe[] | undefined;
  salaries: Salarie[] = [];
  errorMessage: string = '';
  selectedSalarie: Salarie | null = null;
  newSalary: number = 0;

  constructor(private salarieService: SalarieService,private groupeService:GroupeService, private toast: NgToastService) {
    this.groupeService.getAllGroupes().subscribe(
      (data) => {
        this.groupes = data;
      }
    );
  }

  ngOnInit(): void {
    this.loadSalaries();

  }

  loadSalaries(): void {
    this.salarieService.getAllSalaries().subscribe({
      next: (salaries: Salarie[]) => {
        this.salaries = salaries
        console.log(this.salaries)

      },
      error: (err: any) => {
        this.errorMessage = err.message || 'Error loading salaries.'
        console.log(err)
      }
    });
  }

  deleteSalarie(id: number | undefined ): void {
    this.salarieService.deleteSalarie(id).subscribe({
      next: (res) => {
        this.toast.success({detail:"SUCCESS", summary:res.title, duration: 5000});
        this.salaries = this.salaries.filter(s => s.id !== id);
      },
      error: (err: any) => {
        this.toast.error({detail:err.statusText, summary:err.error.title, duration: 5000});
      }
    });
  }

  openEditModal(salarie: Salarie): void {
    // @ts-ignore
    this.selectedSalarie = salarie;
    console.log(this.selectedSalarie)
  }

  updateSalarie(): void {
    if (this.selectedSalarie) {
      this.salarieService.updateSalarie(this.selectedSalarie.id, this.newSalary).subscribe({
        next: () => {
          this.loadSalaries();
          this.selectedSalarie = null;
        },
        error: (err: any) => this.errorMessage = err.message || 'Error updating salarie.'
      });
    }
  }

  affecterSalarieAuGroupe(salarieId:  number|undefined, groupeId: number|undefined){
    this.salarieService.affecterSalarieAuGroupe(salarieId,groupeId).subscribe(
      (data)=>{
        this.loadSalaries();
        this.toast.success({ detail: "Success", summary: 'Salarie affecté avec succès', duration: 5000 });
      }

    )

  }

}
