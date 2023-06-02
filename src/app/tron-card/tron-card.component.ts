import { Component, Input } from '@angular/core';

@Component({
  selector: 'tron-card',
  templateUrl: './tron-card.component.html',
  styleUrls: ['./tron-card.component.css'],
})
export class TronCardComponent {
  @Input() size: string = 'm';
  @Input() backgroundColor: string = 'white';

  get sizeClass(): string {
    return `tron-card-${this.size}`;
  }
}
