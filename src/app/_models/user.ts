import { Role } from './role';

export class User {
  username: string;
  password: string;
  //
  id: number;
  email: string;
  nom: string;
  prenom: string;
  tel: string;
  matricule: string;
  service: string;
  site: string;
  role: Role;
  token?: string;
}