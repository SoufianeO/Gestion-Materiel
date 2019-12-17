import { Component, OnInit } from '@angular/core';
import {Contrat} from '../../_models/contrat';
import {ContratService} from '../../_services/contrat.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-infocontra',
  templateUrl: './infocontra.component.html',
  styleUrls: ['./infocontra.component.css']
})
export class InfocontraComponent implements OnInit {

  loading = false;
  contrats: Contrat[] = [];

  constructor(private contratService: ContratService) { }

  ngOnInit() {
    this.loading = true;
    this.contratService.getAll().pipe(first()).subscribe(contrats => {
      this.loading = false;
      this.contrats = contrats;
    });
  }

}
