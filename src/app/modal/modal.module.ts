import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {A11yModule} from '@angular/cdk/a11y';

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
    A11yModule,
    CommonModule,
    DomModule,
    FocusTrapModule,
  ],
  exports: [
    ModalComponent,
  ],
})
export class ModalModule {}