import { Routes } from '@angular/router';
import {AboutComponent} from './about/about.component'
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'',
        component:AboutComponent},
    {path:'Porfolio',
        component:PortfolioComponent},
    {path:'Contact',
        component:ContactComponent},

];
