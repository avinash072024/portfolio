import { NgClass } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Constants } from '../../models/constants';
import { ThemeService } from '../../services/theme-service';
import { ThemeToggler } from "../theme-toggler/theme-toggler";

@Component({
  selector: 'app-header',
  imports: [NgClass, RouterLink, RouterLinkActive, ThemeToggler],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // Existing signals
  isScrolled = signal(false);
  isDarkMode = signal(false);
  scrollProgress = signal(0); // For the progress bar
  isMobileMenuOpen = signal(false);
  websiteName: string = Constants.APP_NAME;

  private themeService = inject(ThemeService);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll = window.scrollY;
    this.isScrolled.set(scroll > 25);

    // Calculate scroll percentage
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress.set((scroll / docHeight) * 100);
  }

  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  toggleTheme(): void {
    this.themeService.toggleTheme();
    // Update local signal to swap icons
    this.isDarkMode.set(this.themeService.getCurrentTheme() === 'dark');
  }

  closeNavbar() {
    // ... your existing logic to hide the bootstrap collapse ...
    this.isMobileMenuOpen.set(false);
  }
}
