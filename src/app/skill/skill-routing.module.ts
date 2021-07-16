import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySkillComponent } from './my-skill/my-skill.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { SkillComponent } from './skill.component';

const routes: Routes = [
  {
    path: '',
    component: SkillComponent
  },
  {
    path: ':skillId',
    component: SkillDetailComponent
  },
  {
    path: 'myskills/:userId',
    component: MySkillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }
