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

  openModal(movieId: number) {

    // if(this.modalService.hasOpenModals()) {
    //   this.modalService.dismissAll();
    // }

    // const id = (event.target as HTMLElement).id;
    console.log(movieId);
    
    this.movieService.findById(movieId)
    const movieNg =  this.ngbModal.open(MovieModalComponent, { size: 'xl' });
    
    movieNg.componentInstance.movie = this.movieService.movieDetails$()
  }
}
