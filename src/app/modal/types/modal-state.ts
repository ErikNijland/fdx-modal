import {ElementRef} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface ModalState {
  isOpen: BehaviorSubject<boolean>;
  elementRef: ElementRef;
}