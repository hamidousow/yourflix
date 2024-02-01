import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieModule } from './movie/movie.module';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './public/shared-public/components/navigation/navigation.component';
import { MovieModalComponent } from './public/shared-public/components/movie-modal/movie-modal.component';
import HomeComponent from './public/views/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
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
