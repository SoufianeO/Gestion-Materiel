import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Fournisseur} from '../_models/fournisseur';


@Injectable({ providedIn: 'root' })
export class FournisseurService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`http://localhost:8080/fournsisseur/fournisseurs`);
  }

  getById(id: string): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`http://localhost:8080/fournisseur/fournisseurs/${id}`);
  }

  addFournisseur(fournisseur: Fournisseur) {
    this.http.post(`http://localhost:8080/materiel/materiels`, fournisseur).subscribe(res => console.log('done'));
  }

}
