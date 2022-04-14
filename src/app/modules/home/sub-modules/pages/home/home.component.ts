import { Component, OnInit } from '@angular/core';
import { TitlePageService } from 'src/app/core/services/title-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titlePage: TitlePageService
  ) {
    this.titlePage.setTitlePage("Home");
   }

  ngOnInit(): void {
  }

}
