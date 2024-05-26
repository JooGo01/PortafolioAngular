import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [MatTabsModule, MatCardModule, CommonModule]
})
export class ProjectsComponent {
  webProjects = [
    { title: 'Proyecto Web 1', description: 'Descripción del proyecto web 1' },
    // Más proyectos web
  ];
  androidProjects = [
    { title: 'Proyecto Android 1', description: 'Descripción del proyecto android 1' },
    // Más proyectos android
  ];
  desktopProjects = [
    { title: 'Proyecto Desktop 1', description: 'Descripción del proyecto desktop 1' },
    // Más proyectos desktop
  ];
  otherProjects = [
    { title: 'Otro Proyecto 1', description: 'Descripción de otro proyecto 1' },
    // Más otros proyectos
  ];
}
