import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { I18nService } from './core/services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hongtu';

  constructor(private i18nService: I18nService) {
    this.i18nService.init(environment.defaultLanguage, environment.supportLanguage);
  }

  ngOnInit() {

  }
}
