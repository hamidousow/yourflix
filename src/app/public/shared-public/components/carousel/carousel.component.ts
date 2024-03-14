import { Component, ElementRef, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component'; 
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../../../services/modal-service/modal.service';
import { LocalService } from '../../../../services/localstorage-service/local.service';

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
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private storageService = inject(LocalService)

  @Input()
  movies!: any

  openModal(id: number) {
    this.modalService.openModal(id);
  }

  getMovieId(elt: any) {
    const id = elt.movie.id
    this.storageService.saveData('movieId', id); 
    this.openModal(id)
  }


}
