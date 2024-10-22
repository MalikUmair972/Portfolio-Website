import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    RouterLink,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  title = 'portfolio-website';
  
}
