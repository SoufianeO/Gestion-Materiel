import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Panne } from '../_models/panne';
import { PanneService } from '../_services/panne.service';

@Component({
  selector: 'app-panne',
  templateUrl: './panne.component.html',
  styleUrls: ['./panne.component.css']
})
export class PanneComponent implements OnInit {
  loading: boolean;
  constructor(private fb:FormBuilder,private router: Router, private panneService: PanneService, private panne: Panne) {
   }

  panneForm = this.fb.group({
    idPanne: ['', Validators.required],
    idFonctionnaire: ['', Validators.required],
    idMateriel: ['', Validators.required],
    delaiReponse: [''],
    dateAcquisition: [''],
    delaiResolution: [''],
    etat: [''],
    description: ['']
  });
  
  ngOnInit() {
  }
  onSubmit() {
    this.loading=true;
    this.panne=this.panneForm.value;
    console.warn(this.panneForm.value);
    this.panneService.addPanne(this.panne);
    this.router.navigate(['InfopanneComponent']);
    this.loading = false;
  }

}
