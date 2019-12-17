import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Fonctionnaire} from '../_models/fonctionnaire';


@Injectable({ providedIn: 'root' })
export class FonctionnaireService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Fonctionnaire[]> {
    return this.http.get<Fonctionnaire[]>(`http://localhost:8080/fonctionnaire/fonctionnaires`);
  }

  getById(id: string): Observable<Fonctionnaire> {
    return this.http.get<Fonctionnaire>(`http://localhost:8080/fonctionnaire/fonctionnaires/${id}`);
  }

  addFonctionnaire(fonctionnaire: Fonctionnaire) {
    this.http.post(`http://localhost:8080/fonctionnaire/fonctionnaires`, fonctionnaire).subscribe(res => console.log('done'));
  }

}
