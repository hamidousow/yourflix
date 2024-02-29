import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieModule } from './movie/movie.module';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './public/shared-public/components/navigation/navigation.component';
import { MovieModalComponent } from './public/shared-public/components/movie-modal/movie-modal.component';
import HomeComponent from './public/views/home/home.component';
import { SearchBarComponent } from './public/shared-public/components/search-bar/search-bar.component';
import { CarouselComponent } from './public/shared-public/components/carousel/carousel.component';
import { TmdbService } from './services/tmdb-service/tmdb.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
    SearchBarComponent,
    CarouselComponent,
    HttpClientModule,
    FormsModule, 
    NavigationComponent,
    HomeComponent,
    MovieModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cdaflix-dashboard';

  private movieService = inject(TmdbService) 

  popularMovies$ = this.movieService.popularMovies$
  topRatedMovies$ = this.movieService.topRatedMovies$
  upcomingMovies$ = this.movieService.upcomingMovies$ 

  // @Input()
  // movie!: Movie

  @Input()
  args!: string

  ngOnInit() {
    this.movieService.getPopularMovies()
    this.movieService.getTopRatedMovies()
    this.movieService.getUpcomingMovies()
  }
}
