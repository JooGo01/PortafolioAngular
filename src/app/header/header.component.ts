import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { TranslationService } from '../translation.service';
import {MatAnchor} from "@angular/material/button";
import {ButtonToggleComponent} from "../button-toggle/button-toggle.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MatToolbarModule, RouterModule, LanguageSelectorComponent, ButtonToggleComponent,MatAnchor]
})
export class HeaderComponent implements OnInit {
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
