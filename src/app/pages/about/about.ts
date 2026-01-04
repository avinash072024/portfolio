import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  experienceYears = 5; // Example dynamic data
  projectsCompleted = 50;

  downloadResume() {
    window.open('assets/resume.pdf', '_blank');
  }

  education = [
    { year: '2018 - 2022', degree: 'Bachelor of Technology', school: 'Tech University', desc: 'Specialized in Computer Science with a focus on Web Technologies.' },
    { year: '2016 - 2018', degree: 'Higher Secondary', school: 'Science Academy', desc: 'Focused on Mathematics and Physics.' }
  ];

  experience = [
    { year: '2023 - Present', role: 'Senior Web Developer', company: 'Digital Solutions Inc.', desc: 'Leading the frontend team to build scalable Angular applications.' },
    { year: '2022 - 2023', role: 'Junior Developer', company: 'SoftSystems', desc: 'Developed responsive UI components using Bootstrap and JavaScript.' }
  ];
}
