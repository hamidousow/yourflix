import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  
  {
      path: '',
      redirectTo: 'cdaflix',
      pathMatch: 'full' 
  },
  {
      path: 'profile',
      component: UserProfilComponent
  },
  // {
  //     path: 'mylist',
  //     component: UserMoviesListComponent
  // }   
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
