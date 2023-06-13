import { NgModule } from '@angular/core';
import { TronUiComponent } from './tron-ui.component';
import { OmniTronUiCardComponent } from './organisms/omni-tron-card/omni-tron-card.component';
import { UniTronButtonComponent } from './atoms/uni-tron-button/uni-tron-button.component';
import { UniTronInputComponent } from './atoms/uni-tron-input/uni-tron-input.component';
import { UniTronCheckboxComponent } from './atoms/uni-tron-checkbox/uni-tron-checkbox.component';
import { UniTronRadioButtonComponent } from './atoms/uni-tron-radio-button/uni-tron-radio-button.component';
import { MultiTronButtonGroupComponent } from './molecules/multi-tron-button-group/multi-tron-button-group.component';
import { MultiTronToggleSwitchComponent } from './molecules/multi-tron-toggle-switch/multi-tron-toggle-switch.component';
import { OmniTronSidebarComponent } from './organisms/omni-tron-sidebar/omni-tron-sidebar.component';
import { SuperTronHeaderComponent } from './templates/super-tron-header/super-tron-header.component';
import { SuperTronFooterComponent } from './templates/super-tron-footer/super-tron-footer.component';



@NgModule({
  declarations: [
    TronUiComponent,
    OmniTronUiCardComponent,
    UniTronButtonComponent,
    UniTronInputComponent,
    UniTronCheckboxComponent,
    UniTronRadioButtonComponent,
    MultiTronButtonGroupComponent,
    MultiTronToggleSwitchComponent,
    OmniTronSidebarComponent,
    SuperTronHeaderComponent,
    SuperTronFooterComponent
  ],
  imports: [
  ],
  exports: [
    TronUiComponent,
    OmniTronUiCardComponent,
  ]
})
export class TronUiModule { }
