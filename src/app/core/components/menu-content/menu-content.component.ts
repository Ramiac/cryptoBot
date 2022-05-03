import { Component, Input, OnInit } from '@angular/core';
import { MenuModel } from '../../models/menuModel';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent implements OnInit {
  @Input() menuButtons = new Array<MenuModel>();

  constructor() { }

  ngOnInit(): void {
  }

}

