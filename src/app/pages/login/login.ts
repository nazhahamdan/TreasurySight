import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private authService:Auth){};
  loginForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })

  login(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => console.log('connexion réussite', res),
      error: (err) => console.error('Erreur login', err)
    })
  }

}
