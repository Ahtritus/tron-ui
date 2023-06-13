import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'uni-tron-button',
  templateUrl: './uni-tron-button.component.html',
  styleUrls: ['./uni-tron-button.component.css']
})
export class UniTronButtonComponent {

  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'light' = 'primary';
  @Input() text: string = 'Button';

  constructor() { }
  
}
