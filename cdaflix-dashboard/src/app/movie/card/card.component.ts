import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/Movie';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { MovieViewComponent } from '../../views/movie-view/movie-view.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  movie!: Movie 

  constructor(private modalService: NgbModal) {}

  handleContent(content: CardComponent) {

    console.log(content);
    const movieNg =  this.modalService.open(CardComponent, { size: 'xl' });
    movieNg.componentInstance
  } 

  openModal() {
    
    const movieNg =  this.modalService.open(MovieViewComponent, { size: 'xl' });
    movieNg.componentInstance.movie = this.movie
    console.log( movieNg.componentInstance.movie)
  }
}

