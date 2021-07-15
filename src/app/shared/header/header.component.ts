import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { I18nService } from 'src/app/core/services/i18n.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language: string;

  constructor(private modalService: NgbModal, private i18nService: I18nService) {
    this.language = this.i18nService.getLanguage();
  }

  ngOnInit(): void {
  }

  open_login() {
    this.modalService.open(LoginComponent, { centered: true });
  }

  switch_language() {    
    this.i18nService.language = this.language === 'cn' ? 'en-US' : 'cn-CN';
    this.language = this.language === 'cn' ? 'en' : 'cn';
  }
}
