import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
  standalone: true
})
export class LanguageSelectorComponent {
  constructor(private translationService: TranslationService) {}

  changeLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
  }
}
