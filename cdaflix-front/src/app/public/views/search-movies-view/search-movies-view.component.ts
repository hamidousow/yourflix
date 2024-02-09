import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../../services/tmdb-service/tmdb.service';
import { CardComponent } from '../../shared-public/components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-movies-view',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent

  ],
  templateUrl: './search-movies-view.component.html',
  styleUrl: './search-movies-view.component.scss'
})
export default class SearchMoviesViewComponent {

  private movieService = inject(TmdbService) 
  private route = inject(ActivatedRoute) 

  @Input()
  movies = this.movieService.resultsSearchMovies$()

}
