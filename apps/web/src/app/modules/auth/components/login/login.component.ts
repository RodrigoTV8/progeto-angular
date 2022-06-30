import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { take, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'cefwm-angular-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public login(): void{
    this.authService.auth(this.formGroup.value).pipe(
      take(1),
      catchError((err: HttpErrorResponse) => {
        return of(undefined);
      }),
    ).subscribe((resultado: ({token: string} | undefined )) => {
      if(!resultado){
        this.messageService.add({
          severity: 'error',summary: 'Login ou senha incorretos!', detail: 'Tente novamente'
        });
      } else {
        this.messageService.add({
          severity: 'success',summary: 'Login efetuado com sucesso!', detail: 'Seja bem vind@!'
        });
        this.router.navigate(['/home']);
        localStorage.setItem('token', resultado.token);
      }
    });
  }

}
