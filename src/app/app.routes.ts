import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Supreme Electromech Power & Infra | PEB & Infrastructure Solutions',
    loadComponent: () => import('./features/home/home').then((m) => m.HomePage),
  },
  {
    path: 'about',
    title: 'About Us | Supreme Electromech Power & Infra',
    loadComponent: () => import('./features/about/about').then((m) => m.AboutPage),
  },
  {
    path: 'services',
    title: 'Services & Solutions | Supreme Electromech Power & Infra',
    loadComponent: () => import('./features/services/services').then((m) => m.ServicesPage),
  },
  {
    path: 'technical',
    title: 'Technical Capabilities & Products | Supreme Electromech',
    loadComponent: () => import('./features/technical/technical').then((m) => m.TechnicalPage),
  },
  {
    path: 'projects',
    title: 'Project Gallery | Supreme Electromech Power & Infra',
    loadComponent: () => import('./features/projects/projects').then((m) => m.ProjectsPage),
  },
  {
    path: 'contact',
    title: 'Contact & Request a Quote | Supreme Electromech Power & Infra',
    loadComponent: () => import('./features/contact/contact').then((m) => m.ContactPage),
  },
  { path: '**', redirectTo: '' },
];
