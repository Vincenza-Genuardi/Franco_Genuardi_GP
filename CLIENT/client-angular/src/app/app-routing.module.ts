import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { CaneComponent } from './cani/cani.component';
import { GattiComponent } from './gatti/gatti.component';
import { QuizComponent } from './quiz/quiz.component';
import { RisultatoComponent } from './quiz/risultato/risultato.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent }, 
  { path: 'contatti', component:ContattiComponent},
  { path: 'cani', component:CaneComponent},
  { path: 'gatti', component:GattiComponent},
  { path: 'quiz', component: QuizComponent },
  { path: 'risultato', component: RisultatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
