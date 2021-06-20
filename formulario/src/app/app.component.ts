import { Component, Directive, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';



  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
  })
  export class AppComponent {
    title = 'formulario';
  onSubmit(f:NgForm) {
   
      alert('Correo enviado');
  }
 

 /* formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    cedula: new FormControl('', [Validators.required,Validators.minLength(10), Validators.maxLength(10)]),
    tipoPersona: new FormControl('', [Validators.required]),
    curso: new FormControl('', [Validators.required]),
    captcha: new FormControl(),
  });
  submit() {

    if (this.formulario.valid)
        alert('Correo enviado');
    else
        alert('Llene el formulario');
  }*/
  
  public resolved(captchaResponse: string) { 
    console.log(`Captcha resuelto con respuesta: ${captchaResponse}`); //Escribe aquí su lógica una vez que se ha verificado qué acción a realizar es un humano
    }
  }
 
 
  