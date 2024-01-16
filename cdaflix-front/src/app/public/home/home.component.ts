import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { ListCardsComponent } from '../../movie/list-cards/list-cards.component';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie-service/movie.service';
import { SearchBarComponent } from '../../movie/search-bar/search-bar.component';

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
    SearchBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private movieService = inject(MovieService) 

  @Input()
  movies!: Movie[]

  @Input()
  movie!: Movie

  @Input()
  args!: string


  ngOnInit(): void {
    this.movieService.fetchAll()
    this.movieService.movies.subscribe((value) => this.movies = value)
  }

}
