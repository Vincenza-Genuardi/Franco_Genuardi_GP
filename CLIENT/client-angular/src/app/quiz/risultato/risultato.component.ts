import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.css']
})
export class RisultatoComponent implements OnInit {
  risultato: string | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const queryParams = this.activatedRoute.snapshot.queryParams as { risultato: string }; // Type assertion
    this.risultato = queryParams.risultato;
  }
}