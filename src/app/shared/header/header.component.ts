import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { I18nService } from 'src/app/core/services/i18n.service';
import { AppState } from 'src/app/store/app.state';
import { isLogin, Logout } from 'src/app/store/auth';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language: string;
  isLogin: Observable<boolean> = this.store.select(isLogin);

  constructor(
    private modalService: NgbModal, 
    private i18nService: I18nService,
    private store: Store<AppState>
  ) {
    this.language = this.i18nService.getLanguage();
  }

  ngOnInit(): void {
  }

  open_login() {
    this.modalService.open(LoginComponent, { centered: true });
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  switch_language() {    
    this.i18nService.language = this.language === 'cn' ? 'en-US' : 'cn-CN';
    this.language = this.language === 'cn' ? 'en' : 'cn';
  }
}
