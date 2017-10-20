import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { MovieService } from './movie.service';
import { MovieRowComponent } from './movie-row/movie-row.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  	MovieService
  ],
  declarations: [MovieRowComponent],
  exports: [ MovieRowComponent ]
})
export class SharedModule { }
