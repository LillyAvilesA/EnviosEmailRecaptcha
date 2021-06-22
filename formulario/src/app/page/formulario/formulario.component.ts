import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl   } from "@angular/forms";


import { FormularioService } from '../../_services/formulario.service'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  
  formularioForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { 
    this.formularioForm = this.formBuilder.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      apellido:['',[Validators.required,Validators.minLength(3)]],
      correoElectronico:['',[Validators.required,Validators.email]],
      cedula:['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      curso:[null,[Validators.required]],
      tipo_persona:[null,[Validators.required]],
      captcha:[null,[Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  get f(){
    return this.formularioForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.formularioForm.invalid){
      alert('Existen errores en el formulario');
      return;
    }

    this.loading = true;

    this.formularioService.EnviarCorreo(this.formularioForm.value)
    .pipe(first())
    .subscribe(data =>{
      alert("Registro realizado con exito, revise su correo electrónico")
      
    },
    error => {
      alert("Ha ocurrido un error en la inscripción")
      this.loading = false;
    });
  }

  public resolved(captchaResponse: string) { 
    console.log(`Captcha resuelto con respuesta: ${captchaResponse}`); //Escribe aquí su lógica una vez que se ha verificado qué acción a realizar es un humano
  }
}
