import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  public adicionar(event: Event): void {
    this.router.navigate([
      '.',
      'atendimento'
    ], {
      relativeTo: this.activatedRoute
    });
    event.preventDefault();
  }

}
