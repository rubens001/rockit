import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { Injectable, Inject, Directive, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { StoreService } from '../../service/store/store.service';

/**
 * Options passed when opening a modal box
 */
export interface ModalOptions {
  title: string,
  body: string,
  size?: 'sm' | 'md' | 'lg'
}
enum modalType {
  ERROR,WAIT,CONFIRM,WARN,SUCCESS
}

/**
 * A service, allowing to open a modal from anywhere and get back a promise.
 */
@Injectable()
export class ModalService {

  private sharedService : StoreService;

  constructor() {
    var injector = ReflectiveInjector.resolveAndCreate([StoreService]);
    this.sharedService  = injector.get(StoreService);
  }

  error(options: ModalOptions): NgbModalRef {
    return (<ModalboxComponent>this.sharedService.get('ModalboxComponent')).openModal(options,modalType.ERROR);
  }
  wait(options: ModalOptions): NgbModalRef {
    return (<ModalboxComponent>this.sharedService.get('ModalboxComponent')).openModal(options,modalType.WAIT);
  }
  confirm(options: ModalOptions): NgbModalRef {
    return (<ModalboxComponent>this.sharedService.get('ModalboxComponent')).openModal(options,modalType.CONFIRM);
  }
  warn(options: ModalOptions): NgbModalRef {
    return (<ModalboxComponent>this.sharedService.get('ModalboxComponent')).openModal(options,modalType.WARN);
  }
  success(options: ModalOptions): NgbModalRef {
    return (<ModalboxComponent>this.sharedService.get('ModalboxComponent')).openModal(options,modalType.SUCCESS);
  }
}

@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.css']
})
export class ModalboxComponent implements OnInit {

  @ViewChild('idTemplateModalBox') elTemplate:ElementRef;
  
  element : ElementRef;
  options: ModalOptions;
  hideBtnCancel : boolean;
  txtOk : string;
  txtCancel : string;
  iconClass: string;
  headerClass: string;

  screenOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false
  }

  constructor(private modalService: NgbModal, private sharedService : StoreService) {
  }

  ngOnInit() {
    this.element = this.elTemplate;
    this.sharedService.set('ModalboxComponent',this);
  }

  openModal(options: ModalOptions, type : modalType) : NgbModalRef {
    this.options = options;
    this.hideBtnCancel = true;
    this.txtOk = 'OK';
    this.txtCancel = 'Cancela';
    
    switch (type) {
      case modalType.CONFIRM:
        this.hideBtnCancel = false;
        this.txtOk = 'Sim';
        this.txtCancel = 'Não';
        this.iconClass = 'fa fa-check-square-o fa-lg';
        this.headerClass = 'bg-info';
        break;
      case modalType.WARN:
        this.iconClass = 'fa fa-info-circle fa-lg';
        this.headerClass = 'bg-faded';
        break;
      case modalType.ERROR:
        this.iconClass = 'fa fa-exclamation-circle fa-lg';
        this.headerClass = 'bg-danger';
        break;
      case modalType.WAIT:
        this.iconClass = 'fa fa-clock-o fa-lg';
        this.headerClass = 'bg-inverse text-white';
        break;
      case modalType.SUCCESS:
        this.iconClass = 'fa fa-clock-o fa-lg';
        this.headerClass = 'bg-success';
        break;
      default:
        break;
    }
    
    if (options.size == 'md') {
      delete this.screenOptions.size;
    } else {
      this.screenOptions.size = options.size;
    }

    return this.modalService.open(this.element, this.screenOptions);
  }

}
