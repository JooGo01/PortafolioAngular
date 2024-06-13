import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isLightTheme = true;

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    localStorage.setItem('isLightTheme', JSON.stringify(this.isLightTheme));
    this.updateTheme();
  }

  getCurrentTheme(): boolean {
    return this.isLightTheme;
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('isLightTheme');
    if (savedTheme !== null) {
      this.isLightTheme = JSON.parse(savedTheme);
    }
    this.updateTheme();
  }

  private updateTheme() {
    const classList = document.documentElement.classList;
    if (this.isLightTheme) {
      classList.add('light-theme');
      classList.remove('dark-theme');
    } else {
      classList.add('dark-theme');
      classList.remove('light-theme');
    }
  }
}
