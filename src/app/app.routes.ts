import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', title: 'home' },
  { path: 'home', component: Home, title: 'home' },
  { path: 'about', component: About, title: 'about' },
  { path: 'portfolio', component: Portfolio, title: 'portfolio' },
  { path: 'contact', component: Contact, title: 'contact' },
];
