import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'cdaflix',
        pathMatch: 'full' 
    },
    {
        path: 'cdaflix', 
        loadComponent:  () => import('./public/views/home/home.component'),
        children: [
            {
                path: 'user/:id',
                loadChildren: () => import('./private/user/user.module')
            }
        ]
    },
    {
        path: 'login', 
        loadComponent: () => import("./public/views/login/login.component")
    },

    {
        path: 'movies', 
        loadComponent:  () => import('./public/views/movies-view/movies-view.component')
    },
    // {
    //     path: 'film/create', 
    //     loadComponent:  () => import('./movie/form/form-create/form-create.component')
    // },
];
