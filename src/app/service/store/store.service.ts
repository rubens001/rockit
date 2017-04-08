import { Injectable } from '@angular/core';

/**
 * A shared service, allowing store / get / remove data.
 */
@Injectable()
export class StoreService {

  private datas:any;

  // singleton instance
  static instance: StoreService;

  constructor() {
      this.datas={};
      return StoreService.instance = StoreService.instance || this;
  }

  set(id:string, data:any) {
      this.datas[id]=data;
  }

  get(id:string) {
    return this.datas[id];
  }

  remove(id:string) {
    delete this.datas[id];
  }
}