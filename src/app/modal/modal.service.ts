import {Injectable} from '@angular/core';
import {BehaviourSubject, Observable} from 'rxjs';

@Injectable()
export class ModalService {
  modals: { [modalName: string]: BehaviourSubject<boolean> } = {};

  registerModal(modalName: string) {
    this.modals[modalName] = new BehaviourSubject(false);
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