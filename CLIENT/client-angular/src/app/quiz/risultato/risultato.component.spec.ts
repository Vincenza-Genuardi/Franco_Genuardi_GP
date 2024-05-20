import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisultatoComponent } from './risultato.component';

describe('RisultatoComponent', () => {
  let component: RisultatoComponent;
  let fixture: ComponentFixture<RisultatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RisultatoComponent]
    });
    fixture = TestBed.createComponent(RisultatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
