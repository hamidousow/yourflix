import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/Movie';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieModalComponent } from '../../public/movie-modal/movie-modal.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  movie!: Movie 
  

  constructor(private modalService: NgbModal) {}

  openModal() {
    console.log('ouvre modal')
    const movieNg =  this.modalService.open(MovieModalComponent, { size: 'xl' });
    movieNg.componentInstance.movie = this.movie
  }

  openXl(movie: Movie) {
    this.modalService.open(movie, { size: 'xl' });
  }
  
}

