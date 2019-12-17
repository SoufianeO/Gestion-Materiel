import { Component, OnInit } from '@angular/core';
import {Fournisseur} from '../../_models/fournisseur';
import {FournisseurService} from '../../_services/fournisseur.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-infofournisseur',
  templateUrl: './infofournisseur.component.html',
  styleUrls: ['./infofournisseur.component.css']
})
export class InfofournisseurComponent implements OnInit {

  loading = false;
  fournisseurs: Fournisseur[] = [];

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit() {
    this.loading = true;
    this.fournisseurService.getAll().pipe(first()).subscribe(fournisseurs => {
      this.loading = false;
      this.fournisseurs = fournisseurs;
    });
  }

}
