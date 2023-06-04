import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-tron-ui',
  template: ` <button [style.color]="color">{{ body }}</button> `,
  styles: [],
})
export class TronUiComponent implements OnInit {
  @Input() color: string = '#000';
  @Input() body: string = 'Hello world';

  constructor() {}

  ngOnInit(): void {}
}
