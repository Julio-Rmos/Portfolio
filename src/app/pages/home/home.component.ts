import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    NavbarComponent,
    CommonModule,
    RouterModule,
    FooterComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutmeComponent,
  ],
})
export class HomeComponent {}
