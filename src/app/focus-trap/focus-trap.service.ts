import {Injectable, ElementRef} from '@angular/core';
import {FocusTrapFactory} from '@angular/cdk/a11y';

import {AriaHiddenState} from './types/aria-hidden-state';
import {isString} from 'lodash';

@Injectable()
export class FocusTrapService {
  private originalAriaHiddenStates: AriaHiddenState[] = [];

  constructor(private focusTrapFactory: FocusTrapFactory) {}

  setFocus(elementRef: ElementRef) {
    //this.setAriaHidden(elementRef.nativeElement);
    const poep = this.focusTrapFactory.create(elementRef.nativeElement);
    console.log(poep.destroy());

  }

  clearFocus() {
    this.originalAriaHiddenStates.forEach((originalState) => {
      if (isString(originalState.ariaHidden)) {
        originalState.element.setAttribute('aria-hidden', originalState.ariaHidden);
      } else {
        originalState.element.removeAttribute('aria-hidden');
      }
    });

    this.originalAriaHiddenStates.length = 0;
  }

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
        this.originalAriaHiddenStates.push({
          element: node,
          ariaHidden: node.getAttribute('aria-hidden')
        });

        // Set the focusable area and all it's parent to false, make the siblings true
        node.setAttribute('aria-hidden', String(node !== element));
      }
    });

    this.setAriaHidden(element.parentElement);
  }
}