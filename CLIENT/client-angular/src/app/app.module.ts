import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import {HttpClientModule} from '@angular/common/http';
import { CaneComponent } from './cani/cani.component';
import { GattiComponent } from './gatti/gatti.component';
import { QuizComponent } from './quiz/quiz.component';
import { RisultatoComponent } from './quiz/risultato/risultato.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContattiComponent,
    CaneComponent,
    GattiComponent,
    QuizComponent,
    RisultatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
