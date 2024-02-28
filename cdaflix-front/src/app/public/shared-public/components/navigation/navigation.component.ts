import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from '../../../../models/User';
import { LocalService } from '../../../../services/localstorage-service/local.service';
import { TmdbAuthService } from '../../../../services/tmdb-service/tmdb-auth.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
    SearchBarComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  private tmdbAuthService = inject(TmdbAuthService)

  @Input()
  userLogged = this.localService.getData('user')

  constructor(private localService: LocalService, private router: Router) {

  }

  handleLogin() {
    this.tmdbAuthService.reqToken()
  }

  disconnectUser() {
    this.localService.removeData('user')
    window.location.reload()
  }

  toogleMenu() {
    console.log('hello search');
  }
}
