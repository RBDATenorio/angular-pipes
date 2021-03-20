import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name?: string;
  date?: string;
  amount?: string;
  km?: number;

  objectPipe = [
    { name: 'Ricardo', lastName: 'Tenorio' },
    { name: 'Bruno', lastName: 'Araújo'}
  ];

  onNameChange (event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.name = value;
  }

  onDateChange (event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.date = value;
  }

  onAmountChange (event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.amount = value;

  }

  onKmChange (event: Event) {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);
    this.km = value;
  }
}
