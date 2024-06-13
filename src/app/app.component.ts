import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {NgClass} from "@angular/common";
import {ThemeService} from "./theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/*export class AppComponent{
  title = 'portafolio';
  theme = 'light-theme';

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.theme = savedTheme ? savedTheme : 'light-theme';
  }

  toggleTheme() {
    this.theme = this.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', this.theme);
  }
}
*/
export class AppComponent implements OnInit{
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.loadTheme();
  }
}
