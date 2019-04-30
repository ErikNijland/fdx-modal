import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable()
export class ModalService {
  modals: { [modalName: string]: BehaviorSubject<boolean> } = {};

  registerModal(modalName: string) {
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