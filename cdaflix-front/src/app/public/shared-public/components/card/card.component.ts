import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../../models/Movie';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TmdbService } from '../../../../services/tmdb-service/tmdb.service';
import { LocalService } from '../../../../services/localstorage-service/local.service';
import { MovieModalComponent } from '../../../movie-modal/movie-modal.component';
import { TmdbMovie } from '../../../../models/TmdbMovie';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  private tmdbServicce = inject(TmdbService)
  private localService = inject(LocalService)
  private modalService = inject(NgbModal)

  @Input()
  movie!: TmdbMovie
  

  openModal() {
    console.log('ouvre modal')
    const movieNg =  this.modalService.open(MovieModalComponent, { size: 'xl' });
    movieNg.componentInstance.movie = this.movie
  }

  handleFavorite(event: any) {
    event.stopPropagation()
    //console.log("j'aime le film " + this.movie.title)
    // this.tmdbServicce.addMovieInFavorite(JSON.stringify(this.movie.id), this.localService.getData('user'))
    // this.tmdbServicce.movie.subscribe(val => this.movie = val)
  }

}
