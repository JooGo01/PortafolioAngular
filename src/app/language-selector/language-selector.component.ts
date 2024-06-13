import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';
import {MatFormField} from "@angular/material/form-field";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
  imports: [
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
  ],
  standalone: true
})
export class LanguageSelectorComponent {
  translations: any = {};
  constructor(private translationService: TranslationService) {}

  changeLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
  }

  ngOnInit() {
    this.translationService.currentTranslations.subscribe(
      (translations) => {
        this.translations = translations;
      }
    );
  }
}
