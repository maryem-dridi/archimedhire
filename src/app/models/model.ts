import {LangueObtention} from "./langue-obtention";
import {Certificat} from "./certificat";
import {Experience} from "./Experience";

export class Model {
  constructor(Id:number,University:string, HardSkills:string,SoftSkills:string, Experience:Experience, LangueObtentions:LangueObtention[],Certificats:Certificat[]) {
    this.id=Id;
    this.university=University;
    this.hardskills=HardSkills;
    this.softskills=SoftSkills;
    this.experience=Experience;
    this.langueObtentions=LangueObtentions;
    this.certificats=Certificats;
  }
  id: number | undefined;
  university:string ;
  hardskills:string ;
  softskills:string ;
  experience:Experience ;
  langueObtentions:LangueObtention[];
  certificats:Certificat[];

}
