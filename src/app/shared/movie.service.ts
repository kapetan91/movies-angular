import { Injectable } from '@angular/core';
import { movies } from './examples';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Movie } from '../shared/model/movie.model';


@Injectable()
export class MovieService {

  private movies: Array<Movie> = [];

  constructor() { }

  getMovies() {

    return new Observable(
      (foundMovies: Observer<any>) => {
        
        let movie: Movie = null;
        for (movie of movies) {
          this.movies.push(movie)
        }

        foundMovies.next(this.movies);
      }
    );
  }

   searchMovies(term) {
    return new Observable(
      (foundMovies: Observer<any>) => {
        let m = [];

        this.movies.map((movie: Movie) => {
          if (!(movie['name'].toLowerCase().search(term.toLowerCase()) == -1)) {
            m.push(movie);
          }
        })

        if (m.length == 0) {
          foundMovies.error('No movies found.');
          console.log('No movies');
        } else {
          foundMovies.next(m);          
        }
      }
    );
  }

}