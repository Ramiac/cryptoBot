import { Component, OnInit } from '@angular/core';
import { TitlePageService } from 'src/app/core/services/title-page.service';
import { CriptoCardModel, CriptoModel, CriptoModelFromBack } from '../../../models/criptoModel';
import { CriptoService } from 'src/app/core/services/cripto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  killLoading:boolean = true;
  showError!:boolean;
  criptoCards = new Array<CriptoCardModel>();

  constructor(
    private titlePage: TitlePageService,
    private criptoService: CriptoService
  ) {
    this.titlePage.setTitlePage("Home");
   }

  ngOnInit(): void {
    this.carregarCurrencyCards();

    this.killLoadingFunc();
  }

  carregarCurrencyCards (){
    this.criptoService.listarCriptos()
      .subscribe(response => {
        response.criptos.forEach((cripto: CriptoModelFromBack) => {
          this.criptoService.fetchCriptosPreco(cripto.symbol, cripto.compareCurrency)
          .subscribe( response => {
            this.criptoCards.push({
              cripto: cripto.name,
              symbol: cripto.symbol,
              moedaDeReferencia: cripto.compareCurrency,
              preco: response.quote.price,
            })
          })
        });
        this.killLoading = false;
      },
      err => {
        console.log(err.error.message);
      })
  }

  killLoadingFunc (){
    setTimeout(() => {
      this.showError = this.criptoCards.length == 0 ? true:false
      this.killLoading = false;
    }, 1500);
  }
}
