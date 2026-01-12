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
        { name: 'HTML5', icon: 'fa-brands fa-html5', level: 98, color: '#e34f26' },
        { name: 'CSS3, SCSS, SASS', icon: 'fa-brands fa-css3-alt', level: 98, color: '#264de4' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', level: 90, color: '#f7df1e' },
        { name: 'Angular 14+', icon: 'fa-brands fa-angular', level: 90, color: '#dd0031' },
        { name: 'React, Next.js', icon: 'fa-brands fa-react', level: 70, color: '#61dafb' },
        { name: 'TypeScript', icon: 'bi bi-typescript', level: 85, color: '#3178c6' },
        { name: 'Bootstrap, Tailwind CSS', icon: 'bi bi-bootstrap-fill', level: 95, color: '#7952b3' },
        { name: 'jQuery', icon: 'fa-brands fa-js', level: 80, color: '#0769ad' }
      ]
    },
    // {
    //   title: 'Backend & Database',
    //   skills: [
    //     { name: 'Node.js', icon: 'bi-server', level: 80, color: '#339933' },
    //     { name: 'SQL Server', icon: 'bi-database-fill', level: 75, color: '#4479a1' },
    //     { name: 'Firebase', icon: 'bi-fire', level: 70, color: '#ffca28' }
    //   ]
    // }
  ];
}
