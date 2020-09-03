import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AboutMeComponent} from './about-me/about-me.component';
import {GitDisplayComponent} from './git-display/git-display.component'

const routes: Routes = [
  {path:'aboutme',component:AboutMeComponent}
  {path:'',component:GitDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

