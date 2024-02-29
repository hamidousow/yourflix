import { Component, ElementRef, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { TmdbService } from '../../../../services/tmdb-service/tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  private modalService = inject(NgbModal)
  private movieService = inject(TmdbService)
  private route = inject(ActivatedRoute)

  @Input()
  movies!: any

  openModal(elt: any) {

    // if(this.modalService.hasOpenModals()) {
    //   this.modalService.dismissAll();
    // }

    // const id = (event.target as HTMLElement).id;
    
    
    console.log(elt.movie.id);
    this.movieService.findById(elt.movie.id)
    const movieNg =  this.modalService.open(MovieModalComponent, { size: 'xl' });
    
    movieNg.componentInstance.movie = this.movieService.movieDetails$()
  }


}
