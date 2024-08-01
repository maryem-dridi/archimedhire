import { User } from "./user";

export interface Salarie extends User{
  salaire?: number;
  groupeFk?: number;
}

