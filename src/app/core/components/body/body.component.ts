import { Component, Input, OnInit } from '@angular/core';
import { MenuModel } from '../../models/menuModel';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() menuButtons = new Array<MenuModel>();

  constructor() { }

  ngOnInit(): void {
  }

}
