import { Component, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/core/models/menuModel';
import { TitlePageService } from 'src/app/core/services/title-page.service';


const MENU_BUTTONS: MenuModel[] = [
  {
    title: "Home",
    path: "",
    bootstrapIconsClass: "bi bi-house",
  },
  {
    title: "Configurações",
    path: "/home/config",
    bootstrapIconsClass: "bi bi-house",
  },
  {
    title: "Sobre nós",
    path: "",
    bootstrapIconsClass: "bi bi-file-earmark-person",
  },
]

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  titulo: string = '';
  menuButtons = new Array<MenuModel>();

  constructor(
    private titlePage: TitlePageService,
    ) {
    this.titlePage.getTitlePage().subscribe(title => this.titulo = title);
    }

  ngOnInit(): void {
    this.menuButtons = MENU_BUTTONS;
  }

}
