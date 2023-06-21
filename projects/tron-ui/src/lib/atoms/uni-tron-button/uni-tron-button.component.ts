import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'uni-tron-button',
  templateUrl: './uni-tron-button.component.html',
  styleUrls: ['./uni-tron-button.component.css']
})
export class UniTronButtonComponent {
  @Input() disabled = false;

}