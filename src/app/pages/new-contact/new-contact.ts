import { Component } from '@angular/core';

@Component({
  selector: 'app-new-contact',
  imports: [],
  templateUrl: './new-contact.html',
  styleUrl: './new-contact.scss',
})
export class NewContact {
  location: string = 'Kolhapur, Maharashtra, India';
  email: string = 'avinashmarbhal1994@outlook.com';
  mobile: string = '+91 87964 57407';
}
