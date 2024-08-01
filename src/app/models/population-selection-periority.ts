export class PopulationSelectionPeriority {
  public constructor(CertificatPeriority:number,LanguePeriority:number,UniversityPeriority:number,SoftSkillPeriority:number,HardSkillPeriority:number,ExperiencePeriority:number) {
    this.CertificatPeriority = CertificatPeriority;
    this.LanguePeriority = LanguePeriority;
    this.UniversityPeriority = UniversityPeriority;
    this.SoftSkillPeriority = SoftSkillPeriority;
    this.HardSkillPeriority = HardSkillPeriority;
    this.ExperiencePeriority = ExperiencePeriority;
  }
  CertificatPeriority:number|undefined;
  LanguePeriority:number|undefined;
  UniversityPeriority:number|undefined;
  SoftSkillPeriority:number|undefined;
  HardSkillPeriority:number|undefined;
  ExperiencePeriority:number|undefined;
}
