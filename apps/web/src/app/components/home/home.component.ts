import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'cefwm-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items: MenuItem[] = [
    {
      label: 'Atendimentos',
      icon: 'pi pi-calendar',
      routerLink: [ '/home' ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
