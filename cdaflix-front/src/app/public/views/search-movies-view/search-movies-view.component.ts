import { Component, Input, OnInit, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../../services/tmdb-service/tmdb.service';
import { CardComponent } from '../../shared-public/components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable } from 'rxjs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ResultSearch } from '../../../models/ResultSearch';

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
export default class SearchMoviesViewComponent implements OnInit {

  private movieService = inject(TmdbService) 
  private route = inject(ActivatedRoute) 
  searchResults = this.movieService.searchResults

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  currentPage = this.movieService.currentPage()
  totalPages = this.movieService.totalPages()
  

  // movies: Signal<any[]> = toSignal(this.movieService._resultsSearchMovies, { requireSync: true})

  
  ngOnInit(): void {
    
  }
  onScrollDown() {
    let query = this.route.snapshot.queryParams['query']
    
    
    if(this.currentPage < this.totalPages) {
      this.movieService.loadNextPage(query, this.currentPage, this.totalPages)    
      
    }
    


    // add another 20 items
    //const start = this.sum;
    
    
    //this.appendItems(start, this.sum);

  }

}
