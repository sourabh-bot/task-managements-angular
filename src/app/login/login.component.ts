import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ FormsModule, RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    title:string = 'Login';
    router: Router;

    email: string = 'sourabhshrimali92@gmail.com';
    password: string = 'Sourabh@1995';
    mainError: string = '';


    loginUser: LoginUser = {
        email: '',
        password: ''
    };

    constructor() {
        this.loginUser = {
            email: '',
            password: ''
        };
        this.router = new Router;
     }

    onSubmit(){
        if(this.loginUser.email == this.email && this.loginUser.password == this.password){
            this.router.navigate(['/']);
        }else{
            this.mainError = 'Invalid Credentials';
        }
    }
}

interface LoginUser{
    email: string;
    password: string;
}
