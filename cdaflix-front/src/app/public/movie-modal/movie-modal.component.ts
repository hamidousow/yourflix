import { Component, Input, OnInit, TemplateRef, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie-service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalUpdatableOptions } from '@ng-bootstrap/ng-bootstrap';
import { TmdbMovie } from '../../models/TmdbMovie';
import { TmdbService } from '../../services/tmdb-service/tmdb.service';
import { tmdbUtil } from '../../utils/tmdb-util';

@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-view.component.scss'
})
export class MovieModalComponent implements OnInit {

  @Input()
  movie!: TmdbMovie

  imageBaseurl = tmdbUtil.imageBaseUrl

  constructor(private movieService: TmdbService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id) {
      this.movieService.getOne(id)
      this.movieService.getImage(id)
      this.movie = this.movieService.movie()
      this.movie.backdrop = this.movieService.images()
      console.log(this.movie);
      
    }
  }



}
