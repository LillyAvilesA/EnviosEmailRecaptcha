import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CorreoService {

  constructor(private _http: HttpClient) {}

  sendMessage(body: any) {

    this._http.post('http://localhost:3000/sendmail', body).subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });;
  }
}
export interface CorreoInterface
  {
    correo: string,
    curso: string,
    precio: number
  }
  