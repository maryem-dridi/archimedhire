import {Model} from "./model";
import {PopulationType} from "./population-type";
import {LangueObtention} from "./langue-obtention";
import {Postulation} from "./postulation";
import {Certificat} from "./certificat";


export class Population extends Model{

  public Population(Id: number, University: string, HardSkills: string, SoftSkills: string, populationType:PopulationType, Experience:string, LangueObtentions:LangueObtention[], certificats:Certificat[], postulations:Postulation[]){
    super.Model(Id, University, HardSkills, SoftSkills, Experience);
    this.populationType=populationType;
    this.langueObtentions= LangueObtentions;
    this.certificats=certificats;
    this.postulations=postulations;
  }
  populationType:PopulationType|undefined;
  langueObtentions:LangueObtention[]|undefined;
  certificats:Certificat[]|undefined;
  postulations:Postulation[]|undefined;

}
