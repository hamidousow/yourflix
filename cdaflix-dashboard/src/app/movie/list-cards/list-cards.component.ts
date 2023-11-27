import { Component, inject, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [ 
    CommonModule,
    CardComponent,
  ],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.scss'
})
export class ListCardsComponent implements OnInit {

  @Input()
  movie!: Movie

  @Input()
  movies: Array<any> = new Array<any>();

  private movieService: MovieService = inject(MovieService)

  constructor() { 
    
  }
  
  fetchMovies(): void  {
    this.movieService.getAll().subscribe((movies: any) => {
      this.movies = movies
      console.log(this.movies)
    })
  }
    
  ngOnInit() {
    this.fetchMovies()
  }
}
