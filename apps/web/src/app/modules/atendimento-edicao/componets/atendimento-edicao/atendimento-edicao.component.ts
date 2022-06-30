import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { AtendimentoEdicaoService } from '../service/atendimento-edicao.service';
import { Atendimento as IAtendimento} from '../../../../../../../../libs/common/src/lib/interfaces/atendimento';
import { map, takeUntil } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'cefwm-angular-atendimento-edicao',
  templateUrl: './atendimento-edicao.component.html',
  styleUrls: ['./atendimento-edicao.component.css']
})
export class AtendimentoEdicaoComponent implements OnInit, OnDestroy{

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
    private activatedRoute: ActivatedRoute,
    private atendimentoEdicaoService: AtendimentoEdicaoService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map((params: Params) => {
        const atendimentoId: number = +params['id-atendimento'];
        return atendimentoId;
      }),
      takeUntil(this.subDestruction),
    ).subscribe((id: number) => {
      this.atendimentoEdicaoService.get(id).pipe(
        takeUntil(this.subDestruction),
      ).subscribe( (a : IAtendimento) => {
        this.formGroup.setValue(a);
      });
    });
  }

  ngOnDestroy(): void {
    this.subDestruction.next();
    this.subDestruction.complete();
  }

  public enviarForm(json: IAtendimento){
    this.atendimentoEdicaoService.put(json).subscribe(resultado => {
      if(!resultado){
        this.messageService.add({
          severity: 'error',summary: 'Erro ao atualizar atendimento!', detail: 'Tente novamente'
        });
      }else{
        this.messageService.add({
          severity: 'success',summary: 'Sucesso!', detail: 'Atendimento atualizado com sucesso'
        });
        this.router.navigate(['/home']);
      }
    })
  }
}
