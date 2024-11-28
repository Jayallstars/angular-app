import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TextCarouselComponent } from './text-carousel/text-carousel.component';

@Component({
  selector: 'app-landing-page',
  imports: [NavbarComponent, TextCarouselComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
