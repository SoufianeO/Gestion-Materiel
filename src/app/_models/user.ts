import { Role } from './role';

export class User {
  id: number;
  username: string;
  password: string;
  matricule: string;
  nom: string;
  prenom: string;
  tel: string;
  email: string;
  service: string;
  site: string;
  role: Role;
  token?: string;

}
