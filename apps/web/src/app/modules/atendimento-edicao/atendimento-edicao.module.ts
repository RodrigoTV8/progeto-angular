import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';

import { AtendimentoEdicaoRoutingModule } from './atendimento-edicao-routing.module';
import { AtendimentoEdicaoComponent } from './componets/atendimento-edicao/atendimento-edicao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AtendimentoEdicaoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AtendimentoEdicaoRoutingModule,
    ButtonModule,
    InputTextModule
  ]
})
export class AtendimentoEdicaoModule { }
