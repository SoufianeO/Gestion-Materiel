import { Component, OnInit } from '@angular/core';
import {Panne} from '../../_models/panne';
import {PanneService} from '../../_services/panne.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-infopanne',
  templateUrl: './infopanne.component.html',
  styleUrls: ['./infopanne.component.css']
})
export class InfopanneComponent implements OnInit {

  loading = false;
  pannes: Panne[] = [];
  constructor(private panneService: PanneService) { }

  ngOnInit() {
    this.loading = true;
    this.panneService.getAll().pipe(first()).subscribe(pannes => {
      this.loading = false;
      this.pannes = pannes;
    });
  }

}
