import {Model} from "./model";
import {PopulationType} from "./population-type";
import {LangueObtention} from "./langue-obtention";
import {Certificat} from "./certificat";
import {Postulation} from "./postulation";
import {PopulationSelectionPeriority} from "./population-selection-periority";
import {Experience} from "./Experience";

export class Population extends Model{

  public constructor(Id:number,University:string, HardSkills:string,SoftSkills:string, Experience:Experience, LangueObtentions:LangueObtention[],Certificats:Certificat[],populationType:PopulationType, postulations:Postulation[], populationSelectionPeriority:PopulationSelectionPeriority){
    super(Id,University,HardSkills,SoftSkills,Experience,LangueObtentions,Certificats);
    this.populationType=populationType;
    this.langueObtentions= LangueObtentions;
    this.certificats=Certificats;
    this.postulations=postulations;
    this.populationSelectionPeriority= populationSelectionPeriority;
  }
  populationType:PopulationType;
  postulations:Postulation[];
  populationSelectionPeriority:PopulationSelectionPeriority;
}
