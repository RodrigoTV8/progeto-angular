import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {TabMenuModule} from 'primeng/tabmenu';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppErrorHandler } from './app-error-handler';
import { MessageService } from 'primeng/api';
import { AuthModule } from './modules/auth/auth.module';
import { JwtInterceptor } from './jwt.interceptor';
import { AtendimentoComponent } from './components/atendimento/atendimento.component';
import { ListaAtendimentosComponent } from './components/lista-atendimentos/lista-atendimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtendimentoComponent,
    ListaAtendimentosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AuthModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    TabMenuModule,
    MessageModule,
    ToastModule,
    InputTextModule
  ],
  providers: [
    MessageService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
