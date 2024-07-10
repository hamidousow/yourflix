import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './public/shared-public/components/navigation/navigation.component';
import { MovieModalComponent } from './public/shared-public/components/movie-modal/movie-modal.component';
import HomeComponent from './public/views/home/home.component';
import { SearchBarComponent } from './public/shared-public/components/search-bar/search-bar.component';
import { CarouselComponent } from './public/shared-public/components/carousel/carousel.component';
import { TmdbService } from './services/tmdb-service/tmdb.service';
import { MovieService } from './services/movie-service/movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
    SearchBarComponent,
    CarouselComponent,
    HttpClientModule,
    FormsModule, 
    NavigationComponent,
    HomeComponent,
    MovieModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
