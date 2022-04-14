import { Component, OnInit } from '@angular/core';
import { TitlePageService } from 'src/app/core/services/title-page.service';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  titulo: string = '';

  constructor(
    private titlePage: TitlePageService,
    ) {
    this.titlePage.getTitlePage().subscribe(title => this.titulo = title);
    }

  ngOnInit(): void {
  }

}
