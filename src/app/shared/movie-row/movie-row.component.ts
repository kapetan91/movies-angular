import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../model/movie.model';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {

	private movie: Movie;
  private selected: boolean = false;


	@Input() set movieRow(movieFromInput: Movie) {
		this.movie = movieFromInput;
	}

  @Output() onSelect = new EventEmitter<Movie>();
  @Output() onUnselect = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  select(movie: Movie) {
    this.onSelect.emit(movie);
    this.selected = true;
  }

  unselect(movie: Movie) {
    this.onUnselect.emit(movie);
    this.selected = false;
  }
}
