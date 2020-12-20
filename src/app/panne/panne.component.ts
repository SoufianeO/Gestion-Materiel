import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Panne } from '../_models/panne';
import { PanneService } from '../_services/panne.service';

@Component({
  selector: 'app-panne',
  templateUrl: './panne.component.html',
  styleUrls: ['./panne.component.css']
})
export class PanneComponent implements OnInit {
  loading=false;
  constructor(private router: Router, private panneService: PanneService, private panne: Panne) {
   }
  
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.loading=true;
    console.log(form.value);
    this.panne=form.value;
    this.panneService.addPanne(this.panne);
    this.router.navigate(['InfopanneComponent']);
    this.loading = false;
  }
}
