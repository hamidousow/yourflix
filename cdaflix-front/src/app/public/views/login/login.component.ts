import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user-service/user.service';
import { Router, RouterModule } from '@angular/router';
import { LocalService } from '../../../services/localstorage-service/local.service';
import { TmdbAuthService } from '../../../services/tmdb-service/tmdb-auth.service';

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

  @Input()
  token!: string

  handleSubmit(form: FormGroup) {
    
    this.tmdbAuthService.login(form.value);

  }

  handleTok() {
    this.tmdbAuthService.reqToken()
    let token = this.tmdbAuthService._token.value
    if(token != '') {
      this.tmdbAuthService.reqToken()
    }
    this.tmdbAuthService.login();
  }
  
}
