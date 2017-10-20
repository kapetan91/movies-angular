import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { MovieService } from './movie.service';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  MovieService
  ],
  declarations: []
})
export class SharedModule { }
