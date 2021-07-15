import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillService } from '../core/services/skill.service';
import { SKILL, SKILL_EFFECIENT, SKILL_QUALITY } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

  skills$: Observable<SKILL[]>;
  total$: Observable<number>;  

  constructor(public skillService: SkillService) {
    this.skills$ = this.skillService.skills$;
    this.total$ = this.skillService.total$;
  }

}
