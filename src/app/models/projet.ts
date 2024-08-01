export interface Projet {
  projetId: number;
  nom: string;
  duree: number;
  dateDebut?: Date;
  dateFin?: Date;
  description: string;
  strategieAdopte: string;
  groupeFk: number;
}

