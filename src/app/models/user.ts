import {Model} from './model'
export class User extends Model{
  public constructor(nom: string, prenom:string, email: string, password: string, adresse: string, pieceJointe:File|null,score:number) {
    super();
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.adresse = adresse;
        this.pieceJointe = pieceJointe;
        this.score = score
  }
  nom:string;
  prenom:string;
  email:string;
  password:string;
  adresse:string;
  pieceJointe:File|null;
  score:number;
  /*public string? Nom { get; set; }
public string? Prenom { get; set; }
  [EmailAddress]
public string Email { get; set; }
[MinLength(8,ErrorMessage ="password must be at least of 8 characters")]
  [RegularExpression(@"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}", ErrorMessage = "Invalid Password!")]
public string? Password { get; set; }
public string? Adresse { get; set; }
public string? NumeroTelephone { get; set; }
public string? PieceJointe { get; set; }
public string? Role { get; set; }
public bool? Activated {  get; set; }
public string? ResetPasswordToken { get; set;}
public DateTime? ResetPasswordExpiry { get; set; }
  //public File? PieceJointe { get; set; }
  [NotMapped]
public Double Score { get; set; } = 0;

[JsonIgnore]
public virtual ICollection<Postulation>? Postulations { get; set; }*/
}
