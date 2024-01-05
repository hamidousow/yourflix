import { Routes } from '@angular/router';
import { MovieViewComponent } from './views/movie-view/movie-view.component';


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
    // {
    //     path: 'user', 
    //     loadChildren: () => import('./user/user.module').then(c => c.UserModule)
    // },    
    {
        path: 'film/create', 
        loadComponent:  () => import('./movie/form/form-create/form-create.component').then(module => module.FormCreateComponent),
    },
    {
        path: 'film/:id', 
        component: MovieViewComponent,
    },
];
