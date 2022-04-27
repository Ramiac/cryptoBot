import { CurrencyCardModel } from '../../../models/currency';
import { Component, OnInit } from '@angular/core';
import { TitlePageService } from 'src/app/core/services/title-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  currencyCards = new Array<CurrencyCardModel>();

  constructor(
    private titlePage: TitlePageService
  ) {
    this.titlePage.setTitlePage("Home");
   }

  ngOnInit(): void {
    this.carregarCurrencyCards();
  }

  carregarCurrencyCards (){
    this.currencyCards = [
      {
        currencyAbrev: "BTC",
        currencyNome: "Bitcoin",
        currencyValor: "USD 46.000"

      },
      {
        currencyAbrev: "ETH",
        currencyNome: "Ethereum",
        currencyValor: "USD 3.120"

      },
      {
        currencyAbrev: "LUNA",
        currencyNome: "TerraLuna",
        currencyValor: "USD 100"

      },
      {
        currencyAbrev: "ADA",
        currencyNome: "ada",
        currencyValor: "USD 130.00"
      },
      {
        currencyAbrev: "ATOM",
        currencyNome: "Cosmos",
        currencyValor: "USD 27.00"
      },
    ]
  }

}
