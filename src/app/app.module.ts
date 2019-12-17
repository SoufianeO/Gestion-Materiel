import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorInterceptor, fakeBackendProvider, JwtInterceptor} from './_helpers';
import {appRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { FonctionnaireComponent } from './fonctionnaire/fonctionnaire.component';
import { InfoUserComponent } from './user/info-user/info-user.component';
import { InfofonctionnaireComponent } from './fonctionnaire/infofonctionnaire/infofonctionnaire.component';
import { InfofournisseurComponent } from './fournisseur/infofournisseur/infofournisseur.component';
import { MaterialComponent } from './material/material.component';
import { InfomaterialComponent } from './material/infomaterial/infomaterial.component';
import { ContraComponent } from './contra/contra.component';
import { InfocontraComponent } from './contra/infocontra/infocontra.component';
import { PanneComponent } from './panne/panne.component';
import { InfopanneComponent } from './panne/infopanne/infopanne.component';
import { LoginComponent } from './login';
import { RechercheComponent } from './recherche/recherche.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home';
import {AdminComponent} from './admin';
import {Materiel} from './_models/materiel';
import { EditmaterialComponent } from './material/editmaterial/editmaterial.component';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    ContraComponent,
    InfocontraComponent,
    FonctionnaireComponent,
    InfofonctionnaireComponent,
    FournisseurComponent,
    InfofournisseurComponent,
    HomeComponent,
    LoginComponent,
    MaterialComponent,
    InfomaterialComponent,
    PanneComponent,
    InfopanneComponent,
    RechercheComponent,
    UserComponent,
    InfoUserComponent,
    EditmaterialComponent
],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    Materiel
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
