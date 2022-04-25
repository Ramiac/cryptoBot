import { Component, OnInit } from '@angular/core';
import { TitlePageService } from 'src/app/core/services/title-page.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {

  constructor(
    private titlePage: TitlePageService
  ) {
    this.titlePage.setTitlePage("Configurações");
   }

  ngOnInit(): void {
  }

}
