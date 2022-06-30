import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AtendimentoService } from '../../services/atendimento.service';
import { Atendimento as IAtendimento } from '../../../../../../libs/common/src/lib/interfaces/atendimento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cefwm-angular-lista-atendimentos',
  templateUrl: './lista-atendimentos.component.html',
  styleUrls: ['./lista-atendimentos.component.css']
})
export class ListaAtendimentosComponent {

  public atendimentos$: Observable<IAtendimento[]> = this.atendimentoService.getAll();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private atendimentoService: AtendimentoService
  ) { }


  public editar(atendimento: IAtendimento, event: Event): void {
    this.router.navigate([
      '..',
      'atendimento-edicao',
      atendimento._id
    ], {
      relativeTo: this.activatedRoute
    });
    event.preventDefault();
  }

}
