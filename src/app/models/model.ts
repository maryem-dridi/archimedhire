export class Model {
  Model(Id:number,University:string, HardSkills:string,SoftSkills:string, Experience:string):void {
    this.id=Id;
    this.university=University;
    this.hardskills=HardSkills;
    this.softskills=SoftSkills;
    this.experience=Experience;
  }
  id: number | undefined;
  university:string | undefined;
  hardskills:string | undefined;
  softskills:string | undefined;
  experience:string | undefined;
}
