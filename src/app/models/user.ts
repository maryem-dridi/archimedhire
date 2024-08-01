import {Model} from "./model";

export class User extends Model{

  public constructor(nom: string, prenom:string, email: string, password: string, adresse: string, pieceJointe:File|null,score:number,numeroTelephone:number) {
    super();
    this.nom = nom;
        this.prenom = prenom;
        this.email = email;
          this.adresse = adresse;
        this.pieceJointe = pieceJointe;
        this.score = score;
        this.numeroTelephone=numeroTelephone;

  }
  nom:string;
  prenom:string;
  email:string;
  adresse:string|undefined;
  pieceJointe:File|null;
  score:number;
  numeroTelephone:number;

}
