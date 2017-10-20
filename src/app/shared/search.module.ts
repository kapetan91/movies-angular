import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from '../search/search-input/search-input.component';
import { SearchPageComponent } from  '../search/search-page/search-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
  SearchInputComponent,
  SearchPageComponent
  ],
  exports: [SearchInputComponent]
})
export class SearchModule { }
