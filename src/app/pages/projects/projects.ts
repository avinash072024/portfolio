import { Component, computed, signal } from '@angular/core';
import { UnderConstructionPage } from "../../components/under-construction-page/under-construction-page";

interface Project {
  id: number;
  title: string;
  category: 'Web' | 'Mobile' | 'UI/UX';
  image: string;
  description: string;
  tools: string[];
}

@Component({
  selector: 'app-projects',
  imports: [UnderConstructionPage],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  selectedFilter = signal<string>('All');

  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Quantum Dashboard',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'A real-time data visualization platform built with Angular 20.',
      tools: ['Angular', 'D3.js', 'Firebase']
    },
    {
      id: 2,
      title: 'Nebula Mobile',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3Dassets/project-2.jpg',
      description: 'E-commerce mobile experience with seamless transitions.',
      tools: ['Ionic', 'Capacitor', 'Node.js']
    },
    {
      id: 3,
      title: 'Zenith UI Kit',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3Dassets/project-3.jpg',
      description: 'A comprehensive design system for SaaS products.',
      tools: ['Figma', 'Adobe XD', 'Storybook']
    }
  ]);

  // Reactive filtering
  filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    return filter === 'All' 
      ? this.projects() 
      : this.projects().filter(p => p.category === filter);
  });

  setFilter(category: string) {
    this.selectedFilter.set(category);
  }
}
