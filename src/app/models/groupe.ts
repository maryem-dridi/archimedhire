import { Projet } from "./projet";
import { Salarie } from "./salarie";

export interface Groupe {
  groupeId: number;
  taille: number;
  nom: string;
  department: string;
  projets?: Projet[];
  salaries?: Salarie[];
}

