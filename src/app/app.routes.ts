import { Routes } from '@angular/router';
import { Constants } from './models/constants';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';
import { UnderConstructionPage } from './components/under-construction-page/under-construction-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home, title: `Home | ${Constants.APP_TITLE}` },
  { path: 'about', component: About, title: `About | ${Constants.APP_TITLE}` },
  { path: 'skills', component: Skills, title: `Skills | ${Constants.APP_TITLE}` },
  { path: 'projects', component: UnderConstructionPage, title: `Projects | ${Constants.APP_TITLE}` },
  { path: 'contact', component: Contact, title: `Contact | ${Constants.APP_TITLE}` },
  { path: '**', component: NotFound, title: `404 Not Found | ${Constants.APP_TITLE}` }
];