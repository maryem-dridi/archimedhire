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

  constructor(private salarieService: SalarieService,private groupeService:GroupeService, private toast: NgToastService) {}

  ngOnInit(): void {
    this.loadSalaries();
    this.groupeService.getAllGroupes().subscribe(
      (data) => {
        this.groupes = data;
      }
    );
  }

  loadSalaries(): void {
    this.salarieService.getAllSalaries().subscribe({
      next: (salaries: Salarie[]) => this.salaries = salaries,
      error: (err: any) => this.errorMessage = err.message || 'Error loading salaries.'
    });
  }

  deleteSalarie(id: number | undefined ): void {
    this.salarieService.deleteSalarie(id).subscribe({
      next: () => {
        this.salaries = this.salaries.filter(s => s.id !== id);
      },
      error: (err: any) => this.errorMessage = err.message || 'Error deleting salarie.'
    });
  }

  openEditModal(salarie: Salarie): void {
    // @ts-ignore
    this.selectedSalarie = { ...salarie };
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
