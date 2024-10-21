import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { PortfolioComponent } from './portfolio/portfolio.component'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  title = 'portfolio-website';
}
