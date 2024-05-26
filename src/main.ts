import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

const routes: Routes = [
  { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
  { path: 'aboutme', loadComponent: () => import('./app/aboutme/aboutme.component').then(m => m.AboutmeComponent) },
  { path: 'projects', loadComponent: () => import('./app/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'contact', loadComponent: () => import('./app/contact/contact.component').then(m => m.ContactComponent) }
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideHttpClient() // Método actual recomendado para proporcionar HttpClient
  ],
}).catch(err => console.error(err));
