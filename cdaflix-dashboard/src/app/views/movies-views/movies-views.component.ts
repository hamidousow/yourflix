import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardsComponent } from '../../movie/list-cards/list-cards.component';
import { SearchBarComponent } from '../../movie/search-bar/search-bar.component';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-views',
  standalone: true,
  imports: [
    CommonModule,
    ListCardsComponent,
    SearchBarComponent
  ],
  templateUrl: './movies-views.component.html',
  styleUrl: './movies-views.component.scss'
})
export class MoviesViewsComponent implements OnInit {

  @Input()
  movies!: Array<Movie>

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
