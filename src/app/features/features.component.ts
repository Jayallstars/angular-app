import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-features',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
  standalone: true
})

export class FeaturesComponent {

}
