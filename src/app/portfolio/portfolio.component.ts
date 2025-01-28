import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  skills = [
    {
      Image: 'assets/js.png',
      name: 'Javascript',
      Percent: '75%'
    },
    {
      Image: 'assets/angular.png',
      name: 'Angular',
      Percent: '88%'
    },
    {
      Image: 'assets/tailwind.png',
      name: 'Tailwind Css',
      Percent: '98%'
    },
    {
      Image: 'assets/webflow.png',
      name: 'Webflow',
      Percent: '85%'
    },
    {
      Image: 'assets/photoshop.png',
      name: 'Adobe Photoshop',
      Percent: '97%'
    },
    {
      Image: 'assets/typescript.png',
      name: 'Typescript',
      Percent: '78%'
    },
  ]
    
  

}
