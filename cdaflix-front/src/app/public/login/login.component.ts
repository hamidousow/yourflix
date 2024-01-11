import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/User';
import { LocalService } from '../../services/local.service';

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

  userLogged!: string | null


  loginFormGroup = new FormGroup({
    mail: new FormControl(""),
    password: new FormControl("")
  })

  constructor(
    private userService: UserService, 
    private router: Router, 
    private localService: LocalService
  ) {}

  onSubmit(form: FormGroup) {
    this.userService.signin(form.value).subscribe({
      next: (res) => {
        this.localService.saveData('user', res.id)
        this.userLogged = this.localService.getData('user');
        this.router.navigate([''])
        
      },
      error: (error) => console.log(error)
    })
  }
  
}
