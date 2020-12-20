import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Panne} from '../_models/panne';


@Injectable({ providedIn: 'root' })
export class PanneService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Panne[]> {
    return this.http.get<Panne[]>(`http://localhost:8080/panne/pannes`);
  }

  getById(idPanne: string): Observable<Panne> {
    return this.http.get<Panne>(`http://localhost:8080/panne/pannes/${idPanne}`);
  }

  addPanne(panne: Panne) {
    this.http.post(`http://localhost:8080/panne/pannes`, panne).subscribe(res => console.log('addPanne done'));
  }
  deletePanne(idPanne: string) {
    this.http.delete(`http://localhost:8080/panne/pannes/${idPanne}`).subscribe(res => console.log('deletePanne done'));
  }
  updatePanne(idPanne: string , panne: Panne) {
    this.http.put(`http://localhost:8080/panne/pannes/${idPanne}`, panne).subscribe(res => console.log('updatePanne done'));
  }

}
