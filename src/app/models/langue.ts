import {Langage} from "./langage";
import {Niveau} from "./niveau";

export class Langue {
  public constructor(langueId: number, langage: Langage,niveau:Niveau) {
    this.langueId = langueId;
    this.langage = langage;
    this.niveau = niveau;
  }
  langueId: number;
  langage: Langage;
  niveau:Niveau;
}
