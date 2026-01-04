import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // private themeKey = 'user-theme';

  // constructor() {
  //   const savedTheme = localStorage.getItem(this.themeKey) || 'light';
  //   this.setTheme(savedTheme);
  // }

  // toggleTheme() {
  //   const newTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  //   this.setTheme(newTheme);
  // }

  // private setTheme(theme: string) {
  //   document.documentElement.setAttribute('data-bs-theme', theme);
  //   localStorage.setItem(this.themeKey, theme);
  // }

  // private renderer: Renderer2;
  // private currentTheme = 'light';

  // constructor(rendererFactory: RendererFactory2) {
  //   this.renderer = rendererFactory.createRenderer(null, null);
  // }

  // initTheme() {
  //   const savedTheme: any = localStorage.getItem('theme') || 'light';
  //   this.updateTheme(savedTheme);
  // }

  // updateTheme(theme: 'light' | 'dark') {
  //   this.currentTheme = theme;
  //   // Apply the theme to the <html> tag
  //   this.renderer.setAttribute(document.documentElement, 'data-bs-theme', theme);
  //   localStorage.setItem('theme', theme);
  // }

  // getCurrentTheme() {
  //   return this.currentTheme;
  // }

  private renderer: Renderer2;
  private themeKey = 'portfolio-theme';

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: Object // Vital for SSR/Hydration in Angular 20
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  // 1. Call this immediately on app startup
  initTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.themeKey) || 'dark';
      this.applyTheme(savedTheme);
    }
  }

  // 2. Logic to switch and save
  toggleTheme() {
    const newTheme = this.getCurrentTheme() === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
    localStorage.setItem(this.themeKey, newTheme);
  }

  private applyTheme(theme: string) {
    this.renderer.setAttribute(document.documentElement, 'data-bs-theme', theme);
  }

  getCurrentTheme(): string {
    if (isPlatformBrowser(this.platformId)) {
      return document.documentElement.getAttribute('data-bs-theme') || 'light';
    }
    return 'light';
  }
}
