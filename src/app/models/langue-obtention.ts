import {Langue} from "./langue";

export class LangueObtention {
  public constructor(langueObtentionId: number, dateObtention:Date,langueFk:number,langue:Langue) {
    this.langueObtentionId = langueObtentionId;
    this.dateObtention = dateObtention;
    this.langueFk = langueFk;
    this.langue=langue;
  }
  langueObtentionId: number;
  dateObtention: Date;
  langueFk:number;
  langue:Langue;
}
