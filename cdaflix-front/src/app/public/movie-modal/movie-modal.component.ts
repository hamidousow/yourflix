import { Component, Input, OnInit, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie-service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalUpdatableOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-view.component.scss'
})
export class MovieModalComponent implements OnInit {

  @Input()
  movie!: Movie  

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id) {
      this.movieService.findById(id)
      this.movieService.movie.subscribe(movie => this.movie = movie)
    }
  }



}
