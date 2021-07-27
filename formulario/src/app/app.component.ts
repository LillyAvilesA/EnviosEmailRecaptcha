import { Component, Directive, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CorreoInterface, CorreoService } from './correo.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
    
    
  }
 

  constructor(private dialog: MatDialog, private store: AngularFirestore) {}

  
}

