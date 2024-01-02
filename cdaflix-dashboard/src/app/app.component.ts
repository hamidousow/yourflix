import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieModule } from './movie/movie.module';
import { MovieService } from './services/movie.service';
import { CardComponent } from './movie/card/card.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { NavigationComponent } from './user/navigation/navigation.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { SigninViewComponent } from './views/signin-view/signin-view.component';
import { MoviesViewComponent } from './views/movies-view/movies-view.component';
import { TempViewComponent } from './views/temp-view/temp-view.component';

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
    UserModule,
    NavigationComponent,
    HomeViewComponent,
    SigninViewComponent,
    MoviesViewComponent,
    TempViewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cdaflix-dashboard';
}
