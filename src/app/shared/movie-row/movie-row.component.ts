import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../model/movie.model';

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {

	private movie: Movie;

	@Input() set movieRow(movieFromInput: Movie) {
		this.movie = movieFromInput;
	}
  constructor() { }

  ngOnInit() {
  }

}
