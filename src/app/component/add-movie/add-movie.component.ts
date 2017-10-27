import { Component, EventEmiiter, Output, OnInit } from '@angular/core';
import { Movie } from '../../shared/model/movie.model';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
	@Output() onSubmit: new EventEmitter<Movie>();

	private newMovie: Movie = new Movie();

  constructor() { }

  submitMovie(movie: Movie){
  	this.onSubmit.emit(movie);
  	this.newMovie = new Movie();
  }

  ngOnInit() {
  }

}
