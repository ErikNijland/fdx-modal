import {Component, OnInit, Input, ElementRef, HostListener} from '@angular/core';
import {ModalService} from './modal.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalName: string;

  showModal$: Observable<boolean>;

  constructor(
    private elementRef: ElementRef,
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.modalService.registerModal(this.modalName, this.elementRef);
    this.showModal$ = this.modalService.isOpen(this.modalName);
  }

  @HostListener('document:keydown.escape')
  closeModal() {
    this.modalService.closeModal(this.modalName);
  }
}