import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atendimento as IAtendimento} from '../../../../../../../../libs/common/src/lib/interfaces/atendimento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoEdicaoService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public get(id: number): Observable<IAtendimento>{
    return this.httpClient.get<IAtendimento>(
      `/api/atendimentos/${id}`,
    );
  }

  public put(atendimento: IAtendimento): Observable<unknown>{
    return this.httpClient.put<unknown>(
      `/api/atendimentos/${atendimento._id}`,
      atendimento
    );
  }
}
