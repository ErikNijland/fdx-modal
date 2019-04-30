import {NgModule} from '@angular/core';
import {DomService} from './dom.service';
import {WindowModule} from '../window/window.module';

@NgModule({
  providers: [
    DomService,
  ],
  imports: [
    WindowModule,
  ]
})
export class DomModule {}