import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../models/Movie';
import { ListCardsComponent } from '../../../movie/list-cards/list-cards.component';
import { UserService } from '../../../services/user-service/user.service';
import { LocalService } from '../../../services/localstorage-service/local.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../services/movie-service/movie.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-user-movies-list',
  standalone: true,
  imports: [CommonModule, ListCardsComponent],
  templateUrl: './user-movies-list.component.html',
  styleUrl: './user-movies-list.component.scss'
})
export class UserMoviesListComponent implements OnInit {

  // @Input()
  // movies!: Array<Movie>

  private localService = inject(LocalService) 
  private movieService = inject(MovieService) 
  private route = inject(ActivatedRoute) 


  @Input()
  movies!: Movie[]

  

  ngOnInit(): void {
    this.getUserMovies()
  }

  getUserMovies()  {
    const id = this.localService.getData('user');
    this.movieService.getMoviesByUser(id);
    this.movieService.favoriteMovies.subscribe((val) => this.movies = val)
    
    // this.router.navigate(['mylist'])   
  }
}
