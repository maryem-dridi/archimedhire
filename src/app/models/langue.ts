import {Langage} from "./langage";
import {Niveau} from "./niveau";

export class Langue {
  public constructor(langage: Langage,niveau:Niveau) {
    this.langage = langage;
    this.niveau = niveau;
  }
  langage: Langage;
  niveau:Niveau;
}
