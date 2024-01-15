import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from '../../models/User';
import { LocalService } from '../../services/localstorage-service/local.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  @Input()
  userLogged = this.localService.getData('user')

  constructor(private localService: LocalService, private router: Router) {

  }

  disconnectUser() {
    this.localService.removeData('user')
    window.location.reload()
  }
}
