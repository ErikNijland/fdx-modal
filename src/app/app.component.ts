import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {
    // setTimeout(() => this.showModal(), 2000);
  }

  showModal(modalName: string) {
    this.modalService.openModal(modalName);   
  }
}
