import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieModule } from './movie/movie.module';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './public/navigation/navigation.component';
import { HomeComponent } from './public/home/home.component';
import { MovieModalComponent } from './public/movie-modal/movie-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
    MovieModule,
    HttpClientModule,
    FormsModule, 
    NavigationComponent,
    HomeComponent,
    MovieModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cdaflix-dashboard';
}
