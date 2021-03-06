import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AtendimentoComponent } from "./components/atendimento/atendimento.component";
import { ListaAtendimentosComponent } from "./components/lista-atendimentos/lista-atendimentos.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lista-atendimentos',
      },
      {
        path: 'lista-atendimentos',
        component: ListaAtendimentosComponent
      },
      {
        path: 'atendimento',
        component: AtendimentoComponent
      },
      {
        path: 'atendimento-edicao',
        loadChildren: () => import(
          './modules/atendimento-edicao/atendimento-edicao.module'
        ).then(mod => mod.AtendimentoEdicaoModule)
      }
    ]
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
