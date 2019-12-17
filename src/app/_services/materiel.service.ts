import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Materiel} from '../_models/materiel';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';


@Injectable({ providedIn: 'root' })
export class MaterielService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Materiel[]> {
    return this.http.get<Materiel[]>(`http://localhost:8080/materiel/materiels`);
  }

  getById(id: string): Observable<Materiel> {
    return this.http.get<Materiel>(`http://localhost:8080/materiel/materiels/${id}`);
  }

  addMateriel(materiel: Materiel) {
    this.http.post(`http://localhost:8080/materiel/materiels`, materiel).subscribe(res => console.log('done'));
  }

  deleteMateriel(matricule: string) {
    this.http.delete(`http://localhost:8080/materiel/materiels/${matricule}`).subscribe(res => console.log('deleted'));
  }
  updateMateriel(matricule: string , materiel: Materiel) {
    this.http.put(`http://localhost:8080/materiel/materiels/${matricule}`, materiel).subscribe(res => console.log('done'));
  }

}
