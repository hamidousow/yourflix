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
import { CarouselComponent } from '../../shared-public/components/carousel/carousel.component';
import SearchMoviesViewComponent from '../search-movies-view/search-movies-view.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { tmdbUtil } from '../../../utils/tmdb-util';

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
    CardComponent,
    CarouselComponent,
    SearchMoviesViewComponent,
    NgbCarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit {
  

  private movieService = inject(TmdbService) 
  private ngConfig = inject(NgbCarouselConfig)

  nowPlayingMovies$ = this.movieService.nowPlayingMovies$
  popularMovies$ = this.movieService.popularMovies$
  topRatedMovies$ = this.movieService.topRatedMovies$
  upcomingMovies$ = this.movieService.upcomingMovies$ 
  imgBaseUrl = tmdbUtil.imageBaseUrl

  @Input()
  args!: string

  constructor() {
    this.ngConfig.interval = 3000;
		this.ngConfig.wrap = false;
		this.ngConfig.keyboard = false;
		this.ngConfig.pauseOnHover = true;
  }

  ngOnInit() {
    this.movieService.getPopularMovies()
    this.movieService.getTopRatedMovies()
    this.movieService.getUpcomingMovies()
    this.movieService.getNowPlayingMovies()
  }

  
}
