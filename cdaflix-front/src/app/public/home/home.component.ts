import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { ListCardsComponent } from '../../movie/list-cards/list-cards.component';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie-service/movie.service';
import { SearchBarComponent } from '../../movie/search-bar/search-bar.component';
import { CardComponent } from '../shared-public/components/card/card.component';
import { TmdbMovie } from '../../models/TmdbMovie';
import { TmdbService } from '../../services/tmdb-service/tmdb.service';

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
export class HomeComponent {

  private movieService = inject(TmdbService) 

  //movies!: TmdbMovie[]

  movies = this.movieService.movies.getValue()

  @Input()
  movie!: Movie

  @Input()
  args!: string


  ngOnInit() {
    //this.movieService.fetchAll()
    this.movieService.getPopularMovies();
    //this.movieService.movies.subscribe((value) => this.movies = value);
    // this.movies = this.movieService.movies.value
    this.movieService.movies.subscribe((movies) => {
      this.movies = movies
      console.log(this.movies);
    });
    // console.log(this.movies);
    
  }

}
