import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { RegistroComponent } from './components/registro/registro.component';
import { CedulaComponent } from './components/cedula/cedula.component';
import { CursoComponent } from './components/curso/curso.component';
import { CorreoComponent } from './components/correo/correo.component';
import { TipoPersonaComponent } from './components/tipo-persona/tipo-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CorreoService } from './correo.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    CedulaComponent,
    CursoComponent,
    CorreoComponent,
    TipoPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RouterModule,
    RecaptchaFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    CorreoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
