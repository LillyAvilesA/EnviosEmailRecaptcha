import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CorreoService {

  constructor(private _http: HttpClient) { }

  sendMessage(body: CorreoInterface) {
    this._http.post('http://localhost:3000/sendmail', body).subscribe(
      (val) => {
        alert("Exito");
        console.log("Exito", val);
      },
      response => {
        console.log("Error", response);
      },
      () => {
        console.log("Completo");
      });;
  }
}
export interface CorreoInterface {
  correo: string,
  curso: string,
  precio: number
}
