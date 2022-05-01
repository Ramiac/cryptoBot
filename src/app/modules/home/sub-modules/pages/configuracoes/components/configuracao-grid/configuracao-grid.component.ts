import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CriptoService } from 'src/app/core/services/cripto.service';
import { CriptoModel, CriptoModelFromBack } from 'src/app/modules/home/models/criptoModel';

@Component({
  selector: 'app-configuracao-grid',
  templateUrl: './configuracao-grid.component.html',
  styleUrls: ['./configuracao-grid.component.scss']
})
export class ConfiguracaoGridComponent implements OnInit {
  @Input() update$!: Observable<any>;
  @Output() criptoDelete = new EventEmitter<CriptoModel>();
  criptoDatasource = new MatTableDataSource<CriptoModel>();

  displayedColumns = [
    "cripto",
    "symbol",
    "moeda de referência",
    "delete"
  ]

  constructor(
    private criptoService: CriptoService,
  ) { }

  ngOnInit(): void {    
    this.buscarGrid();
    this.update$.subscribe(() => this.buscarGrid());
  }

  buscarGrid(){
    var criptoList = new Array<CriptoModel>();
    this.criptoService
      .listarCriptos()
      .subscribe(response =>{
        response.criptos.forEach((cripto: CriptoModelFromBack) => {
          criptoList.push({
            cripto: cripto.name,
            symbol: cripto.symbol,
            moedaDeReferencia: cripto.compareCurrency,
          })
        });
        this.criptoDatasource = new MatTableDataSource(criptoList);
      },(err) => {
          console.log(err.error.message)
      }
        
        );

  }

  emitDeletarCripto(cripto: CriptoModel){
    this.criptoDelete.emit(cripto);
  }

  deletarCripto(id: number){

  }

}
