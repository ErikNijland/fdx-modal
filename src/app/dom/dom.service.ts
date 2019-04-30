import {Injectable, ElementRef} from '@angular/core';
import {WindowService} from '../window/window.service';

@Injectable()
export class DomService {
  constructor(private windowService: WindowService) {}

  moveToBody(item: ElementRef) {
    this.windowService.document.body.appendChild(item.nativeElement);
  }
}