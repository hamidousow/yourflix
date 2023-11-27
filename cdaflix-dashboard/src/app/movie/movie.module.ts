import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { MovieService } from '../services/movie.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListCardsComponent,
  ]
})
export class MovieModule { 

}
