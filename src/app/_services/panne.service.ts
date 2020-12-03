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

  getById(id: string): Observable<Panne> {
    return this.http.get<Panne>(`http://localhost:8080/panne/pannes/${id}`);
  }

  addPanne(panne: Panne) {
    console.log("inside Panne");
    this.http.post(`http://localhost:8080/panne/pannes`, panne).subscribe(res => console.log('addPanne done'));
  }

}
