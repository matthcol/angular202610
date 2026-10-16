import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MovieCardDetail } from './movie-card-detail';

// le template formate des nombres en locale 'fr' (DecimalPipe) ; en vrai c'est
// enregistre au demarrage de l'app dans app.config.ts, a refaire ici pour les tests
registerLocaleData(localeFr);

describe('MovieCardDetail', () => {
  let component: MovieCardDetail;
  let fixture: ComponentFixture<MovieCardDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardDetail],
      // DatePipe est injecte directement (inject(DatePipe)) par DatetimeDmyPipe ;
      // en conditions reelles il est fourni au niveau racine dans app.config.ts
      providers: [DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardDetail);
    component = fixture.componentInstance;

    // id est un input() required, alimente par le routing (withComponentInputBinding) en vrai
    fixture.componentRef.setInput('id', '42');

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
