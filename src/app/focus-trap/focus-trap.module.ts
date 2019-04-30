import {NgModule} from '@angular/core';
import {FocusTrapService} from './focus-trap.service';
import {WindowModule} from '../window/window.module';

@NgModule({
  providers: [
    FocusTrapService,
  ],
  imports: [
    WindowModule,
  ]
})
export class FocusTrapModule {}