import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { UserRoutingModule } from './user-routing.module.';
import { SigninViewComponent } from '../views/signin-view/signin-view.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    NavigationComponent,
    UserRoutingModule,
  ]
})
export class UserModule { }
