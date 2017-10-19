import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { MoviesComponent } from '../component/movies/movies.component';
const appRoutes: Routes = [

  { path: 'movies', component: MoviesComponet },

]
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
