import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { cnCN, enUS } from '../../../i18n';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  defaultLanguage: string;
  supportedLanguages: string[];

  constructor(private translateService: TranslateService) { 
    translateService.setTranslation('cn-CN', cnCN);
    translateService.setTranslation('en-US', enUS);
  }

  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';
  }

  set language(language: string) {
    const isSupportedLanguage = this.supportedLanguages.indexOf(language) > -1;

    if (!isSupportedLanguage) this.language = this.defaultLanguage;

    this.translateService.use(language);
  }

  getLanguage() {
    return this.translateService.currentLang ? this.translateService.currentLang.substr(0, 2) : 'cn';
  }

  getTranslation(key: string | string[], params?: any): string {
    return this.translateService.instant(key, params) as string;
  }
}
