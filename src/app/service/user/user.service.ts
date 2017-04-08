import { Injectable } from '@angular/core';

/**
 * A service, allowing to access user configurations.
 */
@Injectable()
export class UserService {

  constructor() {
  }

  getConfig() {
      let userLang = navigator.language;
      userLang = userLang.substring(0,2).toLocaleLowerCase();
      if (userLang != 'es' && userLang != 'pt') {
        userLang = 'en';
      }
      return {language:userLang, metricSystem:false, dateFormat:2};
  }
}