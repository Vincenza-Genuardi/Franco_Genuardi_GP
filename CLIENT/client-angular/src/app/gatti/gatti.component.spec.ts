import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GattiComponent } from './gatti.component';

describe('GattiComponent', () => {
  let component: GattiComponent;
  let fixture: ComponentFixture<GattiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GattiComponent]
    });
    fixture = TestBed.createComponent(GattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
