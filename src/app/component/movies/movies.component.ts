import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/model/movie.model';
import { MovieService } from '../../shared/movie.service';
import { MovieRowComponent } from '../../shared/movie-row/movie-row.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  private movies: Array<Movie>

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  	this.movieService.getMovies()
  		.subscribe(data => {
  			this.movies = data;
  		});
  	console.log(this.movies);
  }

}
