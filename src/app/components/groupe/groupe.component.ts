import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Groupe} from "../../models/groupe";
import {GroupeService} from "../../services/groupe.service";
import { NgToastService } from 'ng-angular-popup';
declare var bootstrap: any;




@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit {

  addGroupeForm: FormGroup;
  editGroupeForm: FormGroup;
  groupes: Groupe[] = [];
  groupeToEdit: Groupe | null = null;

  constructor(private groupeService: GroupeService, private fb: FormBuilder, private toast: NgToastService) {
    // Initialize the form for adding a group
    this.addGroupeForm = this.fb.group({
      nom: ['', Validators.required],
      taille: [0, Validators.required],
      department: ['', Validators.required]
    });

    // Initialize the form for editing a group
    this.editGroupeForm = this.fb.group({
      nom: ['', Validators.required],
      taille: [0, Validators.required],
      department: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadGroupes();
  }

  // Load all groups
  loadGroupes(): void {
    this.groupeService.getAllGroupes().subscribe(
      (data: Groupe[]) => {
        this.groupes = data;
      },
      (error) => {
        console.error('Error loading groups:', error);
      }
    );
  }

  // Add a new group
  addGroupe(): void {
    if (this.addGroupeForm.valid) {
      const groupeData: Groupe = this.addGroupeForm.value;

      this.groupeService.addGroupe(groupeData).subscribe(
        (response) => {
          this.toast.success({ detail: "Success", summary: 'Groupe ajouté avec succès', duration: 5000 });

          this.loadGroupes();
          this.addGroupeForm.reset();
          this.closeModal('addGroupModal');
        },
        (error) => {
          console.error('Error adding group:', error);
        }
      );
    }
  }

  // Edit group
  editGroupe(groupe: Groupe): void {
    this.groupeToEdit = { ...groupe };
    this.editGroupeForm.setValue({
      nom: this.groupeToEdit.nom,
      taille: this.groupeToEdit.taille,
      department: this.groupeToEdit.department
    });

    // Show the modal
    const modalElement = document.getElementById('editGroupModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Update group
  updateGroupe(): void {
    if (this.editGroupeForm.valid && this.groupeToEdit) {
      const updatedGroupe: Groupe = {
        ...this.groupeToEdit,
        ...this.editGroupeForm.value
      };
      console.log(updatedGroupe);

      this.groupeService.updateGroupe(updatedGroupe.groupeId, updatedGroupe).subscribe(
        (response) => {
          this.toast.success({ detail: "Success", summary: 'Groupe modifié avec succès', duration: 5000 });
          this.loadGroupes();
          this.closeModal('editGroupModal');
        },
        (error) => {
          console.error('Error updating group:', error);
        }
      );
    }
  }

  // Delete group
  deleteGroupe(id: number): void {
    this.groupeService.deleteGroupe(id).subscribe(
      (response) => {
        this.toast.error({ detail: "Success", summary: 'Groupe supprimé avec succès', duration: 5000 });
        this.loadGroupes();
      },
      (error) => {
        console.log('Error deleting group:', error);
      }
    );
  }

  // Close modal
  closeModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }
}
