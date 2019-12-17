import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import {Contrat} from '../_models/contrat';


@Injectable({ providedIn: 'root' })
export class ContratService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(`http://localhost:8080/contrat/contrats`);
  }

  getById(id: string): Observable<Contrat> {
    return this.http.get<Contrat>(`http://localhost:8080/contrat/contrats/${id}`);
  }

  addContrat(contrat: Contrat) {
    this.http.post(`http://localhost:8080/contrat/contrats`, contrat).subscribe(res => console.log('done'));
  }

}
