import { Routes } from '@angular/router';
import { ListCardsComponent } from './movie/list-cards/list-cards.component';
import { FormCreateComponent } from './movie/form/form-create/form-create.component';
import { SearchBarComponent } from './movie/search-bar/search-bar.component';
import { MovieViewComponent } from './views/movie-view/movie-view.component';
import { MoviesViewComponent } from './views/movies-view/movies-view.component';

export const routes: Routes = [
    {
        path: '', 
        component: MoviesViewComponent
    },
    {
        path: 'create', 
        component: FormCreateComponent,
    },
    {
        path: 'film/:id', 
        component: MovieViewComponent,
    },
];
