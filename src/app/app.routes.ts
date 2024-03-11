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
        loadComponent:  () => import('./public/views/home/home.component'),
    },
    {
        path: 'login', 
        loadComponent: () => import("./public/views/login/login.component")
    },

    {
        path: 'movies', 
        loadComponent:  () => import('./public/views/movies-view/movies-view.component')
    },
    {
        path: 'search',
        title: 'search-page',
        loadComponent: () => import('./public/views/search-movies-view/search-movies-view.component')
    },
    {
        path: '**', 
        loadComponent: () => import('./public/views/page-not-found-component/page-not-found-component.component')
    }
];
