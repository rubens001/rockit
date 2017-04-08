import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { MessagesEn } from './messages.en';
import { MessagesPt } from './messages.pt';
import { MessagesEs } from './messages.es';

/**
 * A service, allowing translate predefined codes to user prefered language.
 */
@Injectable()
export class I18nService {

  userService = new UserService();
  msgEn = new MessagesEn();
  msgPt = new MessagesPt();
  msgEs = new MessagesEs();
  
  constructor() {
  }

  translate(value : string) : string {
      let config = this.userService.getConfig();
      let ret;
      switch (config.language) {
        case 'en':
            ret = this.msgEn.msg[value];
            break;
        case 'pt':
            ret = this.msgPt.msg[value];
            break;
        case 'es':
            ret = this.msgEs.msg[value];
            break;
      }
      return ret ? ret : "???"+ value;
  }
}