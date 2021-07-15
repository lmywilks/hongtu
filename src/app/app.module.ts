import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './core/pipes/sort.pipe';
import { SharedModule } from './shared/shared.module';
import { I18nService } from './core/services/i18n.service';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot()
  ],
  providers: [
    {
        provide: LOCALE_ID,
        deps: [I18nService],
        useFactory: (i18nService: I18nService) => i18nService.language
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
