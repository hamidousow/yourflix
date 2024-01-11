import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/Movie';
import { ListCardsComponent } from '../../movie/list-cards/list-cards.component';
import { UserService } from '../../services/user.service';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-user-movies-list',
  standalone: true,
  imports: [CommonModule, ListCardsComponent],
  templateUrl: './user-movies-list.component.html',
  styleUrl: './user-movies-list.component.scss'
})
export class UserMoviesListComponent implements OnInit {

  @Input()
  movies!: Array<Movie>

  constructor(private userService: UserService, private localService: LocalService) {

  }

  ngOnInit(): void {
    this.getUserMovies()
  }

  getUserMovies()  {
    this.userService.getUserMoviesList(this.localService.getData('user')).subscribe({
      next: (r) => {
        this.movies = r
      },
      error: (e) => {
        console.log(e);
      }
    })    
  }
}
