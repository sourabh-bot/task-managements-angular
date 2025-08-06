import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    title = "Register";
    registerUser: RegisterUser = {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: ''
    };

    onSubmit(){
        console.log(this.registerUser);
    }



}

interface RegisterUser{
    name: string;
    email: string;
    phone: string;
    password: string;
    confirm_password: string
}
