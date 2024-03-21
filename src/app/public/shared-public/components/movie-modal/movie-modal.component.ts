import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../../../services/tmdb-service/tmdb.service';
import { tmdbUtil } from '../../../../utils/tmdb-util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from '../card/card.component';
import { NoteFormatPipe } from '../../pipes/note-format/note-format.pipe';
import { toSignal } from '@angular/core/rxjs-interop';
import { TmdbMovieDetails } from '../../../../models/TmdbMovieDetails';
import { LocalService } from '../../../../services/localstorage-service/local.service';
import { ModalService } from '../../../../services/modal-service/modal.service';

@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [
    CommonModule, 
    CardComponent,
    NoteFormatPipe
  ],
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-modal.component.scss'
})
export class MovieModalComponent implements OnInit{
  

  private movieService = inject(TmdbService);
  private route = inject(ActivatedRoute);
  private modalService = inject(ModalService);
  private storageService = inject(LocalService);


  movie!: TmdbMovieDetails 

  imageBaseurl = tmdbUtil.imageBaseUrl;
  
  movieProviders = this.movieService.movieProviders$;

  moviesSuggestions = this.movieService.moviesSuggestions$;

  languageSelected = 'US'

  movieId = this.storageService.getData('movieId');


  closeModal() {
    this.storageService.clearData()
    this.modalService.closeModal()
  } 

  // switchModal() {
  //   if(this.modalService.hasOpenModals()) {
  //     this.modalService.dismissAll()
  //     this.modalService.open()
  //   }
  // }
  

  ngOnInit() {
    const movieIdInt = parseInt(this.movieId || '')
    
    
    if(movieIdInt != undefined) {
      this.movieService.getMovieProviders(movieIdInt, this.languageSelected);
      this.movieService.getMovieSuggestions(movieIdInt);
    } else {
      console.log('id inconnu');
      
    }
  }
}
