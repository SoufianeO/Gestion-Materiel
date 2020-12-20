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

  getById(idMateriel: string): Observable<Materiel> {
    return this.http.get<Materiel>(`http://localhost:8080/materiel/materiels/${idMateriel}`);
  }

  addMateriel(materiel: Materiel) {
    this.http.post(`http://localhost:8080/materiel/materiels`, materiel).subscribe(res => console.log('addMateriel done'));
  }

  deleteMateriel(idMateriel: string) {
    this.http.delete(`http://localhost:8080/materiel/materiels/${idMateriel}`).subscribe(res => console.log('deleteMateriel done'));
  }
  updateMateriel(idMateriel: string , materiel: Materiel) {
    this.http.put(`http://localhost:8080/materiel/materiels/${idMateriel}`, materiel).subscribe(res => console.log('updateMateriel done'));
  }

}