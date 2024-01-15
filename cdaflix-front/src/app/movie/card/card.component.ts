import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/Movie';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieModalComponent } from '../../public/movie-modal/movie-modal.component';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie-service/movie.service';
import { LocalService } from '../../services/localstorage-service/local.service';

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
  

  constructor(private modalService: NgbModal, private movieService: MovieService, private localService: LocalService) {}

  openModal() {
    console.log('ouvre modal')
    const movieNg =  this.modalService.open(MovieModalComponent, { size: 'xl' });
    movieNg.componentInstance.movie = this.movie
  }

  handleFavorite(event: any) {
    event.stopPropagation()
    console.log("j'aime le film " + this.movie.title)
    const res = this.movieService.addMovieInFavorite(JSON.stringify(this.movie.id), this.localService.getData('user'))
    res.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
  
}

