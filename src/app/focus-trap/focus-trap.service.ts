import {Injectable, ElementRef} from '@angular/core';

@Injectable()
export class FocusTrapService {
  setFocus(elementRef: ElementRef) {
    this.setAriaHidden(elementRef.nativeElement);
  }

  clearFocus() {}

  /*
  A recursive function that gives all siblings of an element aria-hidden="true".
  It will repeat the process for the parent element.
  It stops when reaching the <body> element.
  */
  private setAriaHidden(element: HTMLElement) {
    if (element === document.body) {
      return;
    }

    element.parentNode.childNodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        node.setAttribute('aria-hidden', String(node === element));
      }
    });

    this.setAriaHidden(element.parentElement);
  }
}