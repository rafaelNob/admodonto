import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-informacao',
  templateUrl: './informacao.component.html',
  styleUrls: ['./informacao.component.css']
})
export class InformacaoComponent implements OnInit {
  @Input() tipoUsuario:string | undefined;
  listOfOption: string[] = ['Implantodontista', 'Ortodontista', 'Clínico geral'];
  listOfSelectedValue = ['Clínico geral'];
  constructor() { }

  ngOnInit(): void {


  }

}
