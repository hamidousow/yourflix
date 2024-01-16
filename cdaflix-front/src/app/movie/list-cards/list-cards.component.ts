import { Component, inject, Input, OnInit, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Movie } from '../../models/Movie';
import { MovieModalComponent } from '../../public/movie-modal/movie-modal.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [ 
    CommonModule,
    CardComponent,
    SearchBarComponent,
  ],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.scss'
})
export class ListCardsComponent {

  @Input()
  movies!: Movie[];  

  @Input()
  movie!: Subject<Movie>;

}
