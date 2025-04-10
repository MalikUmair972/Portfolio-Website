import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  
  projects = [
    {
      Image: 'assets/Images/Group 10.png',
      link: 'https://www.figma.com/design/DDtPVUS4hz9QiTVYCTgdA2/Oncart?node-id=0-1&t=EwC2fhNDjW28Kws2-1',
      heading: 'OnCart – A Modern eCommerce Shopping Experience',
      desc: 'OnCart is a feature-rich and responsive eCommerce web application designed for a seamless online shopping experience. Built with a modern UI and smooth interactions, it allows users to browse products, manage their cart, and complete purchases with ease. The platform focuses on intuitive navigation, visually appealing product layouts, and fast performance. Whether on desktop or mobile, OnCart ensures a user-friendly journey from discovery to checkout.',
    },
    {
      Image: 'assets/Images/review.png',
      link: 'https://www.figma.com/design/NKgFR45jUtFSB8rtwtRrl7/my-review?node-id=0-1&t=84vMvCC7n0UWNreh-1',
      heading: 'MyReview – Trusted Affiliate Product Review Platform',
      desc: 'MyReview is a user-friendly affiliate product review web application, designed to help users make smarter buying decisions. With verified reviews, product highlights, and affiliate purchase links, the platform bridges the gap between honest reviews and direct buying actions.',
    },
    {
      Image: 'assets/Images/graphic.png',
      link: 'https://www.figma.com/design/o6N0A0ZoGPedO3hHDijvNP/Farhan-portfolio?node-id=56-658&t=UEAcIy8TrrKUBQ2D-1',
      heading: 'Farhans Graphic Portfolio – A Creative Showcase of Graphic Design Excellence',
      desc: 'Farhans graphic portfolio is a dynamic and visually appealing collection of design work, created to inspire and showcase the power of great design. From branding and logo designs to web interfaces and marketing materials, Farhan brings ideas to life with creativity and precision. Each project reflects a deep understanding of design principles, color theory, and user experience. Explore the portfolio to discover how Farhan transforms concepts into visual masterpieces that captivate and engage audiences.',
    },
    {
      Image: 'assets/Images/Capture.JPG',
      link: 'https://chic-pavlova-13b673.netlify.app/',
      heading: 'Office Portfolio Project With Angular',
      desc: 'Welcome to our official office website, where you can find all the information about our services, team, and projects. Feel free to explore and get in touch with us!',
    },
    {
      Image: 'assets/Images/Gaming.JPG',
      link: 'https://scintillating-jalebi-957a20.netlify.app/',
      heading: 'Gaming Website With Webflow',
      desc: 'Creating a gaming website with Webflow allows you to design visually stunning and interactive experiences without needing to code. With its responsive features and customizable layouts, you can effectively showcase your games and engage your audience on any device.',
    },
    {
      Image: 'assets/Images/Movie.JPG',
      link: 'https://spontaneous-genie-445571.netlify.app/',
      heading: 'Movie App With API',
      desc: 'Developing a movie app with an API enables you to access a wealth of film data, including details like ratings, reviews, and trailers in real-time. By leveraging this dynamic content, you can create a rich user experience that keeps movie enthusiasts engaged and informed about their favorite films.',
    },
  ];
  
  skills = [
    {
      Image:
        'https://images.icon-icons.com/2429/PNG/512/figma_logo_icon_147289.png',
      name: 'Javascript',
      Percent: '95%',
    },
    {
      Image: 'assets/js.png',
      name: 'Javascript',
      Percent: '75%',
    },
    {
      Image: 'assets/angular.png',
      name: 'Angular',
      Percent: '88%',
    },
    {
      Image: 'assets/tailwind.png',
      name: 'Tailwind Css',
      Percent: '96%',
    },
    {
      Image: 'assets/webflow.png',
      name: 'Webflow',
      Percent: '85%',
    },
    {
      Image: 'assets/photoshop.png',
      name: 'Adobe Photoshop',
      Percent: '77%',
    },
    {
      Image: 'assets/typescript.png',
      name: 'Typescript',
      Percent: '78%',
    },
  ];

 
}
