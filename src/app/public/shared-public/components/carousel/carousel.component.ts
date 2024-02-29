import { Component, ElementRef, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { TmdbService } from '../../../../services/tmdb-service/tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../../../services/modal-service/modal.service';

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

  private modalService = inject(ModalService)

  @Input()
  movies!: any

  openModal(elt: any) {
    this.modalService.openModal(elt.movie.id)
  }


}
