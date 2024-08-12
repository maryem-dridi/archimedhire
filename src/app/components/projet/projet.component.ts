import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet.service';
import {GroupeService} from "../../services/groupe.service";
import {Groupe} from "../../models/groupe";
declare var bootstrap : any;
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {



  projets: Projet[] | undefined;
  groupes: Groupe[] | undefined;
  projet_add: Projet = {
    projetId: 0,
    nom: '',
    duree: 0,
    dateDebut: undefined,
    dateFin: undefined,
    description: '',
    strategieAdopte: '',
    groupeFk: 0
  };

  projet_edit: Projet = {
    projetId: 0,
    nom: '',
    duree: 0,
    dateDebut: undefined,
    dateFin: undefined,
    description: '',
    strategieAdopte: '',
    groupeFk: 0
  };

  constructor(private projetService: ProjetService, private toast: NgToastService,private groupeService:GroupeService) { }

  ngOnInit(): void {
    this.projetService.getAllProjets().subscribe(
      (data) => {
        this.projets = data;
        console.log(this.projets);
      }
    );
    this.groupeService.getAllGroupes().subscribe(
      (data) => {
        this.groupes = data;
      }
    );
  }

  ajouterProjet() {
    if (this.validateProjet(this.projet_add)) {
      // Calculer la durée avant l'envoi
      this.projet_add.duree = this.calculateDuree(this.projet_add.dateDebut, this.projet_add.dateFin);

      this.projetService.addProjet(this.projet_add.groupeFk, this.projet_add).subscribe(
        (response: any) => {
          this.toast.success({ detail: "Success", summary: 'Projet ajouté avec succès', duration: 5000 });
          this.ngOnInit();
          this.viderChamps();
          console.log(response);
        },
        (error: any) => {
          console.error('Erreur lors de l\'ajout du projet', error);
        }
      );
    }
  }

  viderChamps() {
    this.projet_add = {
      projetId: 0,
      nom: '',
      duree: 0,
      dateDebut: undefined,
      dateFin: undefined,
      description: '',
      strategieAdopte: '',
      groupeFk: 0
    };
  }

  deleteProjet(id: number) {
    this.projetService.deleteProjet(id).subscribe(
      (data) => {
        this.toast.error({ detail: "Success", summary: 'Projet supprimé avec succès', duration: 5000 });
        this.ngOnInit();
      }
    );
  }

  editProjet(projet: Projet) {
    this.projet_edit = { ...projet };

    const modalElement = document.getElementById('editProjectModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  updateProjet() {
    if (this.projet_edit && this.validateProjet(this.projet_edit)) {
      // Calculer la durée avant la mise à jour
      this.projet_edit.duree = this.calculateDuree(this.projet_edit.dateDebut, this.projet_edit.dateFin);
      console.log(this.projet_edit);
      this.projetService.updateProjet(this.projet_edit.projetId, this.projet_edit).subscribe(
        (response: any) => {
          this.toast.success({ detail: "Success", summary: 'Projet modifié avec succès', duration: 5000 });
          this.ngOnInit();
          console.log(response);
          const modalElement = document.getElementById('editProjectModal');
          if (modalElement) {
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal.hide();
          }
        },
        (error: any) => {
          console.error('Erreur lors de la modification du projet', error);
        }
      );
    }
  }

  calculateDuree(dateDebut: Date | undefined, dateFin: Date | undefined): number {
    if (dateDebut && dateFin) {
      const start = new Date(dateDebut).getTime();
      const end = new Date(dateFin).getTime();
      const duration = Math.floor((end - start) / (1000 * 60 * 60 * 24));
      return duration > 0 ? duration : 0;
    }
    return 0;
  }

  validateProjet(projet: Projet): boolean {
    if (!projet.nom || !projet.dateDebut || !projet.dateFin || !projet.description || !projet.strategieAdopte || !projet.groupeFk) {
      this.toast.error({ detail: "Erreur", summary: 'Veuillez remplir tous les champs obligatoires.', duration: 5000 });
      return false;
    }

    if (new Date(projet.dateDebut) >= new Date(projet.dateFin)) {
      this.toast.error({ detail: "Erreur", summary: 'La date de début doit être antérieure à la date de fin.', duration: 5000 });
      return false;
    }

    return true;
  }

}
