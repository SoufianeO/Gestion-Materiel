import { Role } from './role';

export class User {
  idFonctionnaire: string;
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