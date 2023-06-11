import { NgModule } from '@angular/core';
import { TronUiComponent } from './tron-ui.component';
import { TronUiCardComponent } from './card/tron-card.component';



@NgModule({
  declarations: [
    TronUiComponent,
    TronUiCardComponent
  ],
  imports: [
  ],
  exports: [
    TronUiComponent,
    TronUiCardComponent,
  ]
})
export class TronUiModule { }
