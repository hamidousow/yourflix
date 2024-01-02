import { Routes } from '@angular/router';
import { ListCardsComponent } from './movie/list-cards/list-cards.component';
import { FormCreateComponent } from './movie/form/form-create/form-create.component';
import { SearchBarComponent } from './movie/search-bar/search-bar.component';
import { MovieViewComponent } from './views/movie-view/movie-view.component';
import { MoviesViewComponent } from './views/movies-view/movies-view.component';
import { SigninViewComponent } from './views/signin-view/signin-view.component';

export const routes: Routes = [
    {
        path: '', 
        component: MoviesViewComponent
    },
    {
        path: 'user', 
        loadChildren: () => import('./user/user.module').then(c => c.UserModule)
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
