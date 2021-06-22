import { Component, Directive, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CorreoService } from './correo.service';



  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
  })
  export class AppComponent {
    constructor(private readonly correoService: CorreoService){

    }
    title = 'formulario';
  async onSubmit(f:NgForm) {
    const datosEnvio = {
      correo: "lmdiaz36@gmail.com",
      curso: "JavaScript",
      precio: 200
  };
      this.correoService.sendMessage(JSON.stringify(datosEnvio))
            .subscribe(
              respuesta => {
                alert('Correo enviado');
                console.log('Enviado');
              },
              error => {
                console.error('Error Solicitud', error);
              });
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
 
 
  