import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardsComponent } from '../list-cards/list-cards.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';

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
  movies!: Array<Movie>

  @Input()
  movie!: Movie

  @Input()
  args!: string

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAll().subscribe({
      next: (r) => {
        this.movies = r
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  handleMovies(movies: Array<Movie>) {
    this.movies = movies
  }

}
