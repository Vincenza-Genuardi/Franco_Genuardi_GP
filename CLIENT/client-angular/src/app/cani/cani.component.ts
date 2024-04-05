import { Component } from '@angular/core';
import { Animale } from '../models/Animali.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cani',
  templateUrl: './cani.component.html',
  styleUrls: ['./cani.component.css']
})
export class CaneComponent {
  cani:Animale[]
  constructor(private router:Router) {
    this.cani = this.router.getCurrentNavigation().extras.state as Animale[];
    
  }
}
