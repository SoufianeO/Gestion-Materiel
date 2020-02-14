import { Injectable } from "@angular/core";

@Injectable()
export class Materiel {
  matricule: string ;
  type: string ;
  marque: string ;
  model: string ;
  dateAcquisition: string;
  dateMettreEnService: string ;
  etat: string ;

}
