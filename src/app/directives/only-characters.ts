import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyCharacters]'
})
export class OnlyCharacters {

  // @HostListener('input', ['$event'])
  // onInput(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   input.value = input.value.replace(/[^a-zA-Z]/g, '');
  // }

  // @HostListener('input', ['$event'])
  // onInput(event: Event) {
  //   const input = event.target as HTMLInputElement;

  //   // 1️⃣ Remove non-letters and extra spaces
  //   let value = input.value.replace(/[^a-zA-Z ]/g, '');

  //   // 2️⃣ Convert to "Title Case"
  //   value = value
  //     .toLowerCase()
  //     .split(' ')
  //     .filter(word => word.length > 0)
  //     .map(word => word[0].toUpperCase() + word.slice(1))
  //     .join(' ');

  //   input.value = value;
  // }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    // Allow only letters and spaces
    let value = input.value.replace(/[^a-zA-Z ]/g, '');

    // Allow only single space between words
    value = value.replace(/\s+/g, ' ');

    // Capitalize first letter and letter after space
    value = value.replace(/\b\w/g, char => char.toUpperCase());

    input.value = value;
  }


}
