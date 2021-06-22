import { HttpClient,  HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Formulario } from '../_class/formulario'

@Injectable({
  providedIn: 'root'
})

export class FormularioService {
  private readonly API_URL = 'http://localhost:3000/'
  
  constructor(
    private httpClient: HttpClient
  ) { 

  }

  EnviarCorreo(formulario: Formulario):Observable<any>{
    return this.httpClient.post<any>(`${this.API_URL}`,formulario);
  }
}
