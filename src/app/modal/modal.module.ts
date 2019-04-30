import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {A11yModule} from '@angular/cdk/a11y';

import {ModalComponent} from './modal.component';
import {ModalService} from './modal.service';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  providers: [
    ModalService,
  ],
  imports: [
    A11yModule,
    CommonModule,
  ],
  exports: [
    ModalComponent,
  ],
})
export class ModalModule {}