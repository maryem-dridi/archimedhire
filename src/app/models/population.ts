import {Model} from "./model";
import {PopulationType} from "./population-type";
import {LangueObtention} from "./langue-obtention";

export class Population extends Model{

  public Population(Id: number, University: string, HardSkills: string, SoftSkills: string, populationType:PopulationType, Experience:string, LangueObtentions:LangueObtention[]){
    super.Model(Id, University, HardSkills, SoftSkills, Experience);
    this.populationType=populationType;
    this.langueObtentions= LangueObtentions;
  }
  populationType:PopulationType|undefined;
  langueObtentions:LangueObtention[]|undefined;


}
