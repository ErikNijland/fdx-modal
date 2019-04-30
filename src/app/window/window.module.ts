import {NgModule} from '@angular/core';

import { windowFactory, WindowService } from './window.service';

@NgModule({
  providers: [
    { provide: WindowService, useFactory: windowFactory },
  ],
})
export class WindowModule {}
