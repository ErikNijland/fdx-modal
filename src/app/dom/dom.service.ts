import {Injectable, ElementRef} from '@angular/core';

@Injectable()
export class DomService {
  move(item: ElementRef, to: ElementRef) {
    item.nativeElement.appendChild(to.nativeElement);
  }
}