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

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppErrorHandler } from './app-error-handler';
import { MessageService } from 'primeng/api';
import { AuthModule } from './modules/auth/auth.module';
import { JwtInterceptor } from './jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    TabMenuModule,
    MessageModule,
    ToastModule,
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
