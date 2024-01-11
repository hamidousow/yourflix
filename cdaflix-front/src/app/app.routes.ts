import { Routes } from '@angular/router';
import { MovieModalComponent } from './public/movie-modal/movie-modal.component';


export const routes: Routes = [
    {
        path: '', 
        loadComponent:  () => import('./public/home/home.component').then(module => module.HomeComponent)
    },
    {
        path: 'login', 
        loadComponent: () => import("./public/login/login.component").then(module => module.LoginComponent)
    },
    {
        path: 'register', 
        loadComponent: () => import("./public/register/register.component").then(module => module.RegisterComponent)
    }, 
    {
        path: 'film/create', 
        loadComponent:  () => import('./movie/form/form-create/form-create.component').then(module => module.FormCreateComponent),
    },
    {
        path: 'user/movies', 
        loadComponent: () => import('./private/user-movies-list/user-movies-list.component').then(module => module.UserMoviesListComponent)
    },
];
