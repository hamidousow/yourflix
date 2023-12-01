import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-view.component.html',
  styleUrl: './movie-view.component.scss'
})
export class MovieViewComponent implements OnInit {

  @Input()
  movie!: Movie

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id) {
      this.movieService.findOne(id).subscribe({
        next: (r) => this.movie = r,
        error: (e) => console.log(e)
      })
    }
  }



}
