import { Injectable } from '@angular/core';
import { examples } from './examples';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MovieService {

	movies:Array<Movie> = [
	new Movies(Examples[1]),
	];

	sigleMovie$: Observable<Movie>

  constructor(private movie: Movie) { }

  public getMovies(){
  	return new Observable((o: Observable<any>) => {

  	})
  }
  	

}
