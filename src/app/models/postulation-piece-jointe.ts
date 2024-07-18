import {User} from "./user";
import {Population} from "./population";

export class PostulationPieceJointe {
  public constructor(motivationText:string,postuledDate:Date,pieceJointe:File|null,userFk:number,populationFk:number) {
    this.motivationText=motivationText;
    this.postuledDate=postuledDate;
    this.populationFk=populationFk;
    this.userFk=userFk;
    this.pieceJointe=pieceJointe;
  }
  motivationText:string;
  postuledDate:Date;
  userFk:number;
  populationFk:number | undefined;
  pieceJointe: null | File;
}
