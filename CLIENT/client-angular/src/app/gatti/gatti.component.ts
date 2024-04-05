import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Animale } from '../models/Animali.model';
@Component({
  selector: 'app-gatti',
  templateUrl: './gatti.component.html',
  styleUrls: ['./gatti.component.css']
})
export class GattiComponent {
  gatti:Animale[]
  constructor(private router:Router) {
    this.gatti = this.router.getCurrentNavigation().extras.state as Animale[];
  }
}
