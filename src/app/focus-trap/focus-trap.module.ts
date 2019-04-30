import {NgModule} from '@angular/core';

import {A11yModule} from '@angular/cdk/a11y';
import {FocusTrapService} from './focus-trap.service';
import {WindowModule} from '../window/window.module';

@NgModule({
  providers: [
    FocusTrapService,
  ],
  imports: [
    A11yModule,
    WindowModule,
  ]
})
export class FocusTrapModule {}