import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha-avaliacao-orofacial',
  templateUrl: './ficha-avaliacao-orofacial.component.html',
  styleUrls: ['./ficha-avaliacao-orofacial.component.css']
})
export class FichaAvaliacaoOrofacialComponent implements OnInit {

  radioValue:string| undefined
  inputValue: string | null = null;
  textValue: string | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
