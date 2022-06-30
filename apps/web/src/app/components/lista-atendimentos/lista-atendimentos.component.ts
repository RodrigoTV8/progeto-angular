import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AtendimentoService } from '../../services/atendimento.service';
import { Atendimento as IAtendimento } from '../../../../../../libs/common/src/lib/interfaces/atendimento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cefwm-angular-lista-atendimentos',
  templateUrl: './lista-atendimentos.component.html',
  styleUrls: ['./lista-atendimentos.component.css']
})
export class ListaAtendimentosComponent implements OnInit {

  public atendimentos$: Observable<IAtendimento[]> = this.atendimentoService.getAll();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private atendimentoService: AtendimentoService
  ) { }

  ngOnInit(): void {
  }

}
