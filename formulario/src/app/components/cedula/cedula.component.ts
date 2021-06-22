import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cedula',
  templateUrl: './cedula.component.html',
  styleUrls: ['./cedula.component.css']
})
export class CedulaComponent implements OnInit {
  @Input() curso: any;
  constructor() { }

  ngOnInit(): void {
  }

}
