import {Langue} from "./langue";

export class LangueObtention {
  public constructor(dateObtention:Date,langueFk:number,langue:Langue) {
    this.dateObtention = dateObtention;
    this.langueFk = langueFk;
    this.langue=langue;
  }
  dateObtention: Date;
  langueFk:number;
  langue:Langue;
}
