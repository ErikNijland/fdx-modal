import {Directive, Input, HostListener} from '@angular/core';
import {ModalService} from './modal.service';

@Directive({
  selector: '[modal]',
})
export class ModalDirective {
  @Input() modal: string;

  constructor(private modalService: ModalService) {}

  @HostListener('click')
  openModal() {
    this.modalService.openModal(this.modal);
  }
}