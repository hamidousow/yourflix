import { Component, inject, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [ 
    CommonModule,
    CardComponent,
    SearchBarComponent
  ],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.scss'
})
export class ListCardsComponent {

  @Input()
  movies!: Array<any>;  
}
