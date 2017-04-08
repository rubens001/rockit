import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { ModalService, ModalOptions } from '../modalbox/modalbox.component';
import { NotifyService } from '../notify/notify.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers : [ NotifyService ]
})
export class TestComponent implements OnInit, AfterViewInit {

  closeResult: string;

  screenOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    size: 'sm'
  }
  lockedWindow: NgbModalRef;

  modalService = new ModalService();

  constructor(private modalCustom: NgbModal, private notifyService : NotifyService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // $(function () {
    //   $('[data-toggle="tooltip"]').tooltip();
    // })
  }

  clicked(event) {
    console.log('clicked ' , new Date());
    alert('clicked ' + new Date());
  }

  openModal(idTemplate) {
    this.modalCustom.open(idTemplate, this.screenOptions).result.then((result) => {
      this.closeResult = 'Closed with: ${result}';
      console.log(this.closeResult);
    }, (reason) => {
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
      console.log(this.closeResult);
    });
  }

  ng2Modal(size) {
    let opt: ModalOptions = { title: 'Título aqui', body: '<b>body aqui</b><br />Com quebra', size:size };
 
    if (size == 'sm') {
      this.modalService.error(opt);
    } else if (size == 'md') {
      this.modalService.confirm(opt).result.then((result) => {
        console.log('Closed with ',result);
      }, (reason) => {
        console.log('Dismissed ', reason);
      });
    } else {
      this.modalService.warn(opt).result.then((result) => {
        console.log('Closed with ',result);
      }, (reason) => {
        console.log('Dismissed ', reason);
      });
    }
    
  }

  showNotify() {
    this.notifyService.success('mensagem teste');
  }
}
