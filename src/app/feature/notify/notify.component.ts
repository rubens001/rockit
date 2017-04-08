import { Component, OnInit, Input, ReflectiveInjector } from '@angular/core';
import { Injectable, Inject, Injector } from '@angular/core';
import { StoreService } from '../../service/store/store.service';

enum AlertType {
  ERROR,WARN,SUCCESS,INFO
}

/**
 * A service, allowing to open a notifyBox from anywhere
 */
@Injectable()
export class NotifyService {

  private sharedService : StoreService;

  constructor() {
    var injector = ReflectiveInjector.resolveAndCreate([StoreService]);
    this.sharedService  = injector.get(StoreService);
  }

  error(message : string) {
    return (<NotifyboxComponent>this.sharedService.get('NotifyboxComponent')).show(message,AlertType.ERROR);
  }
  success(message : string) {
    return (<NotifyboxComponent>this.sharedService.get('NotifyboxComponent')).show(message,AlertType.SUCCESS);
  }
  warn(message : string) {
    return (<NotifyboxComponent>this.sharedService.get('NotifyboxComponent')).show(message,AlertType.WARN);
  }
  info(message : string) {
    return (<NotifyboxComponent>this.sharedService.get('NotifyboxComponent')).show(message,AlertType.INFO);
  }
}

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css'],
})
export class NotifyboxComponent implements OnInit {

  private items = [];

  @Input()
  top: string = '4em';

  constructor(private sharedService : StoreService) { 
  }

  ngOnInit() {
    this.sharedService.set('NotifyboxComponent',this);
  }

  show(message : string, alertType : AlertType) {
    let classe = new String();
    let iconClasse = new String();
    let type = new String();

    switch (alertType) {
      case AlertType.SUCCESS:
        type = 'success';
        classe = "alert-success visible";
        iconClasse = "fa fa-check-square-o";
        break;
      case AlertType.ERROR:
        type = 'error';
        classe = "alert-danger visible";
        iconClasse = "fa fa-frown-o";
        break;
      case AlertType.WARN:
        type = 'warn';
        classe = "alert-warning visible";
        iconClasse = "fa fa-exclamation-circle";
        break;
      case AlertType.INFO:
        type = 'warn';
        classe = "alert-info visible";
        iconClasse = "fa fa-info-circle";
        break;
    
      default:
        break;
    }
    let item = new Object({type:type, class:classe, iconClass: iconClasse, message:message, visible:true});
    this.items.push(item);
    setTimeout(() => { this.hide(item); },5000);
  }

  hide(item) {
    item.class = item.class.replace('visible','hidden');
    item.visible = false;
    setTimeout(() => {
      let arr = this.items.filter(o => o.visible);
      if (arr.length === 0) {
        this.items = [];
      }
    },1000);
  }

}
