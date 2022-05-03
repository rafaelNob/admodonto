import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anamnese',
  templateUrl: './anamnese.component.html',
  styleUrls: ['./anamnese.component.css']
})
export class AnamneseComponent implements OnInit {
  isUsuario = true
  constructor() { }

  ngOnInit(): void {
  }

  teste(){
    this.isUsuario = !this.isUsuario
  }

}
