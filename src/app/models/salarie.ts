import { User } from "./user";
import {Groupe} from "./groupe";

export interface Salarie extends User{
  salaire?: number;
  groupe:Groupe;
  groupeFk?: number;
}

