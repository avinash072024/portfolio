import { Routes } from '@angular/router';
import { Constants } from './models/constants';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';
import { UnderConstructionPage } from './components/under-construction-page/under-construction-page';
import { WebDesign } from './pages/web-design/web-design';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: `Home | ${Constants.APP_TITLE}` },
  { path: 'about', component: About, title: `About | ${Constants.APP_TITLE}` },
  { path: 'skills', component: Skills, title: `Skills | ${Constants.APP_TITLE}` },
  { path: 'contact', component: Contact, title: `Contact | ${Constants.APP_TITLE}` },
  // { path: 'projects', component: Projects, title: `Projects | ${Constants.APP_TITLE}` },
  { path: 'projects', component: Projects, title: `Projects | ${Constants.APP_TITLE}` },
  { path: 'web-design', component: UnderConstructionPage, title: `Web Design | ${Constants.APP_TITLE}` },
  { path: 'app-development', component: UnderConstructionPage, title: `App Development | ${Constants.APP_TITLE}` },
  { path: 'ui/ux-design', component: UnderConstructionPage, title: `UI/UX Design | ${Constants.APP_TITLE}` },
  { path: 'consulting', component: UnderConstructionPage, title: `Consulting | ${Constants.APP_TITLE}` },


  { path: '**', component: NotFound, title: `404 Not Found | ${Constants.APP_TITLE}` }
];