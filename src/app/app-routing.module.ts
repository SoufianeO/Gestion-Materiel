import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {FournisseurComponent} from './fournisseur/fournisseur.component';
import {FonctionnaireComponent} from './fonctionnaire/fonctionnaire.component';
import {InfoUserComponent} from './user/info-user/info-user.component';
import {InfofonctionnaireComponent} from './fonctionnaire/infofonctionnaire/infofonctionnaire.component';
import {InfofournisseurComponent} from './fournisseur/infofournisseur/infofournisseur.component';
import {InfomaterialComponent} from './material/infomaterial/infomaterial.component';
import {ContraComponent} from './contra/contra.component';
import {InfocontraComponent} from './contra/infocontra/infocontra.component';
import {PanneComponent} from './panne/panne.component';
import {InfopanneComponent} from './panne/infopanne/infopanne.component';
import {LoginComponent} from './login';
import {RechercheComponent} from './recherche/recherche.component';
import {Role} from './_models';
import {AuthGuard} from './_helpers';
import {AdminComponent} from './admin';
import {HomeComponent} from './home';
import {MaterialComponent} from './material/material.component';
import {EditmaterialComponent} from './material/editmaterial/editmaterial.component';



const routes: Routes = [

  {path: 'Fournisseur', component: FournisseurComponent, canActivate: [AuthGuard]},
  {path: 'User', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'Fonctionnaire', component: FonctionnaireComponent, canActivate: [AuthGuard]},
  {path: 'MaterialComponent', component: MaterialComponent, canActivate: [AuthGuard]},
  {path: 'InfoUserComponent', component: InfoUserComponent, canActivate: [AuthGuard]},
  {path: 'InfofonctionnaireComponent', component: InfofonctionnaireComponent},
  {path: 'InfofournisseurComponent', component: InfofournisseurComponent, canActivate: [AuthGuard]},
  {path: 'editmaterialComponent/:matricule', component: EditmaterialComponent, canActivate: [AuthGuard]},
  {path: 'InfomaterialComponent', component: InfomaterialComponent, canActivate: [AuthGuard]},
  {path: 'ContraComponent', component: ContraComponent, canActivate: [AuthGuard]},
  {path: 'InfocontraComponent', component: InfocontraComponent, canActivate: [AuthGuard]},
  {path: 'PanneComponent', component: PanneComponent, canActivate: [AuthGuard]},
  {path: 'InfopanneComponent', component: InfopanneComponent, canActivate: [AuthGuard]},
  {path: 'LoginComponent', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'RechercheComponent', component: RechercheComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: {roles: [Role.Admin]}},
  {path: 'login', component: LoginComponent},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
