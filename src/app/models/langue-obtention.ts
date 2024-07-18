enum Niveau {
  A1  ,
  A2,
  B1,
  B2,
  C1,
  C2
}

class Langue {
  public constructor(langueId: number, langage: string,niveau:Niveau) {
    this.langueId = langueId;
    this.langage = langage;
    this.niveau = niveau;
  }
  langueId: number;
  langage: string;
  niveau:Niveau;
}

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
