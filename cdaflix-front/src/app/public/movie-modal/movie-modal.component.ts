import { Component, Input, OnInit, TemplateRef, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie-service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalUpdatableOptions } from '@ng-bootstrap/ng-bootstrap';
import { TmdbMovie } from '../../models/TmdbMovie';
import { TmdbService } from '../../services/tmdb-service/tmdb.service';

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

  constructor(private movieService: TmdbService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id) {
      this.movieService.getOne(id)
      this.movie = this.movieService.movie()
    }
  }



}
