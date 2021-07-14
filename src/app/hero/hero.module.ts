import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';
import { SharedModule } from '../shared/shared.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortableDirective } from '../core/directives/sortable.directive';


@NgModule({
  declarations: [
    HeroComponent,
    HeroDetailComponent,
    SortableDirective
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class HeroModule { }
