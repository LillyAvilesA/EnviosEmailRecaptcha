import { Component, Directive, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CorreoInterface, CorreoService } from './correo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}

