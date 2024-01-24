import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { NavigationComponent } from '../../shared-public/components/navigation/navigation.component';
import { MovieModalComponent } from '../../shared-public/components/movie-modal/movie-modal.component';
import { SearchBarComponent } from '../../shared-public/components/search-bar/search-bar.component';
import { CardComponent } from '../../shared-public/components/card/card.component';
import { TmdbService } from '../../../services/tmdb-service/tmdb.service';
import { Movie } from '../../../models/Movie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
    MovieModalComponent,
    SearchBarComponent, 
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit {
  

  private movieService = inject(TmdbService) 

  movies$ = this.movieService.movies$

  @Input()
  movie!: Movie

  @Input()
  args!: string

  ngOnInit() {
    this.movieService.getPopularMovies()
  }
}
