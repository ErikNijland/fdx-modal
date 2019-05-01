import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {A11yModule} from '@angular/cdk/a11y';
import {ModalComponent} from './modal.component';
import {ModalDirective} from './modal.directive';
import {ModalService} from './modal.service';
import {DomModule} from '../dom/dom.module';
import {WindowModule} from '../window/window.module';
import {FocusTrapModule} from '../focus-trap/focus-trap.module';

@NgModule({
  declarations: [
    ModalComponent,
    ModalDirective,
  ],
  providers: [
    ModalService,
  ],
  imports: [
    A11yModule,
    CommonModule,
    DomModule,
    FocusTrapModule,
    WindowModule,
  ],
  exports: [
    ModalComponent,
    ModalDirective,
  ],
})
export class ModalModule {}