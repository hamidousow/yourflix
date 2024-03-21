import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/',
    //     pathMatch: 'full' 
    // },
    {
        path: '', 
        title: 'yourflix',
        loadComponent:  () => import('./public/views/home/home.component'),
    },
    {
        path: 'login',
        title: 'yourflix - login', 
        loadComponent: () => import("./public/views/login/login.component")
    },

    {
        path: 'movies', 
        title: 'yourflix - movies',
        loadComponent:  () => import('./public/views/movies-view/movies-view.component')
    },
    {
        path: 'search',
        title: 'yourflix - search results',
        loadComponent: () => import('./public/views/search-movies-view/search-movies-view.component')
    },
    {
        path: '**', 
        title: 'yourflix - page not found',
        loadComponent: () => import('./public/views/page-not-found-component/page-not-found-component.component')
    }
];
