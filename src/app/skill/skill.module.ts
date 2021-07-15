import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillComponent } from './skill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SkillComponent
  ],
  imports: [
    CommonModule,
    SkillRoutingModule,    
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule
  ]
})
export class SkillModule { }
