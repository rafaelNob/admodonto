import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anamnese',
  templateUrl: './anamnese.component.html',
  styleUrls: ['./anamnese.component.css']
})
export class AnamneseComponent implements OnInit {
  radioValue:string| undefined
  inputValue: string | null = null;
  textValue: string | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
