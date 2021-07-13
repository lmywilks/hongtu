import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'heros',
        loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule)
    },
    {
        path: 'skills',
        loadChildren: () => import('./skill/skill.module').then(m => m.SkillModule)
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
