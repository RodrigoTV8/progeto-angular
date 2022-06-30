import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoEdicaoComponent } from './componets/atendimento-edicao/atendimento-edicao.component';

const routes: Routes = [
  {
    path: ':id-atendimento',
    component: AtendimentoEdicaoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoEdicaoRoutingModule { }
