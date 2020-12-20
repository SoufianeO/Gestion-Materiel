import { Component, OnInit } from '@angular/core';
import {Materiel} from '../_models/materiel';
import {MaterielService} from '../_services/materiel.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;

  constructor(private router: Router, private materielservice: MaterielService, private materiel: Materiel) {}

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.loading = true;
    console.log(form.value);
    this.materiel = form.value;
    this.materielservice.addMateriel(this.materiel);
    this.router.navigate(['InfomaterialComponent']);
    this.loading = false;
  }
}
