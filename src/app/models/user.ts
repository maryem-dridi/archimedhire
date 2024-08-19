import {Model} from "./model";
import {LangueObtention} from "./langue-obtention";
import {Certificat} from "./certificat";
import {Experience} from "./Experience";

export class User extends Model{

  public constructor(Id:number,University:string, HardSkills:string,SoftSkills:string, Experience:Experience, LangueObtentions:LangueObtention[], Certificats:Certificat[],nom: string, prenom:string, email: string, adresse: string, pieceJointe:File|null, imageFile:File|null,score:number,numeroTelephone:number,image:string,linkedIN:string,gitHub:string) {
    super(Id,University,HardSkills,SoftSkills,Experience,LangueObtentions,Certificats);
    this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.adresse = adresse;
        this.pieceJointe = pieceJointe;
        this.score = score;
        this.numeroTelephone=numeroTelephone;
        this.imageFile=imageFile;
        this.image=image;
        this.gitHub=gitHub;
        this.linkedIN=linkedIN;
  }
  nom:string;
  prenom:string;
  email:string;
  adresse:string;
  linkedIN:string;
  gitHub:string;
  pieceJointe:File|null;
  image:String;
  imageFile:File|null;
  score:number;
  numeroTelephone:number;

}
