import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { CollabComponent } from './collab/collab.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { PricingComponent } from './pricing/pricing.component';
import { BlogsComponent } from "./blogs/blogs.component";
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component'
import { BlogCategoriesListComponent } from './blogs/blog-categories-list/blog-categories-list.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: SkillsComponent },
    { path: 'collab', component: CollabComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'blogs/:id', component: BlogDetailsComponent },
    { path: 'blogs/categories/:category', component: BlogCategoriesListComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', component: ErrorComponent },  // Wildcard route for a 404 page
];