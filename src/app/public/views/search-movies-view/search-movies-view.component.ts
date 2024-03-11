import { Component, NO_ERRORS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../../services/tmdb-service/tmdb.service';
import { CardComponent } from '../../shared-public/components/card/card.component';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../../services/modal-service/modal.service';

@Component({
  selector: 'app-search-movies-view',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    NgbPaginationModule,
    InfiniteScrollModule,
    NgbPagination
    
  ],
  templateUrl: './search-movies-view.component.html',
  styleUrl: './search-movies-view.component.scss',
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export default class SearchMoviesViewComponent {


  private movieService = inject(TmdbService) 
  private route = inject(ActivatedRoute) 
  private modalService = inject(ModalService)
  

  searchResults = this.movieService.searchResults

  totalPages = this.movieService.totalPages
  currentPage = this.movieService.currentPage
  totalResults = this.movieService.totalResults
  pagesArray : number[] = []

  loadNextPage() {
    const query = this.route.snapshot.queryParams['query'];
    console.log(query);
    
    if(this.currentPage() < this.totalPages()) {
      this.movieService.loadNextPage(query);
    }    
  }

  loadPreviousPage() {
    const query = this.route.snapshot.queryParams['query'];

    if(this.currentPage() > 1) {
      this.movieService.loadPreviousPage(query);
    }    
  }

  openModal(movieId: number) {
    this.modalService.openModal(movieId);
  }

  selectPage(page: string) {
    const query = this.route.snapshot.queryParams['query'];
    const pageInt = parseInt(page) || 1;

    if(pageInt > 0 && pageInt <= this.totalPages()) {
      this.movieService.searchMovie(query, pageInt);
    }
  }

  formatInput(event: any) {

  }

}
