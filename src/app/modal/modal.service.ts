import {Injectable, ElementRef} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

import {DomService} from '../dom/dom.service';

@Injectable()
export class ModalService {
  modals: { [modalName: string]: BehaviorSubject<boolean> } = {};

  constructor(
    private domService: DomService,
    private elementRef: ElementRef,
  ) {}

  registerModal(modalName: string) {
    this.domService.moveToBody(this.elementRef);
    this.modals[modalName] = new BehaviorSubject(false);
  }

  openModal(modalName: string) {
    this.modals[modalName].next(true);
  }

  closeModal(modalName: string) {
    this.modals[modalName].next(false);
  }

  isOpen(modalName: string): Observable<boolean> {
    return this.modals[modalName];
  }
}