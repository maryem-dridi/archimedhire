export class PopulationSelectionPeriority {
  public constructor(certificatPeriority:number,languePeriority:number,universityPeriority:number,softSkillPeriority:number,hardSkillPeriority:number,experiencePeriority:number) {
    this.certificatPeriority = certificatPeriority;
    this.languePeriority = languePeriority;
    this.universityPeriority = universityPeriority;
    this.softSkillPeriority = softSkillPeriority;
    this.hardSkillPeriority = hardSkillPeriority;
    this.experiencePeriority = experiencePeriority;
  }
  certificatPeriority:number|undefined;
  languePeriority:number|undefined;
  universityPeriority:number|undefined;
  softSkillPeriority:number|undefined;
  hardSkillPeriority:number|undefined;
  experiencePeriority:number|undefined;
}
