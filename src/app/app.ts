import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme-service';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('portfolio2');

  // constructor(private themeService: ThemeService) { }

  // constructor(private router: Router, private themeService: ThemeService) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       window.scrollTo({ top: 0, behavior: 'smooth' });
  //     }
  //   });
  // }

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private themeService: ThemeService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  ngOnInit() {
    // This restores the theme from localStorage on every page load/refresh
    this.themeService.initTheme();
  }
}
