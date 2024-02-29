import { Injectable, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TmdbService } from '../tmdb-service/tmdb.service';
import { MovieModalComponent } from '../../public/shared-public/components/movie-modal/movie-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private ngbModal = inject(NgbModal)
  private movieService = inject(TmdbService)

  async openModal(movieId: number) {
    
    this.movieService.findById(movieId)
    const movieNg = this.ngbModal.open(MovieModalComponent, { size: 'xl' });
    
    //todo: await movieDetails 
    // movieNg.componentInstance.movie = this.movieService.movieDetails$()
    movieNg.componentInstance.movie = await this.movieService.findById(movieId)
  }
}
