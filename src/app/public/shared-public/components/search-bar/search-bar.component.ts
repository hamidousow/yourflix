import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../../services/movie-service/movie.service';
import { Movie } from '../../../../models/Movie';
import { TmdbService } from '../../../../services/tmdb-service/tmdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  private movieService = inject(TmdbService);
  private router = inject(Router)

  @Output()
  emitter = new EventEmitter<Array<Movie>>();

  @Input()
  args = new EventEmitter<string>();

  movies!: Array<Movie>    

  resultsSearchMovies$ = this.movieService.searchResults

  //todo: change with page from the store
  nbrPage = 1
  /**
   * search movies by title within words that matches the searchbar's entries.
   * @param args used to search movies
   */
  handleSearch(args: string) {
    this.router.navigate(['search'], { queryParams: {'query' : args}});
    args = args.trim()
    if(args.length > 0 && args !== undefined) {
      console.log(args);
      
      this.movieService.search(args, 1);
    } else {
      this.router.navigateByUrl('cdaflix');
    }   
  }
}
