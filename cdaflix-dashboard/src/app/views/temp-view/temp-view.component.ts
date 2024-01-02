import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../user/navigation/navigation.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-temp-view',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
  ],
  templateUrl: './temp-view.component.html',
  styleUrl: './temp-view.component.scss'
})
export class TempViewComponent {

}
