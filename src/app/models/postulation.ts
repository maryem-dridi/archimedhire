import {User} from "./user";
import {Population} from "./population";

export class Postulation {
  public constructor(motivationText:string,postuledDate:Date,userFk:number,populationFk:number,user:User,population:Population) {
      this.motivationText=motivationText;
      this.postuledDate=postuledDate;
      this.userFk=userFk;
      this.populationFk=populationFk;
      this.user=user;
      this.population=population;
  }
  motivationText:string;
  postuledDate:Date;
  userFk:number;
  populationFk:number;
  user:User;
  population:Population;
}
