import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-under-construction-page',
  imports: [],
  templateUrl: './under-construction-page.html',
  styleUrl: './under-construction-page.scss',
})
export class UnderConstructionPage implements OnInit, OnDestroy {
  countdown = signal({ days: 0, hours: 0, mins: 0, secs: 0 });
  private timerInterval: any;

  ngOnInit() {
    // Set target date (e.g., 30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    this.timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      this.countdown.set({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }
}