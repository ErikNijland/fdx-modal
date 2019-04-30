import {Injectable, ElementRef, ApplicationRef} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';

import {DomService} from '../dom/dom.service';
import {FocusTrapService} from '../focus-trap/focus-trap.service';
import {ModalState} from './types/modal-state';

@Injectable()
export class ModalService {
  modals: { [modalName: string]: ModalState } = {};

  constructor(
    private applicationRef: ApplicationRef,
    private domService: DomService,
    private focusTrapService: FocusTrapService,
  ) {}

  registerModal(modalName: string, elementRef: ElementRef) {
    this.domService.moveToBody(elementRef);
    this.modals[modalName] = {
      isOpen: new BehaviorSubject(false),
      elementRef,
    };
  }

  openModal(modalName: string) {
    const modalState = this.modals[modalName];
    
    modalState.isOpen.next(true);
    this.focusTrapService.setFocus(modalState.elementRef);
  }

  closeModal(modalName: string) {
    this.modals[modalName].isOpen.next(false);
    this.focusTrapService.clearFocus();
  }

  isOpen(modalName: string): Observable<boolean> {
    return this.modals[modalName].isOpen;
  }
}