import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero.component';
import { MyHeroComponent } from './my-hero/my-hero.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: ':heroId',
    component: HeroDetailComponent
  },
  {
    path: 'myheros/:userId',
    component: MyHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
