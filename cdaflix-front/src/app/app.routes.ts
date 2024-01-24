import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'cdaflix',
        pathMatch: 'full' 
    },
    {
        path: 'cdaflix', 
        loadComponent:  () => import('./public/home/home.component'),
        children: [
            {
                path: 'user/:id',
                loadChildren: () => import('./private/user/user.module')
            }
        ]
    },
    {
        path: 'login', 
        loadComponent: () => import("./public/login/login.component")
    },
    {
        path: 'register', 
        loadComponent: () => import("./public/register/register.component")
    }, 
    {
        path: 'film/create', 
        loadComponent:  () => import('./movie/form/form-create/form-create.component')
    },
];
