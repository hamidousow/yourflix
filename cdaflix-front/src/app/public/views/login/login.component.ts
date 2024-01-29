import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user-service/user.service';
import { Router, RouterModule } from '@angular/router';
import { LocalService } from '../../../services/localstorage-service/local.service';
import { TmdbAuthService } from '../../../services/tmdb-service/tmdb-auth.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {

  private userService = inject(UserService)  
  private router = inject(Router) 
  private localService = inject(LocalService) 
  private tmdbAuthService = inject(TmdbAuthService)

  loginFormGroup = new FormGroup({
    mail: new FormControl(""),
    password: new FormControl("")
  })  

  token$: any = this.tmdbAuthService.token$

  handleSubmit(form: FormGroup) {

    this.tmdbAuthService.login(form.value);
  }

  async handleToken() {
    //const myToken$ = await this.tmdbAuthService.reqNewToken();
    this.tmdbAuthService.login()
  }
  
}
