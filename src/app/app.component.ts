import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit() {
    setTimeout(() => this.showModal(), 2000);
  }

  showModal() {
    this.modalService.openModal('myModal');   
  }
}
