import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private language = new BehaviorSubject<string>('en');
  private translations = new BehaviorSubject<any>({});

  currentLanguage = this.language.asObservable();
  currentTranslations = this.translations.asObservable();

  constructor(private http: HttpClient) {
    this.loadTranslations('en');
  }

  changeLanguage(lang: string) {
    this.language.next(lang);
    this.loadTranslations(lang);
  }

  private loadTranslations(lang: string) {
    this.http.get(`/assets/i18n/${lang}.json`).subscribe(
      (translations: any) => {
        this.translations.next(translations);
      },
      (error) => {
        console.error(`Error loading ${lang} translations`, error);
      }
    );
  }
}
