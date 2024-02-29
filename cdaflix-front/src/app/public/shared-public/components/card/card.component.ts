import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TmdbService } from '../../../../services/tmdb-service/tmdb.service';
import { LocalService } from '../../../../services/localstorage-service/local.service';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { TmdbMovie } from '../../../../models/TmdbMovie';
import { tmdbUtil } from '../../../../utils/tmdb-util';
import { NoteFormatPipe } from '../../pipes/note-format/note-format.pipe';

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    imports: [CommonModule, NoteFormatPipe]
})
export class CardComponent {

  private tmdbServicce = inject(TmdbService)
  private localService = inject(LocalService)
  private modalService = inject(NgbModal)

  imageBaseurl = tmdbUtil.imageBaseUrl

  @Input()
  movie!: TmdbMovie
  

  // openModal() {
  //   if(this.modalService.hasOpenModals()) {
  //     this.modalService.dismissAll();
  //   }
  //   console.log(this.modalService.hasOpenModals());
  //   const movieNg =  this.modalService.open(MovieModalComponent, { size: 'xl' });
  //   movieNg.componentInstance.movie = this.movie
  // }

  handleFavorite(event: any) {
    event.stopPropagation()
    //console.log("j'aime le film " + this.movie.title)
    // this.tmdbServicce.addMovieInFavorite(JSON.stringify(this.movie.id), this.localService.getData('user'))
    // this.tmdbServicce.movie.subscribe(val => this.movie = val)
  }

}
