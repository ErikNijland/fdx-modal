import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  constructor(private modalService: ModalService) {}

  showModal() {
    this.modalService.openModal('myModal');
  }
}
