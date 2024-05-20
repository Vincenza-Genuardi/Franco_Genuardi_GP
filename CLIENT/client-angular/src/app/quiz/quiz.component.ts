import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export interface Razza { 
  nome: string;
  immagine: string; 
  descrizione: string; 
}

@Component({ 
  selector: 'app-quiz', 
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})


export class QuizComponent implements OnInit {
  risposte: any = {};
  domandaCorrente = 0;
  quizCompleto = false;
  risultato: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Initialization code if needed
  }

  domande: any[] = [
    {
      testo: "Ti piace passare del tempo all'aperto?",
      risposte: [
        { testo: "Sì", valore: "si" },
        { testo: "No", valore: "no" }
      ]
    },
    {
      testo: "Preferisci animali di taglia grande o piccola?",
      risposte: [
        { testo: "Grande", valore: "grande" },
        { testo: "Piccola", valore: "piccola" }
      ]
    },
    {
      testo: "Hai spazio sufficiente in casa per un animale domestico?",
      risposte: [
        { testo: "Sì", valore: "si" },
        { testo: "No", valore: "no" }
      ]
    },
    {
      testo: "Ti piace l'idea di dover portare il tuo animale domestico a fare passeggiate regolari?",
      risposte: [
        { testo: "Sì", valore: "si" },
        { testo: "No", valore: "no" }
      ]
    },
    {
      testo: "Quanto tempo sei disposto a dedicare alla cura del tuo animale domestico ogni giorno?",
      risposte: [
        { testo: "Poco tempo", valore: "poco" },
        { testo: "Abbastanza tempo", valore: "abbastanza" },
        { testo: "Molto tempo", valore: "molto" }
      ]
    },
    {
      testo: "Preferisci un animale domestico tranquillo o energico?",
      risposte: [
        { testo: "Tranquillo", valore: "tranquillo" },
        { testo: "Energico", valore: "energico" }
      ]
    },
    {
      testo: "Sei disposto a spendere molto tempo per addestrare il tuo animale domestico?",
      risposte: [
        { testo: "Sì", valore: "si" },
        { testo: "No", valore: "no" }
      ]
    },
    {
      testo: "Ti piace la compagnia costante del tuo animale domestico?",
      risposte: [
        { testo: "Sì", valore: "si" },
        { testo: "No", valore: "no" }
      ]
    },
    {
      testo: "Sei allergico al pelo degli animali?",
      risposte: [
        { testo: "Sì", valore: "si" },
        { testo: "No", valore: "no" }
      ]
    },
    {
      testo: "Preferisci un animale domestico indipendente o bisognoso di attenzioni?",
      risposte: [
        { testo: "Indipendente", valore: "indipendente" },
        { testo: "Bisognoso di attenzioni", valore: "bisognoso" }
      ]
    },
    {
      testo: "Hai bambini piccoli in casa?",
      risposte: [
        { testo: "Sì", valore: "si" },
        { testo: "No", valore: "no" }
      ]
    },
    {
      testo: "Quanto tempo sei disposto a dedicare alla pulizia del tuo animale domestico?",
      risposte: [
        { testo: "Poco tempo", valore: "poco" },
        { testo: "Abbastanza tempo", valore: "abbastanza" },
        { testo: "Molto tempo", valore: "molto" }
      ]
    },
    {
      testo: "Preferisci un animale domestico che non perde molto pelo?",
      risposte: [
        { testo: "Sì", valore: "si" },
        { testo: "No", valore: "no" }
      ]
    },
    {
      testo: "Vuoi un animale domestico che possa vivere in un appartamento?",
      risposte: [
        { testo: "Sì", valore: "si" },
        { testo: "No", valore: "no" }
      ]
    },
    {
      testo: "Ti piace l'idea di un animale domestico che possa fare trucchi?",
      risposte: [
        { testo: "Sì", valore: "si" },
        { testo: "No", valore: "no" }
      ]
    },
    {
      testo: "Preferisci un animale domestico silenzioso o che fa rumore?",
      risposte: [
        { testo: "Silenzioso", valore: "silenzioso" },
        { testo: "Rumoroso", valore: "rumoroso" }
      ]
    },
    {
      testo: "Ti piace avere un animale domestico che ti segue ovunque?",
      risposte: [
        { testo: "Sì", valore: "si" },
        { testo: "No", valore: "no" }
      ]
    }
  ];
  

  prossimaDomanda(): void {
    this.domandaCorrente++;
    if (this.domandaCorrente === this.domande.length) {
      this.quizCompleto = true;
    }
  }

  onSubmit(): void {
    this.calcolaRisultato();
    this.quizCompleto = true;
  
    const risultatoBreed = this.risultato;
    this.router.navigate(['risultato'], { queryParams: { risultato: risultatoBreed } });
  }

  selezionaRisposta(risposta: string): void {
    this.risposte[this.domandaCorrente] = risposta;
    if (this.domandaCorrente === this.domande.length - 1) {
      this.onSubmit();
    } else {
      this.prossimaDomanda();
    }
  }

  calcolaRisultato(): void {
    const risposte = this.risposte;

    const punteggi: { [key: string]: number } = {
      "Labrador": 0,
      "Pastore Tedesco": 0,
      "Barboncino": 0,
      "Bulldog Francese": 0,
      "Soriano": 0,
      "Bengala": 0,
      "Siamese": 0
    };

    if (risposte[0] === 'si') {
      punteggi["Labrador"] += 1;
    } else {
      punteggi["Soriano"] += 1;
    }
  
    if (risposte[1] === 'grande') {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
    } else {
      punteggi["Barboncino"] += 1;
      punteggi["Bulldog Francese"] += 1;
      punteggi["Soriano"] += 1;
      punteggi["Bengala"] += 1;
      punteggi["Siamese"] += 1;
    }
  
    if (risposte[2] === 'si') {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
      punteggi["Barboncino"] += 1;
    } else {
      punteggi["Bulldog Francese"] += 1;
      punteggi["Soriano"] += 1;
      punteggi["Bengala"] += 1;
      punteggi["Siamese"] += 1;
    }
  
    if (risposte[3] === 'si') {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
    } else {
      punteggi["Barboncino"] += 1;
      punteggi["Bulldog Francese"] += 1;
      punteggi["Soriano"] += 1;
      punteggi["Bengala"] += 1;
      punteggi["Siamese"] += 1;
    }
  
    if (risposte[4] === 'poco') {
      punteggi["Barboncino"] += 1;
      punteggi["Bulldog Francese"] += 1;
      punteggi["Soriano"] += 1;
      punteggi["Bengala"] += 1;
      punteggi["Siamese"] += 1;
    } else if (risposte[4] === 'abbastanza') {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
    } else {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
      punteggi["Barboncino"] += 1;
    }
  
    if (risposte[5] === 'tranquillo') {
      punteggi["Barboncino"] += 1;
      punteggi["Bulldog Francese"] += 1;
      punteggi["Soriano"] += 1;
    } else {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
      punteggi["Bengala"] += 1;
      punteggi["Siamese"] += 1;
    }
  
    if (risposte[6] === 'si') {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
    } else {
      punteggi["Barboncino"] += 1;
      punteggi["Bulldog Francese"] += 1;
      punteggi["Soriano"] += 1;
      punteggi["Bengala"] += 1;
      punteggi["Siamese"] += 1;
    }
  
    if (risposte[7] === 'si') {
      punteggi["Labrador"] += 1;
      punteggi["Barboncino"] += 1;
    } else {
      punteggi["Pastore Tedesco"] += 1;
      punteggi["Soriano"] += 1;
    }
  
    if (risposte[8] === 'si') {
      punteggi["Barboncino"] += 1;
    } else {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
    }
  
    if (risposte[9] === 'indipendente') {
      punteggi["Soriano"] += 1;
      punteggi["Bengala"] += 1;
    } else {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
      punteggi["Siamese"] += 1;
    }
  
    if (risposte[10] === 'si') {
      punteggi["Labrador"] += 1;
      punteggi["Barboncino"] += 1;
    } else {
      punteggi["Soriano"] += 1;
      punteggi["Bengala"] += 1;
    }
  
    if (risposte[11] === 'poco') {
      punteggi["Soriano"] += 1;
      punteggi["Siamese"] += 1;
    } else if (risposte[11] === 'abbastanza') {
      punteggi["Barboncino"] += 1;
    } else {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
    }
  
    if (risposte[12] === 'si') {
      punteggi["Barboncino"] += 1;
      punteggi["Bengala"] += 1;
    } else {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
    }
  
    if (risposte[13] === 'si') {
      punteggi["Barboncino"] += 1;
      punteggi["Bulldog Francese"] += 1;
    } else {
      punteggi["Soriano"] += 1;
      punteggi["Bengala"] += 1;
    }
  
    if (risposte[14] === 'si') {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
    } else {
      punteggi["Barboncino"] += 1;
      punteggi["Bulldog Francese"] += 1;
    }
  
    if (risposte[15] === 'silenzioso') {
      punteggi["Soriano"] += 1;
      punteggi["Siamese"] += 1;
    } else {
      punteggi["Labrador"] += 1;
      punteggi["Pastore Tedesco"] += 1;
    }
  
    if (risposte[16] === 'si') {
      punteggi["Labrador"] += 1;
      punteggi["Barboncino"] += 1;
    } else {
      punteggi["Pastore Tedesco"] += 1;
      punteggi["Bulldog Francese"] += 1;
    }

    let razzaMigliore = '';
    let punteggioMigliore = 0;
    for (const razza in punteggi) {
      if (punteggi.hasOwnProperty(razza)) {
        if (punteggi[razza] > punteggioMigliore) {
          razzaMigliore = razza;
          punteggioMigliore = punteggi[razza];
        }
      }
    }

    this.risultato = razzaMigliore;
    this.router.navigate(['risultato'], { state: { risultato: this.risultato } });
  }

  ricominciaQuiz(): void {
    this.quizCompleto = false;
    this.domandaCorrente = 0;
    this.risposte = {};
    this.risultato = null;
  }
}
