import { Component, OnInit } from '@angular/core';
import {Fonctionnaire} from '../../_models';
import {FonctionnaireService} from '../../_services/fonctionnaire.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-infofonctionnaire',
  templateUrl: './infofonctionnaire.component.html',
  styleUrls: ['./infofonctionnaire.component.css']
})
export class InfofonctionnaireComponent implements OnInit {

  loading = false;
  fonctionnaire: Fonctionnaire[] = [];

  constructor(private fonctionnaireService: FonctionnaireService) { }

  ngOnInit() {
    this.loading = true;
    this.fonctionnaireService.getAll().pipe(first()).subscribe(fonctionnaires => {
      this.loading = false;
      this.fonctionnaire = fonctionnaires;
    });
  }

}
