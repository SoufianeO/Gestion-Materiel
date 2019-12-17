import { Component, OnInit } from '@angular/core';
import {Materiel} from '../../_models/materiel';
import {MaterielService} from '../../_services/materiel.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  templateUrl: './infomaterial.component.html',
  selector: 'app-infomaterial',
  styleUrls: ['./infomaterial.component.css']
})
export class InfomaterialComponent implements OnInit {

  loading = false;
  materiels: Materiel[] = [];

  constructor(private router: Router, private materielservice: MaterielService) { }

  ngOnInit() {
    this.loading = true;
    this.materielservice.getAll().pipe(first()).subscribe(materiels => {
      this.loading = false;
      this.materiels = materiels;
    });
  }

  delete(matricule: string) {

    this.loading = true;
    this.materielservice.deleteMateriel(matricule);
    this.router.navigate(['MaterialComponent']);
    this.loading = false;
  }


}
