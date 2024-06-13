import {Component, OnInit} from '@angular/core';
import {TranslationService} from "../translation.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  standalone: true
})
export class AboutmeComponent  implements OnInit {
  translations: any = {};

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.currentTranslations.subscribe(
      (translations) => {
        this.translations = translations;
      }
    );
  }
}
