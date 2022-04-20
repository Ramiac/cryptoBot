import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-currency',
  templateUrl: './card-currency.component.html',
  styleUrls: ['./card-currency.component.scss']
})
export class CardCurrencyComponent implements OnInit {
  @Input() abreviatura: string = "";
  @Input() nome: string = "";
  @Input() valor: string = "";

  constructor() { }

  ngOnInit(): void {

  }

}
