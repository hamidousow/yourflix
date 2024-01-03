import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/User';

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
export class LoginComponent {

  userLogged!: User


  loginFormGroup = new FormGroup({
    mail: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: FormGroup) {
    this.userService.signin(form.value).subscribe({
      next: (res) => {
        this.userLogged = res
        this.router.navigate([''])
        console.log(this.userLogged)
      },
      error: (error) => console.log(error)
    })
  }
  
}
