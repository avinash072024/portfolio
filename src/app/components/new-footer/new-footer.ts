import { Component } from '@angular/core';

@Component({
  selector: 'app-new-footer',
  imports: [],
  templateUrl: './new-footer.html',
  styleUrl: './new-footer.scss',
})
export class NewFooter {
  currentYear = new Date().getFullYear();
}
