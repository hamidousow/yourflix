import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../../services/tmdb-service/tmdb.service';
import { CardComponent } from '../../shared-public/components/card/card.component';

@Component({
  selector: 'app-search-movies-view',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent

  ],
  templateUrl: './search-movies-view.component.html',
  styleUrl: './search-movies-view.component.scss'
})
export class SearchMoviesViewComponent {

  private movieService = inject(TmdbService) 

  @Input()
  movies!: any

  // ngOnInit() {
  //   this.movieService.searchMulti(str)
  // }
}
