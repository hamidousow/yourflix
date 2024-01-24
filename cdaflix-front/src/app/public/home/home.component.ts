import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { ListCardsComponent } from '../../movie/list-cards/list-cards.component';
import { Movie } from '../../models/Movie';
import { SearchBarComponent } from '../../movie/search-bar/search-bar.component';
import { CardComponent } from '../shared-public/components/card/card.component';
import { TmdbService } from '../../services/tmdb-service/tmdb.service';
import { toObservable, toSignal } from "@angular/core/rxjs-interop";

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
    ListCardsComponent,
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
