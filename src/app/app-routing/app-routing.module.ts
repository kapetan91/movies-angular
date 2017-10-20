import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { MoviesComponent } from '../component/movies/movies.component';
import { SearchComponent } from '../search/search.component'
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'search/:term',
    component: SearchComponent
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
  RouterModule
  ]
})
export class AppRoutingModule { }