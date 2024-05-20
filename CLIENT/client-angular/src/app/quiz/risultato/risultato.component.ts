import { Component, OnInit, Input } from '@angular/core';
import { Razza } from '../quiz.component'; 

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.css']
})
export class RisultatoComponent implements OnInit {
  @Input() risultato: Razza | null = null; 

  constructor() {}

  ngOnInit(): void {
   
  }
}