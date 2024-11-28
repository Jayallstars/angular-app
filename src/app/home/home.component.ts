import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContentComponent } from './content/content.component';
import { FeaturesComponent } from './features/features.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [LandingPageComponent, ContentComponent, FeaturesComponent, RouterModule, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
