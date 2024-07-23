export class Certificat {
  public constructor( certificatId:number, nom:string,organisme:string,dateObtention:Date) {
    this.certificatId = certificatId;
    this.nom = nom;
    this.organisme = organisme;
    this.dateObtention = dateObtention;
  }
  certificatId:number;
  nom:string;
  organisme:string;
  dateObtention:Date;
}
