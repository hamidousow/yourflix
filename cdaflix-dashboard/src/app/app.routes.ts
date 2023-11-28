import { Routes } from '@angular/router';
import { ListCardsComponent } from './movie/list-cards/list-cards.component';
import { FormCreateComponent } from './movie/form/form-create/form-create.component';

export const routes: Routes = [
    {
        path: '', 
        component: ListCardsComponent,
    },
    {
        path: 'create', 
        component: FormCreateComponent,
    },
];
