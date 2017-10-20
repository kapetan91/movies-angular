import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MoviesComponent } from './component/movies/movies.component';
import { SharedModule } from './shared/shared.module';
import { MovieService } from './shared/movie.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
  MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }