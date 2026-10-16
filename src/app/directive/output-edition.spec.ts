import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OutputEdition } from './output-edition';

// hote de test : OutputEdition a un input() required, impossible d'instancier
// la directive directement avec `new` (pas de contexte d'injection Angular)
@Component({
  imports: [OutputEdition],
  template: `<div [appOutputEdition]="'demo'"></div>`,
})
class HostComponent {}

describe('OutputEdition', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = fixture.debugElement.query(By.directive(OutputEdition));
    expect(directive).toBeTruthy();
  });
});
