import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginComponent } from '../shared/login/login.component';
import { AppState } from '../store/app.state';
import { getUserId, getUsername, isLogin } from '../store/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLogin$: Observable<boolean> = this.store.select(isLogin);
  username$: Observable<string> = this.store.select(getUsername);
  userId$: Observable<string> = this.store.select(getUserId);

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private modalService: NgbModal,  
  ) { }

  ngOnInit(): void {
  }

  myHero() {
    this.userId$.subscribe(userId => {
        if (userId) this.router.navigateByUrl(`/myheros/${ userId }`);
        else this.modalService.open(LoginComponent, { centered: true });
    });
  }

  mySkill() {
    this.userId$.subscribe(userId => {
        if (userId) this.router.navigateByUrl(`/myskills/${ userId }`);
        else this.modalService.open(LoginComponent, { centered: true });
    });
  }

}
