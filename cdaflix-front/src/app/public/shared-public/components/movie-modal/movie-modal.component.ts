import { Component, Input, OnInit, Signal, TemplateRef, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../../../services/tmdb-service/tmdb.service';
import { tmdbUtil } from '../../../../utils/tmdb-util';
import { TmdbMovieDetails } from '../../../../models/TmdbMovieDetails';
import { MovieProvider } from '../../../../models/MovieProvider';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-modal.component.scss'
})
export class MovieModalComponent implements OnInit {

  private movieService = inject(TmdbService);
  private route = inject(ActivatedRoute);
  private modalService = inject(NgbModal)

  @Input()
  movie: TmdbMovieDetails | null = this.movieService.movieDetails$();
  
  imageBaseurl = tmdbUtil.imageBaseUrl;
  
  movieProviders = this.movieService.movieProviders$;

  languageSelected = 'CA'

  closeModal() {
    this.modalService.dismissAll()
  } 
  

  ngOnInit() {
    const id = this.movie?.id
    if(id != null) {
      this.movieService.getMovieProviders(id);
    } 
  }



}
