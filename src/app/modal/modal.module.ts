import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModalComponent} from './modal.component';
import {ModalService} from './modal.service';
import {DomModule} from '../dom/dom.module';
import {FocusTrapModule} from '../focus-trap/focus-trap.module';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  providers: [
    ModalService,
  ],
  imports: [
    CommonModule,
    DomModule,
    FocusTrapModule,
  ],
  exports: [
    ModalComponent,
  ],
})
export class ModalModule {}