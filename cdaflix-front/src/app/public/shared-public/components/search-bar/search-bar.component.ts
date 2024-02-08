import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../../services/movie-service/movie.service';
import { Movie } from '../../../../models/Movie';
import { TmdbService } from '../../../../services/tmdb-service/tmdb.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Output()
  emitter = new EventEmitter<Array<Movie>>();

  @Input()
  args = new EventEmitter<string>();

  movies!: Array<Movie>  

  private movieService = inject(TmdbService);

  /**
   * search movies by title within words that matches the searchbar's entries. If no entries in the searchbar, then return all movies
   * @param args used to search movies
   */
  handleSearch(args: string) {
    args = args.trim()
    if(args.length > 0 && args !== undefined) {
      this.movieService.search(args);
    } else {
      this.movieService.allMovies$
      //this.movieService.movies.subscribe((val) => this.movies = val)
    }   
  }
}
