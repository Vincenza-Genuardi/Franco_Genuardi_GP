import { Component, OnInit } from '@angular/core';
import { Animale } from './models/Animali.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  AnimaliUrl = 'https://3000-vincenzagen-francogenua-5a1kg38lc5o.ws-eu110.gitpod.io/api'; //URL for fetching data
  cani : Animale[];
  gatti : Animale[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.AnimaliUrl).subscribe(data => {
      this.cani = data['Cani'];
      this.gatti = data['Gatti'];
    });
  }
}
