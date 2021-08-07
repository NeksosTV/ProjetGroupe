import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { SuperHeroesListComponent } from './Components/super-heroes-list/super-heroes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : 'hero', component : SuperHeroesListComponent},
  { path : 'Heroes', component : HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
