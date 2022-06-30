import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'cefwm-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public items: MenuItem[] = [
    {
      label: 'Atendimentos',
      icon: 'pi pi-calendar',
      routerLink: [ '/home' ],
    },
    {
      label: 'Novo Atendimento',
      icon: 'pi pi-plus',
      routerLink: [ '/home/atendimento' ],
    },
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

}
