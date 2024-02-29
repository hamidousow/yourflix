import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    RouterLinkActive,
  ],
  templateUrl: './page-not-found-component.component.html',
  styleUrl: './page-not-found-component.component.scss'
})
export default class PageNotFoundComponentComponent {

}
