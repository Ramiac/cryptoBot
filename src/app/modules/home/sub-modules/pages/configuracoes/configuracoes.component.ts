import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TitlePageService } from 'src/app/core/services/title-page.service';
import { CurrencyDropdownModel } from '../../../models/currency';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})


export class ConfiguracoesComponent implements OnInit {
  criptos = new Array<CurrencyDropdownModel>();
  criptoSelect = new FormControl;

  constructor(
    private titlePage: TitlePageService,
  ) {
    this.titlePage.setTitlePage("Configurações");
   }

  ngOnInit(): void {
    this.carregarCriptosDropdown();
  }

  carregarCriptosDropdown () {
    this.criptos = [
      {
        value: 'BTC',
        viewValue: 'Bitcoin'
      },
      {
        value: 'ETH',
        viewValue: 'Ethereum'
      },
      {
        value: 'Luna',
        viewValue: 'Terra'
      },
      {
        value: 'ADA',
        viewValue: 'Cardano'
      },
      {
        value: 'ATOM',
        viewValue: 'Cosmos'
      },
    ]
  }

  adicionarCripto() {
    this.criptoSelect.value;
    console.log(this.criptoSelect.value);

  }

}
