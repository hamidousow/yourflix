import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardsComponent } from '../list-cards/list-cards.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie-service/movie.service';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [
    CommonModule,
    ListCardsComponent,
    SearchBarComponent,
  ],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})
export class ListMoviesComponent implements OnInit {

  @Input()
  movies!: Movie[]

  @Input()
  movie!: Movie

  @Input()
  args!: string

  private movieService = inject(MovieService) 


  ngOnInit(): void {
    this.movieService.fetchAll()
    this.movieService.movies.subscribe((value) => this.movies = value)
  }

  /*handleMovies(movies: Array<Movie>) {
    this.movies = movies
  }*/

}
