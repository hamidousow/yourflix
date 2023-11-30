import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/Movie';

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

  constructor(private movieService: MovieService) {}

  /**
   * search movies by title within words in the searchbar's entries. If no entries in the searcbar, then return all movies
   * @param args used to search movies
   */
  handleSearch(args: string) {
    if(args.length > 0) {
      this.movieService.find(args).subscribe({
        next: (r) => {
          this.movies = r
          this.emitter.emit(this.movies)
        }
      })
    } else {
      this.movieService.getAll().subscribe({
        next: (r) => {
          this.movies = r
          this.emitter.emit(this.movies)
        }
      })
    }   
  }
}
