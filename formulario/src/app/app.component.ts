import { Component, Directive, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';



  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
  })
  export class AppComponent {
    title = 'formulario';
      
  public resolved(captchaResponse: string) { 
    console.log(`Captcha resuelto con respuesta: ${captchaResponse}`); //Escribe aquí su lógica una vez que se ha verificado qué acción a realizar es un humano
    }
  }
 
 
  