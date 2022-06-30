import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Atendimento as IAtendimento } from '../../../../../../libs/common/src/lib/interfaces/atendimento';
import { AtendimentoService } from '../../services/atendimento.service';

@Component({
  selector: 'cefwm-angular-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {

  public escola: FormControl = new FormControl(
    '',
    Validators.required
  );
  public data: FormControl = new FormControl(
    '',
    Validators.required
  );
  public orientador: FormControl = new FormControl(
    '',
    Validators.required
  );
  public descricao: FormControl = new FormControl(
    '',
    Validators.required
  );
  public formGroup: FormGroup = new FormGroup({
    _id: new FormControl(null),
    escola: this.escola,
    data: this.data,
    orientador: this.orientador,
    descricao: this.descricao
  });

  private subDestruction: Subject<void> = new Subject();

  constructor(
    private atendimentoService: AtendimentoService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subDestruction.next();
    this.subDestruction.complete();
  }

  public enviarForm(json: IAtendimento){
    this.atendimentoService.post(json).subscribe( resultado => {
      if(!resultado){
        this.messageService.add({
          severity: 'error',summary: 'Erro ao adicionar atendimento!', detail: 'Tente novamente'
        });
      }else{
        this.messageService.add({
          severity: 'success',summary: 'Sucesso!', detail: 'Atendimento adicionado com sucesso'
        });
        this.router.navigate(['/home']);
      }
    });

  }

}
