import { Injectable } from '@angular/core';
import { movies } from './examples';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Movie } from '../shared/model/movie.model';
import { AuthService } from  './auth.service';


@Injectable()
export class MovieService {

  private movies: Array<Movie> = [];

  constructor() { }

  getMovies() {

    return new Observable(
      (o: Observer<any>) => {
        this.http.get('http://localhost:8000/movies', {
          headers: this.authService.getRequestHeaders(),
        })
        .subscribe(
          (movies: any[]) => {
            movies.forEach(c => {
              this.contacts.push(new Movie(c.id, c.name, c.director, c.image_url, c.duration, c.release_date, c.genres))
            });

            o.next(this.movies);
            return o.complete();
          })
        
        
      }
    );
  }

   searchMovies(id: number) {
    return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/movies/' + id,
        {
          headers: this.authService.getRequestHeaders(),
        })
        .subscribe(
          (contact: any) => {
            o.next(new Movie(movie.id, movie.name, movie.director, movie.image_url, movie.duration, movie.release_date, movie.genres));
            return o.complete();
          }
        );
    });
  }

}