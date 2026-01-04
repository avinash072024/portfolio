import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  categories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Angular 20', icon: 'bi-patch-check-fill', level: 90, color: '#dd0031' },
        { name: 'TypeScript', icon: 'bi-filetype-ts', level: 85, color: '#3178c6' },
        { name: 'Bootstrap 5', icon: 'bi-bootstrap-fill', level: 95, color: '#7952b3' }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: 'bi-server', level: 80, color: '#339933' },
        { name: 'SQL Server', icon: 'bi-database-fill', level: 75, color: '#4479a1' },
        { name: 'Firebase', icon: 'bi-fire', level: 70, color: '#ffca28' }
      ]
    }
  ];
}
