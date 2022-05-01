import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';

import { CriptoService } from 'src/app/core/services/cripto.service';
import { TitlePageService } from 'src/app/core/services/title-page.service';
import { CriptoDropdownModel, CriptoModel, CriptoModelFromBack } from 'src/app/modules/home/models/criptoModel';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})


export class ConfiguracoesComponent implements OnInit, OnDestroy {
  updateGrid$ = new Subject<any>();
  criptos = new Array<CriptoDropdownModel>();
  compareCurrencies = new Array<string>();
  formGroup!: FormGroup;
  
  validationFeedBack = {
    text: "",
    class: "",
  }

  constructor(
    private titlePage: TitlePageService,
    private criptoService: CriptoService,
    private formBuilder: FormBuilder, 
  ) {
    this.titlePage.setTitlePage("Configurações");
   }

  ngOnInit(): void {
    this.carregarCriptosDropdown();
    this.carregarComparCurrencyDropdown();

    this.formGroup = this.formBuilder.group({
      criptoSelect: ['', [Validators.required]] ,
      compareCurrencySelect: ['', [Validators.required]],
    })
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

  carregarComparCurrencyDropdown(){
    this.compareCurrencies = [
      "USD", "EUR", "BRL", "BTC"
    ]
  }

  adicionarCripto() {
    if (this.formGroup.valid){
      let cripto: CriptoModelFromBack = {
        name: (String)(this.criptos.find( cripto => cripto.value === this.formGroup.get("criptoSelect")?.value)?.viewValue),
        symbol: this.formGroup.get("criptoSelect")?.value,
        compareCurrency: this.formGroup.get("compareCurrencySelect")?.value,
      }
  
      this.criptoService
        .adicionarCriptoLista(cripto)
        .subscribe(response => {

            this.formGroup.reset();

            Object.keys(this.formGroup.controls).forEach(key => {
              this.formGroup.get(key)?.setErrors(null) ;
            });

            this.validationFeedBack.text = response.message;
            this.validationFeedBack.class = "text-success";

            this.updateGrid$.next();
        }, 
        err => {
          this.validationFeedBack.text = err.error.message;
          this.validationFeedBack.class = "text-danger";
        });
    }


  }

  deletarCripto(element: CriptoModel){
    let cripto: CriptoModelFromBack = {
      name: element.cripto,
      symbol: element.symbol,
      compareCurrency: element.moedaDeReferencia,

    } 
    this.criptoService
      .deletarCriptoLista(cripto)
      .subscribe(response => {
        response
        this.updateGrid$.next();
      }, (err) => {
        console.log(err.error.message)
      })
  }

  ngOnDestroy(): void {
    this.updateGrid$.unsubscribe();
  }

}
