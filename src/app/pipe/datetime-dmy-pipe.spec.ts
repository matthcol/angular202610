import { TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { DatetimeDmyPipe } from './datetime-dmy-pipe';

describe('DatetimeDmyPipe', () => {
  let pipe: DatetimeDmyPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatetimeDmyPipe, DatePipe],
    });
    pipe = TestBed.inject(DatetimeDmyPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  // 1er bloc de test
  describe('when value is a valid date', () => {
    it("cas d'une date en tant que Date sans heure minute seconde", () => {
      const value = new Date(2026, 9, 15);
      const res = pipe.transform(value);
      expect(res).toBe('15/10/2026 00:00');
    });

    it("cas d'une date en tant que Date avec heure minute seconde", () => {
      const value = new Date(2026, 9, 15, 14, 30, 45);
      const res = pipe.transform(value);
      expect(res).toBe('15/10/2026 14:30');
    });

    it("cas d'une date texte avec annee/mois/jour", () => {
      const value = '2026-10-15';
      const res = pipe.transform(value);
      expect(res).toBe('15/10/2026 00:00');
    });

    it("cas d'une date texte avec annee/mois/jour et heure minute seconde", () => {
      const value = '2026-10-15T14:30:45';
      const res = pipe.transform(value);
      expect(res).toBe('15/10/2026 14:30');
    });
  });

  // 2e bloc de test
  describe('when value is nullish', () => {
    it('cas undefined', () => {
      const res = pipe.transform(undefined);
      expect(res).toBeNull();
    });

    it('cas null', () => {
      const res = pipe.transform(null);
      expect(res).toBeNull();
    });
  });

  // 3e bloc de test
  describe('when value is not a valid date', () => {
    it('cas date string non conforme', () => {
      expect(() => pipe.transform('not-a-date')).toThrow();
    });
  });
});
