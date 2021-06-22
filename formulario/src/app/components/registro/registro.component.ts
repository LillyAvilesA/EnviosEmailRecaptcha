import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CorreoInterface, CorreoService } from 'src/app/correo.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  curso: DatosUser = {};
  captchav = true;
  cursos = [
    {
      nombre: "Html($250)",
      precio: 250
    },
    {
      nombre: "JavaScript($300)",
      precio: 300
    },
    {
      nombre: "CSS($200)",
      precio: 200
    },
  ];
  tipoPersona = [
    {
      nombre: "Estudiante(75%)",
      desc: 75
    },
    {
      nombre: "Profesor(50%)",
      desc: 50
    },
    {
      nombre: "Profesional",
      desc: 0
    },

  ];
  constructor(private readonly correoService: CorreoService) {

  }
  title = 'formulario';
  onSubmit(formulario: NgForm) {
    const datosIngresados = formulario.form.value;
    const datosEnvio: CorreoInterface = {
      correo: datosIngresados.correoCampo,
      curso: datosIngresados.cursot.nombre,
      precio: datosIngresados.cursot.precio - datosIngresados.cursot.precio*(datosIngresados.tipoPersona.desc/100)
    };
    this.correoService.sendMessage(datosEnvio);

  }
  public resolved(captchaResponse: string) {
    this.captchav = false;  
  }
}
export interface DatosUser {
  nombre?: string;
  apellido?: string;
  cedula?: string;
  correo?: string;
  tipoPersona?: any;
  cursot?: any;
}

