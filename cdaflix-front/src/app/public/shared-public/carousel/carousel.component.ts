import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  @Input()
  movies!: any


}
