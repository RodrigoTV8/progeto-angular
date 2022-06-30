import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cefwm-angular-atendimento-edicao',
  templateUrl: './atendimento-edicao.component.html',
  styleUrls: ['./atendimento-edicao.component.css']
})
export class AtendimentoEdicaoComponent implements OnInit {

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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
