import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss'
})
export class AsideMenuComponent {

}
