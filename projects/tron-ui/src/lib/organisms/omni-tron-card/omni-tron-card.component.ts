import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'omni-tron-card',
  templateUrl: './omni-tron-card.component.html',
  styleUrls: ['./omni-tron-card.component.css'],
})
export class OmniTronUiCardComponent implements OnInit {
  @Input() imageSource: string = 'https://via.placeholder.com/150';
  @Input() cardTitle: string = 'Card Title';
  @Input() cardBody: string = 'This is a sample card.';
  @Input() buttonText: string = 'Learn More';
  @Input() buttonLink: string = '#';

  constructor() {}

  ngOnInit(): void {}
}
