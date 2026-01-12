import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-web-design',
  imports: [CommonModule],
  templateUrl: './web-design.html',
  styleUrl: './web-design.scss',
})
export class WebDesign {
  processSteps = [
    { title: 'Discovery', icon: 'bi-search', desc: 'Understanding your brand, goals, and target audience.' },
    { title: 'Wireframing', icon: 'bi-layout-text-sidebar', desc: 'Creating structural blueprints focused on user flow.' },
    { title: 'UI Design', icon: 'bi-palette', desc: 'Applying colors, typography, and high-fidelity visuals.' },
    { title: 'Development', icon: 'bi-code-slash', desc: 'Turning designs into responsive, lightning-fast code.' }
  ];
}
