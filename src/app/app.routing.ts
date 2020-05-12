import { Routes } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

const appRoutes: Routes = [
    { path: 'add', component: MediaItemFormComponent},
    { path: ':medium', component: MediaItemFormComponent },
    { path: '', redirectTo: 'all', pathMatch: 'full' }
];