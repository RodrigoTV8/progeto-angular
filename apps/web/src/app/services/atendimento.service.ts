import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atendimento as IAtendimento } from '../../../../../libs/common/src/lib/interfaces/atendimento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public post(atendimento: IAtendimento): Observable<unknown>{
    console.log('Enviando...')
    return this.httpClient.post<unknown>(
      'http://localhost:3333/api/atendimentos',
      atendimento
    );
  }

  public getAll(): Observable<IAtendimento[]>{
    return this.httpClient.get<IAtendimento[]>(
      'http://localhost:3333/api/atendimentos'
    )
  }
}
