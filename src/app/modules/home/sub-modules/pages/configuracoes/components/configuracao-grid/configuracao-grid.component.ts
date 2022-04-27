import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CurrencyTableModel } from 'src/app/modules/home/models/currency';

const CRIPTO_DATA: CurrencyTableModel[] = [
  {
    id: 1,
    cripto: "Bitcoin",
    valor: "40.000",
    moedaDeReferencia: "USD",
  }
]

@Component({
  selector: 'app-configuracao-grid',
  templateUrl: './configuracao-grid.component.html',
  styleUrls: ['./configuracao-grid.component.scss']
})
export class ConfiguracaoGridComponent implements OnInit {
  criptoDatasource = new MatTableDataSource<CurrencyTableModel>();

  displayedColumns = [
    "id",
    "cripto",
    "valor",
    "moeda de referência",
    "delete"
  ]

  constructor() { }

  ngOnInit(): void {
    this.buscarGrid()
  }

  buscarGrid(){
    this.criptoDatasource = new MatTableDataSource(CRIPTO_DATA);
    console.log(this.criptoDatasource);

  }

  deletarCripto(id: number){

  }

}
