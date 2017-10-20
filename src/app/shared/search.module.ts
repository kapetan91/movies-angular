import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from '../search/search-input/search-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [SearchInputComponent],
  exports: [SearchInputComponent]
})
export class SearchModule { }
