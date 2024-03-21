import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
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

  @Output()
  movieId = new EventEmitter<number>()

  handleFavorite(event: any) {
    event.stopPropagation()
  }



}
