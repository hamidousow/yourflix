import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'cdaflix',
        pathMatch: 'full' 
    },
    {
        path: 'cdaflix', 
        loadComponent:  () => import('./public/home/home.component').then(module => module.HomeComponent),
        children: [
            {
                path: 'user/:id',
                loadChildren: () => import('./private/user/user.module').then(module => module.UserModule)
            }
        ]
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
];
