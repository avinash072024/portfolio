import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OnlyCharacters } from '../../directives/only-characters';
declare var $: any;

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, OnlyCharacters],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm: FormGroup;

  location: string = 'Kolhapur, Maharashtra, India';
  email: string = 'avinashmarbhal1994@outlook.com';
  mobile: string = '+91 87964 57407';

  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      this.contactForm.reset();
      this.submitted = false;
      $('#staticBackdrop').modal('show');
    }
  }
}
