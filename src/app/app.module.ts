import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MoviesComponent } from './component/movies/movies.component';
import { SharedModule } from './shared/shared.module';
import { MovieService } from './shared/movie.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SearchComponent } from './search/search.component';
import { SearchModule } from './shared/search.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SearchModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }