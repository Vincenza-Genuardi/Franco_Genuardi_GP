import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { CaneComponent } from './cani/cani.component';
import { GattiComponent } from './gatti/gatti.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent }, 
  { path: 'contatti', component:ContattiComponent},
  { path: 'cani', component:CaneComponent},
  { path: 'gatti', component:GattiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
