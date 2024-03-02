import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../../services/tmdb-service/tmdb.service';
import { CardComponent } from '../../shared-public/components/card/card.component';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../../services/modal-service/modal.service';

@Component({
  selector: 'app-search-movies-view',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    NgbPaginationModule,
    InfiniteScrollModule,
    
  ],
  templateUrl: './search-movies-view.component.html',
  styleUrl: './search-movies-view.component.scss'
})
export default class SearchMoviesViewComponent {

  private movieService = inject(TmdbService) 
  private route = inject(ActivatedRoute) 
  private modalService = inject(ModalService)
  searchResults = this.movieService.searchResults
  totalPages = this.movieService.totalPages()
  currentPage = this.movieService.currentPage()
  totalResults = this.movieService.totalResults()
  
  
  // onScrollDown() {
  //   let query = this.route.snapshot.queryParams['query'];
  //   this.movieService.loadNextPage(query);
  // }

  loadMoreResults() {
    let query = this.route.snapshot.queryParams['query'];
    this.movieService.loadNextPage(query);
  }

  openModal(movieId: number) {
    this.modalService.openModal(movieId);
  }

}
