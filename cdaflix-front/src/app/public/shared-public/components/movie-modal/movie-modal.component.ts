import { Component, ElementRef, Input, OnInit, Signal, TemplateRef, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../../../services/tmdb-service/tmdb.service';
import { tmdbUtil } from '../../../../utils/tmdb-util';
import { TmdbMovieDetails } from '../../../../models/TmdbMovieDetails';
import { MovieProvider } from '../../../../models/MovieProvider';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [
    CommonModule, 
    CardComponent,
  ],
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-modal.component.scss'
})
export class MovieModalComponent implements OnInit {

  private movieService = inject(TmdbService);
  private route = inject(ActivatedRoute);
  private modalService = inject(NgbModal)

  @Input()
  movie: TmdbMovieDetails = this.movieService.movieDetails$();
  
  imageBaseurl = tmdbUtil.imageBaseUrl;
  
  movieProviders = this.movieService.movieProviders$;

  moviesSuggestions = this.movieService.moviesSuggestions$;

  languageSelected = 'CA'

  closeModal() {
    this.modalService.dismissAll()
  } 

  // switchModal() {
  //   if(this.modalService.hasOpenModals()) {
  //     this.modalService.dismissAll()
  //     this.modalService.open()
  //   }
  // }
  

  ngOnInit() {
    const id = this.movie?.id
    if(id != null) {
      this.movieService.getMovieProviders(id);
      this.movieService.getMovieSuggestions(id);
    } 
  }



}
