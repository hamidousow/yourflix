import { Component, Input, OnInit, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../../services/tmdb-service/tmdb.service';
import { CardComponent } from '../../shared-public/components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable } from 'rxjs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-search-movies-view',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    InfiniteScrollModule

  ],
  templateUrl: './search-movies-view.component.html',
  styleUrl: './search-movies-view.component.scss'
})
export default class SearchMoviesViewComponent {

  private movieService = inject(TmdbService) 
  private route = inject(ActivatedRoute) 

  // movies: Signal<any[]> = toSignal(this.movieService._resultsSearchMovies, { requireSync: true})

  searchResults: Signal<any> = this.movieService.searchResults

}
