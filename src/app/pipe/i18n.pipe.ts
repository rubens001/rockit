import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from '../service/i18n/i18n.service';

@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {

  i18nService = new I18nService();

  transform(value: string): string {
    return this.i18nService.translate(value);
  }

}
