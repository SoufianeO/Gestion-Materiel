import { Component, OnInit } from '@angular/core';
import {Materiel} from '../../_models/materiel';
import {MaterielService} from '../../_services/materiel.service';
import {first, map} from 'rxjs/operators';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-editmaterial',
  templateUrl: './editmaterial.component.html',
  styleUrls: ['./editmaterial.component.css']
})
export class EditmaterialComponent implements OnInit {

  loading = false;
  idMateriel: any;

  constructor(private router: Router, private route: ActivatedRoute,
              private materielservice: MaterielService, private materiel: Materiel) { }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap
      .subscribe(param => {
         this.idMateriel = param.get('idMateriel');
      });
    this.materielservice.getById(this.idMateriel).pipe(first()).subscribe(materiels => {
      this.loading = false;
      this.materiel = materiels;
    });
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.materiel = form.value;
    this.materielservice.updateMateriel(this.idMateriel, this.materiel);
    this.router.navigate(['InfomaterialComponent']);
    this.loading = false;

  }

}
