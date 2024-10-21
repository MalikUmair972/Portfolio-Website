import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,

  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
  
})
export class AboutComponent {
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
  
    const h1Left = document.getElementById('h1-left');
    if (h1Left) {
      h1Left.style.transform = `translateX(${scrollPosition / 8}px)`; // Slow the movement
    }
  
    
    const h1Right = document.getElementById('h1-right');
    if (h1Right) {
      h1Right.style.transform = `translateX(${scrollPosition / 8}px)`; // Slow the movement
    }
    
    const h2Left = document.getElementById('h2-left');
    if (h2Left) {
      h2Left.style.transform = `translateX(-${scrollPosition / 14}px)`; // Slow the movement
    }
  
    
    const h2Right = document.getElementById('h2-right');
    if (h2Right) {
      h2Right.style.transform = `translateX(-${scrollPosition / 14}px)`; // Slow the movement
    }
  }
  
}

