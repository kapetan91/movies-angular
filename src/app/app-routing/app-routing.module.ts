import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { MoviesComponent } from '../component/movies/movies.component';

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
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
  MoviesComponent,
  LayoutComponent
  ]
})
export class AppRoutingModule { }