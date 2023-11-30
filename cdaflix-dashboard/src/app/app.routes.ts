import { Routes } from '@angular/router';
import { ListCardsComponent } from './movie/list-cards/list-cards.component';
import { FormCreateComponent } from './movie/form/form-create/form-create.component';
import { SearchBarComponent } from './movie/search-bar/search-bar.component';
import { MoviesViewsComponent } from './views/movies-views/movies-views.component';

export const routes: Routes = [
    {
        path: '', 
        component: MoviesViewsComponent
    },
    {
        path: 'create', 
        component: FormCreateComponent,
    },
];
